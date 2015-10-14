var myApp = angular.module('myApp', ['ngRoute','ngAnimate','ui.bootstrap']);
	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '/signin.handlebars',
				controller  : 'signinController'
			})
			.when('/signup', {
				templateUrl : '/signup.handlebars',
				controller  : 'signupController'
			})
			// route for the about page
			.when('/myCourse', {
				templateUrl : '/my_courses.handlebars',
				controller  : 'aboutController'
			})
			.when('/editRubric', {
				templateUrl : '/edit_rubric.handlebars',
				controller  : 'rubricController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : '/activites.handlebars',
				controller  : 'contactController'
			})

			.when('/dashboard', {
				templateUrl : '/dashboard.handlebars',
				controller  : 'dashboardController'
			})
			.when('/form', {
				templateUrl : '/form.handlebars',
				controller  : 'formsController'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('signinController', function($scope){

	});
	myApp.controller('formController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	myApp.controller('dashboardController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';


	});

	myApp.controller('signupController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('rubricController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});