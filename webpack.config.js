const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    port: 8009,
    historyApiFallback: true,
    contentBase: "dist"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react"],
              plugins: ["transform-class-properties"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      }
    ]
  }
};
module.exports = config;
