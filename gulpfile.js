var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();

gulp.task('sass',function() {
	return gulp.src('src/assets/styles/sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('src/assets/styles/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});


gulp.task('jade',function(){
	return gulp.src('src/jade/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('src'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch',['browserSync','sass','jade'],function(){
	gulp.watch('src/assets/styles/sass/*.sass',['sass']);
	gulp.watch('src/jade/*.jade',['jade']);
	gulp.watch('src/*.html',browserSync.reload);
	gulp.watch('src/assets/scripts/*.js',browserSync.reload)

});

gulp.task('browserSync',function(){
	browserSync.init({
		server: {
			baseDir: 'src'
		},
	})
});



