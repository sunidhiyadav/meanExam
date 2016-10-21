var mongoose = require('mongoose');

// create our pollSchema
var pollSchema = new mongoose.Schema({
    addedBy:String,
    name: {type: String, required: true, minlength: 8},

    option1: {type: String, required: true, minlength: 3},
    option1_votes: {type: Number, default: 0},

    option2: {type: String, required: true, minlength: 3},
    option2_votes: {type: Number, default: 0},

    option3: {type: String, required: true, minlength: 3},
    option3_votes: {type: Number, default: 0},

    option4: {type: String, required: true, minlength: 3},
    option4_votes: {type: Number, default: 0},

},{ timestamps: true
});

mongoose.model('Poll', pollSchema);
