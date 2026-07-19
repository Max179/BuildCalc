<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, ArrowUpRight, Search, ShieldCheck, FileText, Zap } from 'lucide-vue-next'
import { calculatorMetas } from '@/data/calculators'
import ToolIcon from '@/components/ToolIcon.vue'
import AdSlot from '@/components/AdSlot.vue'
import { useSEO, SITE_NAME } from '@/composables/useSEO'

useSEO({
  title: 'BuildCalc — Free Construction Material Calculators',
  description:
    'Free online calculators for concrete, paint, flooring, mulch, gravel, drywall, tile and roofing. Transparent formulas, instant results, no sign-up.',
  path: '/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: 'https://buildcalc.pages.dev/',
  },
})

// 搜索框：按名称/描述/分类过滤工具卡片，按 "/" 快速聚焦
const query = ref('')
const searchEl = ref<HTMLInputElement | null>(null)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return calculatorMetas
  return calculatorMetas.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q),
  )
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === '/' && document.activeElement !== searchEl.value) {
    e.preventDefault()
    searchEl.value?.focus()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

const featuredGuides = [
  { slug: 'how-to-measure-concrete-for-a-patio', title: 'How to Measure Concrete for a Patio' },
  { slug: 'how-much-paint-do-i-need', title: 'How Much Paint Do I Need?' },
  { slug: 'flooring-measurement-guide', title: 'Flooring Measurement Guide' },
]

const trustItems = [
  { icon: FileText, text: 'Transparent formulas' },
  { icon: ShieldCheck, text: 'No sign-up' },
  { icon: Zap, text: 'Runs in your browser' },
]
</script>

<template>
  <!-- Hero（紧凑横幅：品牌 + 信任点，功能全部下放） -->
  <section class="hero blueprint-bg">
    <div class="container hero-inner">
      <h1 class="hero-title">Measure right. Buy right.</h1>
      <ul class="hero-trust">
        <li v-for="t in trustItems" :key="t.text">
          <component :is="t.icon" :size="15" />
          <span>{{ t.text }}</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- 工具网格（第一屏核心功能） -->
  <section id="calculators" class="tools-section">
    <div class="container">
      <div class="tools-head" v-reveal>
        <div class="tools-title">
          <span class="eyebrow">Calculators</span>
          <h2>Pick a tool. Get your number.</h2>
        </div>
        <div class="tools-search">
          <Search :size="18" class="tools-search-icon" />
          <input
            ref="searchEl"
            v-model="query"
            type="search"
            class="tools-search-input"
            placeholder="Search calculators…"
            aria-label="Search calculators"
          />
          <kbd class="tools-search-kbd" aria-hidden="true">/</kbd>
        </div>
      </div>

      <div v-if="filtered.length" class="tool-grid">
        <router-link
          v-for="(c, i) in filtered"
          :key="c.slug"
          v-reveal="(i % 4) * 70"
          :to="`/${c.slug}-calculator/`"
          class="tool-card"
        >
          <span class="tool-icon"><ToolIcon :name="c.icon" :size="26" /></span>
          <span class="tool-name">{{ c.name }}</span>
          <span class="tool-go" aria-hidden="true"><ArrowUpRight :size="20" /></span>
        </router-link>
      </div>
      <p v-else class="tool-empty">No calculators match “{{ query }}”.</p>

      <AdSlot class="home-ad" />
    </div>
  </section>

  <!-- 指南 -->
  <section class="section guides-section">
    <div class="container">
      <div class="guides-head" v-reveal>
        <span class="eyebrow">Guides</span>
        <router-link to="/guides/" class="guides-all">
          All guides <ArrowRight :size="16" />
        </router-link>
      </div>

      <div class="guide-list">
        <router-link
          v-for="(g, i) in featuredGuides"
          :key="g.slug"
          v-reveal="i * 90"
          :to="`/guides/${g.slug}/`"
          class="guide-row"
        >
          <h3 class="guide-title">{{ g.title }}</h3>
          <span class="guide-go" aria-hidden="true"><ArrowUpRight :size="22" /></span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Hero（紧凑） ---------- */
.hero {
  color: var(--on-slate);
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding-block: 40px;
}

.hero-title {
  color: var(--on-slate);
  font-size: clamp(1.9rem, 3.6vw, 2.9rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  padding: 0;
  margin: 0;
  list-style: none;
  flex-shrink: 0;
}

.hero-trust li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--on-slate-soft);
}

.hero-trust svg {
  color: var(--accent);
}

/* ---------- 工具区 ---------- */
.tools-section {
  padding-block: 48px 96px;
}

.tools-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.tools-title h2 {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
}

.tools-search {
  position: relative;
  width: min(360px, 100%);
  flex-shrink: 0;
}

.tools-search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ink-faint);
  pointer-events: none;
}

.tools-search-input {
  width: 100%;
  min-height: 52px;
  padding: 12px 52px 12px 46px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper-raised);
  font-size: 1rem;
  color: var(--ink);
  transition: border-color 140ms ease, box-shadow 140ms ease;
}

.tools-search-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(232, 93, 47, 0.22);
}

.tools-search-kbd {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--paper-sunk);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--ink-faint);
  pointer-events: none;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.tool-card {
  position: relative;
  display: grid;
  gap: 16px;
  align-content: space-between;
  min-height: 200px;
  padding: 26px;
  background: var(--paper-raised);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.tool-card:hover {
  border-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: var(--shadow-2);
}

.tool-icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  transition: background 160ms ease, color 160ms ease;
}

.tool-card:hover .tool-icon {
  background: var(--accent);
  color: #fff;
}

.tool-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--ink);
}

.tool-go {
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--ink-faint);
  opacity: 0;
  transform: translate(-6px, 6px);
  transition: opacity 160ms ease, transform 160ms ease, color 160ms ease;
}

.tool-card:hover .tool-go {
  opacity: 1;
  transform: none;
  color: var(--accent);
}

.tool-empty {
  padding: 40px 0;
  font-size: 1.05rem;
  color: var(--ink-faint);
}

.home-ad {
  margin-top: 48px;
}

/* ---------- 指南 ---------- */
.guides-section {
  background: var(--paper-sunk);
  border-top: 1px solid var(--line-soft);
}

.guides-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
}

.guides-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--accent);
}

.guides-all:hover {
  color: var(--accent-strong);
}

.guide-list {
  display: grid;
  gap: 16px;
}

.guide-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 36px;
  background: var(--paper-raised);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.guide-row:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-2);
}

.guide-title {
  font-size: clamp(1.25rem, 2.2vw, 1.7rem);
}

.guide-go {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--ink-faint);
  flex-shrink: 0;
  transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
}

.guide-row:hover .guide-go {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

/* ---------- 响应式 ---------- */
@media (max-width: 1024px) {
  .tool-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding-block: 32px;
  }

  .tools-head {
    flex-direction: column;
    align-items: stretch;
  }

  .tools-search {
    width: 100%;
  }

  .guide-row {
    padding: 24px 22px;
  }
}

@media (max-width: 560px) {
  .tool-grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    min-height: 170px;
  }

  .tools-search-kbd {
    display: none;
  }
}
</style>
