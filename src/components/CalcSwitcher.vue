<script setup lang="ts">
import { calculatorMetas } from '@/data/calculators'
import ToolIcon from '@/components/ToolIcon.vue'

// 计算器快速切换条：8 个工具一键互切，当前项高亮，移动端横向滑动
defineProps<{ slug: string }>()

const shortName = (name: string) => name.replace(' Calculator', '')
</script>

<template>
  <nav class="switcher" aria-label="Switch calculator">
    <router-link
      v-for="c in calculatorMetas"
      :key="c.slug"
      :to="`/${c.slug}-calculator/`"
      class="switcher-item"
      :class="{ active: c.slug === slug }"
      :aria-current="c.slug === slug ? 'page' : undefined"
    >
      <ToolIcon :name="c.icon" :size="18" />
      <span>{{ shortName(c.name) }}</span>
    </router-link>
  </nav>
</template>

<style scoped>
.switcher {
  display: flex;
  gap: 4px;
  padding: 6px;
  background: var(--paper-sunk);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  scrollbar-width: none;
}

.switcher::-webkit-scrollbar {
  display: none;
}

.switcher-item {
  flex: 1 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 0.92rem;
  font-weight: 600;
  white-space: nowrap;
  color: var(--ink-soft);
  transition: background 140ms ease, color 140ms ease;
}

.switcher-item:hover {
  background: var(--paper-raised);
  color: var(--ink);
}

.switcher-item.active {
  background: var(--slate);
  color: var(--on-slate);
}

.switcher-item.active svg {
  color: var(--accent);
}
</style>
