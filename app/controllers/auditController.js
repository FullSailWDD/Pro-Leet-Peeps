myApp.controller('auditController', ['$scope', '$http', '$location', function($scope, $http,$location) {

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

}]);

