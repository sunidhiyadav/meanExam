myApp.factory("pollFactory", function($http) {
   var factory = {};
   var questions = [];
   factory.getQuestions = function(callback) {
     $http.get("/app/polls").success(function(response) {
       questions = response;
       callback(questions);
     });
   };

   factory.getQuestion = function(questionId, callback) {
     console.log("In show poll Factory: /app/poll/" +questionId);
     $http.get('/app/poll/'+questionId).success(function(response) {
       question = response;
       callback(question);
		});
	};
   factory.addQuestion = function(question, addedBy, callback) {
     question.addedBy = addedBy;
     console.log("18: " + addedBy);
     $http.post("/app/poll", question).success(function(a) {
       successMessage ="Question Saved Succeefully.";
       console.log("In success: ");
       callback();
       alert(successMessage);
     }).catch(function(response) {
       console.log("In error: ", response);
       errorMessage = "Something went wrong in saving the question. Please try again after sometime.";
       error = response.data.error
       if(error && error.code && error.message ){
         errorMessage = "Error: " + error.code + ": " + error.message;
       }
      //alert(errorMessage);
    });
  };
  factory.removeQuestion = function(questionId, callback) {
    console.log("In remove Question Factory" +questionId);
  	$http.delete('/app/poll/' + questionId).success(function() {
      callback();
    });
  };

  factory.addVote = function(option, id, callback) {
    console.log("vote method of factory");
    console.log(option);
    var option = {"option": option};
    $http.put('/poll/update/' + id ,option).success(function(data){
    callback(data);
  })
};

   return factory;
 });
