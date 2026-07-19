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

// Hero 搜索框：按名称/描述/分类过滤工具卡片，按 "/" 快速聚焦
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
  <!-- Hero -->
  <section class="hero blueprint-bg">
    <div class="container hero-inner">
      <span class="hero-eyebrow">Free construction calculators</span>
      <h1 class="hero-title">Measure right.<br />Buy right.</h1>
      <p class="hero-sub">Eight tools. Instant numbers. Zero sign-up.</p>

      <div class="hero-search">
        <Search :size="20" class="hero-search-icon" />
        <input
          ref="searchEl"
          v-model="query"
          type="search"
          class="hero-search-input"
          placeholder="Search calculators…"
          aria-label="Search calculators"
        />
        <kbd class="hero-search-kbd" aria-hidden="true">/</kbd>
      </div>

      <ul class="hero-trust">
        <li v-for="t in trustItems" :key="t.text">
          <component :is="t.icon" :size="15" />
          <span>{{ t.text }}</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- 工具网格 -->
  <section id="calculators" class="section">
    <div class="container">
      <div class="tools-head" v-reveal>
        <span class="eyebrow">Calculators</span>
        <h2>Pick a tool.<br />Get your number.</h2>
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
/* ---------- Hero ---------- */
.hero {
  color: var(--on-slate);
}

.hero-inner {
  padding-block: clamp(80px, 12vw, 150px) clamp(72px, 10vw, 120px);
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
}

.hero-title {
  color: var(--on-slate);
  font-size: clamp(3.2rem, 8.5vw, 6.8rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.02em;
}

.hero-sub {
  margin-top: 24px;
  font-size: clamp(1.05rem, 1.6vw, 1.3rem);
  color: var(--on-slate-soft);
}

.hero-search {
  position: relative;
  margin-top: 48px;
  max-width: 560px;
}

.hero-search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ink-faint);
  pointer-events: none;
}

.hero-search-input {
  width: 100%;
  min-height: 68px;
  padding: 16px 64px 16px 56px;
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  background: var(--paper-raised);
  font-size: 1.15rem;
  color: var(--ink);
  transition: box-shadow 160ms ease;
}

.hero-search-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(232, 93, 47, 0.25);
}

.hero-search-kbd {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--paper-sunk);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--ink-faint);
  pointer-events: none;
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  margin-top: 32px;
  padding: 0;
  list-style: none;
}

.hero-trust li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--on-slate-soft);
}

.hero-trust svg {
  color: var(--accent);
}

/* ---------- 工具网格 ---------- */
.tools-head {
  margin-bottom: 48px;
}

.tools-head h2 {
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.tool-card {
  position: relative;
  display: grid;
  gap: 18px;
  align-content: space-between;
  min-height: 240px;
  padding: 30px;
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
  width: 58px;
  height: 58px;
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
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--ink);
}

.tool-go {
  position: absolute;
  top: 26px;
  right: 26px;
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
  margin-top: 56px;
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
  padding: 36px 40px;
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
  font-size: clamp(1.3rem, 2.4vw, 1.8rem);
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
  .hero-search {
    max-width: none;
  }

  .guide-row {
    padding: 26px 24px;
  }
}

@media (max-width: 560px) {
  .tool-grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    min-height: 180px;
  }

  .hero-search-kbd {
    display: none;
  }
}
</style>
