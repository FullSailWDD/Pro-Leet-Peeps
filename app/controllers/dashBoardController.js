myApp.controller('dashboardController', ['$scope', '$http', function($scope, $http) {
  console.log("Loaded dashboard controller");

<<<<<<< HEAD
var refresh = function() {
  $http.get('api/courses').success(function(response) {
    console.log("courses data pulled");
    $scope.courses = response;
    $scope.courses = "";
    var coursesList = JSON.stringify(response);
    console.log(coursesList);

=======

  var refresh = function() {
    $http.get('api/courses').success(function(response) {
    console.log("courses data pulled");
    $scope.courses = response;
    
>>>>>>> e61f14798cbedbcd718e06b21f2e3ff4c9468b5e
  });
};

refresh();

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/courses/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/courses/' + id).success(function(response) {
    $scope.contact = response;
  });
};  

$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/courses/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
}

}]);