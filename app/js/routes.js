

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/homeLanding',
		controller: 'HomeCtrl'
		}
	)
	.when('/home', {
		templateUrl: 'views/home.handlebars',
		controller: 'HomeCtrl'
		}
	).when('/activities', {
		templateUrl: 'views/activities.handlebars',
		controller: 'LoginCtrl'
		}
	).when('/my_courses', {
		templateUrl: 'views/my_courses.handlebars',
		controller: 'GameCtrl'
		}
	).when('/edit_rubric', {
		templateUrl: 'views/edit_rubric.handlebars',
		controller: 'CrudCtrl'
		}
	).when('/rubric', {
		templateUrl: 'views/rubric.handlebars',
		controller: 'rubricCtrl'
		}
	);
}]);

console.log("Main App ");



   app.controller('HomeCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('LoginCtrl', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('CrudCtrl', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });





// var router = require('express').Router();
// var bodyParser = require('body-parser');


// router.use(bodyParser.json())


// router.get('/home', function (req, res) {
//   res.render('home');
// })

// router.get('/activities', function (req, res) {
//   res.render('activities');
// })

// router.get('/my_courses', function (req, res) {
//   res.render('my_courses');
// })


// router.get('/edit_rubric', function (req, res) {
//   res.render('edit_rubric');
// })


// router.get('/signup', function (req, res) {
//   res.render('signup');
// })



// router.post('/edit_course', function (req, res) {
//   res.render('edit_rubric');
// })

// router.post('/rubricPost', function (req, res) {
//   res.render('dashboard');
// })

// router.get('/dashboard', function (req, res) {
//   res.render('dashboard');
// })


// module.exports = router;