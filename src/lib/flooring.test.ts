import { describe, expect, it } from 'vitest'
import { calcFlooring } from './flooring'

const base = {
  lengthFt: 10,
  lengthIn: 0,
  widthFt: 12,
  widthIn: 0,
  wastePct: 10,
  boxCoverage: 20,
}

describe('calcFlooring', () => {
  it('computes a 10×12 room with 10% waste', () => {
    const r = calcFlooring(base)
    expect(r).not.toBeNull()
    // 手算：面积 120 sq ft，含 10% 损耗 = 132，132 ÷ 20 = 6.6 → 7 箱
    expect(r!.roomArea).toBeCloseTo(120, 5)
    expect(r!.needed).toBeCloseTo(132, 5)
    expect(r!.boxes).toBe(7)
  })

  it('keeps an exact box fit exact', () => {
    const r = calcFlooring({ ...base, lengthFt: 20, widthFt: 10, wastePct: 0 })
    // 整除边界：200 ÷ 20 = 10 整，不应多进一箱
    expect(r!.needed).toBeCloseTo(200, 5)
    expect(r!.boxes).toBe(10)
  })

  it('handles mixed feet/inch dimensions', () => {
    const r = calcFlooring({ ...base, lengthFt: 12, lengthIn: 6, widthFt: 8, wastePct: 0 })
    // 12.5 × 8 = 100 sq ft → 100 ÷ 20 = 5 箱
    expect(r!.roomArea).toBeCloseTo(100, 5)
    expect(r!.boxes).toBe(5)
  })

  it('returns null for invalid input', () => {
    expect(calcFlooring({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcFlooring({ ...base, widthFt: 0, widthIn: 0 })).toBeNull()
  })
})
