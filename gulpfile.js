var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
//var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
         entry: "./js/mvc/bootstrap.js",
	    output: {
	        path: __dirname,
	        filename: "./public/mvc/bundle.js"
	    }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('copy-files', function() {
   gulp.src('./js/basic/**/*.js')
   .pipe(gulp.dest('./public/basic'));
});

gulp.task('default', ['webpack', 'copy-files'], function () {

});