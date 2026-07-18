import { describe, expect, it } from 'vitest'
import { fmt, num, toDecimalFeet } from './units'

describe('toDecimalFeet', () => {
  it('converts feet and inches to decimal feet', () => {
    expect(toDecimalFeet(12, 6)).toBe(12.5)
    expect(toDecimalFeet(10, 0)).toBe(10)
    expect(toDecimalFeet(0, 4)).toBeCloseTo(0.3333, 3)
  })

  it('clamps negatives and NaN to zero', () => {
    expect(toDecimalFeet(-5, 0)).toBe(0)
    expect(toDecimalFeet(NaN, NaN)).toBe(0)
  })
})

describe('fmt', () => {
  it('formats with thousands separators', () => {
    expect(fmt(7200, 0)).toBe('7,200')
    expect(fmt(1234.5)).toBe('1,234.5')
  })

  it('trims trailing zeros', () => {
    expect(fmt(1.78)).toBe('1.78')
    expect(fmt(2)).toBe('2')
  })
})

describe('num', () => {
  it('parses strings and blocks negatives', () => {
    expect(num('12.5')).toBe(12.5)
    expect(num('-3')).toBe(0)
    expect(num('abc')).toBe(0)
  })
})
