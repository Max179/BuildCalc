import { describe, expect, it } from 'vitest'
import { calcGravel } from './gravel'

const base = {
  lengthFt: 10,
  lengthIn: 0,
  widthFt: 10,
  widthIn: 0,
  depthIn: 3,
  wastePct: 0,
}

describe('calcGravel', () => {
  it('computes a 10×10 area at 3 inches deep', () => {
    const r = calcGravel(base)
    expect(r).not.toBeNull()
    // 手算：100 × 3/12 = 25 cu ft = 0.926 cu yd；×1.4 ≈ 1.296 吨；25 ÷ 0.5 = 50 袋
    expect(r!.cubicFeet).toBeCloseTo(25, 5)
    expect(r!.cubicYards).toBeCloseTo(0.9259, 3)
    expect(r!.tons).toBeCloseTo(1.2963, 3)
    expect(r!.bags50lb).toBe(50)
  })

  it('applies waste allowance to bag counts', () => {
    const r = calcGravel({ ...base, wastePct: 5 })
    // 25 × 1.05 = 26.25 ÷ 0.5 = 52.5 → 53 袋
    expect(r!.bags50lb).toBe(53)
  })

  it('handles mixed feet/inch dimensions', () => {
    const r = calcGravel({ ...base, lengthFt: 12, lengthIn: 6, widthFt: 12, depthIn: 2 })
    // 12.5 × 12 × 2/12 = 25 cu ft
    expect(r!.cubicFeet).toBeCloseTo(25, 5)
  })

  it('returns null for invalid input', () => {
    expect(calcGravel({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcGravel({ ...base, depthIn: 0 })).toBeNull()
  })
})
