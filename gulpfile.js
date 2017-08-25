var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var minifyHtml = require("gulp-minify-html");
var del = require('del');

gulp.task('js', function () {
    gulp.src(['js/index.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
});

gulp.task('css', function () {
    gulp.src(['css/style.css'])
        .pipe(concat('style.css'))
        .pipe(minify())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('minify-html', function () {
    gulp.src('*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('build/'));
});

gulp.task('copyimages', function () {
    gulp.src('img/*.{jpg,jpeg,png,svg}')
        .pipe(gulp.dest('build/img/'));
});
gulp.task('cleanbuild', function () {
    return del(['build']);
});

// gulp.task('default', ['cleanbuild', 'js', 'css', 'minify-html', 'copyimages'], function () {
// });
gulp.task('default', ['cleanbuild'], function () {
    gulp.start('js', 'css', 'minify-html', 'copyimages');
});