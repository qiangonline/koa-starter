import * as Koa from 'koa';
import * as koaBunyanLogger from 'koa-bunyan-logger';
import * as serve from 'koa-static';

import * as hbs from 'koa-hbs';

import { config } from './core/config';

import { route } from './components/route';

const app = new Koa();

app
    .use(koaBunyanLogger())
    .use(koaBunyanLogger.requestIdContext())
    .use(koaBunyanLogger.timeContext())
    .use((ctx, next) => {
        ctx.set('X-Request-Id', ctx.reqId);
        return next();
    })
    .use(async (ctx, next) => {
        let st = new Date();
        await next();
        let et = new Date();
        ctx.set('X-Reponse-Time', (et.getTime() - st.getTime()) + 'ms');
    })
    .use(async (ctx, next) => {
        try {
            await next();
        } catch (error) {
            ctx.log.error(error);
            ctx.status = error.status || 500;
            ctx.body = error.message || 'unknown error!';
        }
    })
    .use(hbs.middleware({
        viewPath: __dirname,
        layoutsPath: __dirname + '/views/layouts',
        defaultLayout: 'default',
        partialsPath: __dirname + '/views/partials',
        disableCache: config.debug
    }))
    .use(route())

    .listen(config.port, () => {
        console.log(`app started.`);
    });
