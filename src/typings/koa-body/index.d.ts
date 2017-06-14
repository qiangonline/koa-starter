import * as Koa from 'koa';



export as namespace requestbody;

export = requestbody;

declare function requestbody(options: requestbody.Options): Koa.Middleware;

declare namespace requestbody {
    export class Options {
        onError?: Function | boolean;
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

