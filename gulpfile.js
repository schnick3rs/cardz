'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');

var config = {
    src: 'legacy-app/assets',
    dest: 'legacy-app/resources'
};

gulp.task('sass', function () {
  return gulp.src( config.src + '/scss/**/*.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest( config.dest + '/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch( config.src + '/scss/**', ['sass']);
});


gulp.task('default', [ 'sass' ]);