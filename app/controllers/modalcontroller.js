myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, data, $http, $route, $location) {
  $scope.data = data;
  $scope.selected = {
    data: $scope.data
  };
    console.log("Scopre.data modalInstance",$scope.data);
	$scope.update = function() {
	  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
	  $modalInstance.close();
	})
};

	var refresh = function() {
	    $http.get('api/courses').success(function(response) {
	    $scope.courses = response;
	    
	  });
	};
refresh

	$scope.remove = function(id) {
	  $http.delete('api/courses/' + id).success(function(response) {
	  $modalInstance.close();

	  });
	};



	$scope.reloadRoute = function(){
	  $route.refresh();
	};
})
