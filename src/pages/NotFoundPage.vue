<script setup lang="ts">
import { calculatorMetas } from '@/data/calculators'
import ToolIcon from '@/components/ToolIcon.vue'
import { useSEO, SITE_NAME } from '@/composables/useSEO'

useSEO({
  title: `Page not found — ${SITE_NAME}`,
  description: 'The page you are looking for does not exist.',
  path: '/404',
})
</script>

<template>
  <section class="section">
    <div class="container notfound">
      <span class="notfound-code mono">404</span>
      <h1>This page is off the blueprint.</h1>
      <p>The page you are looking for doesn't exist. Try one of our calculators instead:</p>

      <div class="notfound-grid">
        <router-link
          v-for="c in calculatorMetas"
          :key="c.slug"
          :to="`/${c.slug}-calculator/`"
          class="notfound-link"
        >
          <ToolIcon :name="c.icon" :size="18" />
          <span>{{ c.name }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.notfound {
  display: grid;
  justify-items: start;
  gap: 16px;
  max-width: 720px;
}

.notfound-code {
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--accent);
}

.notfound-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 8px;
}

.notfound-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  background: var(--paper-raised);
  font-weight: 600;
  font-size: 0.92rem;
  transition: border-color 140ms ease, color 140ms ease;
}

.notfound-link:hover {
  border-color: var(--accent);
  color: var(--accent-strong);
}

@media (max-width: 560px) {
  .notfound-grid {
    grid-template-columns: 1fr;
  }
}
</style>
