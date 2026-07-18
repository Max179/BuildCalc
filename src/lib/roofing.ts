import { toDecimalFeet } from './units'

export interface RoofingInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  pitchMultiplier: number // 坡度系数：footprint 面积 → 坡面面积
  wastePct: number
}

export interface RoofingResult {
  roofArea: number // 坡面面积（sq ft）
  squares: number // 1 square = 100 sq ft
  bundles: number // 3 捆 / square，含损耗
  underlaymentRolls: number // 每卷按 400 sq ft 计
}

const SQFT_PER_SQUARE = 100
const BUNDLES_PER_SQUARE = 3
const ROLL_COVERAGE = 400 // sq ft / 卷

/** 无效输入（任一维度 ≤ 0）时返回 null，由 UI 显示占位 */
export function calcRoofing(i: RoofingInput): RoofingResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)
  const pitch = Math.max(0, i.pitchMultiplier)

  if (length <= 0 || width <= 0 || pitch <= 0) return null

  const roofArea = length * width * pitch
  const squares = roofArea / SQFT_PER_SQUARE
  const wastePct = Math.max(0, i.wastePct)

  return {
    roofArea,
    squares,
    bundles: Math.ceil(squares * BUNDLES_PER_SQUARE * (1 + wastePct / 100)),
    underlaymentRolls: Math.ceil(roofArea / ROLL_COVERAGE),
  }
}
