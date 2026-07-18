<script setup lang="ts">
// 结果统计块：等宽大数字 + 单位 + 说明，primary 变体用于主结果
withDefaults(
  defineProps<{
    label: string
    value: string
    unit?: string
    note?: string
    primary?: boolean
  }>(),
  { primary: false },
)
</script>

<template>
  <div class="stat" :class="{ primary }">
    <span class="stat-label">{{ label }}</span>
    <span class="stat-value mono">
      {{ value }}<small v-if="unit" class="stat-unit">{{ unit }}</small>
    </span>
    <span v-if="note" class="stat-note">{{ note }}</span>
  </div>
</template>

<style scoped>
.stat {
  display: grid;
  gap: 4px;
  padding: 16px 18px;
  border-radius: var(--radius);
  background: var(--paper-sunk);
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.stat-value {
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.2;
}

.stat-unit {
  margin-left: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink-faint);
}

.stat-note {
  font-size: 0.78rem;
  color: var(--ink-faint);
}

.stat.primary {
  background: var(--slate);
}

.stat.primary .stat-label {
  color: var(--on-slate-soft);
}

.stat.primary .stat-value {
  font-size: 2rem;
  color: var(--accent);
}

.stat.primary .stat-unit,
.stat.primary .stat-note {
  color: var(--on-slate-soft);
}
</style>
