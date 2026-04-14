import scrape from 'website-scraper';

console.log('scrape function:', typeof scrape);
console.log('scrape properties:', Object.keys(scrape));

try {
  const p = scrape({ urls: ['https://example.com/'], directory: './test-dist' });
  console.log('p is Promise?', p instanceof Promise);
  p.then(() => console.log('Resolved!'))
   .catch(e => console.error('Rejected!', e));
} catch (e) {
  console.error('Sync error:', e);
}
