angular.module('dynamicFormApp', [])
.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
  $interpolateProvider.startSymbol('{[{'); 
  $interpolateProvider.endSymbol('}]}'); 
}])

.controller('mainController',function($scope) {
    // array to hold the form data
    $scope.formData = [];

    // variable contains json object
    var users = [ { 
      // label will render the label for the input form.
      label: 'Major Name',
      placeholder: ' Enter the Major ',
      value: '',
      type: 'text',
      name: 'major'

    },
    { 
      // label will render the label for the input form.
      label: 'Course Name',
      placeholder: ' Enter Full Name ',
      value: '',
      type: 'text',
      name: 'fullname'

    },
    {
      // this value is hidden from the user 
      placeholder: 'ID',
      value: "",
      type: 'hidden',
      name: 'empId'
      
    },
    {
      // email data
      label: 'Start Date',
      placeholder: ' Enter start Date',
      value: '',
      type: 'date',
      name: 'date'

    },
    {
      // text area data
      label: 'Description',
      placeholder: ' Enter the course description ',
      value: '',
      type: 'textarea',
      name: 'comments'

    },
    {
      // check box data
      label: 'Terms & Conditions',
      type: 'checkbox',
      name: 'terms'
    }

  ];

    
    
    
    $scope.assignmentData = [];

    // variable contains json object
    var assignment = [ { 
      // label will render the label for the input form.
      label: 'Rubric Name',
      placeholder: ' Enter the Name of the Assignment ',
      value: '',
      type: 'text',
      name: 'major'

    },
    { 
      // label will render the label for the input form.
      label: 'Breif discription',
      placeholder: ' Enter the Breif discription ',
      value: '',
      type: 'text',
      name: 'fullname'

    },
    {
      // this value is hidden from the user 
      placeholder: 'ID',
      value: "",
      type: 'hidden',
      name: 'empId'
      
    },
    {
      // email data
      label: 'Due Date',
      placeholder: ' Enter Due Date',
      value: '',
      type: 'date',
      name: 'date'

    },
    {
      // text area data
      label: 'Description',
      placeholder: ' Enter the assignment description ',
      value: '',
      type: 'textarea',
      name: 'comments'

    }
  ];



  // put json object into the form data array
  $scope.formData = users;
  var results = [];
  var name = results.slice(1, 1);
  var department = results.slice(3, 3);
  var email = results.slice(4, 4);
  var message = results.slice(5, 5);
  // put json opject into assingment data array
    $scope.assignmentData = assignment;
    var results2 = [];    
    var assignmentName = results2.slice(1,1);
    var assignmentDescription = results2.slice(3,3);
    var assignmentWeight = results2.slice(4,4);
    var assignmentHelp = results2.slice(5,5);

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
        results.push(val);
      }
      // show results in the console
      console.log(results);

      return results;
    }      
  }

});



