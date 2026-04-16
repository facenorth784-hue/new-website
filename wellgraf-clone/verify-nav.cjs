const fs = require('fs');
const path = require('fs');
const cheerio = require('cheerio');

const files = [
  'e:/trea/NEW WEBSITE/刘景源-clone/dist/index.html',
  'e:/trea/NEW WEBSITE/刘景源-clone/dist/roots.html'
];

function getNavInfo(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(content);
  
  const sidebar = $('.sidebar').html().replace(/\s+/g, ' ').trim();
  const topNav = $('.navigation-main').html().replace(/\s+/g, ' ').trim();
  
  return {
    sidebar,
    topNav
  };
}

console.log('--- Navigation Consistency Check ---');

const indexNav = getNavInfo(files[0]);
const rootsNav = getNavInfo(files[1]);

// Compare structures (ignoring attributes like class/href/aria-current for a base structure check if needed, 
// but user wants pixel-perfect, so even classes should mostly match except active state)

function cleanForComparison(html) {
  // Remove page-specific attributes
  return html
    .replace(/w--current/g, '')
    .replace(/aria-current="page"/g, '')
    .replace(/active/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const indexSidebarClean = cleanForComparison(indexNav.sidebar);
const rootsSidebarClean = cleanForComparison(rootsNav.sidebar);

if (indexSidebarClean === rootsSidebarClean) {
  console.log('鉁?Sidebar structure matches (ignoring active states).');
} else {
  console.log('鉂?Sidebar structure mismatch!');
  // Optional: output diff
}

const indexTopNavClean = cleanForComparison(indexNav.topNav);
const rootsTopNavClean = cleanForComparison(rootsNav.topNav);

if (indexTopNavClean === rootsTopNavClean) {
  console.log('鉁?Top Navigation structure matches (ignoring active states).');
} else {
  console.log('鉂?Top Navigation structure mismatch!');
}

// Check CSS inclusion
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('css/navigation-component.css')) {
    console.log(`鉁?${file} includes navigation-component.css`);
  } else {
    console.log(`鉂?${file} missing navigation-component.css`);
  }
});

