const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    port: 3000
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
