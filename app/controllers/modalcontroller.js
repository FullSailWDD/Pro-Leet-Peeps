myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, data, $http, $route) {
  $scope.data = data;
  $scope.selected = {
    data: $scope.data
  };
    console.log("Scope.data modalInstance",JSON.stringify($scope.data));
$scope.update = function() {
  console.log("======", $scope.data);
  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
  $modalInstance.close();
})
};
    $scope.toggle = true;
    //grabbing the sections
    var sections = $scope.data.rubric.title;
    //split the string from the dataBase
    var sectionSplit = sections.split(",");
    //making it viewable to scope
    $scope.sectionSplit = sectionSplit;
    
    console.log("Section Split" , sectionSplit);

$scope.reloadRoute = function(){
  $route.reload();
};
    
function ClickToEditCtrl($scope){    
    $scope.editorEnabled = false;
  
        $scope.enableEditor = function() {
            $scope.editorEnabled = true;
            $scope.editableTitle = $scope.title;
        };
  
        $scope.disableEditor = function() {
            $scope.editorEnabled = false;
        };
  
        $scope.save = function() {
            $scope.title = $scope.editableTitle;
            $scope.disableEditor();
        };
    }
})

