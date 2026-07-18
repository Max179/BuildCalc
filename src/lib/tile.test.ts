import { describe, expect, it } from 'vitest'
import { calcTile } from './tile'

const base = {
  lengthFt: 10,
  lengthIn: 0,
  widthFt: 12,
  widthIn: 0,
  tileLengthIn: 12,
  tileWidthIn: 12,
  wastePct: 10,
}

describe('calcTile', () => {
  it('computes a 10×12 floor with 12×12 tiles and 10% waste', () => {
    // 手工验算：120 sq ft × 1.1 = 132 sq ft ÷ 1 sq ft/片 = 132 片
    const r = calcTile(base)
    expect(r).not.toBeNull()
    expect(r!.area).toBeCloseTo(120, 5)
    expect(r!.tileArea).toBeCloseTo(1, 5)
    expect(r!.tiles).toBe(132)
  })

  it('converts tile inches to square feet', () => {
    // 12×24 in = 2 sq ft；10×10 = 100 sq ft，无损耗 → 50 片
    const r = calcTile({ ...base, widthFt: 10, tileLengthIn: 24, wastePct: 0 })
    expect(r!.tileArea).toBeCloseTo(2, 5)
    expect(r!.tiles).toBe(50)
  })

  it('rounds up partial tiles with small format tile and diagonal waste', () => {
    // 6×6 = 0.25 sq ft；8×8 = 64 sq ft × 1.15 = 73.6 ÷ 0.25 = 294.4 → 295 片
    const r = calcTile({ ...base, lengthFt: 8, widthFt: 8, tileLengthIn: 6, tileWidthIn: 6, wastePct: 15 })
    expect(r!.tiles).toBe(295)
  })

  it('handles mixed feet/inch dimensions', () => {
    // 10'6" × 10' = 105 sq ft，12×12，无损耗 → 105 片
    const r = calcTile({ ...base, lengthIn: 6, widthFt: 10, wastePct: 0 })
    expect(r!.area).toBeCloseTo(105, 5)
    expect(r!.tiles).toBe(105)
  })

  it('returns null for invalid input', () => {
    expect(calcTile({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcTile({ ...base, widthFt: 0, widthIn: 0 })).toBeNull()
    expect(calcTile({ ...base, tileWidthIn: 0 })).toBeNull()
  })
})
