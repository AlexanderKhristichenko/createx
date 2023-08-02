import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { html } from "./gulp/tasks/html.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { image } from "./gulp/tasks/img.js";
import { fonts } from "./gulp/tasks/fonts.js";

global.app = {
  gulp,
  path,
  plugins,
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
};

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.image, image);
  gulp.watch(path.watch.fonts, fonts);
  gulp.watch(path.watch.files, copy);
}

const mainTasks = gulp.parallel(copy, html, scss, js, image, fonts);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

gulp.task("default", dev);
gulp.task("build", build);
