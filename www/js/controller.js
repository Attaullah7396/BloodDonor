angular.module('starter')
.controller("mainController",function($firebaseArray,$rootScope){
    var self = this;
    var ref = new Firebase("https://donateyourblood.firebaseio.com/");
    var ref2 = new Firebase("https://donateyourblood.firebaseio.com/posts");

    ref.orderByKey().on("child_added", function(snapshot) {
    });

    $rootScope.posts = $firebaseArray(ref.child("posts"));
    $rootScope.users = $firebaseArray(ref.child("users"));
    $rootScope.notifications = $firebaseArray(ref.child("notify"));



  });
