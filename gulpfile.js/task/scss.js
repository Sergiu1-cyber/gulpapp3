
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
//const webpCss = require('gulp-webp-css')
const scss = () => {
  return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
  .pipe($.gp.plumber({
    errorHandler: $.gp.notify.onError(error => ({
      title: "Scss",
      message: error.message
    }))
  }))
  .pipe(sassGlob())
  .pipe(sass())
  //.pipe(gp.webpCss())
  .pipe($.gp.autoprefixer())
  .pipe($.gp.shorthand())
  .pipe(groupCssMediaQueries())
  .pipe($.gp.size({title: "css pina"}))
  .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
  .pipe($.gp.rename({suffix: ".min"}))
  .pipe($.gp.csso())
  .pipe($.gp.size({title: "css dupa"}))
  .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
  .pipe($.browserSync.stream())
}

module.exports = scss
