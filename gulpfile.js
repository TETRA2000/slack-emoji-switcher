var gulp = require('gulp');

// TODO

gulp.task('copy', function() {
  gulp.src('src/*')
  .pipe(gulp.dest('dest'))
});

gulp.task('default', ["copy"]);