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


$scope.audit = function() {
  console.log("======", $scope.data.rubric.grade);    
//   $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
//   $modalInstance.close();
// })
};


    
//AUDIT CALCULATOR
$scope.calculateAudit = function() { 
    var arySections = [
        {   sectionWeight:80,
            aryGradedItems:[75,100,100,100,75]
        },
        {
            sectionWeight:10,
            aryGradedItems:[50,50,75]
        },
        {
            sectionWeight:10,
            aryGradedItems:[75,100,100]
        }];
    
    // console.log('section weights: ' +sectionWeights);
    // console.log('item scores: ' +itemScores);
    
    //grade the rubric with all scores
    // function calculateGrade(sectionWeight,itemScores){
    //     console.log('calculating grade');
    //     //validate section weights
    //     console.log('validating section weights');
    //     if(sectionWeights.reduce(function(total,num){return total+num},0)!=100){console.log('your section vals do not equal 100')}else{
    //         console.log('your section values are valid');
    //         //declare array for actual section values
    //         var rubricScore = 0;
    //         var sectionVals = [];
    //         //for how many sections there are
    //         for(i=0;i<sectionWeights.length;i++){
    //             console.log('entered sections for loop');
    //             //section score equals all item scores added up and divided by the total possible score
    //             var sectionActual = itemScores[i].reduce(function(total,num){return total+num},0) / (itemScores[i].length*100);
    //             //section values equals the sections weight times actual value
    //             var sectionVal = sectionWeights[i] * sectionActual;
    //             //push to section values variable
    //             sectionVals.push(sectionVal);
    //             console.log('pushed a value to sectionVals');
    //         };
    //         //sectionVals now has all section scores
    //         console.log('exited for loop');
    //         rubricScore = sectionVals.reduce(function(total,num){return total+num},0);
    //         console.log('alerting final score');
    //         alert(rubricScore);
    //     }
    // };
    
    // calculateGrade(arySections , itemScores);
}
    
})
