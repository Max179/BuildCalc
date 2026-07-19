import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { vReveal } from './directives/reveal'
import './style.css'

// vite-ssg：SSG 预渲染入口（@unhead/vue 已安装，自动接入 useHead）
export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, ({ app }) => {
  app.directive('reveal', vReveal)
})
