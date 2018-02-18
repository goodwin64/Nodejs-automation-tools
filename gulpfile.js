var gulp         = require('gulp');
var gutil        = require('gulp-util');
var es           = require('event-stream');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var clean        = require('gulp-clean');
var connect      = require('gulp-connect');
var webpack      = require('gulp-webpack');
var usemin       = require('gulp-usemin');
var imagemin     = require('gulp-imagemin');

// Connect Task
gulp.task('connect', function () {
    connect.server({
        root: ['./src'],
        port: 1337,
        livereload: true
    });
});

// Html reload
gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(connect.reload());
});

// sass compiler task
gulp.task('sass', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({
            onError: function (error) {
                gutil.log(gutil.colors.red(error));
                gutil.beep();
            },
            onSuccess: function () {
                gutil.log(gutil.colors.green('Sass styles compiled successfully.'));
            }
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./src/styles/'))
        .pipe(connect.reload());
});

// Minify images
gulp.task('imagemin', function () {
    return es.concat(
        gulp.src('./src/images/**/*.png')
            .pipe(imagemin())
            .pipe(gulp.dest('/dest/img')),
        gulp.src('./src/images/**/*.jpg')
            .pipe(imagemin())
            .pipe(gulp.dest('/dest/img')),
        gulp.src('./src/images/**/*.gif')
            .pipe(imagemin())
            .pipe(gulp.dest('/dest/img'))
    );
});

// Script task
gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch([ 'src/styles/**/*.scss'], ['sass']);
    gulp.watch([ 'src/scripts' + '/**/*.js'], ['scripts']);
    gulp.watch(['./src/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'sass', 'scripts', 'watch']);

gulp.task('clean', function () {
    return gulp
        .src('./dist/*', { read: false })
        .pipe(clean());
});

gulp.task('usemin', function () {
    gulp.src('./src/**/*.html')
        .pipe(usemin())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['clean', 'sass', 'scripts', 'imagemin', 'usemin'], function () {
});

gulp.task('default', function () {
    gutil.log('Default task goes here...');
});
