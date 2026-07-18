import { toDecimalFeet } from './units'

export interface TileInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  tileLengthIn: number // 单片瓷砖长（英寸）
  tileWidthIn: number // 单片瓷砖宽（英寸）
  wastePct: number
}

export interface TileResult {
  area: number // 铺贴面积（sq ft）
  tileArea: number // 单片瓷砖面积（sq ft）
  tiles: number
  wastePct: number
}

/** 无效输入（任一维度 ≤ 0）时返回 null，由 UI 显示占位 */
export function calcTile(i: TileInput): TileResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)
  const tileArea = (Math.max(0, i.tileLengthIn) * Math.max(0, i.tileWidthIn)) / 144

  if (length <= 0 || width <= 0 || tileArea <= 0) return null

  const area = length * width
  const wastePct = Math.max(0, i.wastePct)

  return {
    area,
    tileArea,
    tiles: Math.ceil((area * (1 + wastePct / 100)) / tileArea),
    wastePct,
  }
}
