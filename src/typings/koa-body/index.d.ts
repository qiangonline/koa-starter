import * as Koa from 'koa';

export = requestbody;

declare function requestbody(options?: requestbody.Options): Koa.Middleware;

declare namespace requestbody {
    export class Options {
        onError?: Function;
        strict?: boolean;
        multipart?: boolean;
        formidable?: {};
        encoding?: string;
    }
}


declare module 'koa' {
    export interface Request {
        body: any
    }
}

