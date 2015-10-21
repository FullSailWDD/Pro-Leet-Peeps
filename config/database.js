//mongodb://<dbuser>:<dbpassword>@ds041154.mongolab.com:41154/heroku_07vkcnb1
var mongoose = require('mongoose');
var dbConnect =  'jeff:nissan12@ds041154.mongolab.com:41154/heroku_07vkcnb1' || process.env.MONGOLAB_URI || 'mongodb://localhost/test';
mongoose.connect(dbConnect);

var db = mongoose.connection;
     
module.exports = db;