import type { CalculatorContent } from './types'
import { concrete } from './content/concrete'
import { paint } from './content/paint'
import { flooring } from './content/flooring'
import { mulch } from './content/mulch'
import { gravel } from './content/gravel'
import { drywall } from './content/drywall'
import { tile } from './content/tile'
import { roofing } from './content/roofing'

// 首页卡片展示顺序（按关键词分数与开发成本排序）
export const calculatorMetas: CalculatorContent[] = [
  concrete,
  paint,
  flooring,
  mulch,
  gravel,
  drywall,
  tile,
  roofing,
]

const bySlug = new Map(calculatorMetas.map((c) => [c.slug, c]))

export function getCalculator(slug: string): CalculatorContent | undefined {
  return bySlug.get(slug)
}

export function getRelated(slugs: string[]): CalculatorContent[] {
  return slugs
    .map((s) => bySlug.get(s))
    .filter((c): c is CalculatorContent => Boolean(c))
}
