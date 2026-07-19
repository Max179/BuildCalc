<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import type { FaqItem } from '@/data/types'

defineProps<{ items: FaqItem[] }>()

const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <div class="faq">
    <div v-for="(item, i) in items" :key="i" class="faq-item">
      <button
        class="faq-q"
        :aria-expanded="openIndex === i"
        :aria-controls="`faq-panel-${i}`"
        @click="toggle(i)"
      >
        <span>{{ item.q }}</span>
        <ChevronDown :size="18" class="faq-chevron" :class="{ open: openIndex === i }" />
      </button>
      <div :id="`faq-panel-${i}`" class="faq-a" :class="{ open: openIndex === i }">
        <div class="faq-a-inner">
          <p>{{ item.a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq {
  border-top: 1px solid var(--line);
}

.faq-item {
  border-bottom: 1px solid var(--line-soft);
}

.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 18px 4px;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: var(--ink);
  cursor: pointer;
  transition: color 120ms ease;
}

.faq-q:hover {
  color: var(--accent-strong);
}

.faq-chevron {
  flex-shrink: 0;
  color: var(--ink-faint);
  transition: transform 160ms ease;
}

.faq-chevron.open {
  transform: rotate(180deg);
  color: var(--accent);
}

.faq-a {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.faq-a.open {
  grid-template-rows: 1fr;
}

.faq-a-inner {
  overflow: hidden;
}

.faq-a p {
  padding: 0 4px 20px;
  max-width: 720px;
  line-height: 1.7;
}
</style>
