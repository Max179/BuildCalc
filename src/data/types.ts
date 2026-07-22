// 计算器与内容的类型定义
export interface FaqItem {
  q: string
  a: string
}

export interface ReferenceTable {
  title: string
  note?: string
  headers: string[]
  rows: string[][]
}

export interface BuyLink {
  label: string // 商品名，如 '80 lb Concrete Mix'
  note?: string // 补充说明，如 '≈ $5–7 per bag'
  url: string // Amazon 搜索链接（配置 VITE_AMAZON_TAG 后自动附加联盟 tag）
}

export interface CalculatorContent {
  slug: string // URL 段，如 'concrete'
  name: string // 'Concrete Calculator'
  material: string // 'concrete'
  tagline: string // 卡片一句话描述
  icon: string // ToolIcon 映射键
  category: string // 分组，如 'Masonry'
  intro: string // H1 下的 1-2 句介绍
  howToTitle: string
  howTo: string[] // 计算方法段落
  formulaNote: string // 公式说明
  referenceTable: ReferenceTable
  faqs: FaqItem[]
  related: string[] // 相关计算器 slug
  guideSlug?: string
  buyLinks?: BuyLink[] // 结果页购买推荐（联盟变现）
}

export interface GuideSection {
  heading?: string
  paragraphs?: string[]
  list?: string[]
}

export interface Guide {
  slug: string
  title: string
  description: string
  date: string // ISO 日期
  calculatorSlug: string // 关联计算器
  sections: GuideSection[]
}

export interface LegalSection {
  heading?: string
  paragraphs: string[]
}

export interface LegalPage {
  page: 'privacy' | 'terms' | 'about' | 'contact' | 'affiliate'
  title: string
  description: string
  sections: LegalSection[]
}

// ===== 产品评测（Product Roundup）类型 =====

/** 单款产品的购买链接（多平台） */
export interface ProductBuyLink {
  retailer: string // 'Amazon' | 'Home Depot' | "Lowe's"
  label: string // 按钮文案，如 'Check Price'
  price: string // '$5.98'
  url: string
}

/** 单款推荐产品 */
export interface Product {
  id: string // 'quikrete-80lb'
  name: string // 'Quikrete 80 lb Concrete Mix'
  brand: string // 'Quikrete'
  price: string // '$5.98'
  priceNote?: string // 'per bag'
  rating: number // 4.7（5 分制，支持 0.5）
  reviewCount?: number // 12847
  badge?: string // 'Best Overall' | 'Best Value' | 'Best for Beginners' | 'Premium Pick' | 'Also Great'
  pros: string[] // 3–5 条
  cons: string[] // 2–3 条
  specs: Record<string, string> // { Coverage: '0.6 cu ft', 'Set Time': '4 hours' }
  buyLinks: ProductBuyLink[] // 多平台购买链接
  bestFor: string // 'fence posts and small slabs'
}

/** 产品合集评测文章（Best X for Y） */
export interface Review {
  slug: string // 'best-concrete-mix'
  title: string // 'Best Concrete Mix for DIY Projects (2026)'
  description: string // meta description
  date: string // ISO 首发日期
  updated: string // ISO 最近更新
  calculatorSlug: string // 关联计算器
  author: string // 'BuildCalc Editorial Team'
  reviewer: string // 审核人
  intro: string[] // 开头段落（选购痛点 + 我们如何测试）
  topPick: Product // 主推产品（大卡片）
  picks: Product[] // 其他推荐（2–4 款）
  comparisonTable: {
    headers: string[]
    rows: string[][]
    note?: string
  }
  buyingGuide: GuideSection[] // What to look for
  howWeTested: string[] // 编辑流程段落
  faqs: FaqItem[]
}

/** 品牌对比文章（X vs Y） */
export interface Comparison {
  slug: string // 'quikrete-vs-sakrete'
  title: string
  description: string
  date: string
  updated: string
  calculatorSlug: string
  author: string
  reviewer: string
  brandA: string // 'Quikrete'
  brandB: string // 'Sakrete'
  verdict: string // 结论段落
  sections: GuideSection[]
  faqs: FaqItem[]
}
