var dash = angular.module('dash', []);
myApp.controller('dashController', ['$scope', '$http', function($scope, $http) {
    console.log("Loaded dashboard controller");


var refresh = function() {
  $http.get('/courses').success(function(response) {
    console.log("courses data pulled");
    $scope.contactlist = response;
    $scope.contact = "";
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