import { describe, expect, it } from 'vitest'
import { calcRoofing } from './roofing'

const base = {
  lengthFt: 30,
  lengthIn: 0,
  widthFt: 40,
  widthIn: 0,
  pitchMultiplier: 1,
  wastePct: 0,
}

describe('calcRoofing', () => {
  it('computes a flat 30×40 roof', () => {
    // 手工验算：1200 sq ft = 12 square；bundles = 12 × 3 = 36；垫层 1200 ÷ 400 = 3 卷
    const r = calcRoofing(base)
    expect(r).not.toBeNull()
    expect(r!.roofArea).toBeCloseTo(1200, 5)
    expect(r!.squares).toBeCloseTo(12, 5)
    expect(r!.bundles).toBe(36)
    expect(r!.underlaymentRolls).toBe(3)
  })

  it('applies pitch multiplier and waste allowance', () => {
    // 30×40 × 1.118 = 1341.6 sq ft = 13.416 square
    // bundles = ceil(13.416 × 3 × 1.1) = ceil(44.27) = 45；垫层 1341.6 ÷ 400 = 3.354 → 4 卷
    const r = calcRoofing({ ...base, pitchMultiplier: 1.118, wastePct: 10 })
    expect(r!.roofArea).toBeCloseTo(1341.6, 3)
    expect(r!.squares).toBeCloseTo(13.416, 3)
    expect(r!.bundles).toBe(45)
    expect(r!.underlaymentRolls).toBe(4)
  })

  it('handles mixed feet/inch dimensions with a steep pitch', () => {
    // 20'6" × 20' = 410 sq ft footprint，12:12 → 410 × 1.414 = 579.74 sq ft
    // 5.7974 square × 3 = 17.3922 → 18 捆
    const r = calcRoofing({ ...base, lengthFt: 20, lengthIn: 6, widthFt: 20, pitchMultiplier: 1.414 })
    expect(r!.roofArea).toBeCloseTo(579.74, 2)
    expect(r!.bundles).toBe(18)
    expect(r!.underlaymentRolls).toBe(2)
  })

  it('returns null for invalid input', () => {
    expect(calcRoofing({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcRoofing({ ...base, widthFt: 0, widthIn: 0 })).toBeNull()
    expect(calcRoofing({ ...base, pitchMultiplier: 0 })).toBeNull()
  })
})
