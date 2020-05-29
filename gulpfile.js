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

gulp.task('sass:watch', function(){
     
    //sassフォルダ内の前scssファイルの変更を監視
    //変更があったら、scssをcssに変換
    gulp.watch('sass/*.scss',gulp.task('sass'))
});