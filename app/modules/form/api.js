var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./controllers/major.js')
router.use(bodyParser.json())
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('test', ['courses']);
app.use(bodyParser.json());


//get the database
app.get('/courses', function (req, res) {
  console.log('GET requested');

  db.courses.find(function (err, db) {
    console.log(db);
    res.json(db);
  });
});

//delete from database
app.delete('/courses/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.courses.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

//get data from database by ID
app.get('/courses/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.courses.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

//update the database
app.put('/courses/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.major);
  db.courses.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {major: req.body.major, course: req.body.course, discription: req.body.discription}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


//save to database
app.post('/post', function (req,res) {

	var course = new Course({
			major: req.body.major,
			course: req.body.course,
			description: req.body.description,
			rubric: req.body.rubric,
			title: req.body.title,
			grade: req.body.grade,
			dueDate: req.body.dueDate,
			rubricdescription: req.body.rubricdescription

	})
	console.log("HELLO", req.body);
//save the course into the db
	course.save(function(err){
		if(err){
			console.log('error',err)
		}
  		res.json(req.body);
  		console.log("SAVED")
  		return course;
	})
	console.log(course.major)
})
//getting the post object

module.exports = app
//module.exports = router;