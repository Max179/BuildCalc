import { describe, expect, it } from 'vitest'
import { calcPaint } from './paint'

const base = {
  lengthFt: 12,
  lengthIn: 0,
  widthFt: 12,
  widthIn: 0,
  heightFt: 8,
  doors: 1,
  windows: 2,
  coats: 2,
}

describe('calcPaint', () => {
  it('computes a 12×12 room with 8 ft ceilings', () => {
    const r = calcPaint(base)
    expect(r).not.toBeNull()
    // 手算：周长 2×(12+12)=48 ft，毛墙面 48×8=384 sq ft
    // 门窗扣除 1×21 + 2×15 = 51 → 净墙面 333 sq ft
    expect(r!.wallArea).toBeCloseTo(333, 5)
    // 333 × 2 coats ÷ 350 = 1.90 → 2 加仑，8 夸脱
    expect(r!.gallons).toBe(2)
    expect(r!.quarts).toBe(8)
    expect(r!.coverageRate).toBe(350)
  })

  it('applies the coat multiplier', () => {
    const r = calcPaint({ ...base, coats: 1 })
    // 333 ÷ 350 = 0.95 → 1 加仑
    expect(r!.gallons).toBe(1)
    const r3 = calcPaint({ ...base, coats: 3 })
    // 999 ÷ 350 = 2.85 → 3 加仑
    expect(r3!.gallons).toBe(3)
  })

  it('handles mixed feet/inch dimensions', () => {
    const r = calcPaint({ ...base, lengthFt: 12, lengthIn: 6 })
    // 周长 2×(12.5+12)=49 ft，49×8=392 − 51 = 341 sq ft
    expect(r!.wallArea).toBeCloseTo(341, 5)
  })

  it('returns null for invalid input', () => {
    expect(calcPaint({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcPaint({ ...base, widthFt: 0, widthIn: 0 })).toBeNull()
    expect(calcPaint({ ...base, heightFt: 0 })).toBeNull()
  })
})
