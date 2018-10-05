var gulp = require('gulp');
var uglifyes = require('gulp-uglify-es').default;
var uglyComposer = require('gulp-uglify/composer');
var uglify = uglyComposer(uglifyes, console);
//var csso = require('gulp-csso');
let cleanCSS = require('gulp-clean-css');

gulp.task('uglify-js', function () {
	return gulp.src('../target/public/assets/**/*.js').pipe(uglifyes({ keep_classnames: true, keep_fnames: true })).pipe(gulp.dest('../target/public/assets'));
});

//gulp.task('minify-css', function (){
//	return gulp.src('../target/public/assets/**/*.css').pipe(csso({
//        restructure: false,
//        sourceMap: false,
//        debug: true
//    })).pipe(gulp.dest('../target/public/assets'));
//});


gulp.task('minify-css', () => {
  return gulp.src('../target/public/assets/**/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('../target/public/assets'));
});

gulp.task('minify', gulp.series('uglify-js', 'minify-css'));
