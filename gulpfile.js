var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat');
    
gulp.task('default', ['index','comboSass', 'sass', 'watch']);

gulp.task('watch', function(){
    
    gulp.watch('server/client/views/*.html', ['index']);
    gulp.watch('server/client/styles/scss/*.scss', ['comboSass']);
    gulp.watch('server/client/styles/style.scss', ['sass']);
    
});

gulp.task('index', function(){
   return gulp.src('server/client/views/*.html')
          .pipe(gulp.dest('server/public/views/')); 
    
});

gulp.task('comboSass', function () {
   return gulp.src('server/client/styles/scss/*.scss')
          .pipe(concat('style.scss'))
          .pipe(gulp.dest('server/client/styles/')); 
});

gulp.task('sass', function (){
   return sass('server/client/styles/style.scss')
          .pipe(gulp.dest('server/public/styles/'));
});