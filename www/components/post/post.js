angular.module('app.post', [])
  .controller('PostController', function($rootScope) {
    var self = this;
    self.data = {};
    var ref = new Firebase("https://donateyourblood.firebaseio.com/");
    var ref2 = new Firebase("https://donateyourblood.firebaseio.com/notify");

    self.postData = function(data){
      $rootScope.posts.$add(
        {
          name  : $rootScope.userfName+ " "+ $rootScope.userlName,
          volunteers  : 0,
          email  :  $rootScope.userEmail,
          status  : false,
          done  :  0,
          req : data.units,
          blood    :  data.blood,
          units     :  data.units,
          urgency  :   data.urgency,
          country:   data.country ,
          province: data.province,
          city: data.city,
          hospital: data.hospital,
          relation: data.relation,
          contact: data.contact,
          info: data.info
        });

      ref2.push({
        name      : $rootScope.userfName+ " "+ $rootScope.userlName,
        units     : data.units,
        blood     : data.blood,
        hospital  : data.hospital
      })
      self.data = {};
    }



  });

