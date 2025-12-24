const {series, watch, src, dest, parallel} = require('gulp');
const pump = require('pump');
const {exec} = require('child_process');
const {promisify} = require('util');

const execAsync = promisify(exec);

// gulp plugins and utils
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var zip = require('gulp-zip');
var uglify = require('gulp-uglify');
var beeper = require('beeper');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-mod-function');
var cssnano = require('cssnano');
var easyimport = require('postcss-easy-import');

function serve(done) {
    livereload.listen();
    done();
}

const handleError = (done) => {
    return function (err) {
        if (err) {
            beeper();
        }
        return done(err);
    };
};

function hbs(done) {
    pump([
        src(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs']),
        livereload()
    ], handleError(done));
}

function tailwind(done) {
    // Compile Tailwind CSS using CLI
    execAsync('npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/built/tailwind.css')
        .then(() => {
            console.log('Tailwind CSS compiled successfully');
            done();
        })
        .catch((err) => {
            console.error('Tailwind CSS compilation failed:', err);
            done(err);
        });
}

function css(done) {
    var processors = [
        easyimport,
        colorFunction(),
        autoprefixer(),
        cssnano()
    ];

    // Process CSS files but exclude tailwind.css (handled separately by Tailwind CLI)
    // Also need to update screen.css import to use built tailwind.css
    pump([
        src(['assets/css/*.css', '!assets/css/tailwind.css'], {sourcemaps: true}),
        postcss(processors),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

function js(done) {
    pump([
        src('assets/js/*.js', {sourcemaps: true}),
        uglify(),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

function zipper(done) {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    pump([
        src([
            '**',
            '!node_modules', '!node_modules/**',
            '!dist', '!dist/**'
        ]),
        zip(filename),
        dest(targetDir)
    ], handleError(done));
}

const cssWatcher = () => watch(['assets/css/**', '!assets/css/tailwind.css'], css);
// Note: Tailwind CSS watch is handled separately by Tailwind CLI in package.json dev script
const hbsWatcher = () => watch(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs'], hbs);
const watcher = parallel(cssWatcher, hbsWatcher);
const build = series(tailwind, css, js);
const dev = series(build, serve, watcher);

exports.build = build;
exports.zip = series(build, zipper);
exports.default = dev;
