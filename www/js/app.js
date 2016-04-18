// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','firebase','app.home','app.signup','app.post','app.signin','app.detail','app.mypostdetail','app.notify','app.myposts'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('signup', {
        url: "/signup",
        templateUrl: "./components/signup/signup.html",
        controller: "SignUpController as signup"
      }
    )

      .state('signin', {
        url: "/signin",
        templateUrl: "./components/signin/signin.html",
        controller: "SignInController as signin"
      }
    )

      .state('appp', {
        url: "/app",
        templateUrl: "./components/menu/menu.html",
        abstract  : true
      }
    )
      .state('appp.home', {
        url: "/home",
        views : {
          'menuContent'  : {
            templateUrl: "./components/home/home.html",
            controller: "HomeController as home"
          }
        }
      }
    )

      .state('appp.detail', {
        url: "/detail/:index",
        views : {
          'menuContent'  : {
            templateUrl: "./components/detail/detail.html",
            controller: "DetailController as detail"
          }
        }
      }
    )
        .state('appp.post', {
          url: "/post",
          views : {
            'menuContent'  : {
              templateUrl: "./components/post/post.html",
              controller: "PostController as post"
            }
          }
        }
    )
      .state('appp.notify', {
        url: "/notify",
        views : {
          'menuContent'  : {
            templateUrl: "./components/notify/notify.html",
            controller: "NotifyController as notify"
          }
        }
      }
    )
      .state('appp.myposts', {
        url: "/myposts",
        views : {
          'menuContent'  : {
            templateUrl: "./components/myposts/myposts.html",
            controller: "MyPostsController as myposts"
          }
        }
      }
    )
      .state('appp.mypostdetail', {
        url: "/mydetail/:index",
        views : {
          'menuContent'  : {
            templateUrl: "./components/mypostdetail/mypostdetail.html",
            controller: "MyDetailController as mydetail"
          }
        }
      }
    );

    $urlRouterProvider.otherwise('signin');

  });
