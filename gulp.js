var gulp = require('gulp'),sass = require('gulp-sass'),nodemon = require('gulp-nodemon'), child_proccess = require('child-process');


gulp.task('mongod', function() {
   child_proccess.exec('mongod', function (err,stdout,stderr){
   	console.log('launching mongo instace', stdout)
	})
});

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('dev', function() {
    nodemon({
    	script: 'app.js',
    	ext: 'js, handlebars',
    	env: 'NODE_ENV' : 'development'

    	}
    })
});


gulp.task('all', ['mongod', 'dev']);

gulp.task('default', ['mongod', 'dev']);
