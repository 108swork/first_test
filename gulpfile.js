//'use strict';

var gulp = require('gulp'),
 stylus = require('gulp-stylus'),
 minifyCss = require('gulp-minify-css'),
 jade = require('gulp-jade'),
 autoprefixer = require('gulp-autoprefixer'),
 plumber = require('gulp-plumber'),
 concat = require('gulp-concat'),
 uglify = require('gulp-uglifyjs'),
 spritesmith = require('gulp.spritesmith');

gulp.task('allcss', function () {
  gulp.src('./stylus/**/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('./vectorstal/css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            browsers : ['> 1%', 'last 3 versions','Firefox > 12', 'ie > 7']
        }))
        .pipe(concat('main.css'))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./vectorstal/css/min'));
});

gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./sprite/*.png')
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                cssFormat: 'css',
                algorithm: 'top-down',
                padding: 5
            }));
    spriteData.img.pipe(gulp.dest('./vectorstal/img/'));
    spriteData.css.pipe(gulp.dest('./vectorstal/css/'));
});

gulp.task('jade', function() {
  gulp.src('jade/*.jade')
    .pipe(jade({
      pretty: true //  uncompress html
    }))
    .pipe(gulp.dest('./vectorstal'))
});

gulp.task('uglify', function() {
  gulp.src('./vectorstal/js/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./vectorstal/js/min'))
});

gulp.task('watch', function() {
  gulp.watch('./stylus/**/*.styl', ['allcss']);
  gulp.watch('jade/*.jade', ['jade']);
  gulp.watch('./vectorstal/js/*.js', ['uglify']);
});

gulp.task('default', function() {
  gulp.start('allcss','jade','uglify','sprite','watch');
});
