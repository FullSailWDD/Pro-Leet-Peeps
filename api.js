var router = require('express').Router();
var bodyParser = require('body-parser');
var Post = require('./app/modules/get/get.js')

router.use(bodyParser.json())


router.post('/post', function (req,res) {
	console.log("HELLO");

	var post = new Post({
			status: req.body.status
		})
	console.log(post)
		post.save(function(err){
		if(err){
			console.log('error',err)
		}
		res.status(201).end()
	})
})


module.exports = router;