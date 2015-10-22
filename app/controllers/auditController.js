myApp.controller('auditController', function ($scope, $modalInstance, data, $http, $route) {
    console.log("testing audit controller");
//data object that the user is selecting
    $scope.data = data;
        $scope.selected = {
    data: $scope.data
    };

console.log($scope.data)

})