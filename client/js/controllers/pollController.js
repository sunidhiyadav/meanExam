myApp.controller("PollController", function($scope, $cookies, $routeParams, $location, pollFactory, userFactory) {
  $scope.username = '';

  userFactory.readUser(function(user){
   $scope.username = user;
 });
 $scope.selectedQuestion = {};
 var getQuestions = function() {
   pollFactory.getQuestions(function(data) {
   $scope.questions = data;
   console.log(data);
 });
};

 // check if the user is empty redirect if it is empty
  if ($scope.username === '') {
    $location.path('/login');
  } else {
    console.log("In Poll COntroller" +$scope.username);
    getQuestions();
  }

  $scope.addQuestion = function() {
    //var username = $cookies.get('name');
    console.log("21. In add Poll Controller" + $scope.username);
    pollFactory.addQuestion($scope.selectedQuestion, $scope.username, function () {
      console.log("23. In Poll Controller" + $scope.username);
      $scope.selectedQuestion = {};
      $location.path('/');
    });
  };
  $scope.removeQuestion = function(questionId) {
    console.log(questionId);
		pollFactory.removeQuestion(questionId, getQuestions);
  };

  $scope.logout = function(){
   userFactory.logout();
   $location.path('/login');
 }
});
