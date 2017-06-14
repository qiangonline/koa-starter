
import * as Router from 'koa-router';
import * as koaBody from 'koa-body';
import { upload } from './upload.handler';

let router = new Router();

router
    .get('/upload', async (ctx) => {
        await ctx.render('components/upload/index', { title: 'upload' });
    })
    .post('/upload', koaBody({ multipart: true }), upload);

export { router as uploadRouter };