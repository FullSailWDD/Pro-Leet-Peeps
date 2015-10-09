var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
    _id: String,
    major: String,
    courseName: String,
    startDate: String,
    description: String
});

mongoose.model('Course', CourseSchema);