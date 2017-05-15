let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
let sourcemaps = require('gulp-sourcemaps');
let nodemon = require('gulp-nodemon');


const TsFiles = ['src/**/*.ts'];
const HbsFiles = ['src/**/*.hbs'];


gulp.task('default', ['watch'], function () {
    nodemon({
        script: 'build/app.js',
        watch: 'build',
        nodeArgs: ['--debug']
    });
});

gulp.task('watch', ['tsc', 'hbs'], function () {
    gulp.watch(TsFiles, ['tsc']);
    gulp.watch(HbsFiles, ['hbs']);
});

gulp.task('build', ['tsc', 'hbs']);

gulp.task('tsc', function () {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.identityMap())
        .pipe(tsProject())
        .js.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

gulp.task('hbs', function () {
    return gulp.src(HbsFiles).pipe(gulp.dest('build'));
});