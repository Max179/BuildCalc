<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, FlaskConical } from 'lucide-vue-next'
import { getReview } from '@/data/reviews'
import { getCalculator, getRelated } from '@/data/calculators'
import { useSEO, SITE_NAME, SITE_URL } from '@/composables/useSEO'
import ProductCard from '@/components/ProductCard.vue'
import AuthorByline from '@/components/AuthorByline.vue'
import AffiliateDisclosure from '@/components/AffiliateDisclosure.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'
import AdSlot from '@/components/AdSlot.vue'
import ToolIcon from '@/components/ToolIcon.vue'

const props = defineProps<{ slug: string }>()

const review = computed(() => getReview(props.slug))
const calculator = computed(() => (review.value ? getCalculator(review.value.calculatorSlug) : undefined))
const relatedCalcs = computed(() => (calculator.value ? getRelated(calculator.value.related) : []))

useSEO(
  computed(() => {
    const r = review.value
    const path = `/reviews/${props.slug}/`
    if (!r) return { title: `Review not found — ${SITE_NAME}`, description: '', path }

    const allProducts = [r.topPick, ...r.picks]
    return {
      title: `${r.title} | ${SITE_NAME}`,
      description: r.description,
      path,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: r.title,
          description: r.description,
          datePublished: r.date,
          dateModified: r.updated,
          author: { '@type': 'Organization', name: r.author },
          publisher: { '@type': 'Organization', name: SITE_NAME },
          mainEntityOfPage: `${SITE_URL}${path}`,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: r.title,
          numberOfItems: allProducts.length,
          itemListElement: allProducts.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Product',
              name: p.name,
              brand: { '@type': 'Brand', name: p.brand },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: p.rating,
                reviewCount: p.reviewCount ?? 1,
                bestRating: 5,
              },
              offers: {
                '@type': 'Offer',
                price: p.price.replace(/[^0-9.]/g, ''),
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
            },
          })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: r.faqs.map((f) => ({
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
            { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/reviews/` },
            { '@type': 'ListItem', position: 3, name: r.title, item: `${SITE_URL}${path}` },
          ],
        },
      ],
    }
  }),
)
</script>

<template>
  <div v-if="review">
    <!-- 页头 -->
    <section class="review-head">
      <div class="container prose-wrap">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <router-link to="/">Home</router-link>
          <span aria-hidden="true">/</span>
          <router-link to="/reviews/">Reviews</router-link>
          <span aria-hidden="true">/</span>
          <span>{{ review.title }}</span>
        </nav>
        <h1>{{ review.title }}</h1>
        <AuthorByline
          class="review-byline"
          :author="review.author"
          :reviewer="review.reviewer"
          :updated="review.updated"
        />
      </div>
    </section>

    <div class="container prose-wrap">
      <AffiliateDisclosure />

      <!-- 开头段落 -->
      <section class="review-intro">
        <p v-for="(para, i) in review.intro" :key="i">{{ para }}</p>
      </section>

      <!-- 主推产品 -->
      <section class="review-section">
        <h2 class="section-title">Our Top Pick</h2>
        <ProductCard :product="review.topPick" featured />
        <AffiliateDisclosure variant="inline" />
      </section>

      <!-- 其他推荐 -->
      <section class="review-section">
        <h2 class="section-title">Also Great</h2>
        <div class="picks-list">
          <ProductCard v-for="p in review.picks" :key="p.id" :product="p" />
        </div>
      </section>

      <AdSlot />

      <!-- 对比表 -->
      <section class="review-section">
        <h2 class="section-title">How They Compare</h2>
        <div class="table-scroll">
          <table class="data-table comparison-table">
            <thead>
              <tr>
                <th v-for="h in review.comparisonTable.headers" :key="h">{{ h }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in review.comparisonTable.rows" :key="i">
                <td v-for="(cell, j) in row" :key="j" :class="{ num: j > 0 }">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-if="review.comparisonTable.note" class="table-note">
          {{ review.comparisonTable.note }}
        </p>
      </section>

      <!-- 购买指南 -->
      <section class="review-section">
        <h2 class="section-title">Buying Guide</h2>
        <div v-for="(section, i) in review.buyingGuide" :key="i" class="guide-block">
          <h3 v-if="section.heading">{{ section.heading }}</h3>
          <p v-for="(para, j) in section.paragraphs" :key="`p-${j}`">{{ para }}</p>
          <ul v-if="section.list">
            <li v-for="(item, k) in section.list" :key="k">{{ item }}</li>
          </ul>
        </div>
      </section>

      <!-- 我们如何测试 -->
      <section class="review-section how-tested">
        <h2 class="section-title">
          <FlaskConical :size="22" /> How We Tested
        </h2>
        <p v-for="(para, i) in review.howWeTested" :key="i">{{ para }}</p>
      </section>

      <AdSlot />

      <!-- FAQ -->
      <section class="review-section">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <FaqAccordion :items="review.faqs" />
      </section>

      <!-- 关联计算器 CTA -->
      <section v-if="calculator" class="calc-cta">
        <div class="calc-cta-inner">
          <span class="calc-cta-icon"><ToolIcon :name="calculator.icon" :size="28" /></span>
          <div class="calc-cta-text">
            <h3>Ready to buy? Calculate exactly how much you need.</h3>
            <p>
              Use our free {{ calculator.name }} to get precise quantities before you head to the
              store — no more over-buying or mid-project runs.
            </p>
          </div>
          <router-link :to="`/${calculator.slug}-calculator/`" class="calc-cta-btn">
            Open {{ calculator.name }} <ArrowRight :size="18" />
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.review-head {
  padding-block: 36px 20px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--ink-faint);
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.breadcrumb a:hover {
  color: var(--accent);
}

.review-head h1 {
  font-size: clamp(1.9rem, 3.6vw, 2.7rem);
  line-height: 1.2;
}

.review-byline {
  margin-top: 16px;
}

.prose-wrap {
  max-width: 860px;
}

.review-intro {
  margin-top: 24px;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--ink-soft);
  display: grid;
  gap: 16px;
}

.review-section {
  margin-top: 48px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(1.4rem, 2.4vw, 1.8rem);
  margin-bottom: 22px;
}

.section-title svg {
  color: var(--accent);
}

.picks-list {
  display: grid;
  gap: 24px;
}

.table-scroll {
  overflow-x: auto;
}

.comparison-table {
  min-width: 640px;
}

.table-note {
  margin-top: 12px;
  font-size: 0.82rem;
  color: var(--ink-faint);
  font-style: italic;
}

.guide-block {
  margin-bottom: 28px;
}

.guide-block h3 {
  font-size: 1.15rem;
  margin-bottom: 12px;
}

.guide-block p {
  line-height: 1.75;
  color: var(--ink-soft);
  margin-bottom: 12px;
}

.guide-block ul {
  padding-left: 22px;
  display: grid;
  gap: 8px;
  line-height: 1.6;
  color: var(--ink-soft);
}

.how-tested {
  padding: 28px;
  background: var(--paper-sunk);
  border-radius: var(--radius-lg);
  border-left: 3px solid var(--accent);
}

.how-tested p {
  line-height: 1.75;
  color: var(--ink-soft);
  margin-bottom: 12px;
}

.calc-cta {
  margin-block: 56px 48px;
}

.calc-cta-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background: var(--slate);
  color: var(--on-slate);
  border-radius: var(--radius-lg);
}

.calc-cta-icon {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(244, 240, 233, 0.1);
  color: var(--accent);
  flex-shrink: 0;
}

.calc-cta-text {
  flex: 1;
}

.calc-cta-text h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.calc-cta-text p {
  font-size: 0.92rem;
  color: var(--on-slate-soft);
  line-height: 1.6;
}

.calc-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: var(--accent);
  color: var(--accent-on);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius);
  white-space: nowrap;
  transition: background 140ms ease;
}

.calc-cta-btn:hover {
  background: var(--accent-strong);
}

@media (max-width: 768px) {
  .calc-cta-inner {
    flex-direction: column;
    text-align: center;
  }

  .calc-cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
