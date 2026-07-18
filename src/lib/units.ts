// 英制单位与数字格式化工具

/** 英尺 + 英寸 → 十进制英尺（如 12ft 6in → 12.5） */
export function toDecimalFeet(feet: number, inches: number): number {
  const f = Number.isFinite(feet) ? feet : 0
  const i = Number.isFinite(inches) ? inches : 0
  return Math.max(0, f) + Math.max(0, i) / 12
}

/** 千分位格式化，保留指定小数位并去掉多余的 0 */
export function fmt(n: number, decimals = 2): string {
  if (!Number.isFinite(n)) return '0'
  const fixed = n.toFixed(decimals)
  // 仅当存在小数部分时才裁剪末尾 0，避免整数被吞位（如 7200 → 72）
  const trimmed = decimals > 0 ? fixed.replace(/\.?0+$/, '') : fixed
  const [intPart, decPart] = trimmed.split('.')
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return decPart ? `${withSep}.${decPart}` : withSep
}

/** 输入清洗：转数字、非负、非数字回退为 0 */
export function num(value: string | number): number {
  const n = typeof value === 'number' ? value : parseFloat(value)
  if (!Number.isFinite(n) || n < 0) return 0
  return n
}
