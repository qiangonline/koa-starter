import { join } from 'path';
import { readFileSync } from 'fs';

const env = process.env.NODE_ENV || 'development';
const config: {
    debug: boolean,
    port: number
} = JSON.parse(readFileSync(join(__dirname, `../../config/config.${env}.json`), 'utf-8'));

export { config };