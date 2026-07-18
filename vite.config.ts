/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Inspector from 'unplugin-vue-dev-locator/vite'
import { guides } from './src/data/guides'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    vue(),
    Inspector(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ = src
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    crittersOptions: false,
    // 动态路由处理：catch-all 跳过；指南 :slug 展开为真实路径逐篇预渲染
    includedRoutes(routes) {
      return routes
        .filter((r) => !r.includes(':pathMatch'))
        .flatMap((r) => (r.includes(':slug') ? guides.map((g) => r.replace(':slug', g.slug)) : [r]))
    },
  },
})
