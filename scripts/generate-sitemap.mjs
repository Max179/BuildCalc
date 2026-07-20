// 构建后生成 sitemap.xml（扫描 dist 下所有 index.html）并派生 404.html
import { readdirSync, statSync, writeFileSync, copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = 'https://buildcalc-tools.pages.dev'
const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

/** 递归收集 dist 中含 index.html 的目录 → URL 路径 */
function collectRoutes(dir, base = '') {
  const routes = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    const rel = base ? `${base}/${name}` : name
    if (statSync(full).isDirectory()) {
      routes.push(...collectRoutes(full, rel))
    } else if (name === 'index.html') {
      routes.push(rel === 'index.html' ? '/' : `/${rel.replace(/\/index\.html$/, '/')}`)
    }
  }
  return routes
}

const routes = collectRoutes(dist).filter((r) => r !== '/404/').sort()
const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(dist, 'sitemap.xml'), xml)
console.log(`sitemap.xml: ${routes.length} URLs`)

// Cloudflare Pages 的 404：约定根级 404.html
const notFoundDir = join(dist, '404', 'index.html')
if (existsSync(notFoundDir)) {
  copyFileSync(notFoundDir, join(dist, '404.html'))
  console.log('404.html generated')
}
