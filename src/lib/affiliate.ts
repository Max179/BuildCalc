const LOCAL_BASE = 'https://buildcalc.local'

export function appendAffiliateTag(url: string, tag?: string): string {
  if (!tag) return url

  try {
    const absolute = /^[a-z][a-z\d+.-]*:/i.test(url)
    const tagged = new URL(url, LOCAL_BASE)
    tagged.searchParams.set('tag', tag)
    return absolute ? tagged.toString() : `${tagged.pathname}${tagged.search}${tagged.hash}`
  } catch {
    const [beforeHash, hash = ''] = url.split('#')
    const separator = beforeHash.includes('?') ? '&' : '?'
    return `${beforeHash}${separator}tag=${encodeURIComponent(tag)}${hash ? `#${hash}` : ''}`
  }
}
