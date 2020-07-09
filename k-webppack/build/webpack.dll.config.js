const Webpack = require('webpack');
const path = require('path');

// 抽离第三方模块
module.exports = {
  entry: {
    verdor: ['vue'],
  },
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new Webpack.DefinePlugin({
      path: path.resolve(__dirname, '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new CopyWebpackPlugin({
      from: path.resolve(__dirname, 'static'),
      to: path.resolve(__dirname, '../../dist/static'),
    }),
  ]
};
