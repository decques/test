var gulp   = require('gulp'),
    rename = require('gulp-rename'),
    less   = require('gulp-less');

var paths = {
	source: ['static/less/import.less'],
    watchcss: [
    	'static/less/*.less',
    	'static/less/**/*.less'
    ]
};

gulp.task('runless', function() {
    return gulp.src(paths.source)
	    .pipe(less())
	    .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', function() {
    return gulp.watch(paths.watchcss, ['runless']);
});
