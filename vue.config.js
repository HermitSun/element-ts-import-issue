const path = require("path");
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
const join = path.join;
const basename = path.basename;
const camel2Dash = require("camel-2-dash");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge.merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "element-ui",
                libraryDirectory: "lib",
                camel2DashComponentName: true,
                style: path =>
                  join(
                    "element-ui",
                    "lib",
                    "theme-chalk",
                    `${camel2Dash(basename(path, ".js"))}.css`
                  )
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  }
};
