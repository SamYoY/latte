const Webpack = require('webpack');
const webpackConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// 开发环境主要实现的是热更新,不要压缩代码，完整的sourceMap
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename:'js/[name].js',
    chunkFilename:'js/[name].js'
  },
  // devServer: {
  //   historyApiFallback: {
  //     rewrites: [{
  //       from: /.*/g,
  //       to: path.resolve(__dirname, '../../k-server/view/index.html')
  //     }]
  //   }
  // },

  // browserRouter 借助history api接口实现url值得变化
  
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    // 测试环境不加hash值
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ]
});