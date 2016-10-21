var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function() {
  return {
    list: function(req, res) {
      Poll.find({}, function(err, results) {
        if (err) {
          res.status(500).send({ "error": {"code": 111, "message": "Mongo Database Show Question Errors:"} });
          console.log("Mongo Database Show Questions Errors:", err);
        } else {
          res.json(results);
        }
      });
    },
    saveQuestion: function(req, res) {
      var result;
      //console.log(req.params);
      console.log(req.body);
      //console.log("username" +req.body.username);
        result = Poll.create(req.body, function(err, question){
          if (err) {
            console.log("Adding question error:", err);
            res.status(400).send({ "error": {"code": 400, "message": "Adding question error"} });
            //res.redirect('/app/poll');
          } else {
            console.log("question POSTED", question);
            res.redirect('/app/polls');
            //res.sendStatus(200);
            //res.send("OK")
          }
        })
      },
      getQuestion:function (req, res) {
        console.log(req.params);
        Poll.findOne({_id: req.params.id}, function(err, question) {
          console.log("Show a question");
          console.log(question);
          res.json(question);
        });
      },
      update: function(req, res) {
			console.log(req.params.id, "id");
			console.log(req.body.option, "in here");
			var option = req.body.option

			Poll.findOne({_id: req.params.id}, function(err, poll) {
				console.log(poll);
				switch (option) {
					case 1:
						poll.option1_votes ++;
						break;
					case 2:
						poll.option2_votes ++;
						break;
					case 3:
						poll.option3_votes ++;
						break;
					case 4:
						poll.option4_votes ++;
						break;
				}
				poll.save(function (err, results) {
						if (err) {return handleError(err);}
						else {
							res.json(results);
						}
				});
			})
    },
      deleteQuestion: function(req, res) {
        Poll.remove({_id: req.params.id}, function(err) {
          if (err) {
            console.log("Question delete error:", err);
            res.status(400).send({ "error": {"code": 400, "message": "Question delete error"} });
          } else {
            console.log (req.params.id);
            res.sendStatus(200);
          }
        });
      }
  }
})();
