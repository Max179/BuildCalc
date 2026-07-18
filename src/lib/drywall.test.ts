import { describe, expect, it } from 'vitest'
import { calcDrywall } from './drywall'

const base = {
  lengthFt: 12,
  lengthIn: 0,
  widthFt: 12,
  widthIn: 0,
  heightFt: 8,
  doors: 1,
  windows: 1,
  sheetArea: 32,
}

describe('calcDrywall', () => {
  it('computes a 12×12 room with 8 ft walls, one door and one window', () => {
    // 手工验算：周长 48 ft × 8 ft = 384 sq ft，减门窗 21 + 15 = 36，净 348 sq ft
    // 348 ÷ 32 = 10.875 → 11 张
    const r = calcDrywall(base)
    expect(r).not.toBeNull()
    expect(r!.wallArea).toBeCloseTo(348, 5)
    expect(r!.openingsDeducted).toBe(36)
    expect(r!.sheetArea).toBe(32)
    expect(r!.sheets).toBe(11)
  })

  it('needs fewer sheets with a larger sheet size', () => {
    // 348 ÷ 48 = 7.25 → 8 张
    const r = calcDrywall({ ...base, sheetArea: 48 })
    expect(r!.sheets).toBe(8)
  })

  it('handles mixed feet/inch dimensions without openings', () => {
    // 12'6" × 10' → 周长 45 ft × 8 ft = 360 sq ft；360 ÷ 32 = 11.25 → 12 张
    const r = calcDrywall({ ...base, lengthIn: 6, widthFt: 10, doors: 0, windows: 0 })
    expect(r!.wallArea).toBeCloseTo(360, 5)
    expect(r!.sheets).toBe(12)
  })

  it('returns null for invalid input', () => {
    expect(calcDrywall({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcDrywall({ ...base, widthFt: 0, widthIn: 0 })).toBeNull()
    expect(calcDrywall({ ...base, heightFt: 0 })).toBeNull()
    expect(calcDrywall({ ...base, sheetArea: 0 })).toBeNull()
  })
})
