import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const imagesDir = path.resolve('public/images')
const files = (await fs.readdir(imagesDir)).filter(
  (f) => f.endsWith('.jpg') && !f.includes('-small'),
)

async function optimize() {
  for (const file of files) {
    const input = path.join(imagesDir, file)
    const base = path.basename(file, '.jpg')
    const output = path.join(imagesDir, `${base}.webp`)

    // Hero 图 1200px 宽，其他 800px 宽，WebP quality 82
    const isHero = file === 'hero-construction.jpg'
    const width = isHero ? 1200 : 800
    const quality = isHero ? 82 : 80

    await sharp(input)
      .resize({ width, withoutEnlargement: true, fit: 'inside' })
      .webp({ quality, effort: 6 })
      .toFile(output)

    const originalSize = (await fs.stat(input)).size
    const webpSize = (await fs.stat(output)).size
    console.log(
      `${file.padEnd(28)} ${String(Math.round(originalSize / 1024)).padStart(4)}KB -> webp ${String(Math.round(webpSize / 1024)).padStart(4)}KB (${Math.round((webpSize / originalSize) * 100)}%)`,
    )
  }
}

optimize().catch((e) => {
  console.error(e)
  process.exit(1)
})
