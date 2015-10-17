myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, data, $http) {

  $scope.data = data;
  $scope.selected = {
    data: $scope.data[0]
  };


$scope.update = function() {
  console.log($scope.data._id);
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "export.html";
    a.href = "data:text/html," + document.getElementById("test").innerHTML; // Grab the HTML
    a.click(); // Trigger a click on the element
    // Change the string in the result using JSON.parse from string

  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {

  $modalInstance.close();
})
};
})