const path = require('path');
const Webpack = require('webpack');
const webpackConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const UglifjsWebpackPlugin = require('uglifyjs-webpack-plugin');

// 生产环境主要实现的是压缩代码、提取css文件、合理的sourceMap、分割代码
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename:'js/[name].[hash:8].js',
    chunkFilename:'js/[name].[hash:8].js'
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   from: path.resolve(__dirname, '../../public'),
    //   to: path.resolve(__dirname, '../../dist'),
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
  ],
  optimization: {
    minimizer: [
      // 压缩js
      // new UglifjsWebpackPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true
      // }),
      // 压缩css
      new OptimizeCssAssetsWebpackPlugin({

      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: '[\\/]node_modules[\\/]/',
          priority: 10,
          // 只打包初始时依赖的第三方
          chunks: 'initial'
        }
      }
    }
  }
});