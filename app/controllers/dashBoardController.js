myApp.controller('dashboardController', 
                ['$scope', '$http','$uibModal','$location', 
                function($scope, $http, $uibModal, $location) {

//An easy way to make socket error events available across your app:
$scope.$on('socket:error', function(ev, data){

});

var refresh = function() {
    $http.get('/courses/').success(function(response) {
    $scope.courses = response;
    
  });
};
refresh();

$scope.remove = function(id) {
  $http.delete('/courses/' + id).success(function(response) {
    refresh();
  });
};

$scope.search = function(id) {
  $http.get('/courses/' + id).success(function(response) {
    
    refresh();
  });
};

$scope.view = function(id) {
  $http.get('/courses/' + id).success(function(response) {
    console.log("View me", response)
    $scope.data = response;
  var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'view.handlebars',
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

$scope.audit = function(id) {
  $http.get('/courses/' + id).success(function(response) {
    console.log("EDITME", response)
    $scope.data = response;
  var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'audit.handlebars',
      controller: 'auditController',
      size: 'lg',
      resolve: {
        data: function () {
          return $scope.data;
      }
    }
  })
  });
};


$scope.audit = function(id) {
  $http.get('/courses/' + id).success(function(response) {
    console.log("View me", response)
    $scope.data = response;
  var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'audit.handlebars',
      controller: 'auditController',
      size: 'lg',
      resolve: {
        data: function () {
          return $scope.data;
      }
    }
  })
  });
};

$scope.edit = function(id) {
  $http.get('/courses/' + id).success(function(response) {
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
    $http.put('/courses/' + $scope.courses._id, $scope.courses).success(function(response) {
      refresh();
    })
  };

$scope.deselect = function() {
    $scope.contact = "";
  }

$scope.socket.on('setNewEvent', function(data){
    $scope.loading = true;
    $scope.$apply();
});

}]);







