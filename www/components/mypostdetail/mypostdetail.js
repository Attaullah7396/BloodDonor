angular.module('app.mypostdetail', [])
  .controller('MyDetailController', function ($rootScope, $stateParams, $firebaseArray) {
    var self = this;
    self.index = $stateParams.index;
    self.id = $rootScope.posts[self.index].$id;
    var newRef = new Firebase("https://donateyourblood.firebaseio.com/posts/" + self.id);
    self.rootArr = $firebaseArray(newRef);
    self.subArray = $firebaseArray(newRef.child("donors"));

    self.comment = function (text) {
      newRef.child("comments").push({
        name: $rootScope.userfName + " " + $rootScope.userlName,
        text: text
      });
      self.commentData = "";
    };
    self.donated = function (index) {
      self.rootArr.$loaded(function (xyz) {
        if (xyz[xyz.length - 4].$value) {
          alert("This requirement is fulfilled");
          return;
        }
        xyz[xyz.length - 1].$value -= 1;
        xyz[xyz.length - 5].$value -= 1;
        xyz.$save(xyz[xyz.length - 1]);
        xyz.$save(xyz[xyz.length - 5]);
      });

      self.subArray.$loaded(function (data) {
        if (data[data.length-4].$value) {
          return;
        }
        var id = data[index].$id;
        var ref3 = new Firebase("https://donateyourblood.firebaseio.com/posts/" + self.id + "/donors/" + id);
        var abc = $firebaseArray(ref3);
        abc.$loaded(function (value) {
          value[1].$value = true;
          value.$save(value[1]);


        });

      });
    };
    self.notDonated = function (index) {

      self.rootArr.$loaded(function (xyz) {
        if (xyz[xyz.length - 4].$value) {
          alert("This requirement is fulfilled");
          return;
        }
        xyz[xyz.length - 1].$value += 1;
        xyz[xyz.length - 5].$value += 1;
        xyz.$save(xyz[xyz.length - 1]);
        xyz.$save(xyz[xyz.length - 5]);
      });

      self.subArray.$loaded(function (data) {
        if (data[data.length-4].$value) {
          return;
        }
        var id = data[index].$id;
        var ref = new Firebase("https://donateyourblood.firebaseio.com/posts/" + self.id + "/donors/" + id);
        var abc = $firebaseArray(ref);
        abc.$loaded(function (value) {
          value[1].$value = false;
          value.$save(value[1]);


        });
      })
    };
    self.completed = function(){
      $rootScope.posts[self.index].status = !$rootScope.posts[self.index].status;
      $rootScope.posts.$save($rootScope.posts[self.index])
    }

  });
