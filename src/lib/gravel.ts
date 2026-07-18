import { toDecimalFeet } from './units'

export interface GravelInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  depthIn: number
  wastePct: number
}

export interface GravelResult {
  cubicFeet: number
  cubicYards: number
  tons: number // 按 1.4 吨/立方码折算
  bags50lb: number // 50 lb 袋数（含损耗）
}

const CUFT_PER_CUYD = 27
const TONS_PER_CUYD = 1.4 // 碎石典型密度 ~2,800 lb/yd³
const BAG_CUFT = 0.5 // 50 lb 袋 ≈ 0.5 cu ft

/** 无效输入（区域尺寸或厚度为 0）时返回 null，由 UI 显示占位 */
export function calcGravel(i: GravelInput): GravelResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)
  const depthFt = Math.max(0, i.depthIn) / 12

  if (length <= 0 || width <= 0 || depthFt <= 0) return null

  const cubicFeet = length * width * depthFt
  const cubicYards = cubicFeet / CUFT_PER_CUYD
  const withWaste = cubicFeet * (1 + Math.max(0, i.wastePct) / 100)

  return {
    cubicFeet,
    cubicYards,
    tons: cubicYards * TONS_PER_CUYD,
    bags50lb: Math.ceil(withWaste / BAG_CUFT),
  }
}
