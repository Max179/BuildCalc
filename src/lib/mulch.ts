import { toDecimalFeet } from './units'

export interface MulchInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  depthIn: number
  wastePct: number
}

export interface MulchResult {
  cubicFeet: number
  cubicYards: number
  bags2cuft: number // 2 cu ft 标准袋数（含损耗）
  depthIn: number // 回显用
}

const CUFT_PER_CUYD = 27
const BAG_CUFT = 2 // 标准袋装覆盖物 2 cu ft

/** 无效输入（床面尺寸或厚度为 0）时返回 null，由 UI 显示占位 */
export function calcMulch(i: MulchInput): MulchResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)
  const depthFt = Math.max(0, i.depthIn) / 12

  if (length <= 0 || width <= 0 || depthFt <= 0) return null

  const cubicFeet = length * width * depthFt
  const withWaste = cubicFeet * (1 + Math.max(0, i.wastePct) / 100)

  return {
    cubicFeet,
    cubicYards: cubicFeet / CUFT_PER_CUYD,
    bags2cuft: Math.ceil(withWaste / BAG_CUFT),
    depthIn: Math.max(0, i.depthIn),
  }
}
