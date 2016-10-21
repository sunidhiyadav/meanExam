myApp.controller('UserController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

  $scope.createUser = function(){
    userFactory.createUser($scope.login);
    $scope.login = {};
    $location.path('/');
  }
}]);
