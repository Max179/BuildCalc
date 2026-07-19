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
  page: 'privacy' | 'terms' | 'about' | 'contact'
  title: string
  description: string
  sections: LegalSection[]
}
