myApp.controller('UserController', ['$scope','$cookies', '$location', 'userFactory', function($scope, $cookies,  $location, userFactory){

  /*if($cookies.get("name")) {
        $scope.login.username = $cookies.get('name');
        //$scope.currentUser['_id'] = $cookies.get('_id');
    }*/

  $scope.createUser = function(){
    userFactory.createUser($scope.login);
    //$cookies.put('name', $scope.login.username);
    //$cookies.put('_id', data._id);
    $scope.login = {};
    $location.path('/');
  }



    /*$scope.addUser = function(){
        // console.log($scope.newUser, "in modules");
        userFactory.addUser($scope.newUser, function(data){
            $scope.currentUser = data;
            $cookies.put('name', data.name);
            $cookies.put('_id', data._id);
            console.log($scope.currentUser, "logging current user");
            $location.path('/dashboard/' + $scope.currentUser._id);
        });
    }
    $scope.logoutUser = function(){
        // console.log("logoutUser");
        $cookies.remove("name");
        $cookies.remove("_id");
        // console.log("logged out", $scope.currentUser);
        $scope.currentUser = {};
        $location.path('/');
    };*/
}]);
