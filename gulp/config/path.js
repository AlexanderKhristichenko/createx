import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    image: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    image: `${srcFolder}/img/**/*.{jpg,png,webp,jpeg,gif}`,
    svg: `${srcFolder}/img/**/*.svg`,
    files: `${srcFolder}/files/**/*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    image: `${srcFolder}/img/**/*.{jpg,png,webp,jpeg,gif,svg}`,
    fonts: `${srcFolder}/fonts/**/*`,
    files: `${srcFolder}/files/**/*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};
