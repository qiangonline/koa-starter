import { IRouterContext } from 'koa-router';

/**
 * about pages
 */
export async function index(ctx: IRouterContext): Promise<any> {
    await ctx.render('components/about/index', { title: 'about' });
}