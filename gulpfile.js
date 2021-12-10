const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const imgCompress = require('imagemin-jpeg-recompress');
const uglify = require('gulp-uglify');
const webp = require('gulp-webp');
const del = require('del');
const sync = require('browser-sync').create();

function html() {
  return src('src/**.html').pipe(dest('build'));
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(csso())
    .pipe(dest('build/css'));
}

function styles() {
  return src('src/scss/*.css').pipe(dest('build/css'));
}

function fonts() {
  return src('src/fonts/*').pipe(dest('build/fonts'));
}

function img() {
  return src('src/img/**/*.*')
    .pipe(newer('src/img/**/*.*'))
    .pipe(
      imagemin([
        imgCompress({
          loops: 4,
          min: 70,
          max: 80,
          quality: 'high',
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo(),
      ])
    )
    .pipe(dest('build/img'));
}

function webConv() {
  return src('build/img/**/*.{png,jpg,jpeg}')
    .pipe(webp())
    .pipe(dest('build/img'));
}

function scripts() {
  return src('src/js/**.js').pipe(uglify()).pipe(dest('build/js'));
}

function clear() {
  return del('build');
}

function server() {
  sync.init({
    server: './build',
  });

  watch('src/**.html', series(html)).on('change', sync.reload);
  watch('src/scss/**.scss', series(scss)).on('change', sync.reload);
  watch('src/scss/**.css', series(styles)).on('change', sync.reload);
  watch('src/img/**/*.*', series(img)).on('change', sync.reload);
  watch('src/fonts/**/*.*', series(fonts)).on('change', sync.reload);
  watch('src/js/*.*', series(scripts)).on('change', sync.reload);
}

exports.build = series(
  clear,
  scss,
  styles,
  img,
  fonts,
  webConv,
  scripts,
  html,
  img,
  webConv
);
exports.server = series(
  clear,
  img,
  fonts,
  webConv,
  scss,
  styles,
  scripts,
  html,
  server
);
exports.fonts = fonts;
exports.clear = clear;
exports.img = img;
exports.scripts = scripts;
exports.webConv = webConv;
exports.scss = scss;
exports.styles = styles;
