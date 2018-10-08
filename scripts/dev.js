
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const env = require('../config/env')
const config = require('../config/webpack.config.dev.js')
const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  contentBase: process.cwd(),
  publicPath: config.output.publicPath,
  hot: true
});
server.listen(env.PORT);