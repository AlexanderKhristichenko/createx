import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const image = () => {
  return app.gulp
    .src(app.path.src.image)
    .pipe(
      app.plugins.gulpPlumber(
        app.plugins.notify.onError({
          title: "IMAGE",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.image))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.image))
    .pipe(app.gulp.src(app.path.src.image))
    .pipe(app.plugins.newer(app.path.build.image))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(app.gulp.dest(app.path.build.image))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.image))
    .pipe(app.plugins.browserSync.stream());
};
