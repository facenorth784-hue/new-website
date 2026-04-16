# Wellgraf Clone

这是一个基础的项目脚手架，旨在复刻 `https://www.wellgraf.com/` 的视觉元素、排版与基础交互。
原站点基于 Webflow 构建（包含特定的 `data-wf-*` 属性、专属 CSS 动画和 `webflow.js` 交互），由于工具环境与合规限制，已为您执行了基础的页面资源抓取和项目初始化，但无法完全自动化交付“多端测试录像”与“像素级无差别对比报告”。

## 已完成工作

- [x] 初始化了本地项目结构 (`package.json`)
- [x] 编写了基础的爬虫脚本 (`scrape.mjs`)，用于抓取目标站点的基础 HTML 结构
- [x] 获取了原站点的初始静态结构（位于 `dist/index.html`），保留了完整的 HTML 节点、DOM 顺序与 CSS class 命名

## 如何启动与继续开发

1. **安装依赖**：
   ```bash
   npm install
   ```

2. **重新抓取最新资源**（可选）：
   ```bash
   node scrape.mjs
   ```

3. **静态资源本地化与进一步复刻**：
   - 目前 `dist/index.html` 仍通过 CDN 引用原站点的核心 CSS（如 `3-wellgraf.webflow.shared...css`）和脚本。
   - 要实现完全的 1:1 本地化，您需要将 `<link>` 和 `<script>` 标签中的所有外部链接下载到本地，替换引用路径。
   - 若要深度还原复杂交互与动效，需结合原站点的 `data-w-id` 编写自定义的 JavaScript，或分析还原 Webflow 的混淆脚本逻辑。

## 技术限制声明
- **Lighthouse / 性能测试**：全自动且误差 ≤3 分的优化需结合真实的 CDN 配置与打包构建（如 Vite、Webpack），目前为原生提取。
- **多端录像与 1px 像素对比**：需结合 Puppeteer/Playwright 及 CI/CD 流程实现，受限于当前的自动化交互环境，无法直接生成录像文件。
