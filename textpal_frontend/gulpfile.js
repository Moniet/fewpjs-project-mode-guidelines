var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function sassComp(cb) {
  return gulp.src('./assets/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/stylesheets'));
  cb();
}

function sassWatch(cb) {
  gulp.watch('./assets/stylesheets/*.scss', gulp.series(sassComp));
  cb();
}

gulp.task('default', gulp.series(sassWatch, sassComp));
