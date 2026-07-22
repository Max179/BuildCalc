<script setup lang="ts">
import { computed } from 'vue'
import { legalPages } from '@/data/legal'
import { useSEO, SITE_NAME } from '@/composables/useSEO'

const props = defineProps<{ page: 'privacy' | 'terms' | 'about' | 'contact' | 'affiliate' }>()

const content = computed(() => legalPages[props.page])

useSEO(
  computed(() => {
    const pathMap: Record<string, string> = {
      privacy: '/privacy-policy/',
      terms: '/terms/',
      about: '/about/',
      contact: '/contact/',
      affiliate: '/affiliate-disclosure/',
    }
    return {
      title: `${content.value.title} — ${SITE_NAME}`,
      description: content.value.description,
      path: pathMap[props.page] ?? `/${props.page}/`,
    }
  }),
)
</script>

<template>
  <section class="section">
    <div class="container">
      <article class="prose">
        <h1>{{ content.title }}</h1>
        <template v-for="(section, i) in content.sections" :key="i">
          <h2 v-if="section.heading">{{ section.heading }}</h2>
          <p v-for="(p, j) in section.paragraphs" :key="j">{{ p }}</p>
        </template>
      </article>
    </div>
  </section>
</template>
