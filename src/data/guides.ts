import type { Guide } from './types'
import { concreteGuides } from './guides/concrete'
import { paintGuides } from './guides/paint'
import { flooringGuides } from './guides/flooring'
import { mulchGuides } from './guides/mulch'
import { gravelGuides } from './guides/gravel'
import { drywallGuides } from './guides/drywall'
import { tileGuides } from './guides/tile'
import { roofingGuides } from './guides/roofing'

// 指南聚合：每个工具一个分文件（src/data/guides/{tool}.ts），在此合并
export const guides: Guide[] = [
  ...concreteGuides,
  ...paintGuides,
  ...flooringGuides,
  ...mulchGuides,
  ...gravelGuides,
  ...drywallGuides,
  ...tileGuides,
  ...roofingGuides,
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
