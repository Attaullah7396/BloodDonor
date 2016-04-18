angular.module('app.signin', [])
  .controller('SignInController', function($rootScope,$location,$state) {
    var self = this;
    $rootScope.loader = false;
    $rootScope.userfName = "";
    $rootScope.userlName = "";
    $rootScope.userBlood = "";
    $rootScope.userEmail = "";

    self.login = function(data){
      for(var i=0; i<$rootScope.users.length; i++){
        if(data.email == $rootScope.users[i].email){
          if(data.pswd == $rootScope.users[i].pswd){
            $rootScope.userfName = $rootScope.users[i].fName;
            $rootScope.userlName = $rootScope.users[i].lName;
            $rootScope.userBlood = $rootScope.users[i].blood;
            $rootScope.userEmail = $rootScope.users[i].email;
            $state.go("appp.home");
          }else{
            alert("Wrong Password")
          }
        }
      }

    }
  });
