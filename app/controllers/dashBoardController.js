myApp.controller('dashboardController', ['$scope', '$http','$uibModal', function($scope, $http, $uibModal) {
  console.log("Loaded dashboard controller");


var refresh = function() {
    $http.get('api/courses').success(function(response) {
    console.log("courses data pulled");
    $scope.courses = response;
    
  });
};

refresh();

$scope.remove = function(id) {
  console.log(id);
  $http.delete('api/courses/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('api/courses/' + id).success(function(response) {
    console.log("EDITME", response)


    $scope.data = response;

  var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modal.handlebars',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        data: function () {
          return $scope.data;
      }
    }
  })



  });
};  

$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('api/courses/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
}

}]);