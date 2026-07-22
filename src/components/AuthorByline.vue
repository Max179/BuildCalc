<script setup lang="ts">
import { CalendarDays, UserCheck } from 'lucide-vue-next'

// 作者署名行：By X · Reviewed by Y · Updated date — E-E-A-T 信任信号
defineProps<{ author: string; reviewer?: string; updated: string }>()

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
  <div class="byline">
    <span class="byline-item">
      <UserCheck :size="14" />
      By <strong>{{ author }}</strong>
    </span>
    <span v-if="reviewer" class="byline-item byline-reviewer">
      Reviewed by <strong>{{ reviewer }}</strong>
    </span>
    <span class="byline-item">
      <CalendarDays :size="14" />
      Updated <time :datetime="updated">{{ formatDate(updated) }}</time>
    </span>
  </div>
</template>

<style scoped>
.byline {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  font-size: 0.82rem;
  color: var(--ink-faint);
}

.byline-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.byline-item strong {
  color: var(--ink-soft);
  font-weight: 600;
}

.byline-reviewer {
  padding-left: 18px;
  border-left: 1px solid var(--line);
}

.byline-item svg {
  color: var(--accent);
}

@media (max-width: 640px) {
  .byline-reviewer {
    padding-left: 0;
    border-left: none;
  }
}
</style>
