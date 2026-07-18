import { toDecimalFeet } from './units'

export interface PaintInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  heightFt: number
  doors: number
  windows: number
  coats: number
}

export interface PaintResult {
  wallArea: number // 扣除门窗后的净墙面 sq ft
  coats: number
  gallons: number
  quarts: number // 仅供展示 = gallons × 4
  coverageRate: number // sq ft / gal
}

const COVERAGE_PER_GAL = 350 // sq ft，室内漆保守取值
const DOOR_AREA = 21 // 标准室内门 3×7 ft
const WINDOW_AREA = 15 // 标准窗 3×5 ft

/** 无效输入（房间尺寸或墙高为 0）时返回 null，由 UI 显示占位 */
export function calcPaint(i: PaintInput): PaintResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)
  const height = Math.max(0, i.heightFt)

  if (length <= 0 || width <= 0 || height <= 0) return null

  const perimeter = 2 * (length + width)
  const openings = Math.max(0, i.doors) * DOOR_AREA + Math.max(0, i.windows) * WINDOW_AREA
  const wallArea = Math.max(0, perimeter * height - openings)
  const coats = Math.min(3, Math.max(1, Math.round(i.coats)))
  const gallons = Math.ceil((wallArea * coats) / COVERAGE_PER_GAL)

  return {
    wallArea,
    coats,
    gallons,
    quarts: gallons * 4,
    coverageRate: COVERAGE_PER_GAL,
  }
}
