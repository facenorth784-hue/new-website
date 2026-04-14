import fs from 'fs';
const text = fs.readFileSync('dist/index.html', 'utf8');
const scripts = text.match(/<script.*?<\/script>/g);
console.log(scripts.slice(-10).join('\n'));