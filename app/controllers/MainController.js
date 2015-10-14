myApp.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
  $interpolateProvider.startSymbol('{[{'); 
  $interpolateProvider.endSymbol('}]}'); 
}])


myApp.controller('formsController',function($scope, $http) {
    // array to hold the form data
    $scope.formData = [];

    $scope.Post = function($scope){
      console.log('FIRED');
       var data = {status:'This wont work ever i suck'};

      $http.post('/api/post', data).then(function (successCallback, errorCallback){
        console.log("successfilled");
      });

    }


    

  $scope.formData = [];
  var users = [];
  $scope.assignmentData = [];
  var assignment = [];
  $scope.studentData = [];
  var student = [];

  var results = [];
  var results2 = [];    
  var results3 = [];    


  // put json object into the form data array
  $scope.formData = users;
  var name = results.slice(1, 1);
  var department = results.slice(3, 3);
  var email = results.slice(4, 4);
  var message = results.slice(5, 5);

  // put json opject into assingment data array
    $scope.assignmentData = assignment;
    var assignmentName = results2.slice(1,1);
    var assignmentDescription = results2.slice(3,3);
    var assignmentWeight = results2.slice(4,4);
    var assignmentHelp = results2.slice(5,5);


  $scope.studentData = student;

  // WHEN FORM IS SUBMITED
  $scope.submitForm = function(isValid){
  // IF FORM IS VALID
    if(isValid){
      for (var i = 0; i < users.length; i++) {
        var val = users[i]['value'];
        // put the data submited by the form into the var results
        results.push(val);
      }
      // show results in the console
      console.log(results);

      return results;
    }      
  }

// When Second form is submitted
    $scope.submitAssignment = function(isValid){
  // IF FORM IS VALID
    if(isValid){
      for (var i = 0; i < assignment.length; i++) {
        var val = assignment[i]['value'];
        // put the data submited by the form into the var results
        results2.push(val);

        var mainResult = results.concat(results2);
      }
      // show results in the console
      console.log(mainResult);
      return results2;

      
    }      
  }


  $scope.submitStudent = function(isValid){
  // IF FORM IS VALID
    if(isValid){
      for (var i = 0; i < student.length; i++) {
        var val = student[i]['value'];
        // put the data submited by the form into the var results
        results3.push(val);

        var mainResults = results.concat(results2,results3);
      }
      // show results in the console
      console.log(results3);
      console.log(mainResults);

      return results3;

    }      
  }

});



