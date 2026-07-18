<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { getGuide } from '@/data/guides'
import { getCalculator } from '@/data/calculators'
import { useSEO, SITE_NAME, SITE_URL } from '@/composables/useSEO'
import AdSlot from '@/components/AdSlot.vue'

const props = defineProps<{ slug: string }>()

const guide = computed(() => getGuide(props.slug))
const calculator = computed(() =>
  guide.value ? getCalculator(guide.value.calculatorSlug) : undefined,
)

useSEO(
  computed(() => {
    const g = guide.value
    const path = `/guides/${props.slug}/`
    if (!g) {
      return { title: `Guide not found — ${SITE_NAME}`, description: '', path }
    }
    return {
      title: `${g.title} — ${SITE_NAME}`,
      description: g.description,
      path,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: g.title,
        description: g.description,
        datePublished: g.date,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: `${SITE_URL}${path}`,
      },
    }
  }),
)
</script>

<template>
  <section v-if="guide" class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <router-link to="/">Home</router-link>
        <span aria-hidden="true">/</span>
        <router-link to="/guides/">Guides</router-link>
        <span aria-hidden="true">/</span>
        <span>{{ guide.title }}</span>
      </nav>

      <article class="prose">
        <h1>{{ guide.title }}</h1>
        <p class="guide-meta muted">Updated {{ guide.date }}</p>

        <template v-for="(section, i) in guide.sections" :key="i">
          <h2 v-if="section.heading">{{ section.heading }}</h2>
          <p v-for="(p, j) in section.paragraphs ?? []" :key="`p-${j}`">{{ p }}</p>
          <ol v-if="section.list" :class="{ 'as-ul': false }">
            <li v-for="(item, k) in section.list" :key="k">{{ item }}</li>
          </ol>
        </template>

        <AdSlot />

        <div v-if="calculator" class="guide-cta-box">
          <h3>Run the numbers</h3>
          <p>{{ calculator.tagline }}</p>
          <router-link :to="`/${calculator.slug}-calculator/`" class="btn">
            Open the {{ calculator.name }} <ArrowRight :size="16" />
          </router-link>
        </div>
      </article>
    </div>
  </section>

  <section v-else class="section">
    <div class="container prose">
      <h1>Guide not found</h1>
      <p>The guide you are looking for does not exist.</p>
      <router-link to="/guides/" class="btn">Browse all guides</router-link>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: var(--ink-faint);
  margin-bottom: 28px;
}

.breadcrumb a:hover {
  color: var(--accent);
}

.guide-meta {
  font-size: 0.85rem;
}

.guide-cta-box {
  margin-top: 48px;
  padding: 28px;
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  background: var(--paper-sunk);
  display: grid;
  gap: 10px;
  justify-items: start;
}
</style>
