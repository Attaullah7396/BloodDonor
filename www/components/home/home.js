angular.module('app.home', [])
  .controller('HomeController', function($rootScope,$firebaseArray,$ionicPopup) {
    var self = this;
    self.volunteer = function(index){
      var id = $rootScope.posts[index].$id;
      var newRef = new Firebase("https://donateyourblood.firebaseio.com/posts/" + id);
      self.givers = $firebaseArray(newRef.child("donors"));
      self.givers.$loaded(function(data){
        if(data[0]){
          for(var i= 0; i<data.length;i++){
            if(data[i].fName == $rootScope.userfName && data[i].lName == $rootScope.userlName ){
              $ionicPopup.alert({
                title: 'Can\'t Volunteer!',
                template: 'You have already volunteered it'
              });
              return;
            }
          }
        }
        newRef.child("donors").push({
          fName : $rootScope.userfName,
          lName: $rootScope.userlName,
          blood :   $rootScope.userBlood,
          donated:  false
        });
        $rootScope.posts[index].volunteers += 1;
        $rootScope.posts.$save($rootScope.posts[index])
      });
      //console.log(self.arr);
       /* console.log(data[0].blood);*/

      //console.log($rootScope.posts[index].donors[0]);
   /* if(data[0].fName){
        for(var i= 0; i<data[i].length;i++){
          if(data[i].fName == $rootScope.userfName && data[i].lName == $rootScope.userlName ){
            alert("You have already volunteered it");
            return;
          }
        }
      }

      newRef.child("donors").push({
        fName : $rootScope.userfName,
          lName: $rootScope.userlName,
        blood :   $rootScope.userBlood,
        donated:  false
      });*/

    };

  });

