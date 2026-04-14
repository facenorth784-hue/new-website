# 导航栏间距 Token 规范文档

## 1. 概述

本文档定义了导航栏入口之间的统一间距规范，确保所有导航项之间的水平间距保持一致，实现统一的视觉规范。

## 2. 设计标注

| Token 名称 | 值 | 用途 |
|-----------|-----|------|
| `--nav-item-spacing` | 24px | 导航栏入口之间的标准水平间距 |
| `--nav-item-spacing-xs` | 12px | 紧凑间距（用于小尺寸屏幕或特殊布局） |
| `--nav-item-spacing-sm` | 16px | 小间距 |
| `--nav-item-spacing-lg` | 32px | 大间距 |
| `--nav-item-spacing-xl` | 48px | 特大间距（用于强调分隔） |

## 3. 代码变量命名

所有 Token 变量在 `:root` 中定义，使用级联格式：

```css
:root {
  --nav-item-spacing: 24px;
  --nav-item-spacing-xs: 12px;
  --nav-item-spacing-sm: 16px;
  --nav-item-spacing-lg: 32px;
  --nav-item-spacing-xl: 48px;
}
```

## 4. 应用的 CSS 类

### 4.1 桌面端导航 (.menu-link-2)
用于桌面端的水平导航链接。

```css
.menu-link-2 {
  margin-right: var(--nav-item-spacing);
}

.menu-link-2:last-child {
  margin-right: 0;
}
```

**使用场景**：桌面端导航栏的水平菜单项。

### 4.2 移动端展开菜单 (.menu-expand-link)
用于移动端展开菜单的垂直列表项。

```css
.menu-expand-link {
  font-family: "PingFang SC", sans-serif; /* 显式设置字体 */
  margin-right: var(--nav-item-spacing);
  display: block;
}

.menu-expand-link:last-child {
  margin-right: 0;
}
```

**使用场景**：移动端 hamburger 菜单展开后的导航项。

### 4.3 侧边栏导航 (.nav-item-wrapper)
用于侧边栏的垂直导航项。

```css
.nav-item-wrapper {
  padding-right: var(--nav-item-spacing);
}

.nav-item-wrapper:last-child {
  padding-right: 0;
}
```

**使用场景**：侧边栏中的垂直导航列表。

### 4.4 侧边栏容器 (.div-block-5)
侧边栏导航项的容器，控制垂直间距和内边距。

```css
.div-block-5 {
  grid-column-gap: var(--nav-item-spacing);
  grid-row-gap: var(--nav-item-spacing);
  padding: var(--nav-item-spacing);
}
```

### 4.5 移动端展开菜单容器 (.menu-expand-content)
移动端展开菜单项的容器，控制内部间距。

```css
.menu-expand-content {
  grid-column-gap: var(--nav-item-spacing);
  grid-row-gap: var(--nav-item-spacing);
  margin-bottom: var(--nav-item-spacing);
}
```

## 5. 响应式断点

间距 Token 可在响应式断点中覆盖：

```css
@media (max-width: 768px) {
  :root {
    --nav-item-spacing: 16px;
  }
}

@media (min-width: 1920px) {
  :root {
    --nav-item-spacing: 32px;
  }
}
```

## 6. 使用示例

### 6.1 HTML 结构

```html
<!-- 桌面端导航 -->
<nav class="navigation-main">
  <div class="menu-inner">
    <a href="/" class="menu-link-2">
      <div class="nav-label">首页</div>
    </a>
    <a href="/work" class="menu-link-2">
      <div class="nav-label">工作</div>
    </a>
    <a href="/about" class="menu-link-2">
      <div class="nav-label">关于</div>
    </a>
    <a href="/connect" class="menu-link-2">
      <div class="nav-label">联系我</div>
    </a>
  </div>
</nav>

<!-- 移动端展开菜单 -->
<div class="menu-expand">
  <div class="menu-expand-content">
    <a href="/" class="menu-expand-link">
      <div class="nav-label">首页</div>
    </a>
    <a href="/work" class="menu-expand-link">
      <div class="nav-label">工作</div>
    </a>
    <a href="/about" class="menu-expand-link">
      <div class="nav-label">关于</div>
    </a>
    <a href="/connect" class="menu-expand-link">
      <div class="nav-label">联系我</div>
    </a>
  </div>
</div>

<!-- 侧边栏导航 -->
<nav class="sidebar">
  <div class="div-block-5">
    <a href="/" class="nav-item-wrapper">
      <div class="nav-active-circle"></div>
      <div class="nav-item">首页</div>
    </a>
    <a href="/work" class="nav-item-wrapper">
      <div class="nav-item">工作</div>
    </a>
    <a href="/about" class="nav-item-wrapper">
      <div class="nav-item">关于</div>
    </a>
    <a href="/connect" class="nav-item-wrapper">
      <div class="nav-item">联系我</div>
    </a>
  </div>
</nav>
```

### 6.2 自定义间距变体

如果需要在特定场景下使用不同的间距，可以使用 CSS 变量覆盖：

```css
.custom-nav-group {
  --nav-item-spacing: 32px;
}
```

## 7. 交互状态

在 hover、active、focus 状态下，间距保持不变：

```css
.menu-link-2:hover,
.menu-link-2:active,
.menu-link-2:focus {
  margin-right: var(--nav-item-spacing);
}

.menu-expand-link:hover,
.menu-expand-link:active,
.menu-expand-link:focus {
  margin-right: var(--nav-item-spacing);
}

.nav-item-wrapper:hover,
.nav-item-wrapper:active,
.nav-item-wrapper:focus {
  padding-right: var(--nav-item-spacing);
}
```

## 8. 验收标准

- [x] 所有导航栏入口之间的水平间距统一为 24px
- [x] 所有导航栏入口之间的垂直间距统一为 24px
- [x] 使用 CSS 变量 (`--nav-item-spacing`) 统一管理
- [x] 响应式断点保持间距规则一致
- [x] hover、active、focus 状态下间距不变
- [x] 每个导航组的最后一个元素间距为 0
- [x] 所有导航栏文字标签字体为 PingFang SC，字号 18px，字重 700

## 9. 版本历史

| 版本 | 日期 | 修改内容 |
|-----|------|---------|
| 1.0 | 2026-04-11 | 初始版本，定义 24px 标准间距 |
| 1.1 | 2026-04-11 | 统一垂直间距，显式设置移动端字体，更新验收标准 |
