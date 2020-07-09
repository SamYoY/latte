const KoaRouter = require('koa-router');

const router = KoaRouter();

router.post('/login', (ctx: any, next: any) => {
    ctx.body = 'login ok';
    next();
});

module.exports = router;