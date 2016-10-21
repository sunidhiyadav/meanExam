var polls = require("./../controllers/polls.js");
module.exports = function(app) {
  app.get("/app/polls", function(req, res) {
    polls.list(req, res);
  });
  app.post("/app/poll", function(req, res) {
    polls.saveQuestion(req, res);
  });
  app.get('/app/poll/:id',   polls.getQuestion);
  app.delete('/app/poll/:id', polls.deleteQuestion);

  app.put('/poll/update/:id', function(req, res){
    polls.update(req, res);
  });
  };
