<<<<<<< HEAD
myApp.controller('auditController', function ($scope, data , $http, $modalInstance) {

var refresh = function() {
    $http.get('api/courses').success(function(response) {
=======
myApp.controller('auditController', function ($scope, $http, $timeout, $rootScope, $location,$uibModal) {
var parent = $rootScope;
  $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    $scope.validateClick = function (group, index) {
        if (group.correct == "addingDegreeCourse") {
            group.isaddingDegreeCourse = true;
        } else if (group.correct == "addingRubric") {
            group.isaddingRubric = true;
        }     
    }
   parent.groups = [
    {
      title : 'Select Degree Program and Course',
      className : 'addingDegreeCourse',
      display: 'none',
      users : [ 
      { 
        // label will render the label for the input form.
        label: 'Major Name',
        value: '',
        display: 'none',
        options:[
          {"value": "Web Design and Development"},
          {"value": "Mobile Development"},
          {"value": "Recording Arts"},
          {"value": "Film"},
          {"value": "Emerging Technologies"},
          {"value": "Show Production"}
        ],
        type:"select",
        name:"major"      
      }
    ]
  }
  ];
  


var refresh = function() {
    $http.get('api/major').success(function(response) {
>>>>>>> b145e39649551cb95b327df6b747c72536956631
    $scope.courses = response;
    
  });
};
refresh();

<<<<<<< HEAD
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
    
    console.log('section weights: ' +sectionWeights);
    console.log('item scores: ' +itemScores);
    
    //grade the rubric with all scores
    function calculateGrade(sectionWeight,itemScores){
        console.log('calculating grade');
        //validate section weights
        console.log('validating section weights');
        if(sectionWeights.reduce(function(total,num){return total+num},0)!=100){console.log('your section vals do not equal 100')}else{
            console.log('your section values are valid');
            //declare array for actual section values
            var rubricScore = 0;
            var sectionVals = [];
            //for how many sections there are
            for(i=0;i<sectionWeights.length;i++){
                console.log('entered sections for loop');
                //section score equals all item scores added up and divided by the total possible score
                var sectionActual = itemScores[i].reduce(function(total,num){return total+num},0) / (itemScores[i].length*100);
                //section values equals the sections weight times actual value
                var sectionVal = sectionWeights[i] * sectionActual;
                //push to section values variable
                sectionVals.push(sectionVal);
                console.log('pushed a value to sectionVals');
            };
            //sectionVals now has all section scores
            console.log('exited for loop');
            rubricScore = sectionVals.reduce(function(total,num){return total+num},0);
            console.log('alerting final score');
            alert(rubricScore);
        }
    };
    
    calculateGrade(arySections , itemScores);
}
    
})
=======

$scope.find = function(req, res) {
      $http.get('api/major').success(function(response) {
      console.log("hello")
    })
};

$scope.edit = function($scope) {
  $http.get('api/courses/').success(function(response) {
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

  // put json object into the form data array
    // WHEN FORM IS SUBMITED
    $scope.submitForm = function($scope){

        //parcing the data from the form
        var major = $rootScope.groups[0].users[0].value;
        var course = $rootScope.groups.course;
        var courseDescript = $rootScope.groups.description;
        var rubName = $rootScope.groups.name;
        var secTitles = $rootScope.groups.title;
        var grade = $rootScope.groups.grade;
        var rDescript = $rootScope.groups.rubricdescription;
        var due = $rootScope.groups.dueDate;

    //this the first form that gets submited   


      var majorName = $rootScope.groups[0].users[0].value;
      //this the first form that gets submited

        //seperating the grade and sectitles on commas
        var sections = secTitles;
        var sectionSplit = sections.split(",");

        var grades = grade;
        var gradeSplit = grades.split(",");        
        //this the first form that gets submited
        var Data = { major: major, course: course ,description: courseDescript, rubric:{name:rubName,title:sectionSplit, grade:gradeSplit, dueDate: due,rubricdescription:rDescript}};
        
        //posting to /api/post then sending to the database
      $http.post('/api/post', Data).then(function (successCallback, errorCallback){

      });

      $http.get('/api/post', Data).then(function (req,res){

        
      });


//adding a comment so it can be pulled
var callback1;
    // IF FORM IS VALID
  if(callback1){
        for (var i = 0; i < groupList.length; i++) {
          var val = JSON.stringify(groupList[i]['value']);
          // put the data submited by the form into the var results
          groupList.push(val);
        }
        // show results in the console
        return val;

    }      
  }
  return parent
});
// angular.bootstrap(document, ['myApp']);
>>>>>>> b145e39649551cb95b327df6b747c72536956631
