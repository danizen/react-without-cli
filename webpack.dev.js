const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MockWebpackPlugin = require("mock-webpack-plugin/dist");

const common = require("./webpack.common.js");
const mockConfig = require("./mock/config.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MockWebpackPlugin({
      config: mockConfig,
      port: 5000,
    })
  ]
});
