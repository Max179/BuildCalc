<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { getCalculator, getRelated } from '@/data/calculators'
import { calcComponents } from '@/calculators'
import { useSEO, SITE_NAME, SITE_URL } from '@/composables/useSEO'
import ToolIcon from '@/components/ToolIcon.vue'
import AdSlot from '@/components/AdSlot.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'

const props = defineProps<{ slug: string }>()

const content = computed(() => getCalculator(props.slug))
const calcComponent = computed(() => calcComponents[props.slug])
const related = computed(() => (content.value ? getRelated(content.value.related) : []))

useSEO(
  computed(() => {
    const c = content.value
    const path = `/${props.slug}-calculator/`
    if (!c) {
      return { title: `Calculator not found — ${SITE_NAME}`, description: '', path }
    }
    return {
      title: `${c.name} — Free, Instant Results | ${SITE_NAME}`,
      description: c.intro,
      path,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: c.name,
          url: `${SITE_URL}${path}`,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: c.intro,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: c.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: c.name, item: `${SITE_URL}${path}` },
          ],
        },
      ],
    }
  }),
)
</script>

<template>
  <div v-if="content">
    <!-- 页头 -->
    <section class="calc-head">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <router-link to="/">Home</router-link>
          <span aria-hidden="true">/</span>
          <span>{{ content.name }}</span>
        </nav>
        <div class="calc-title-row">
          <span class="calc-title-icon"><ToolIcon :name="content.icon" :size="24" /></span>
          <h1>{{ content.name }}</h1>
        </div>
        <p class="calc-intro">{{ content.intro }}</p>
      </div>
    </section>

    <!-- 计算器本体 -->
    <section class="section-sm">
      <div class="container">
        <div class="card calc-card" v-reveal>
          <component :is="calcComponent" v-if="calcComponent" />
          <p v-else class="calc-empty">This calculator is coming soon.</p>
        </div>
        <AdSlot />
      </div>
    </section>

    <!-- 计算方法与公式 -->
    <section class="section-sm">
      <div class="container prose-wrap" v-reveal>
        <h2>{{ content.howToTitle }}</h2>
        <ol class="howto-list">
          <li v-for="(step, i) in content.howTo" :key="i">{{ step }}</li>
        </ol>
        <div class="formula-box">
          <span class="formula-label">Formula</span>
          <code class="mono">{{ content.formulaNote }}</code>
        </div>
      </div>
    </section>

    <!-- 参考数据表 -->
    <section class="section-sm">
      <div class="container prose-wrap" v-reveal>
        <h2>{{ content.referenceTable.title }}</h2>
        <table class="data-table">
          <thead>
            <tr>
              <th v-for="h in content.referenceTable.headers" :key="h">{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in content.referenceTable.rows" :key="i">
              <td v-for="(cell, j) in row" :key="j" :class="{ num: j > 0 }">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
        <p v-if="content.referenceTable.note" class="table-note muted">
          {{ content.referenceTable.note }}
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-sm">
      <div class="container prose-wrap" v-reveal>
        <h2>Frequently asked questions</h2>
        <FaqAccordion :items="content.faqs" />
        <AdSlot />
      </div>
    </section>

    <!-- 相关计算器 -->
    <section class="section-sm">
      <div class="container">
        <h2 class="related-title" v-reveal>Related calculators</h2>
        <div class="related-grid">
          <router-link
            v-for="(r, i) in related"
            :key="r.slug"
            v-reveal="i * 80"
            :to="`/${r.slug}-calculator/`"
            class="related-card card"
          >
            <span class="related-icon"><ToolIcon :name="r.icon" :size="22" /></span>
            <span class="related-name">{{ r.name }}</span>
            <span class="related-go" aria-hidden="true"><ArrowUpRight :size="18" /></span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.calc-head {
  padding-block: 56px 12px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--ink-faint);
  margin-bottom: 24px;
}

.breadcrumb a:hover {
  color: var(--accent);
}

.calc-title-row {
  display: flex;
  align-items: center;
  gap: 18px;
}

.calc-title-row h1 {
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
}

.calc-title-icon {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  flex-shrink: 0;
}

.calc-intro {
  margin-top: 16px;
  max-width: 680px;
  font-size: 1rem;
  color: var(--ink-faint);
}

.calc-card {
  padding: clamp(24px, 4vw, 48px);
  border-radius: var(--radius-lg);
}

.prose-wrap {
  max-width: 860px;
}

.howto-list {
  margin-top: 20px;
  padding-left: 22px;
  display: grid;
  gap: 12px;
}

.howto-list li {
  color: var(--ink-soft);
  line-height: 1.7;
}

.formula-box {
  margin-top: 24px;
  padding: 18px 22px;
  border-left: 3px solid var(--accent);
  background: var(--paper-sunk);
  border-radius: 0 var(--radius) var(--radius) 0;
  display: grid;
  gap: 6px;
}

.formula-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-strong);
}

.formula-box code {
  font-size: 0.95rem;
  color: var(--ink);
}

.data-table {
  margin-top: 20px;
}

.table-note {
  margin-top: 12px;
  font-size: 0.85rem;
}

.prose-wrap h2 {
  margin-bottom: 4px;
}

.related-title {
  margin-bottom: 20px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.related-card {
  position: relative;
  display: grid;
  gap: 14px;
  align-content: space-between;
  min-height: 150px;
  padding: 26px;
  transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.related-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-2);
}

.related-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  transition: background 160ms ease, color 160ms ease;
}

.related-card:hover .related-icon {
  background: var(--accent);
  color: #fff;
}

.related-name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
}

.related-go {
  position: absolute;
  top: 22px;
  right: 22px;
  color: var(--ink-faint);
  opacity: 0;
  transform: translate(-5px, 5px);
  transition: opacity 160ms ease, transform 160ms ease, color 160ms ease;
}

.related-card:hover .related-go {
  opacity: 1;
  transform: none;
  color: var(--accent);
}

@media (max-width: 768px) {
  .calc-card {
    padding: 22px;
  }

  .calc-head {
    padding-block: 36px 8px;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
