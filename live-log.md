# BuildCalc 开发日志

> 实时记录所有变更，确保任何开发者可无缝接手。最新记录在最上方。

## 2026-07-19 — 项目首期建成（v0.1.0）

### 本站定位
面向美国 DIY 房主/小型承包商的装修材料用量计算工具站，变现路径：AdSense → Mediavine 阶梯 + 建材联盟营销。

### 技术栈
- Vue 3 + TypeScript + Vite 5 + vite-ssg（SSG 预渲染 18 个静态页）
- 原生 CSS 变量设计系统（Refined Utilitarian 美式工装编辑风）：Fraunces 标题 / Public Sans 正文 / IBM Plex Mono 数字
- Vitest 单元测试（9 个测试文件、38 个用例全绿）
- 部署目标：Cloudflare Pages（构建命令 `npm run build`，输出 `dist`）

### 已完成
- **8 个计算器**（concrete / paint / flooring / mulch / gravel / drywall / tile / roofing）：每个 = 内容数据（`src/data/content/`）+ 纯函数库（`src/lib/`）+ 单元测试 + 工具组件（`src/calculators/`），ConcreteCalc 为参考实现
- **页面**：首页（Hero 搜索过滤 + 工具网格 + 信任区 + 精选指南）、计算器页（公式/参考表/FAQ 手风琴/相关互链）、指南列表 + 3 篇指南详情、4 个合规页（Privacy/Terms/About/Contact）、404
- **SEO**：useSEO composable 注入 title/description/canonical/OG/JSON-LD（WebApplication + FAQPage + BreadcrumbList + Article）；`scripts/generate-sitemap.mjs` 构建后扫描 dist 生成 sitemap.xml（17 条 URL）+ 派生 404.html；public/robots.txt
- **广告**：AdSlot 组件，未配置 `VITE_ADSENSE_CLIENT` 时渲染中性占位，配置后自动切换真实 AdSense 单元
- **bug 修复**：`fmt()` 整数吞零（7200→72）；`calcConcrete` 浮点边界致袋数多算 1（48×1.1÷0.6=88.000…01），引入 ceilSafe
- **验证**：38 测试全绿、vue-tsc 0 错误、浏览器全站人工核查通过、控制台零报错

### 关键约定（接手必读）
- 新增计算器三步走：`src/data/content/{slug}.ts` 内容 → `src/lib/{slug}.ts` 纯函数 + 测试 → `src/calculators/{Name}Calc.vue` 组件，然后在 `src/data/calculators.ts` 与 `src/calculators/index.ts` 注册（路由自动生成）
- 计算器 UI 复用全局类（.calc-grid/.calc-form/.input-suffix 等，定义于 `src/styles/base.css`），组件内不写布局样式；结果数字用 ResultStat 组件
- 图标键从 `src/components/ToolIcon.vue` 的 iconMap 中选
- 全站文案英文，仅代码注释可中文
- 站点 URL 常量在 `src/composables/useSEO.ts`（SITE_URL）与 `scripts/generate-sitemap.mjs`、`public/robots.txt` 三处，正式域名确定后需同步替换

### 待办（上线前）
- [ ] 注册正式域名，替换 SITE_URL 三处占位（buildcalc.pages.dev）
- [ ] 部署 Cloudflare Pages，绑定域名
- [ ] AdSense 申请（合规页已就绪）→ 审核通过后配置 `VITE_ADSENSE_CLIENT` + 广告位 slot ID
- [ ] Search Console 提交 sitemap.xml
- [ ] Cloudflare Web Analytics 接入
- [ ] og 分享图（当前仅 favicon）
- [ ] 扩容：每计算器补 1 篇指南（首发仅 3 篇）；后续站点复制（财务/汽车计算器）
