var router = require('express').Router();
var bodyParser = require('body-parser');


router.use(bodyParser.json())


router.get('/home', function (req, res) {
  res.render('home');
})

router.get('/activities', function (req, res) {
  res.render('activities');
})

router.get('/my_courses', function (req, res) {
  res.render('my_courses');
})


router.get('/edit_rubric', function (req, res) {
  res.render('edit_rubric');
})


router.get('/signup', function (req, res) {
  res.render('signup');
})



router.post('/edit_course', function (req, res) {
  res.render('edit_rubric');
})

router.post('/rubricPost', function (req, res) {
  res.render('dashboard');
})

router.get('/dashboard', function (req, res) {
  res.render('dashboard');
})


module.exports = router;