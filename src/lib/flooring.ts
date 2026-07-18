import { toDecimalFeet } from './units'

export interface FlooringInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  wastePct: number
  boxCoverage: number // 每箱覆盖 sq ft
}

export interface FlooringResult {
  roomArea: number // 房间净面积 sq ft
  needed: number // 含损耗的购买量 sq ft
  boxes: number
  boxCoverage: number // 实际使用的箱覆盖率（回显）
}

const DEFAULT_BOX_COVERAGE = 20 // sq ft，强化/乙烯基板常见规格

/** 无效输入（房间尺寸为 0）时返回 null，由 UI 显示占位 */
export function calcFlooring(i: FlooringInput): FlooringResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)

  if (length <= 0 || width <= 0) return null

  const roomArea = length * width
  const needed = roomArea * (1 + Math.max(0, i.wastePct) / 100)
  // 箱覆盖率为空/为 0 时按常见默认 20 sq ft 计，避免除零
  const boxCoverage = i.boxCoverage > 0 ? i.boxCoverage : DEFAULT_BOX_COVERAGE

  return {
    roomArea,
    needed,
    boxes: Math.ceil(needed / boxCoverage),
    boxCoverage,
  }
}
