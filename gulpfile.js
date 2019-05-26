gulp.task('concat', function () {
    return gulp.src('./app/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css/'));
});