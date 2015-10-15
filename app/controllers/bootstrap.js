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
	      name:"major",      

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
	}];

	$scope.Post = function($scope){
     console.log('FIRED', $rootScope.groups);


      //this the first form that gets submited
       var cData = {status:"Status of course",major:$rootScope.groups.value, course: "Web design",description:"description of course", rubric:{name:"Lab 1",title:"paint a face", grade:"gradeVal", dueDate: "this is DUEEEE",rubricdescription:"about the rubric"}};
      //this is the rubric form 



      $http.post('/api/post', cData).then(function (successCallback, errorCallback){
        console.log("successfilled");

      });

    }

    // $http.get('/groupList').success(function(response){
    // 	console.log("i got the data");
    // 	$scope.groupList = response;
    // })



	var groupList = $rootScope.groups;

  
	// put json object into the form data array
  	// WHEN FORM IS SUBMITED
  	$scope.submitForm = function($scope){
  	// IF FORM IS VALID
			var i = 0;
		      if(i < groupList.length) {
		        var val = groupList[i]['value'];
		        // put the data submited by the form into the var results
		        groupList.push(val);
		        i++;

		        var name = groupList.slice(4, 4);

				console.log(name);

		      }
		      // show results in the xwconsole
		      console.log(groupList, "the group list");
	      	  return groupList;
  	
		}
});
// angular.bootstrap(document, ['myApp']);
