const Webpack = require('webpack');
const webpackConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 开发环境主要实现的是热更新,不要压缩代码，完整的sourceMap
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    // 测试环境不加hash值
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ]
});