import { toDecimalFeet } from './units'

export interface DrywallInput {
  lengthFt: number
  lengthIn: number
  widthFt: number
  widthIn: number
  heightFt: number
  doors: number
  windows: number
  sheetArea: number // 单张板覆盖面积（sq ft）：32 / 40 / 48
}

export interface DrywallResult {
  wallArea: number // 扣除门窗后的净墙面积（sq ft）
  openingsDeducted: number // 门窗扣除总面积（sq ft）
  sheetArea: number
  sheets: number
}

const DOOR_AREA = 21 // sq ft，标准门 3×7 ft
const WINDOW_AREA = 15 // sq ft，标准窗 3×5 ft

/** 无效输入（任一维度 ≤ 0）时返回 null，由 UI 显示占位 */
export function calcDrywall(i: DrywallInput): DrywallResult | null {
  const length = toDecimalFeet(i.lengthFt, i.lengthIn)
  const width = toDecimalFeet(i.widthFt, i.widthIn)
  const height = Math.max(0, i.heightFt)
  const sheetArea = Math.max(0, i.sheetArea)

  if (length <= 0 || width <= 0 || height <= 0 || sheetArea <= 0) return null

  const openingsDeducted = Math.max(0, i.doors) * DOOR_AREA + Math.max(0, i.windows) * WINDOW_AREA
  const wallArea = Math.max(0, 2 * (length + width) * height - openingsDeducted)

  return {
    wallArea,
    openingsDeducted,
    sheetArea,
    sheets: Math.ceil(wallArea / sheetArea),
  }
}
