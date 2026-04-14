import fs from 'fs';
const html = fs.readFileSync('dist/index.html', 'utf8');
const pretty = html.replace(/></g, '>\n<');
fs.writeFileSync('dist/index.html', pretty);
