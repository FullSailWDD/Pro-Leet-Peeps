var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
     
module.exports = db;