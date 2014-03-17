var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer =  require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');

gulp.task('css', function (){
	return gulp.src('sass/main.sass')
		.pipe(sass({style:'compressed'}))
		.pipe(autoprefixer('last 15 version'))
		.pipe(gulp.dest('css'))
		.pipe(notify({message:"Successfully compiled! "}))
	
})


gulp.task('default', function(){
	gulp.run('css');

	gulp.watch('sass/**/*.sass', function(){
		gulp.run('css');
	});
});