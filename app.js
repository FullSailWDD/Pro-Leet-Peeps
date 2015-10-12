var express = require('express'),
 app = express(),
 exphbs  = require('express-handlebars'),
 bodyParser = require('body-parser'),util = require('util'),mongoose = require('mongoose');

//view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.set('port',process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/config'));

//config port
var port = process.env.PORT || 3000;



mongoose.connect('mongodb://localhost/test');
 
var db = mongoose.connection;
 
db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
console.log('connected to database.');
});



app.get('/', function (req, res) {
  res.render('landing');
})


app.get('/home', function (req, res) {
  res.render('home');
})

app.get('/activities', function (req, res) {
  res.render('activities');
})

app.get('/my_courses', function (req, res) {
  res.render('my_courses');
})


app.get('/edit_rubric', function (req, res) {
  res.render('edit_rubric');
})


app.get('/signup', function (req, res) {
  res.render('signup');
})



app.post('/edit_course', function (req, res) {
  res.render('edit_rubric');
})

app.post('/rubricPost', function (req, res) {
  res.render('dashboard');
})

  // res.send('You sent the name "' + req.body.name + '".');


app.get('/dashboard', function (req, res) {
  res.render('dashboard');
})

// app.post('/dash', function (req, res) {
//   res.render('dashboard');
// });


app.listen(port);
console.log("Server listening on port:", port);


// db.createUser(
//    {
//      user: "jimin",
//      pwd: "jimin123",
//      roles: [ "readWrite", "dbAdmin" ]
//    }
// )

// db.createUser(
//    {
//      user: "alex",
//      pwd: "alex123",
//      roles: [ "readWrite", "dbAdmin" ]
//    }
// )


// db.createUser(
//    {
//      user: "chris",
//      pwd: "chris123",
//      roles: [ "readWrite", "dbAdmin" ]
//    }
// )

