myApp.controller("PollViewController", function($scope, $routeParams, $location, pollFactory, userFactory) {
  $scope.username = '';

  $scope.question = {};
  var getQuestion = function() {
    pollFactory.getQuestion($routeParams.id, function(question) {
      $scope.question = question;
      console.log(question);
      console.log(100);
  });
  }
  userFactory.readUser(function(user){
     $scope.username = user;
   });

  if ($scope.username === '') {
    $location.path('/login');
  } else {
      console.log("In Poll View  Controller");
      //$scope.selectedQuestion = {};
      getQuestion();
    }

    $scope.addVote = function(option) {
       	var option = option;
       	var id = $routeParams.id;
        console.log("questionId" +id)
       	pollFactory.addVote(option, id, function(data){
       		console.log(data, "added");
               getQuestion();
             });
           }

$scope.logout = function(){
   userFactory.logout();
   $location.path('/login');
 }
});
