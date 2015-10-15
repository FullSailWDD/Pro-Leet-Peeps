myApp.controller('AccordionDemoCtrl', function ($scope, $http, $timeout, $rootScope) {

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
      console.log('FIRED', $rootScope.groups);
      //this the first form that gets submited
       var cData = {status:"Status of course",major:"the major of the course", course: "Web design",description:"description of course", rubric:{name:"Lab 1",title:"paint a face", grade:"gradeVal", dueDate: "this is DUEEEE",rubricdescription:"about the rubric"}};
      //this is the rubric form 



      $http.post('/api/post', cData).then(function (successCallback, errorCallback){
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
	      label: 'Major Name',
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
	      name:"MajorName",      

	    },
	    { 
	      // label will render the label for the input form.
	      label: 'Course Name',
	      placeholder: ' Enter course name ',
	      value: '',
	      type: 'text',
	      name: 'course'

	    },
	    {
	      // text area data
	      label: 'Description',
	      placeholder: ' Enter the course description ',
	      value: '',
	      type: 'textarea',
	      name: 'description'

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
	      name: 'name'

	    },

	    {
	      // email data
	      label: 'Section Titles',
	      placeholder: 'Design,Functionality,Code',
	      value: '',
	      type: 'text',
	      name: 'title'

	    },
	    { 
	      // label will render the label for the input form.
	      label: 'Grade Options',
	      placeholder: ' 0,25,50,75,100',
	      value: '',
	      type: 'text',
	      name: 'grade'

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
	      name: 'rubricdescription'

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
