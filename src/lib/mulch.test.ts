import { describe, expect, it } from 'vitest'
import { calcMulch } from './mulch'

const base = {
  lengthFt: 10,
  lengthIn: 0,
  widthFt: 10,
  widthIn: 0,
  depthIn: 3,
  wastePct: 0,
}

describe('calcMulch', () => {
  it('computes a 10×10 bed at 3 inches deep', () => {
    const r = calcMulch(base)
    expect(r).not.toBeNull()
    // 手算：100 × 3/12 = 25 cu ft = 25/27 ≈ 0.926 cu yd；25 ÷ 2 = 12.5 → 13 袋
    expect(r!.cubicFeet).toBeCloseTo(25, 5)
    expect(r!.cubicYards).toBeCloseTo(0.9259, 3)
    expect(r!.bags2cuft).toBe(13)
  })

  it('applies waste allowance to bag counts', () => {
    const r = calcMulch({ ...base, wastePct: 10 })
    // 25 × 1.1 = 27.5 ÷ 2 = 13.75 → 14 袋
    expect(r!.bags2cuft).toBe(14)
  })

  it('handles mixed feet/inch dimensions', () => {
    const r = calcMulch({ ...base, lengthFt: 12, lengthIn: 6, widthFt: 12, depthIn: 2 })
    // 12.5 × 12 × 2/12 = 25 cu ft
    expect(r!.cubicFeet).toBeCloseTo(25, 5)
  })

  it('returns null for invalid input', () => {
    expect(calcMulch({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcMulch({ ...base, depthIn: 0 })).toBeNull()
  })
})
