var express = require('express'),
 app = express(),
 exphbs  = require('express-handlebars'),
 bodyParser = require('body-parser'),util = require('util'),mongoose = require('mongoose'), morgan = require('morgan');


var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens
// var config = require('./config/config'); // get our config file
var dbConnect = require('./config/database'); // get our db file
 

app.use('/api', require('./api.js'))

//view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/config'));

//config port
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.render('landing');
})



app.get('/groupList', function (req, res) {
	console.log("Waiting for get Request");

})

// mongoose.connect(config.database); // connect to database
// app.set('superSecret', config.secret); // secret variable



// app.post('/dash', function (req, res) {
//   res.render('dashboard');
// });

// app.get('/setup', function(req, res) {

//   // create a sample user
//   var nick = new User({ 
//     name: 'Nick Cerminara', 
//     password: 'password',
//     admin: true 
//   });

//   // save the sample user
//   nick.save(function(err) {
//     if (err) throw err;

//     console.log('User saved successfully');
//     res.json({ success: true });
//   });
// });


app.listen(port);
console.log("Server listening on port:", port);


