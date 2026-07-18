<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowRight, Search, ShieldCheck, FileText, Zap, BookOpen } from 'lucide-vue-next'
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

// Hero 搜索框：按名称/描述/分类过滤工具卡片
const query = ref('')
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

const featuredGuides = [
  {
    slug: 'how-to-measure-concrete-for-a-patio',
    title: 'How to Measure Concrete for a Patio',
    description: 'Measure once, order once — slab dimensions, thickness rules and waste allowance.',
  },
  {
    slug: 'how-much-paint-do-i-need',
    title: 'How Much Paint Do I Need?',
    description: 'Wall area, coats, coverage per gallon and the mistakes that leave you short.',
  },
  {
    slug: 'flooring-measurement-guide',
    title: 'Flooring Measurement Guide',
    description: 'Measure rooms, handle closets and stairs, and add the right waste factor.',
  },
]

const trustItems = [
  {
    icon: FileText,
    title: 'Transparent formulas',
    text: 'Every calculator shows the exact formula and the coverage data behind the numbers.',
  },
  {
    icon: ShieldCheck,
    title: 'Free, no sign-up',
    text: 'No accounts, no paywalls, no email gates. Open the tool and get your answer.',
  },
  {
    icon: Zap,
    title: 'Runs in your browser',
    text: 'Calculations happen on your device. Nothing you type is uploaded or stored.',
  },
]
</script>

<template>
  <!-- Hero -->
  <section class="hero blueprint-bg">
    <div class="container hero-inner">
      <span class="hero-eyebrow">Free · No sign-up · Transparent formulas</span>
      <h1 class="hero-title">Know exactly how much material to buy.</h1>
      <p class="hero-sub">
        Eight construction calculators built for DIYers and contractors — concrete, paint,
        flooring, mulch, gravel, drywall, tile and roofing. Instant results with the math shown.
      </p>

      <div class="hero-search">
        <Search :size="18" class="hero-search-icon" />
        <input
          v-model="query"
          type="search"
          class="hero-search-input"
          placeholder="Search calculators — try “paint” or “gravel”…"
          aria-label="Search calculators"
        />
      </div>
    </div>
  </section>

  <!-- 工具网格 -->
  <section id="calculators" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Calculators</span>
        <h2>Pick a material, get your number.</h2>
      </div>

      <div v-if="filtered.length" class="tool-grid">
        <router-link
          v-for="c in filtered"
          :key="c.slug"
          :to="`/${c.slug}-calculator/`"
          class="tool-card"
        >
          <span class="tool-icon"><ToolIcon :name="c.icon" :size="22" /></span>
          <span class="tool-name">{{ c.name }}</span>
          <span class="tool-tagline">{{ c.tagline }}</span>
          <span class="tool-cta">Open calculator <ArrowRight :size="14" /></span>
        </router-link>
      </div>
      <p v-else class="tool-empty">No calculators match “{{ query }}”. Try a different term.</p>

      <AdSlot class="home-ad" />
    </div>
  </section>

  <!-- 信任区 -->
  <section class="section-sm trust-section">
    <div class="container">
      <div class="trust-grid">
        <div v-for="t in trustItems" :key="t.title" class="trust-item">
          <component :is="t.icon" :size="22" class="trust-icon" />
          <h3 class="trust-title">{{ t.title }}</h3>
          <p class="trust-text">{{ t.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 精选指南 -->
  <section class="section guides-section">
    <div class="container">
      <div class="section-head guides-head">
        <div>
          <span class="eyebrow">Guides</span>
          <h2>Measure it right the first time.</h2>
        </div>
        <router-link to="/guides/" class="btn btn-ghost">
          <BookOpen :size="16" /> All guides
        </router-link>
      </div>

      <div class="guide-grid">
        <router-link
          v-for="g in featuredGuides"
          :key="g.slug"
          :to="`/guides/${g.slug}/`"
          class="guide-card card"
        >
          <h3 class="guide-title">{{ g.title }}</h3>
          <p class="guide-desc">{{ g.description }}</p>
          <span class="guide-cta">Read guide <ArrowRight :size="14" /></span>
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
  padding-block: 88px 72px;
  max-width: 860px;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 18px;
}

.hero-title {
  color: var(--on-slate);
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 700;
  max-width: 16ch;
}

.hero-sub {
  margin-top: 18px;
  max-width: 58ch;
  font-size: 1.08rem;
  color: var(--on-slate-soft);
}

.hero-search {
  position: relative;
  margin-top: 32px;
  max-width: 480px;
}

.hero-search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ink-faint);
  pointer-events: none;
}

.hero-search-input {
  width: 100%;
  min-height: 52px;
  padding: 12px 16px 12px 46px;
  border: 1px solid transparent;
  border-radius: var(--radius);
  background: var(--paper-raised);
  font-size: 1rem;
  color: var(--ink);
}

.hero-search-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(232, 93, 47, 0.25);
}

/* ---------- 工具网格 ---------- */
.tool-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.tool-card {
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 22px;
  background: var(--paper-raised);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  transition: border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;
}

.tool-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-2);
}

.tool-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.tool-name {
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 600;
  color: var(--ink);
}

.tool-tagline {
  font-size: 0.88rem;
  color: var(--ink-soft);
  line-height: 1.5;
}

.tool-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
}

.tool-empty {
  padding: 32px 0;
  color: var(--ink-faint);
}

.home-ad {
  margin-top: 40px;
}

/* ---------- 信任区 ---------- */
.trust-section {
  background: var(--paper-sunk);
  border-block: 1px solid var(--line-soft);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.trust-item {
  display: grid;
  gap: 8px;
  justify-items: start;
}

.trust-icon {
  color: var(--accent);
}

.trust-title {
  font-size: 1.05rem;
}

.trust-text {
  font-size: 0.92rem;
}

/* ---------- 指南 ---------- */
.guides-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  max-width: none;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.guide-card {
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 26px;
  transition: border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;
}

.guide-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-2);
}

.guide-title {
  font-size: 1.15rem;
}

.guide-desc {
  font-size: 0.92rem;
}

.guide-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
}

/* ---------- 响应式 ---------- */
@media (max-width: 1024px) {
  .tool-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-inner {
    padding-block: 56px 48px;
  }

  .trust-grid,
  .guide-grid {
    grid-template-columns: 1fr;
  }

  .guides-head {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .tool-grid {
    grid-template-columns: 1fr;
  }
}
</style>
