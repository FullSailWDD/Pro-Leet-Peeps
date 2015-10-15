var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./app/modules/get/course.js')

var Rubric = require('./app/modules/get/rubric.js')


router.use(bodyParser.json())

router.post('/post', function (req,res) {
	console.log("HELLO", req.body);

	var course = new Course({
			status: req.body.status,
			major: req.body.major,
			course: req.body.course

		})
	var rubric = new Rubric({

	})
			console.log(course)
		course.save(function(err){
		if(err){
			console.log('error',err)
		}
		 res.sendStatus(201)
	})
})


module.exports = router;