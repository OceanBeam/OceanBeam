var uglify = require('gulp-uglify'),
    ts = require('gulp-typescript'),
    webpack = require('webpack-stream'),
    minify = require('gulp-minify'),
    gulp = require('gulp');

var tsProject = ts.createProject({
    removeComments: true,
    noImplicitAny: false,
    target: 'ES3',
    module: 'commonjs',
    declarationFiles: false
});
var tsfiles = ['./src/**/*.ts'];
gulp.task('tsc', function() {
    return gulp.src(tsfiles)
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('./temp/js'));
});

gulp.task('minify-js', function() {
    return gulp.src('./temp/js/include.js')
        .pipe(webpack())
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['tsc', 'minify-js']);

gulp.task('watch', function() {
    return gulp.watch(tsfiles, ['default']);
});