import * as Koa from 'koa';
import * as compose from 'koa-compose';

import { indexRouter } from './index/index.router';
import { aboutRouter } from './about/about.router';
import { todosRouter } from './todos/todos.router';
import { uploadRouter } from './upload/upload.router';

export function route() {
    let middlewares: Koa.Middleware[] = [];
    [indexRouter, aboutRouter, todosRouter, uploadRouter].forEach((router) => {
        middlewares.push(router.routes());
        middlewares.push(router.allowedMethods())
    });
    return compose(middlewares);
}