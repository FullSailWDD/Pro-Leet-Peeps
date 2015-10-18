myApp.controller('auditController', function ($scope, $modalInstance, data, $http, $route, $location) {

var refresh = function() {
    $http.get('api/courses').success(function(response) {
    $scope.courses = response;
    
  });
};
refresh();

  $scope.data = data;
  $scope.selected = {
    data: $scope.data
  };
    console.log("Scopre.data modalInstance",$scope.data);
$scope.update = function() {
  console.log("======", $scope.data);
  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
  $modalInstance.close();
})
};

$scope.reloadRoute = function(){
  $route.reload();
};

$scope.actionLeave = function(){
  console.log('actionLeave')
  $location.path('/myCourse')
  $modalInstance.close();
}

})
