var dbConnect = require('database'),mongoose = require('mongoose');

module.exports = function (app, mongoose) {

  mongoose.connect('mongodb://localhost/test');
 
    var db = mongoose.connection;
     
    db.on('error', function (err) {
    console.log('connection error', err);
    });
    db.once('open', function () {
    console.log('connected to database.');
    });
 
};