# BuildCalc 开发日志

> 实时记录所有变更，确保任何开发者可无缝接手。最新记录在最上方。

## 2026-07-20 — 性能优化：首屏 LCP 修复

> Cloudflare Web Analytics 显示首页 LCP 6,152ms，瓶颈为 `hero-construction.jpg`（327KB）。

### 修复措施
- **WebP 压缩**：用 sharp 脚本生成全部 11 张图片的 WebP 版本，Hero 图从 327KB 降到 80KB（24%）
- **格式降级**：首页 Hero、工具卡片、计算器页配图均改为 `<picture><source webp>` 优先，回退 jpg
- **预加载**：`index.html` 增加 `<link rel="preload" as="image" href="/images/hero-construction.webp" type="image/webp">`
- **Preconnect**：对 `static.cloudflareinsights.com` 增加 `dns-prefetch`/`preconnect`
- **图片属性**：Hero 加 `fetchpriority="high"`、`decoding="async"`、显式 `width/height` 避免 CLS；工具卡片加 `loading="lazy"`
- **构建脚本**：新增 `scripts/optimize-images.mjs`，后续新增图片后运行 `node scripts/optimize-images.mjs` 即可批量生成 WebP

### 验证
- 构建后 `dist/images/hero-construction.webp` 80KB
- curl 请求返回 `Content-Type: image/webp`
- 首页 HTML 中已引用 `hero-construction.webp`
- 完整构建 51 URL 通过，vue-tsc 0 错误

### 工具脚本
- `node scripts/optimize-images.mjs`：扫描 `public/images/*.jpg`，生成等名 `.webp`，Hero 1200px、其他 800px

## 2026-07-20 — 产品评测体系 + 商业闭环（v0.5.0）

> 基于竞品调研（inchcalculator.com / calculator.net / thisoldhouse.com / thespruce.com）深化设计，打通 SEO → AdSense → 亚马逊联盟闭环。方案文档：`.trae/documents/buildcalc-enhancement-plan.md`

### 新增：产品评测体系（8 篇 roundup）
- **数据层**：`src/data/reviews/` 8 个文件（concrete/paint/flooring/mulch/gravel/drywall/tile/roofing），每篇含 topPick + 3 picks + 对比表 + buyingGuide + howWeTested + faqs
- **类型**：`src/data/types.ts` 新增 `Product` / `ProductBuyLink` / `Review` / `Comparison` 接口
- **聚合器**：`src/data/reviews.ts`（`reviews` / `getReview` / `getReviewByCalculator`）
- **页面**：
  - `ReviewsPage.vue` 评测列表（/reviews/），ItemList JSON-LD
  - `ReviewDetailPage.vue` 评测详情（/reviews/{slug}/），Article + ItemList(Product) + FAQPage + BreadcrumbList JSON-LD
- **路由**：`/reviews/` + 8 个显式静态路由（SSG 预渲染）

### 新增：组件
- `ProductCard.vue`：评分徽章（Best Overall 等）+ 品牌/名称 + StarRating + pros/cons 双列 + specs 参数表 + 价格 + 多平台购买按钮（Amazon 主按钮橙色）
- `StarRating.vue`：SVG 五角星，金色 #B8860B，支持半星
- `AffiliateDisclosure.vue`：FTC 披露横幅（banner 用于页首 / inline 用于产品卡下方）
- `AuthorByline.vue`：By X · Reviewed by Y · Updated date（E-E-A-T 信任信号）

### 新增：FTC 联盟披露页
- `/affiliate-disclosure/`，legal.ts 新增 `affiliate` 页（7 章节：承诺/参与项目/链接机制/编辑独立/测试方法/广告/联系）
- About 页新增 "Our Editorial Process" 章节（E-E-A-T）
- SiteFooter Legal 列加 "Affiliate Disclosure"，Resources 列加 "Product Reviews"
- SiteHeader 桌面+移动导航加 "Reviews"

### 升级：计算器页（商业闭环核心）
- H1 下方加 AuthorByline（作者/审核者/更新日期）
- FAQ 下方加 "Buying Guide & Top Picks" 评测横幅：徽章 + 标题 + 描述 + Top Pick（星级）+ 价格 + CTA 按钮，点击进评测详情
- 内链闭环：计算器 → 评测 → 亚马逊

### 升级：首页
- 工具网格下方新增 "Top-Rated Picks" 精选评测区块（4 张卡片：徽章 + 标题 + Top Pick + 星级 + 价格）
- eyebrow 带 Award 图标

