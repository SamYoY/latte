const KoaRouter = require('koa-router');

const router = KoaRouter();

// router.get('/*', async (ctx: any, next: any) => {
//     await ctx.render('index', {
//         title: '登录',
//         body: 'login page'
//     });
//     next();
// });
const initPath = new RegExp('\/*');
router.get(initPath, async (ctx: any, next: any) => {
    console.log('login router');
    await ctx.render('index', {
        title: 'k login',
        body: 'k login page'
    });
    next();
});

router.get('/k/login', (ctx: any, next: any) => {
    ctx.body = 'login ok';
    next();
});

module.exports = router;