const webpack = require('webpack')
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "reagent",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
     plugins: [
        // fix "process is not defined" error:
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ],
    entry: {
     main: './src/main.js'
    },
  });
};
