const Webpack = require('webpack');
const Koa = require('koa2');
const KoaEjs = require('koa-ejs');
const KoaStatic = require('koa-static');
const Router = require('./route');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const config = require('../k-webppack/config');
const proxyMiddle = require('../k-server/utils/proxy.middleware.js');

const path = require('path');

// init app
const app = new Koa();

// global variable
// global.DEPLOY_ENV = process.env.DEPLOY_ENV;
console.log('process.env.DEPLOY_ENV:', process.env.DEPLOY_ENV);
console.log('process.env.DEPLOY_ENV:', process.env.DEPLOY_ENV);
if (process.env.DEPLOY_ENV === 'development') {
  console.log('process.env.DEPLOY_ENV:', process.env.DEPLOY_ENV);
  const webpackconfig = require('../k-webppack/build/webpack.dev.config.js');
  const compiler = Webpack(webpackconfig);
  // webpack dev build
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackconfig.output.publicPath
  }));

  // hot load
  app.use(hotMiddleware(compiler, {
    reload: true
  }));

  // proxy api
  if (config.dev.proxyTable) {
    proxyMiddle(app, config.dev.proxyTable);
  }
}

// ejs template
KoaEjs(app, {
  root: path.join(__dirname, 'k-server/view'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false
});

// static file path
app.use(KoaStatic('./public'));

// router
app.use(Router.routes());
app.use(Router.allowedMethods());

// app.use((ctx: any) => {
//   ctx.body = 'test router';
// })

app.listen(8080, () => {
  console.log('app server has been started on port 8080');
});
