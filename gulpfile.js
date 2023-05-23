const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const themeRoot = "web/themes/discreet_tan/";

function browsersync() {
  browserSync.init({
    proxy: "dolgoletie.ryazanszn.test"
  });
}

function styles() {
  return src(themeRoot + 'scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(sourcemaps.write('./'))
    .pipe(dest(themeRoot + 'css'))
    .pipe(browserSync.stream());
}

function startwatch() {
  let files = [
    themeRoot + "css/*.css",
    themeRoot + "js/*.js",
    themeRoot + "images/**/*",
    themeRoot + "templates/**/*.twig"
  ];

  watch(files, browserSync.reload);
}

exports.browsersync = browsersync;
exports.styles = styles;
exports.build = series(styles);
exports.default = parallel(styles, browsersync, startwatch);
