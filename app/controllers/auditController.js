myApp.controller('auditController', function ($scope, $modalInstance, data, $http, $route) {
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

})
