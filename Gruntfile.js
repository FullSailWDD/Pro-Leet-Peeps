module.exports = function(grunt){
	grunt.initConfig({
	  concat: {
	    js: {
	      src: ['app/js/master.js'],
	      dest: 'build/master.js',
	    },
		css: {
		      src: ['app/css/master.css'],
		      dest: 'build/css/master.css'
		    },
		},
		sass: {
		      dist:{ 
		     	files:{	
		      	'app/css/master.css' : 'app/sass/master.scss',
		      	'app/css/normalize.css' : 'app/sass/normalize.scss',
		     	'app/css/responsive.css' : 'app/sass/responsive.scss',
		     	'app/css/navbar.css' : 'app/sass/navbar.scss',
		     	'app/css/footer.css' : 'app/sass/footer.scss',
		  		'app/css/responsive.css' : 'app/sass/responsive.scss',
		     	'app/css/styles.css' : 'app/sass/styles.scss',
		     	// // Bootstrap core CSS
		     	// 'app/css/bootstrap.min.css' : 'app/css/bootstrap.min.scss',
		     	// // MetisMenu CSS
		     	// 'app/css/metisMenu.min.css' : 'app/css/metisMenu.min.scss',
		     	// 'app/css/timeline.css' : 'app/css/timeline.scss',
		     	// 'app/css/sb-admin-2.css' : 'app/css/sb-admin-2.scss',
		     	// 'app/css/morris.css' : 'app/css/morris.scss'
		    	}
		   } 	
		},
		nodemon: {
		dev: {
		    script: 'app.js'
		  }
		},
		watch: {
			js: {
			    files: ['app/js/*.js'],
			    tasks: ['concat'],	   
			},
			css: {
		    	files: ['app/css/*.css'],
		    	tasks: ['concat'],
			},
			sass: {
		    	files: ['app/sass/*.scss'],
		    	tasks: ['sass', 'cssmin'],
			}
		},
		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: "app/css",
					src: ['*.css', '!*.min.css'],
					dest: 'app/css',
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
