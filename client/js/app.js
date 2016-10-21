var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);
myApp.config(function ($routeProvider){
   $routeProvider
   .when('/login',{
    templateUrl : 'partials/users/user.html',
    controller : 'UserController'
  })
    .otherwise({redirectTo: '/login'});
});
