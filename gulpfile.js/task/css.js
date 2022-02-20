
//const webpCss = require('gulp-webp-css')
const groupCssMediaQueries = require('gulp-group-css-media-queries')

const css = () => {
  return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev })
  .pipe($.gp.plumber({
    errorHandler: $.gp.notify.onError(error => ({
      title: "Css",
      message: error.message
    }))
  }))
  .pipe($.gp.concat("main.css"))
  .pipe($.gp.cssimport())
  //.pipe(webpCss())
  .pipe($.gp.autoprefixer())
  .pipe($.gp.shorthand())
  .pipe(groupCssMediaQueries())
  .pipe($.gp.size({title: "css pina"}))
  .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
  .pipe($.gp.rename({suffix: ".min"}))
  .pipe($.gp.csso())
  .pipe($.gp.size({title: "css dupa"}))
  .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
  .pipe($.browserSync.stream())
}

module.exports = css