### SEO
- 评测页 JSON-LD：`Article`（datePublished/dateModified/author）+ `ItemList`（含 `Product` + `AggregateRating` + `Offer`）+ `FAQPage` + `BreadcrumbList`
- 构建 51 个 URL（原 42 + 8 评测 + 1 affiliate-disclosure）

### 验证
- vue-tsc 0 错误、构建成功、浏览器核查：首页评测区块 / 评测列表 8 卡 / 评测详情全元素 / 计算器页署名+评测横幅全部正常

### 待办
- Cloudflare Pages 部署（当前 SITE_URL = buildcalc-tools.pages.dev，如换域名需同步 useSEO.ts / generate-sitemap.mjs / robots.txt）
- Amazon Associates 申请后配置 `VITE_AMAZON_TAG` 环境变量（BuyBox/ProductCard 自动附加联盟 tag）
- 品牌对比页（Comparison 类型已定义，本期未实现页面）

## 2026-07-19 — 实景图片 + 玻璃拟态 + GitHub Pages 上线（v0.4.0）

### 视觉升级
- 11 张 CC 授权实景图（Openverse 聚合 Wikimedia/Flickr，全部商用许可）：`public/images/`，hero 1600px / 工具图 1200px / og-image 1200×630，每张 <400KB
- 署名合规：About 页 "Photo Credits" 章节 + `public/images/credits.json` 机器可读记录
- Hero：施工实景大图 + slate 渐变遮罩 + 玻璃信任徽章（backdrop-filter blur）
- 工具卡片：顶部实景图条带（hover 缩放 + 渐变融入卡片）+ 玻璃箭头按钮
- 指南条目 84px 缩略图；计算器页标题行 210px 实景配图（移动端隐藏）
- 玻璃拟态：吸顶 Header / 下拉菜单 / 计算器切换条全部 backdrop-filter 模糊

### SEO
- useSEO 增加 og:image（1200×630）+ twitter:card=summary_large_image，全站页面生效
- 首页 title 改为关键词型："BuildCalc — Free Construction Calculators: Concrete, Paint, Flooring & More"
- 所有图片含描述性 alt；hero 图 fetchpriority=high，其余 lazy

### GitHub Pages 部署
- **线上地址：https://max179.github.io/BuildCalc/**
- vite base `/BuildCalc/`；新增 `src/utils/asset.ts` 处理 public 资源 base 前缀
- 部署方式：**gh-pages 分支**（`npm run deploy` 一键：构建 → dist 内 init 临时仓库 → force push 到 gh-pages）
- 注意：仓库 Pages 设置的 Source 下拉没有 "GitHub Actions" 选项（新仓库限制），故未用 Actions 自动部署；每次改完需手动 `npm run deploy`
- canonical/OG/sitemap/robots 全部指向 https://max179.github.io/BuildCalc

### 验证
38 测试全绿、tsc 0 错误、构建 42 页；线上浏览器核查：首页/计算器实时计算/sitemap/27 篇指南全部通过，控制台零报错

### 待办
- 绑定自定义域名后可把 Pages Source 切换回尝试 Actions 自动部署
- Search Console 提交 sitemap（需用户 Google 账号）
- AdSense 申请、Amazon Associates tag 配置（VITE_AMAZON_TAG）

---

## 2026-07-19 — 盈利优化：24 篇场景指南 + 联盟购买模块（v0.3.0）

### 背景
依据 AdSense 盈利评估结论行动：① 内容弹药不足（仅 3 篇指南）② 结果页无联盟变现。本轮补齐两块短板。

### 内容扩充（SEO 长尾）
- `src/data/guides.ts` 重构为聚合器，每工具一个分文件 `src/data/guides/{tool}.ts`（支持并行写作不冲突）
- 新增 24 篇场景长尾指南（每工具 3 篇，600-900 词，全部含具体数字演算）：
  - concrete: fence post 袋数 / 10x10 slab / sonotube
  - paint: 12x12 房间 / 外墙 / 橱柜
  - flooring: laminate 箱数 / 楼梯测量 / L 型房间
  - mulch: 花坛袋数 / playground 深度 / mulch vs rock 成本
  - gravel: 车道 / paver 基层 / french drain
  - drywall: 12x12 房间 / 地下室 / 腻子胶带用量
  - tile: 浴室 / backsplash / thinset grout 用量
  - roofing: 每 square 捆数 / 坡度测量 / 2000 sq ft 屋顶
- sitemap 17 → 41 条 URL；动态指南路由自动预渲染（vite.config includedRoutes 已支持）

