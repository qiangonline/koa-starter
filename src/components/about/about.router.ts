import * as Router from 'koa-router';

import { index } from './about.handler';



let router = new Router();

router.get('/about', index);

export { router as aboutRouter };