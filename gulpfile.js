'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./static/style/sass/**/{*.scss,_*.scss}')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/style'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/style/sass/**/{*.scss,_*.scss}', ['sass']);
});
