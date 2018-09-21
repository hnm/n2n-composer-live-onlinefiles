var gulp = require('gulp');
var uglifyes = require('gulp-uglify-es').default;
var uglyComposer = require('gulp-uglify/composer');
var uglify = uglyComposer(uglifyes, console);
var cleanCSS = require('gulp-clean-css');

gulp.task('uglify-js', function () {
	return gulp.src('../target/public/assets/**/*.js').pipe(uglifyes()).pipe(gulp.dest('../target/public/assets'));
});

gulp.task('minify-css', function (){
	return gulp.src('../target/public/assets/**/*.css').pipe(cleanCSS()).pipe(gulp.dest('../target/public/assets'));
});

gulp.task('minify', ['uglify-js', 'minify-css'], function() {
});