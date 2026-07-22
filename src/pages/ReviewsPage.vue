<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { reviews } from '@/data/reviews'
import { getCalculator } from '@/data/calculators'
import { useSEO, SITE_NAME, SITE_URL } from '@/composables/useSEO'
import StarRating from '@/components/StarRating.vue'

useSEO({
  title: `Product Reviews & Buying Guides — ${SITE_NAME}`,
  description:
    'Hands-on reviews of concrete mixes, interior paints, laminate flooring, mulch, gravel, drywall tools, tile and roofing shingles. Tested picks with pros, cons and prices.',
  path: '/reviews/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Product Reviews',
    numberOfItems: reviews.length,
    itemListElement: reviews.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.title,
      url: `${SITE_URL}/reviews/${r.slug}/`,
    })),
  },
})

const cards = computed(() =>
  reviews.map((r) => ({
    ...r,
    calculator: getCalculator(r.calculatorSlug),
  })),
)
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container">
        <h1>Product Reviews &amp; Buying Guides</h1>
        <p class="page-intro">
          We test and compare the top-rated materials and tools for every project — so you can buy
          once and buy right. Every pick is scored on quality, value and real-world performance.
        </p>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="reviews-grid">
          <router-link
            v-for="(r, i) in cards"
            :key="r.slug"
            v-reveal="i * 60"
            :to="`/reviews/${r.slug}/`"
            class="review-card card"
          >
            <div class="review-badge" v-if="r.topPick.badge">{{ r.topPick.badge }}</div>
            <div class="review-meta">
              <span class="review-category">{{ r.calculator?.category ?? 'Reviews' }}</span>
              <h2 class="review-title">{{ r.title }}</h2>
              <p class="review-desc">{{ r.description }}</p>
            </div>
            <div class="review-pick">
              <div class="pick-label">Top Pick</div>
              <div class="pick-name">{{ r.topPick.name }}</div>
              <StarRating :rating="r.topPick.rating" />
            </div>
            <div class="review-foot">
              <span class="review-price">{{ r.topPick.price }}</span>
              <span class="review-go" aria-hidden="true">
                Read review <ArrowUpRight :size="16" />
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-head {
  padding-block: 40px 8px;
}

.page-head h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
}

.page-intro {
  margin-top: 12px;
  max-width: 680px;
  font-size: 1rem;
  color: var(--ink-soft);
  line-height: 1.65;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.review-card {
  position: relative;
  display: grid;
  gap: 18px;
  align-content: space-between;
  padding: 30px;
  transition:
    border-color 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;
}

.review-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-2);
}

.review-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 5px 12px;
  background: var(--success);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 999px;
}

.review-category {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.review-title {
  margin-top: 8px;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--ink);
}

.review-desc {
  margin-top: 10px;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--ink-soft);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.review-pick {
  display: grid;
  gap: 6px;
  padding: 16px 18px;
  background: var(--paper-sunk);
  border-radius: var(--radius);
  border-left: 3px solid var(--accent);
}

.pick-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.pick-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink);
}

.review-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.review-price {
  font-family: var(--font-mono);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ink);
}

.review-go {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent);
}

@media (max-width: 768px) {
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>
