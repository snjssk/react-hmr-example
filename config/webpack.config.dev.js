'use strict';

console.log('---webpack.config.dev---')

const webpack = require('webpack')
const path = require('path')
const paths = require('./paths')
const env = require('./env')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

  mode : 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: paths,
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public/assets/js'),
    publicPath: '/public/'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: { loader: "html-loader" }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      chunks: ['vendor', 'top'],
      template: "./config/template.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      chunks: ['vendor', 'about'],
      template: "./config/template.html",
      filename: "./about/index.html"
    })
  ]
}

