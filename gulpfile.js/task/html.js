const fileinclude = require('gulp-file-include')

const html = () => {
  return $.gulp.src($.path.html.src)
  .pipe($.gp.plumber({
    errorHandler: $.gp.notify.onError(error => ({
      title: "HTML",
      message: error.message
    }))
  }))
  .pipe(fileinclude())
  //.pipe($.gp.webpHtml())
  .pipe($.gp.size({title: "html pina"}))
  .pipe($.gp.htmlmin($.app.html.htmlmin))
  .pipe($.gp.size({title: "html dupa"}))
  .pipe($.gulp.dest($.path.html.dest))
  .pipe($.browserSync.stream())
}

module.exports = html
