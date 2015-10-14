var router = require('express').Router();
var bodyParser = require('body-parser');
var Course = require('./app/modules/get/get.js')

router.use(bodyParser.json())

router.post('/post', function (req,res) {
	console.log("HELLO");

	var course = new Course({
			status: req.body.status,
			major: req.body.major
		})
		console.log(course)
		course.save(function(err){
		if(err){
			console.log('error',err)
		}
		res.status(201).end()
	})
})


module.exports = router;