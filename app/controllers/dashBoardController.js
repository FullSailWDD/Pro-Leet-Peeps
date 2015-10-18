myApp.controller('dashboardController', ['$scope', '$http','$uibModal','$location', function($scope, $http, $uibModal, $location) {
var refresh = function() {
    $http.get('api/courses').success(function(response) {
    $scope.courses = response;
    
  });
};
refresh();
$scope.remove = function(id) {
  $http.delete('api/courses/' + id).success(function(response) {
    refresh();
  });
};

$scope.search = function(id) {
  $http.get('api/courses/' + id).success(function(response) {
    
    refresh();
  });
};


$scope.audit = function(id) {
  console.log($location)

  $http.get('api/courses/' + id).success(function(response) {
  console.log("Audit Fired")
  $location.path('/audit');
  $scope.data = response;

  });
};




$scope.edit = function(id) {
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
    $http.put('api/courses/' + $scope.courses._id, $scope.courses).success(function(response) {
      refresh();
    })
  };
  $scope.deselect = function() {
    $scope.contact = "";
  }
}]);