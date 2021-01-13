const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.js'
    
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      url: require.resolve("normalize-url/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Norman Sicily Project Media Viewer',
      template: './public/index.html',
      inject: 'body',
      favicon: './assets/favicon.png'
    }),
    new CopyPlugin({
      patterns: [
        { from: "data", to: "data" }
      ],
    }),
  ]
};
