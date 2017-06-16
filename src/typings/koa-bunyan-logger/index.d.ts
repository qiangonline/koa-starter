import * as Koa from 'koa';
import * as Logger from 'bunyan';

export = koaBunyanLogger;

declare function koaBunyanLogger(logger?: Logger.LoggerOptions | Logger): Koa.Middleware;

declare namespace koaBunyanLogger {
    function requestIdContext(opts?: Logger.LoggerOptions): Koa.Middleware;
    function requestLogger(opts?: Logger.LoggerOptions): Koa.Middleware;
    function timeContext(opts?: Logger.LoggerOptions): Koa.Middleware;
}


declare module 'koa' {
    export interface Context {
        log: Logger;
        reqId: string;
        time: (label: string) => void
        timeEnd: (label: string) => void
    }
}