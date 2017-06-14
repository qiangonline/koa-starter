import { join, extname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { IRouterContext } from 'koa-router';

export async function upload(ctx: IRouterContext): Promise<any> {
    let file = ctx.request.body.files.file;
    let readStream = createReadStream(file.path);
    let filePath = join(process.cwd(), './uploaded', `./${Math.random().toString(36).slice(2)}${extname(file.name)}`)
    let writeStream = createWriteStream(filePath);
    await new Promise((resolve) => {
        readStream.pipe(writeStream).on('finish', () => {
            resolve();
        });
    }).then(() => {
        ctx.body = filePath;
    });
}