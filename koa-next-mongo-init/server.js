const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const router = new Router();

app.prepare().then(() => {
    const server = new Koa();

    router.get('/test/:id', (ctx, next) => {
        ctx.body = `request ${ctx.path}  ${ctx.params.id}`;
    });

    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    server.use(router.routes());

    server.listen(3000, () => {
        console.log('koa server listen on 3000');
    })
});
