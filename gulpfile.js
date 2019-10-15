let gulp        = require('gulp');
let browserSync = require('browser-sync').create();
let sass        = require('gulp-sass');
let nodemon     = require('gulp-nodemon')

// Compilar o Sass
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/assets/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('nodemon', () => {
    return nodemon({
        script: './app.js'
    })
}); 

// Mover JS para src/js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 
                     'node_modules/jquery/dist/jquery.min.js', 
                     'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("public/js"))
        .pipe(browserSync.stream());
});

// Servidor para olhar os HTML/SCSS
gulp.task('serve', ['sass'], function() {

    /*browserSync.init({
        
    });   */

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/assets/scss/*.scss'], ['sass']);
    gulp.watch("src/views/*.ejs").on('change', browserSync.reload);
});

gulp.task('default', ['nodemon', 'js','serve']);