'use strict'

/*
* エントリーポイントのパスを定義
*
* development or production で返却するパスを変更
* developmentのみHMR用の記述を付けた状態で返す
* */

const fs = require('fs')
const path = require('path')
const env = require('./env')
const dev = process.env.NODE_ENV === 'development'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (dev = false, relativePath) => {
  const src_path = path.resolve(appDirectory, relativePath)
  return dev ? [`webpack-dev-server/client?${env.HOST}:${env.PORT}`, 'webpack/hot/dev-server', src_path] : src_path
}

module.exports = {
  top: resolveApp(dev, `${env.SRC_PATH}/pages/Top.jsx`),
  about: resolveApp(dev, `${env.SRC_PATH}/pages/about/Profile.jsx`)
}