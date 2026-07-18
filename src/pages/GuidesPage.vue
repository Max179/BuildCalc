<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { guides } from '@/data/guides'
import { useSEO, SITE_NAME } from '@/composables/useSEO'

useSEO({
  title: `Measurement Guides — ${SITE_NAME}`,
  description:
    'Step-by-step guides for measuring concrete, paint, flooring and more — avoid over-buying or running short on your next project.',
  path: '/guides/',
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Guides</span>
        <h1>Measure it right the first time.</h1>
        <p>
          Practical measurement walkthroughs that pair with our calculators — so you order the
          right amount of material the first time.
        </p>
      </div>

      <div class="guide-list">
        <router-link
          v-for="g in guides"
          :key="g.slug"
          :to="`/guides/${g.slug}/`"
          class="guide-row card"
        >
          <div class="guide-row-main">
            <h2 class="guide-row-title">{{ g.title }}</h2>
            <p class="guide-row-desc">{{ g.description }}</p>
            <span class="guide-row-date muted">{{ g.date }}</span>
          </div>
          <span class="guide-row-cta">Read <ArrowRight :size="14" /></span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.guide-list {
  display: grid;
  gap: 14px;
  max-width: 860px;
}

.guide-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 28px;
  transition: border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;
}

.guide-row:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}

.guide-row-title {
  font-size: 1.2rem;
}

.guide-row-desc {
  margin-top: 6px;
  font-size: 0.92rem;
}

.guide-row-date {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.8rem;
}

.guide-row-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent);
}
</style>
