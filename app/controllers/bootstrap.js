myApp.controller('AccordionDemoCtrl', function ($scope) {

  $scope.groups = [
    {
      title : 'Select Degree Program and Course',
      users : [ 

    { 
      // label will render the label for the input form.
      label: 'Major Name!!!!',
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

   } // },{
    //   // check box data
    //   label: 'Terms & Conditions',
    //   type: 'checkbox',
    //   name: 'terms'
    // }
  ]
    }
  ];

});




var users = [ 

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
  ];