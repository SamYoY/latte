const path = require('path');
module.exports = {
  build: {
    env: require('./env.prd'),
    index: path.resolve(__dirname, '../../k-server/view/index.html'),
    assetsRoot: path.resolve(__dirname, '../../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
  },
  dev: {
    env: require('./env.dev'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    port: 8080,
  }
}