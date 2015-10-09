module.exports = function(grunt){
	grunt.initConfig({
	  concat: {
	    js: {
	      src: ['public/js/master.js'],
	      dest: 'build/master.js',
	    },
		css: {
		      src: ['public/css/master.css'],
		      dest: 'build/css/master.css'
		    },
		},
		sass: {
		      dist:{ 
		     	files:{	
		      	'public/css/master.css' : 'public/sass/master.scss',
		      	'public/css/normalize.css' : 'public/sass/normalize.scss',
		     	'public/css/responsive.css' : 'public/sass/responsive.scss',
		     	'public/css/navbar.css' : 'public/sass/navbar.scss',
		  		'public/css/responsive.css' : 'public/sass/responsive.scss',
		     	'public/css/styles.css' : 'public/sass/styles.scss'
		    	}
		   } 	
		},
		watch: {
			js: {
			    files: ['public/js/*.js'],
			    tasks: ['concat'],	   
			},
			css: {
		    	files: ['public/css/*.css'],
		    	tasks: ['concat'],
			},
			sass: {
		    	files: ['public/sass/*.scss'],
		    	tasks: ['sass', 'cssmin'],
			}
		},
		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: "public/css",
					src: ['*.css', '!*.min.css'],
					dest: 'public/css',
					ext: '.min.css'
				}]
			}
		}
});	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','watch']);
};
/* start the node app */
var start = require('./app.js');
  