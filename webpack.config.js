const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("public"),
    publicPath: "/",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    historyApiFallback: true,
    open: true,
    hot: true,
    liveReload: true,
  },
  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",

          {
            loader: "css-loader",
            options: { importLoaders: 1, modules: true },
          },
        ],
      },
    ],
  },
};
