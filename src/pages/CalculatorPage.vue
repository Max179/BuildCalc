<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
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
        <div class="card calc-card">
          <component :is="calcComponent" v-if="calcComponent" />
          <p v-else class="calc-empty">This calculator is coming soon.</p>
        </div>
        <AdSlot />
      </div>
    </section>

    <!-- 计算方法与公式 -->
    <section class="section-sm">
      <div class="container prose-wrap">
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
      <div class="container prose-wrap">
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
      <div class="container prose-wrap">
        <h2>Frequently asked questions</h2>
        <FaqAccordion :items="content.faqs" />
        <AdSlot />
      </div>
    </section>

    <!-- 相关计算器 -->
    <section class="section-sm">
      <div class="container">
        <h2 class="related-title">Related calculators</h2>
        <div class="related-grid">
          <router-link
            v-for="r in related"
            :key="r.slug"
            :to="`/${r.slug}-calculator/`"
            class="related-card card"
          >
            <span class="related-icon"><ToolIcon :name="r.icon" :size="20" /></span>
            <span class="related-name">{{ r.name }}</span>
            <span class="related-tagline">{{ r.tagline }}</span>
            <span class="related-cta">Open <ArrowRight :size="14" /></span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.calc-head {
  padding-block: 40px 8px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--ink-faint);
  margin-bottom: 20px;
}

.breadcrumb a:hover {
  color: var(--accent);
}

.calc-title-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.calc-title-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  flex-shrink: 0;
}

.calc-intro {
  margin-top: 14px;
  max-width: 720px;
  font-size: 1.05rem;
}

.calc-card {
  padding: 32px;
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
  display: grid;
  gap: 8px;
  align-content: start;
  padding: 20px;
  transition: border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;
}

.related-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-2);
}

.related-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.related-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
}

.related-tagline {
  font-size: 0.85rem;
  color: var(--ink-soft);
}

.related-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
}

@media (max-width: 768px) {
  .calc-card {
    padding: 20px;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
