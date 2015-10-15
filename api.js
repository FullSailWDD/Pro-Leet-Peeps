var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./app/modules/get/course.js')


router.use(bodyParser.json())

router.post('/post', function (req,res, next) {
	console.log("HELLO", req.body);

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
	console.log("Course ::::::::::::: ",course)



	course.save(function(err){
		if(err){
			console.log('error',err)
		}
  		res.json(req.body);
  	return course;
	})

	course.find = function() {
			$scope.course = Courses.query();

			console.log("BANN")
	};


})

module.exports = router;