import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { useHead } from '@unhead/vue'

export const SITE_NAME = 'BuildCalc'
export const SITE_URL = 'https://max179.github.io/BuildCalc'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

export interface SeoOptions {
  title: string
  description: string
  path: string // 以 / 开头的站内路径，用于 canonical 与 OG
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  image?: string // OG 分享图绝对 URL，缺省用站点默认 og-image
}

/** 注入 title / description / canonical / OpenGraph / JSON-LD（SSG 时随 HTML 预渲染输出） */
export function useSEO(options: MaybeRefOrGetter<SeoOptions>) {
  const head = computed(() => {
    const o = toValue(options)
    const url = `${SITE_URL}${o.path}`
    const image = o.image ?? DEFAULT_OG_IMAGE
    const ldList = o.jsonLd ? (Array.isArray(o.jsonLd) ? o.jsonLd : [o.jsonLd]) : []

    return {
      title: o.title,
      meta: [
        { name: 'description', content: o.description },
        { property: 'og:title', content: o.title },
        { property: 'og:description', content: o.description },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:image', content: image },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: image },
      ],
      link: [{ rel: 'canonical', href: url }],
      script: ldList.map((data) => ({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data),
      })),
    }
  })

  useHead(head)
}
