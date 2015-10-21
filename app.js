var express = require('express'),
    app = express(),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    router = require('express').Router(),
    https = require('https'),
    http = require('http'),
    db = require('./config/database'),
    Course = require('./models/major.js');

//view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/models'));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/config'));

//config port
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.render('landing');
})

var db = mongojs('test', ['courses'] || 'jeff:nissan12@ds041154.mongolab.com:41154/heroku_07vkcnb1', ['courses'], {authMechanism: 'ScramSHA1'});
app.use(bodyParser.json());
router.use(bodyParser.json())

// [AUDIT] getting major schemaatics
app.get('/major', function (req, res) {
  db.courses.find(function (err, db) {
    res.json(db);
  });
});

//get the database
app.get('/courses/', function (req, res) {
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
  		return course;

	})
})
//getting the post object
module.exports = app
// app.listen(port);

http.createServer(app).listen(port);
// https.createServer(app).listen(port);

console.log("Server listening on port:", port);


