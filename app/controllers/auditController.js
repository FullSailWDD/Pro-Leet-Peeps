myApp.controller('auditController', function ($scope, data , $http) {

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
    
    console.log("Scope.data",$scope.data);
$scope.update = function() {
  console.log("======", $scope.data);    
  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
  $modalInstance.close();
})
};


})