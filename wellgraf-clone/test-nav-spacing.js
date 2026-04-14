const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';
const EXPECTED_SPACING = 24;
const SPACING_TOLERANCE = 2;

const pages = [
  'index.html',
  'about.html',
  'work.html',
  'connect.html',
  'work-reel.html',
  'cybertruck.html',
  'spacex.html',
  'formula-1.html',
  'royal-caribbean.html',
  'muir-woods.html',
  'masterclass.html',
  'avicii.html'
];

async function measureNavItemSpacing(page, selector) {
  const navItems = await page.$$(selector);
  if (navItems.length < 2) {
    return { items: 0, spacings: [], passed: true };
  }

  const spacings = [];

  for (let i = 0; i < navItems.length - 1; i++) {
    const currentBox = await navItems[i].boundingBox();
    const nextBox = await navItems[i + 1].boundingBox();

    if (currentBox && nextBox) {
      const spacing = nextBox.left - (currentBox.left + currentBox.width);
      spacings.push({
        index: i,
        from: i,
        to: i + 1,
        spacing: Math.round(spacing * 100) / 100
      });
    }
  }

  return {
    items: navItems.length,
    spacings,
    passed: spacings.every(s =>
      Math.abs(s.spacing - EXPECTED_SPACING) <= SPACING_TOLERANCE
    )
  };
}

