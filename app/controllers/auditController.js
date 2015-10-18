myApp.controller('auditController', function ($scope, $modalInstance, data, $http, $route, $location) {

var refresh = function() {
    $http.get('api/courses').success(function(response) {
    $scope.courses = response;
    
  });
};
refresh();

  $scope.data = data;
  $scope.selected = {
    data: $scope.data
  };

    
    console.log("Scope.data modalInstance",$scope.data);
$scope.update = function() {
  console.log("======", $scope.data);    
  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
  $modalInstance.close();
})
};

$scope.reloadRoute = function(){
  $route.reload();
};

$scope.actionLeave = function(){
  console.log('actionLeave')
  $location.path('/myCourse')
  $modalInstance.close();
}
    //grabbing the grades and sections
    var grades = $scope.data.rubric.grade;
    var sections = $scope.data.rubric.title;
    //split the string from the dataBase
    var gradeSplit = grades.split(",");
    var sectionSplit = sections.split(",");
    //making it viewable to scope
    $scope.gradeSplit = gradeSplit;
    $scope.sectionSplit = sectionSplit;
    
    
    console.log("grade Split" , gradeSplit);
    console.log("Section Split" , sectionSplit);
})


