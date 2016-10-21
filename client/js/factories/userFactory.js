myApp.factory('userFactory',['$http', function($http){

  var username = '';
  var factory = {};

  factory.createUser = function(user){
    username = user.username;
  }

  factory.readUser = function(callback){
    callback(username);
  }

  factory.logout = function(){
      username = '';
  };

  return factory;

}]);
