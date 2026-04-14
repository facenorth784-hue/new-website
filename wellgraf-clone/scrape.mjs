import fs from 'fs';
import path from 'path';

(async () => {
  const response = await fetch('https://www.wellgraf.com/');
  const html = await response.text();
  
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  fs.writeFileSync(path.join('dist', 'index.html'), html);
  console.log('Successfully saved index.html');
})();
