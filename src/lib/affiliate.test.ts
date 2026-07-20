import { describe, expect, it } from 'vitest'
import { appendAffiliateTag } from './affiliate'

describe('appendAffiliateTag', () => {
  it('adds a tag to URLs with an existing query string', () => {
    expect(appendAffiliateTag('https://www.amazon.com/s?k=concrete+mix', 'buildcalc-20')).toBe(
      'https://www.amazon.com/s?k=concrete+mix&tag=buildcalc-20',
    )
  })

  it('adds a tag to URLs without a query string', () => {
    expect(appendAffiliateTag('https://www.amazon.com/dp/example', 'buildcalc-20')).toBe(
      'https://www.amazon.com/dp/example?tag=buildcalc-20',
    )
  })

  it('replaces an existing tag while keeping the URL hash', () => {
    expect(appendAffiliateTag('https://example.com/product?tag=old#details', 'buildcalc-20')).toBe(
      'https://example.com/product?tag=buildcalc-20#details',
    )
  })

  it('leaves URLs unchanged when no tag is configured', () => {
    expect(appendAffiliateTag('https://www.amazon.com/dp/example')).toBe(
      'https://www.amazon.com/dp/example',
    )
  })
})
