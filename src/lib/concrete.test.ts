import { describe, expect, it } from 'vitest'
import { calcConcrete } from './concrete'

const base = {
  lengthFt: 12,
  lengthIn: 0,
  widthFt: 12,
  widthIn: 0,
  thicknessIn: 4,
  wastePct: 0,
}

describe('calcConcrete', () => {
  it('computes a 12×12 slab at 4 inches', () => {
    const r = calcConcrete(base)
    expect(r).not.toBeNull()
    expect(r!.cubicFeet).toBeCloseTo(48, 5)
    expect(r!.cubicYards).toBeCloseTo(1.7778, 3)
    expect(r!.bags80).toBe(80)
    expect(r!.bags60).toBe(107)
    expect(r!.weightLb).toBeCloseTo(7200, 5)
  })

  it('applies waste allowance to bag counts', () => {
    const r = calcConcrete({ ...base, wastePct: 10 })
    expect(r!.bags80).toBe(88)
  })

  it('handles mixed feet/inch dimensions', () => {
    const r = calcConcrete({ ...base, lengthFt: 12, lengthIn: 6, widthFt: 12, widthIn: 0 })
    expect(r!.cubicFeet).toBeCloseTo(50, 5)
  })

  it('returns null for invalid input', () => {
    expect(calcConcrete({ ...base, lengthFt: 0, lengthIn: 0 })).toBeNull()
    expect(calcConcrete({ ...base, thicknessIn: 0 })).toBeNull()
  })
})
