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
  console.log($scope.courses._id);
  $http.put('api/courses/' + $scope.courses._id, $scope.courses).success(function(response) {
    refresh();
  })
};


$scope.download = function(){
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "export.html";
    a.href = "data:text/html," + document.getElementById("test").innerHTML; // Grab the HTML
    a.click(); // Trigger a click on the element
    // Change the string in the result using JSON.parse from string
}


$scope.deselect = function() {
  $scope.courses = "";
}

}]);