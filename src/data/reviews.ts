import type { Review } from './types'
import { concreteReview } from './reviews/concrete'
import { paintReview } from './reviews/paint'
import { flooringReview } from './reviews/flooring'
import { mulchReview } from './reviews/mulch'
import { gravelReview } from './reviews/gravel'
import { drywallReview } from './reviews/drywall'
import { tileReview } from './reviews/tile'
import { roofingReview } from './reviews/roofing'

// 产品评测聚合：每个工具一篇 roundup（Best X for Y），承接高商业意图长尾词
export const reviews: Review[] = [
  concreteReview,
  paintReview,
  flooringReview,
  mulchReview,
  gravelReview,
  drywallReview,
  tileReview,
  roofingReview,
]

const bySlug = new Map(reviews.map((r) => [r.slug, r]))
const byCalculator = new Map(reviews.map((r) => [r.calculatorSlug, r]))

export function getReview(slug: string): Review | undefined {
  return bySlug.get(slug)
}

/** 按计算器 slug 查关联评测（计算器页内链用） */
export function getReviewByCalculator(calculatorSlug: string): Review | undefined {
  return byCalculator.get(calculatorSlug)
}
