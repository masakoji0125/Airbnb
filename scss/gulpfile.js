const gulp = require ('gulp');

const sass = require ('gulp-sass');

gulp.task ('sass', function () {
    return (
        // sassフォルダのstyle.cssを取得
        gulp.src('sass/*..scss')
        .pipe(sass({
            // outputStyle: 'compressed'
        }))  // 変換した結果をcssフォルダに出力
        .pipe(gulp.dest('css'))
    )
})