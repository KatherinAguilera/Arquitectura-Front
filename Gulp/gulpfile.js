var gulp = require ('gulp');
// declarar modulo en la variable
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

/*gulp.task('default', function(){
	console.log('Hola Gulp');
	});
	*/
	//servidor 3000 para testear 
gulp.task('serve', ['html', 'css', 'javascript'], function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/js/*.js", ['javascript']).on('change', browserSync.reload);
    gulp.watch("scss/**/*.scss", ['css']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("./*.html", ["html"]);
});
// prefijos en el css  -webkit
/*gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);*/
//tarea para minificar img
gulp.task('imagenes', function () {
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/dist/images'));
});

//Uglify.js minificar
gulp.task('javascript', function () {
        gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/dist'));
});

//Minificar html
gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'));
});
//sass cd nombre de la tarea - gulp.src: buscar el archivo scss 
//pipe sass nombre de la funcion (llamado dela funcion) - gulp dest guardar scss en archivo css
gulp.task('css', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

//permite ejecutar la tarea automaticamente sin ejecutar a cada instante la tarea al realizar un cambio

//gulp.task('observar', function(){
//	gulp.watch('scss/**/*.scss', ['sass']);
//	});
