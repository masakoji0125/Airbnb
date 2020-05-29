const gulp = require('gulp');

const sass = require('gulp-sass');

gulp.task('sass',function(){

    return (
        gulp.src('sass/style.scss')
        .pipe(sass({
        }))
        .pipe(gulp.dest('css'))
    )
})

gulp.task('sass:watch', function() {

    gulp.watch('sass/*.sass', gulp.task('sass'))

});