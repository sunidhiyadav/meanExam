
var mongoose = require("mongoose");
var fs = require("fs");
mongoose.connect("mongodb://localhost/poll_survey");
// specify the path to all of the models
var models_path = __dirname + "/../models";

// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf(".js") > 0) {
        require(models_path + "/" + file);
    }
});
