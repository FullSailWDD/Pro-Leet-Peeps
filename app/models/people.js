var mongoose = require('mongoose');

var PeopleSchema = mongoose.Schema({
    _id: String,
    name: String,
    department: String,
    message: String
});

mongoose.model('People', PeopleSchema);