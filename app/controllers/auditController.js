myApp.controller('auditController', function ($scope, $http, $timeout, $rootScope, $location) {
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
  },{
      title : 'Select a Course',
      className : 'addingDegreeCourse',
      display: 'block',
      users : [ 
      { 
        // label will render the label for the input form.
        label: 'Course Name',
        value: '',
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
  
    // $http.get('/groupList').success(function(response){
    //  console.log("i got the data");
    //  $scope.groupList = response;
    // })
  

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
