var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./app/modules/get/course.js')


router.use(bodyParser.json())

router.post('/post', function (req,res, next) {
	console.log("HELLO", req.body);

	var course = new Course({
			status: req.body.status,
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


			// // Clear form fields
			// 	$scope.status = '';
			// 	$scope.major = '';
			// 	$scope.description = '';
		}
  	res.json(req.body);

  	return course;
	})


})

module.exports = router;