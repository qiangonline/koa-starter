import { IRouterContext } from 'koa-router';

/**
 * todos api
 */
export async function index(ctx: IRouterContext): Promise<any> {
    ctx.body = 'todos!';
}