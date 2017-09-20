var gulp = require('gulp')
  , gls = require('gulp-live-server');

gulp.task('serve', function() {
  var server = gls.static(['.', 'app'], 3000);
  server.start();
});

gulp.task('default', ['serve']);
