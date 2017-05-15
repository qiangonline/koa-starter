import * as Router from 'koa-router';



let router = new Router();

router.get('/', async (ctx) => {
    ctx.log.info('get index');
    await ctx.render('components/index/index', { title: 'home' });
});

export { router as indexRouter };