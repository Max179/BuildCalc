<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight, ArrowRight } from 'lucide-vue-next'
import { getCalculator, getRelated } from '@/data/calculators'
import { getReviewByCalculator } from '@/data/reviews'
import { calcComponents } from '@/calculators'
import { useSEO, SITE_NAME, SITE_URL } from '@/composables/useSEO'
import ToolIcon from '@/components/ToolIcon.vue'
import AdSlot from '@/components/AdSlot.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'
import CalcSwitcher from '@/components/CalcSwitcher.vue'
import BuyBox from '@/components/BuyBox.vue'
import AuthorByline from '@/components/AuthorByline.vue'
import StarRating from '@/components/StarRating.vue'
import { asset } from '@/utils/asset'

const props = defineProps<{ slug: string }>()

const content = computed(() => getCalculator(props.slug))
const calcComponent = computed(() => calcComponents[props.slug])
const related = computed(() => (content.value ? getRelated(content.value.related) : []))
// 关联产品评测（商业闭环：计算器 → 评测 → 联盟）
const linkedReview = computed(() => getReviewByCalculator(props.slug))
// 页头配图：public/images/tool-{slug}.jpg
const photoSrc = computed(() => asset(`images/tool-${props.slug}.jpg`))

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
          <img class="calc-photo" :src="photoSrc" :alt="`${content.name} — project photo`" />
        </div>
        <AuthorByline
          class="calc-byline"
          author="BuildCalc Editorial Team"
          :reviewer="linkedReview?.reviewer"
          :updated="linkedReview?.updated ?? '2026-01-15'"
        />
        <p class="calc-intro">{{ content.intro }}</p>
      </div>
    </section>

    <!-- 计算器本体 -->
    <section class="calc-section">
      <div class="container">
        <CalcSwitcher :slug="slug" class="calc-switcher" />
        <div class="card calc-card" v-reveal>
          <component :is="calcComponent" v-if="calcComponent" />
          <p v-else class="calc-empty">This calculator is coming soon.</p>
        </div>
        <BuyBox v-if="content.buyLinks?.length" :links="content.buyLinks" />
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

    <!-- 关联产品评测（商业闭环） -->
    <section v-if="linkedReview" class="section-sm">
      <div class="container" v-reveal>
        <h2 class="related-title">Buying Guide &amp; Top Picks</h2>
        <router-link :to="`/reviews/${linkedReview.slug}/`" class="review-banner">
          <div class="review-banner-badge">{{ linkedReview.topPick.badge }}</div>
          <div class="review-banner-body">
            <h3 class="review-banner-title">{{ linkedReview.title }}</h3>
            <p class="review-banner-desc">{{ linkedReview.description }}</p>
            <div class="review-banner-pick">
              <span class="pick-label">Top Pick:</span>
              <span class="pick-name">{{ linkedReview.topPick.name }}</span>
              <StarRating :rating="linkedReview.topPick.rating" />
            </div>
          </div>
          <div class="review-banner-foot">
            <span class="review-banner-price">{{ linkedReview.topPick.price }}</span>
            <span class="review-banner-cta">
              Read the full review <ArrowRight :size="18" />
            </span>
          </div>
        </router-link>
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
  padding-block: 32px 4px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--ink-faint);
  margin-bottom: 16px;
}

.breadcrumb a:hover {
  color: var(--accent);
}

.calc-title-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.calc-title-row h1 {
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
}

.calc-title-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  flex-shrink: 0;
}

.calc-intro {
  margin-top: 10px;
  max-width: 680px;
  font-size: 0.95rem;
  color: var(--ink-faint);
}

.calc-byline {
  margin-top: 14px;
}

/* 关联评测横幅 */
.review-banner {
  position: relative;
  display: grid;
  gap: 18px;
  padding: 32px;
  background: var(--paper-raised);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  transition:
    border-color 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;
}

.review-banner:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-2);
}

.review-banner-badge {
  position: absolute;
  top: -12px;
  left: 28px;
  padding: 6px 14px;
  background: var(--accent);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: var(--shadow-1);
}

.review-banner-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--ink);
  margin-bottom: 10px;
}

.review-banner-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--ink-soft);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.review-banner-pick {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
  padding: 14px 18px;
  background: var(--paper-sunk);
  border-radius: var(--radius);
  border-left: 3px solid var(--accent);
}

.pick-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.pick-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink);
}

.review-banner-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.review-banner-price {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ink);
}

.review-banner-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  background: var(--accent);
  color: var(--accent-on);
  font-weight: 600;
  font-size: 0.92rem;
  border-radius: var(--radius);
  transition: background 140ms ease;
}

.review-banner:hover .review-banner-cta {
  background: var(--accent-strong);
}

.calc-photo {
  margin-left: auto;
  width: 210px;
  height: 118px;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
}

.calc-switcher {
  margin-bottom: 20px;
}

.calc-section {
  padding-block: 24px 48px;
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

  .calc-photo {
    display: none;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
