var express = require('express'),
 app = express(),
 exphbs  = require('express-handlebars'),
 bodyParser = require('body-parser'),util = require('util'),mongoose = require('mongoose'), morgan = require('morgan'),mongojs = require('mongojs');
;
var http = require('https');

// var db = require('./config/database'); // get our db file

app.use('/api', require('./app/modules/form/api.js'))


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



app.get('/api/post', function (req, res) {
	console.log("LISTENING TO POST");
	res.render('./form');
	
})

app.post('/api/post', function (req, res) {
	console.log("Waiting for get Request");
})

app.listen(port);
console.log("Server listening on port:", port);


