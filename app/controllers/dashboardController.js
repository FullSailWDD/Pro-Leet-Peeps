myApp.controller('dashboardController', function ($scope, $http) {

	var findCourses = function(db, callback) {
		var cursor = db.collection('courses').find();
		cursor.each(err, null);
		if (doc != null) {
			console.dir(doc);
		} else {
			callback();
		}
	}
})