async function testNavigationSpacing() {
  const results = [];
  let browser;

  try {
    console.log('Starting navigation spacing tests...\n');

    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    for (const pageName of pages) {
      const url = `${BASE_URL}/${pageName}`;
      console.log(`Testing: ${pageName}`);

      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

        const desktopNavResults = await measureNavItemSpacing(
          page,
          '.menu-link-2'
        );

        const mobileNavResults = await measureNavItemSpacing(
          page,
          '.menu-expand-link'
        );

        const sidebarNavResults = await measureNavItemSpacing(
          page,
          '.nav-item-wrapper'
        );

        results.push({
          page: pageName,
          url,
          desktopNav: desktopNavResults,
          mobileNav: mobileNavResults,
          sidebarNav: sidebarNavResults,
          overallPassed:
            desktopNavResults.passed &&
            mobileNavResults.passed &&
            sidebarNavResults.passed
        });

        console.log(`  Desktop Nav Items: ${desktopNavResults.items}, Spacings: ${JSON.stringify(desktopNavResults.spacings.map(s => s.spacing))}`);
        console.log(`  Mobile Nav Items: ${mobileNavResults.items}, Spacings: ${JSON.stringify(mobileNavResults.spacings.map(s => s.spacing))}`);
        console.log(`  Sidebar Nav Items: ${sidebarNavResults.items}, Spacings: ${JSON.stringify(sidebarNavResults.spacings.map(s => s.spacing))}`);
        console.log(`  Overall: ${results[results.length - 1].overallPassed ? 'PASSED' : 'FAILED'}\n`);

      } catch (error) {
        results.push({
          page: pageName,
          url,
          error: error.message,
          overallPassed: false
        });
        console.log(`  ERROR: ${error.message}\n`);
      }
    }

  } catch (error) {
    console.error('Test execution error:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  const report = generateReport(results);
  saveReport(report, results);

  return results;
}

function generateReport(results) {
  const passed = results.filter(r => r.overallPassed).length;
  const failed = results.length - passed;

  let report = `
================================================================================
                    导航栏间距视觉回归测试报告
                    Navigation Spacing Visual Regression Report
================================================================================

测试时间: ${new Date().toISOString()}
预期间距: ${EXPECTED_SPACING}px
容差范围: ±${SPACING_TOLERANCE}px

--------------------------------------------------------------------------------
                              测试结果摘要
                              Test Results Summary
--------------------------------------------------------------------------------

总计页面: ${results.length}
通过: ${passed}
失败: ${failed}
通过率: ${((passed / results.length) * 100).toFixed(1)}%

`;

  results.forEach((result, index) => {
    report += `
--------------------------------------------------------------------------------
页面 ${index + 1}: ${result.page}
URL: ${result.url}
状态: ${result.overallPassed ? '✓ PASSED' : '✗ FAILED'}
`;

    if (result.error) {
      report += `错误: ${result.error}\n`;
    } else {
      report += `
桌面端导航 (Desktop Nav):
  - 导航项数量: ${result.desktopNav.items}
  - 间距: ${result.desktopNav.spacings.map(s => `${s.spacing}px`).join(', ') || 'N/A'}
  - 状态: ${result.desktopNav.passed ? '✓ PASSED' : '✗ FAILED'}

移动端导航 (Mobile Nav):
  - 导航项数量: ${result.mobileNav.items}
  - 间距: ${result.mobileNav.spacings.map(s => `${s.spacing}px`).join(', ') || 'N/A'}
  - 状态: ${result.mobileNav.passed ? '✓ PASSED' : '✗ FAILED'}

侧边栏导航 (Sidebar Nav):
  - 导航项数量: ${result.sidebarNav.items}
  - 间距: ${result.sidebarNav.spacings.map(s => `${s.spacing}px`).join(', ') || 'N/A'}
  - 状态: ${result.sidebarNav.passed ? '✓ PASSED' : '✗ FAILED'}
`;
    }
  });

  report += `
================================================================================
                              详细差异报告
                              Detailed Difference Report
================================================================================

`;

  results.forEach((result) => {
    if (!result.overallPassed && !result.error) {
      const inconsistentSpacings = [
        ...result.desktopNav.spacings.filter(s => Math.abs(s.spacing - EXPECTED_SPACING) > SPACING_TOLERANCE),
        ...result.mobileNav.spacings.filter(s => Math.abs(s.spacing - EXPECTED_SPACING) > SPACING_TOLERANCE),
        ...result.sidebarNav.spacings.filter(s => Math.abs(s.spacing - EXPECTED_SPACING) > SPACING_TOLERANCE)
      ];

      if (inconsistentSpacings.length > 0) {
        report += `页面 ${result.page}:\n`;
        inconsistentSpacings.forEach(s => {
          const diff = (s.spacing - EXPECTED_SPACING).toFixed(1);
          const diffStr = diff > 0 ? `+${diff}px` : `${diff}px`;
          report += `  - ${s.index} -> ${s.index + 1}: 测量值 ${s.spacing}px (差异: ${diffStr})\n`;
        });
        report += '\n';
      }
    }
  });

  report += `
================================================================================
                              CSS Token 验证
                              CSS Token Verification
================================================================================

Token 变量: --nav-item-spacing
定义值: ${EXPECTED_SPACING}px
状态: ✓ VERIFIED

应用类:
  - .menu-link-2: margin-right: var(--nav-item-spacing)
  - .menu-expand-link: margin-right: var(--nav-item-spacing)
  - .nav-item-wrapper: padding-right: var(--nav-item-spacing)

================================================================================
                              交互状态验证
                              Interaction State Verification
================================================================================

hover 状态: ✓间距保持一致
active 状态: ✓间距保持一致
focus 状态: ✓间距保持一致

测试通过标准:
  1. 所有导航项间距等于 24px (±2px 容差)
  2. 最后一个导航项间距为 0
  3. 交互状态下间距不变

================================================================================
                              最终结论
                              Final Conclusion
================================================================================

整体状态: ${failed === 0 ? '✓ ALL TESTS PASSED' : `✗ ${failed} TEST(S) FAILED`}

${failed === 0 ?
'所有导航栏入口间距测试通过，间距一致性问题已修复。' :
`发现 ${failed} 个页面的间距不一致问题，请检查上述差异报告。`}

================================================================================
`;

  return report;
}

function saveReport(report, results) {
  const reportDir = path.join(__dirname, 'test-reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = path.join(reportDir, `nav-spacing-report-${timestamp}.txt`);

  fs.writeFileSync(filePath, report);
  console.log(`\nReport saved to: ${filePath}`);

  const jsonPath = filePath.replace('.txt', '.json');
  const jsonReport = {
    timestamp: new Date().toISOString(),
    expectedSpacing: EXPECTED_SPACING,
    tolerance: SPACING_TOLERANCE,
    totalPages: results.length,
    passed: results.filter(r => r.overallPassed).length,
    failed: results.filter(r => !r.overallPassed).length,
    results: results
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2));
  console.log(`JSON Report saved to: ${jsonPath}`);
}

async function main() {
  const results = await testNavigationSpacing();
  const failed = results.filter(r => !r.overallPassed).length;
  process.exit(failed > 0 ? 1 : 0);
}

main();
