const { defineConfig } = require("@vue/cli-service");
const path = require("path");

process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/_variables.scss";',
      },
    },
  },
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [path.resolve(__dirname, "./src/assets/*.scss")],
    },
  },
});
