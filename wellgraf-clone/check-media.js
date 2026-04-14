import fs from 'fs';
import path from 'path';

const mediaDir = path.join('dist', 'media');
const files = fs.readdirSync(mediaDir);
console.log('Files in media:');
console.log(files.slice(0, 5));

const html = fs.readFileSync('dist/index.html', 'utf8');
const sources = html.match(/<source src="([^"]+)"/g);
console.log('Sources in HTML:');
console.log(sources?.slice(0, 5));
