angular.module('app.detail', [])
  .controller('DetailController', function($stateParams,$rootScope) {
    var self = this;
    self.index = $stateParams.index;
    self.id = $rootScope.posts[self.index].$id;


    self.comment = function(data){
      var newRef = new Firebase("https://donateyourblood.firebaseio.com/posts/" + self.id);
      newRef.child("comments").push({
        name  : $rootScope.userfName + " "+ $rootScope.userlName,
          text  : data
      });
      self.commentData = "";
    }
  });

