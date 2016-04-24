var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var replace =  require('gulp-html-replace');
var sourcemaps = require('gulp-sourcemaps');
var modernizr = require('gulp-modernizr');
const jasmine = require('gulp-jasmine');

gulp.task('default', () =>
  gulp.src('jasmine/spec/test.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it 
    .pipe(jasmine())
);

gulp.task('content', function(){
  gulp.src('./src/index.html')
      .pipe(gulp.dest('./src/'))
      .pipe(reload({stream: true}))
});

gulp.task('js', function(){
  gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/js/min'))
    .pipe(reload({stream: true}))
});

gulp.task('css', function(){
  return gulp.src('./src/css/*.js')
    .pipe(uglify())
      .pipe(gulp.dest('./src/css/min'))
});

gulp.task('modernizr', function() {
  gulp.src('./src/js/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest("build/"))
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch('./src/index.html', ['content']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/css/*.css', ['css']);
    gulp.watch('./src/jasmine/spec/*.css', ['jasmine']);
});