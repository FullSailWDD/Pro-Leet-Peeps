myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, data, $http) {

  $scope.data = data;
  $scope.selected = {
    data: $scope.data[0]
  };


$scope.update = function() {
  console.log($scope.data._id);
  $http.put('/api/courses/' + $scope.data._id, $scope.data.major, $scope.data.description).success(function(response) {

  $modalInstance.close();


})
};
})