var express = require('express');
var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./models/major.js')
var app = express();
var mongojs = require('mongojs');
var db = mongojs('jeff:nissan12@ds041154.mongolab.com:41154/heroku_07vkcnb1', ['courses'], {authMechanism: 'ScramSHA1'});
app.use(bodyParser.json());
router.use(bodyParser.json())

// [AUDIT] getting major
app.get('/major', function (req, res) {
  db.courses.find(function (err, db) {
    res.json(db);
  });
});

//get the database
app.get('/courses', function (req, res) {
  db.courses.find(function (err, db) {
    res.json(db);
  });
});

//delete from database
app.delete('/courses/:id', function (req, res) {
  var id = req.params.id;
  db.courses.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
    res.status(204).end();

  });
});

//get data from database by ID
app.get('/courses/:id', function (req, res) {
  var id = req.params.id;
  db.courses.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

//update the database
app.put('/courses/:id', function (req, res) {
  var id = req.params.id;
  db.courses.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {
            major: req.body.major,
			course: req.body.course,
			description: req.body.description,
			rubric: req.body.rubric,
			title: req.body.title,
			grade: req.body.grade,
			dueDate: req.body.dueDate,
			rubricdescription: req.body.rubricdescription
                    }
            },
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
//save the course into the db
	course.save(function(){
  		res.json(req.body);
<<<<<<< HEAD
=======

>>>>>>> 039d2385ea6647611820f37d0c34c43bd4f84baf
  		return course;

	})
})
//getting the post object
module.exports = app
