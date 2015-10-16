var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./controllers/major.js')


router.use(bodyParser.json())

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
router.get('/post', function (req,res) {

});


module.exports = router;