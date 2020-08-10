const Webpack = require('webpack');
const path = require('path');

// 抽离第三方模块
module.exports = {
  entry: {
    // 打包的模块数组
    vendor: ['vue'],
  },
  output: {
    // 打包后文件输出的位置
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
    // 拷贝生成的文件到dist目录
    new CopyWebpackPlugin({
      from: path.resolve(__dirname, 'static'),
      to: path.resolve(__dirname, '../../dist/static'),
    }),
  ]
};
