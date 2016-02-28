var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitationSchema = new Schema({
    tag: String,
    make: String,
    model: String,
    year: Number,
    color: String,
    state: String,
    violation: [{code: Number, description: String}],
    location: String,
    date: {type: Date, default: Date.now()},
    officer: String,
    unit: Number
});

mongoose.model('Citation', CitationSchema);