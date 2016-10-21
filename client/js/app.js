var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);
myApp.config(function ($routeProvider){
   $routeProvider
   .when('/login',{
    templateUrl : 'partials/users/user.html',
    controller : 'UserController'
  })

  .when('/', {
     templateUrl: 'partials/polls/list.html',
     controller: 'PollController'
   })
   .when('/poll', {
     templateUrl: 'partials/polls/new_poll.html',
     controller: 'PollController'
   })
   .when('/poll/:id', {
     templateUrl: 'partials/polls/show.html',
     controller: 'PollViewController'
   })
    .otherwise({redirectTo: '/login'});
});
