'use strict';

console.log('---webpack.config.prod---')

const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const paths = require('./paths')
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  mode : 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: paths,
  output: {
    filename: '[name].bundle.js',
    path: resolveApp('./public/assets/js'),
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
      }
    ]
  },
  plugins: []
}