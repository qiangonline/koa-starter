import * as Router from 'koa-router';

import { index } from './todos.handler';



let router = new Router();

router.prefix('/todos');
router.get('/', index);

export { router as todosRouter };