var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./controllers/major.js')
router.use(bodyParser.json())
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('courses', ['courses']);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


//get the database
app.get('/courses', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

//delete from database
app.delete('/courses/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

//get data from database by ID
app.get('/courses/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/courses/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


//save to database
router.post('/post', function (req,res) {

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


module.exports = router;