var express = require('express'),
 app = express();

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