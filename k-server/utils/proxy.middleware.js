/**
 * 1.解决dev环境下，proxy代理的问题
 * 2.兼容webpack-dev-middleware 和 webpack-hot-middleware，在koa中使用Express或Connect中间件
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
const koa2Connect = require('koa2-connect');

const proxy = (context, options) => {
  if (typeof options === 'string') {
    options = {
      target: options
    };
  }
  return async (ctx, next) => {
    await koa2Connect(createProxyMiddleware(context, options))(ctx, next);
  }
};

const proxyMiddle = (app, proxyTable) => {
  Object.keys(proxyTable).forEach((context) => {
    const options = proxyTable[context];
    app.use(proxy(context, options));
  })
};

module.exports = proxyMiddle;