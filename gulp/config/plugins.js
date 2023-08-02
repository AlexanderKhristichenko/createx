import replace from "gulp-replace";
import gulpPlumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

export const plugins = {
  replace,
  gulpPlumber,
  notify,
  browserSync,
  newer,
  gulpIf,
};
