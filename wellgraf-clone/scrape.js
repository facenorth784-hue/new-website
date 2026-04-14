import scrape from 'website-scraper';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

// Clear the directory if it exists, as website-scraper requires an empty directory
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
}

const options = {
  urls: ['https://www.wellgraf.com/'],
  directory: distPath,
  recursive: true,
  maxRecursiveDepth: 1, // Get homepage and linked assets
  // Use default filenameGenerator to prevent EISDIR errors (e.g., file vs folder conflict)
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Language': 'en-US,en;q=0.9',
    }
  }
};

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});
process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

(async () => {
  try {
    console.log('Starting full scrape of https://www.wellgraf.com/ ...');
    const result = await scrape(options);
    console.log('Scraping successful! Main pages downloaded:', result.length);
  } catch (err) {
    console.error('Scraping failed:', err);
  }
})();
