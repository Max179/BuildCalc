import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CalculatorPage from '@/pages/CalculatorPage.vue'
import GuidesPage from '@/pages/GuidesPage.vue'
import GuideDetailPage from '@/pages/GuideDetailPage.vue'
import LegalPage from '@/pages/LegalPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { calculatorMetas } from '@/data/calculators'

// 计算器路由：每个工具一个显式静态路由（利于 SSG 预渲染与 sitemap 生成）
const calculatorRoutes: RouteRecordRaw[] = calculatorMetas.map((meta) => ({
  path: `/${meta.slug}-calculator/`,
  name: `calc-${meta.slug}`,
  component: CalculatorPage,
  props: { slug: meta.slug },
}))

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomePage },
  ...calculatorRoutes,
  { path: '/guides/', name: 'guides', component: GuidesPage },
  { path: '/guides/:slug/', name: 'guide-detail', component: GuideDetailPage, props: true },
  { path: '/privacy-policy/', name: 'privacy', component: LegalPage, props: { page: 'privacy' } },
  { path: '/terms/', name: 'terms', component: LegalPage, props: { page: 'terms' } },
  { path: '/about/', name: 'about', component: LegalPage, props: { page: 'about' } },
  { path: '/contact/', name: 'contact', component: LegalPage, props: { page: 'contact' } },
  { path: '/404', name: 'not-found-page', component: NotFoundPage },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]
