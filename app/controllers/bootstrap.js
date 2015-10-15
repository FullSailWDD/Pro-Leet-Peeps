myApp.controller('AccordionDemoCtrl', function ($scope, $http, $timeout, $rootScope) {




    $scope.Post = function($scope){
      console.log('FIRED', $rootScope.groups);

       var data = {status:"Status of course",major:"the major of the course"};

      $http.post('/api/post', data).then(function (successCallback, errorCallback){
        console.log("successfilled");
      });

    }

    $http.get('/groupList').success(function(response){
    	console.log("i got the data");
    	$scope.groupList = response;
    })


   $rootScope.groups = [
    {
      title : 'Select Degree Program and Course',
      className : 'addingDegreeCourse',
      users : [ 

	    { 
	      // label will render the label for the input form.
	      label: 'Major Name!',
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
      className : 'addingRubric',
	  users : [ { 
	      // label will render the label for the input form.
	      label: 'Rubric Name',
	      placeholder: ' Enter the Name of the Assignment ',
	      value: '',
	      type: 'text',
	      name: 'rubricName'

	    },
	    { 
	      // label will render the label for the input form.
	      label: 'Brief discription',
	      placeholder: ' Enter the Breif discription ',
	      value: '',
	      type: 'text',
	      name: 'rubDiscription'

	    },
	    {
	      // email data
	      label: 'Due Date',
	      placeholder: ' Enter start Date',
	      value: '',
	      type: 'date',
	      name: 'dueDate'

	    },
	    {
	      // text area data
	      label: 'Description',
	      placeholder: ' Enter the assignment description ',
	      value: '',
	      type: 'textarea',
	      name: 'rubDesc'

	   }
	  ]
	},

	{
      title: 'Add Student',
      className : 'addingStudent',
	  users : [ { 
	      // label will render the label for the input form.
	      label: 'Student Name',
	      placeholder: ' Enter the Students Full Name ',
	      value: '',
	      type: 'text',
	      name: 'major'

	    },
	    {
	      // text area data
	      label: 'Notes about Student',
	      placeholder: ' How does this student partake in class? ',
	      value: '',
	      type: 'textarea',
	      name: 'comments'

	   } 
	   ,{
	      // check box data
	      label: 'Terms & Conditions',
	      type: 'checkbox',
	      name: 'terms'
	    }
	  ]
	}
];

	var groupList = $rootScope.groups;


	console.log(groupList)
  

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
	        var val = groupList[i.name.value]['value'];
	        // put the data submited by the form into the var results
	        groupList.push(val);
	      }
	      // show results in the xwconsole
	      console.log(groupList);
	}
      return groupList;
  }



 $scope.premiers = [{name: 'premier1', correct:'premier'}, 
                      {name: 'premier2', correct:'premier'}, 
                      {name: 'green', correct:'green'}, 
                      {name: 'random', correct:'random'}, ];

    $scope.validateClick = function (premier, index) {
        if (premier.correct == "premier") {
            premier.isPremier = true;
            console.log(premier.isPremier + index)
            
        } else if (premier.correct == "green") {
            premier.isGreen = true;
            console.log(premier.isGreen + index)
            
        } else {
            premier.isRandom = true;
            console.log(premier.isRandom + index)
        }
    }


});
// angular.bootstrap(document, ['myApp']);
