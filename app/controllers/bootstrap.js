myApp.controller('AccordionDemoCtrl', function ($scope, $http, $timeout) {
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


    $scope.Post = function($scope){
      console.log('FIRED');
       var data = {status:"CHECKING the status yo"};

      $http.post('/api/post', data).then(function (successCallback, errorCallback){
        console.log("successfilled");
      });

    }

    $http.get('/groupList').success(function(response){
    	console.log("i got the data");
    	$scope.groupList = response;
    })


   $scope.groups = [
    {
      title : 'Select Degree Program and Course',
      correct : 'addingDegreeCourse',
      users : [ 

	    { 
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

	    }
	  ]
    },



    {
      title: 'Add Rubric',
      correct : 'addingRubric',
	  users : [ { 
	      // label will render the label for the input form.
	      label: 'Rubric Name',
	      placeholder: ' Enter the Name of the Assignment ',
	      value: '',
	      type: 'text',
	      name: 'major'

	    },
	    { 
	      // label will render the label for the input form.
	      label: 'Brief discription',
	      placeholder: ' Enter the Breif discription ',
	      value: '',
	      type: 'text',
	      name: 'fullname'

	    },
	    {
	      // email data
	      label: 'Due Date',
	      placeholder: ' Enter start Date',
	      value: '',
	      type: 'date',
	      name: 'endDate'

	    },
	    {
	      // text area data
	      label: 'Description',
	      placeholder: ' Enter the assignment description ',
	      value: '',
	      type: 'textarea',
	      name: 'comments'

	   }
	  ]
	}
];

	var groupList = $scope.groups;
	console.log(groupList);

	$scope.groups = groupList;

	var groupList = $scope.groups;

	console.log(groupList)
  
  	$scope.groups = groupList;

	$scope.formData = [];
	var users = [];
	var results = [];


	// put json object into the form data array
	$scope.formData = users;
	var name = results.slice(1, 1);
	var department = results.slice(3, 3);
	var email = results.slice(4, 4);
	var message = results.slice(5, 5);

  // WHEN FORM IS SUBMITED
  $scope.submitForm = function(isValid){
  // IF FORM IS VALID
  	var groupList = $scope.groups;

if(isValid){
      for (var i = 0; i < groupList.length; i++) {
        var val = groupList[i]['value'];
        // put the data submited by the form into the var results
        groupList.push(val);
      }
      // show results in the console
      console.log(groupList);
}
      return groupList;
  }







});
// angular.bootstrap(document, ['myApp']);
