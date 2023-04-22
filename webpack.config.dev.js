const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client",
    "webpack/hot/only-dev-server",
    resolve(__dirname, "hotReload"),
  ],
  output: {
    filename: "bundle.js",
    path: resolve(__dirname),
    publicPath: "/",
  },
  context: resolve(__dirname, "../src"),
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    contentBase: resolve(__dirname, "../assets"),
    publicPath: "/",
    historyApiFallback: true,
  },
  module: {
    rules: [
        
        {
  test: /\.m?js/,
  type: "javascript/auto",
},
{
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
},
      
      {
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, "../src"), resolve(__dirname)],
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|svg)$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.(eot|ttf)$/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: "redux-react-starter",
      template: "../webpack/template.html",
    }),
    new Dotenv(),
  ],
  performance: { hints: false },
};
