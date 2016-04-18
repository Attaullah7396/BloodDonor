angular.module('app.signup', [])
  .controller('SignUpController', function($firebaseArray,$rootScope,$state) {
    var self = this;
    var ref = new Firebase("https://donateyourblood.firebaseio.com/");




    self.createUser = function(data){
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
      $rootScope.users.$add(
        {
          fName    :  data.fName,
          lName     :  data.lName,
          email  :   data.email,
          blood:   data.blood ,
          pswd: data.pswd
        });
      self.user = {};
      $state.go("signin")
    };


  });