### 联盟变现（BuyBox）
- 类型：`CalculatorContent.buyLinks?: BuyLink[]`（label/note/url）
- 新组件 `src/components/BuyBox.vue`：计算器卡片下方的购买推荐（3 个商品卡 + affiliate disclosure 声明）
- 8 个内容文件各配 3 条 Amazon 搜索链接（rel="sponsored nofollow noopener"，target _blank）
- **待办：申请 Amazon Associates 通过后，配置环境变量 `VITE_AMAZON_TAG=你的tag-20`，全站链接自动附加联盟 tag（Cloudflare Pages 环境变量或 .env）**

### 验证
38 测试全绿、vue-tsc 0 错误、构建 42 页、浏览器核查：27 指南列表无重复 slug、新指南渲染+CTA 正常、BuyBox 三栏展示+链接合规、控制台零报错

---

## 2026-07-19 — 可用性修复：首屏功能前置 + 计算器互切（v0.2.1）

### 问题
1. 首页 Hero 占满首屏但无功能，8 个计算器（核心功能）被挤出第一屏
2. 计算器页之间无法快速切换，只能返回首页

### 修复
- **首页**：Hero 压缩为紧凑横幅（padding 40px、标题 clamp(1.9-2.9rem)、无副文案/搜索框），搜索框下移到工具区标题行右侧（贴近过滤对象）；工具区 padding-top 48px。1440×900 下 8 张卡片全部在首屏内
- **新增 `src/components/CalcSwitcher.vue`**：计算器页卡片正上方的横向切换条，8 个工具一键互切，当前项深石板高亮，移动端 overflow-x 横滑（隐藏滚动条）
- **`SiteHeader.vue` 导航升级**：Calculators 改为下拉菜单（hover/focus-within 触发，::before 桥接悬停间隙），8 个计算器带图标直达
- 计算器页头部压缩：breadcrumb/标题/intro 全面缩小（图标 64→52px、h1 3.4→2.6rem），calc-section padding 24px，工具本体上移

### 验证
38 测试全绿、构建正常、浏览器核查：切换条互切正常、移动端横滑正常、控制台零报错

---

## 2026-07-19 — 交互与视觉深度改版（v0.2.0）

### 改版方向
简约大气前卫：大模块、大卡片、少描述、重功能。功能前置，描述性文案大幅精简（SEO 文本保留在 DOM，视觉弱化）。

### 交互升级
- 新增 `src/directives/reveal.ts`（全局指令 `v-reveal`）：IntersectionObserver 滚动显现，支持 stagger 延迟（`v-reveal="120"`），已应用于首页/计算器页各模块
- `ResultStat.vue` 数值变化时 260ms 滚动过渡（easeOutCubic，保留千分位/小数/后缀如 %）；主结果数字放大至 clamp(2.4rem, 4vw, 3.2rem)
- `FaqAccordion.vue` 改 grid-template-rows 0fr→1fr 平滑展开（FAQ 内容常驻 DOM，利于 FAQPage schema）
- 首页搜索框支持按 `/` 键快速聚焦（带 kbd 提示）
- 卡片悬停统一语言：橙色描边 + 上浮 + 图标块实心橙 + 右上角 ArrowUpRight 滑入

### 视觉升级
- Hero 巨型化：标题 clamp(3.2rem, 8.5vw, 6.8rem)「Measure right. Buy right.」，搜索框 68px 高，信任区压缩为 3 个小 chips（原独立 trust section 已移除）
- 工具卡片大化：min-height 240px、padding 30px、图标 58px、名称 1.4rem，**移除 tagline 描述**
- 指南区改大条目行（标题 + 圆形箭头按钮，悬停按钮变橙），移除描述文字
- 全局尺度：.section 96px / .section-sm 56px，输入框 min-height 56px，按钮 52px，h1 clamp(2.4rem, 5vw, 3.8rem)
- 计算器页：标题图标 64px、calc-card padding 最大 48px、相关计算器卡片与首页同风格（移除 tagline）

### 验证
38 测试全绿、vue-tsc 0 错误、构建 18 页正常、浏览器全项核查通过（含 `/` 聚焦、滚动动画、FAQ 平滑展开、390px 移动端、控制台零报错）

---

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
- 计算器 UI 复用全局类（.calc-grid/.calc-form/.input-suffix 等，定义于 `src/styles/base.css`），组件内不写布局样式；结果数字用 ResultStat 组件（自带数值滚动动画）
- 新模块入场动画统一用 `v-reveal`（可选 stagger 毫秒数）
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
