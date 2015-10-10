//Start
//config vars
var express = require('express'),
 app = express(),
 exphbs  = require('express-handlebars'),
 bodyParser = require('body-parser');

//view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));

//config port
var port = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.render('landing');
})


app.get('/home', function (req, res) {
  res.render('home');
})
app.get('/dashboard', function (req, res) {
  res.render('dashboard');
})

app.post('/dash', function (req, res) {
  res.render('dashboard');
});


app.listen(port);
console.log("Server listening on port:", port);
