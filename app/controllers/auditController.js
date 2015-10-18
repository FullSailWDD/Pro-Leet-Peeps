myApp.controller('auditController',['$scope', '$http', '$location', function($scope, $http, data, $location){
    console.log('Loaded AuditController');
    
$scope.audit = function(id) {
    
    $http.get('api/courses/' + id).success(function(response) {

  });
};



}]);