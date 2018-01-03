var gulp = require('gulp')
    less = require('gulp-less')
    cssmin = require('gulp-minify-css');
    sourcemaps = require('gulp-sourcemaps');
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

var paths = {
    less: ['./public/demo/pagesDemo/less/*.less']
}

gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./map'))
        .pipe(cssmin())
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(gulp.dest('./public/demo/pagesDemo/css'))
})

gulp.task('watch', function() {
    gulp.watch(paths.less, ['less'])
    console.log('********您已开启watch*********');
})