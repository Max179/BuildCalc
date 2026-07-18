import { toDecimalFeet } from './units'

export interface ConcreteInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  thicknessIn: number
  wastePct: number
}

export interface ConcreteResult {
  cubicFeet: number
  cubicYards: number
  bags80: number
  bags60: number
  weightLb: number
}

const CUFT_PER_CUYD = 27
const YIELD_80LB = 0.6 // cu ft
const YIELD_60LB = 0.45 // cu ft
const LB_PER_CUFT = 150

/** 浮点安全向上取整：消除 48×1.1÷0.6 = 88.000…01 这类误差导致多算一袋 */
function ceilSafe(x: number): number {
  return Math.ceil(Number(x.toFixed(9)))
}

/** 无效输入（任一维度为 0）时返回 null，由 UI 显示占位 */
export function calcConcrete(i: ConcreteInput): ConcreteResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)
  const thicknessFt = Math.max(0, i.thicknessIn) / 12

  if (length <= 0 || width <= 0 || thicknessFt <= 0) return null

  const cubicFeet = length * width * thicknessFt
  const withWaste = cubicFeet * (1 + Math.max(0, i.wastePct) / 100)

  return {
    cubicFeet,
    cubicYards: cubicFeet / CUFT_PER_CUYD,
    bags80: ceilSafe(withWaste / YIELD_80LB),
    bags60: ceilSafe(withWaste / YIELD_60LB),
    weightLb: cubicFeet * LB_PER_CUFT,
  }
}
