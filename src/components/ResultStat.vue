<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'

// 结果统计块：等宽大数字 + 单位 + 说明，primary 变体用于主结果；数值变化时滚动动画
const props = withDefaults(
  defineProps<{
    label: string
    value: string
    unit?: string
    note?: string
    primary?: boolean
  }>(),
  { primary: false },
)

const display = ref(props.value)
let raf = 0

/** 提取值字符串的尾随非数字后缀（如 "10%" 的 %），动画后拼回 */
function splitSuffix(s: string): { numeric: string; suffix: string } {
  const m = s.match(/[^\d.,\s-]+$/)
  return m ? { numeric: s.slice(0, m.index), suffix: m[0] } : { numeric: s, suffix: '' }
}

watch(
  () => props.value,
  (next, prev) => {
    cancelAnimationFrame(raf)
    const { numeric: nextNum, suffix } = splitSuffix(next)
    const { numeric: prevNum } = splitSuffix(String(prev ?? ''))
    const to = parseFloat(nextNum.replace(/,/g, ''))
    const from = parseFloat(prevNum.replace(/,/g, ''))

    // 非数值或无变化时直接替换
    if (!Number.isFinite(to) || !Number.isFinite(from) || from === to) {
      display.value = next
      return
    }

    const decimals = (nextNum.split('.')[1] ?? '').length
    const duration = 260
    const t0 = performance.now()

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const v = from + (to - from) * eased
      const fixed = v.toFixed(decimals)
      const [intPart, decPart] = fixed.split('.')
      const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      display.value = (decPart ? `${withSep}.${decPart}` : withSep) + suffix
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  },
)

onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

<template>
  <div class="stat" :class="{ primary }">
    <span class="stat-label">{{ label }}</span>
    <span class="stat-value mono">
      {{ display }}<small v-if="unit" class="stat-unit">{{ unit }}</small>
    </span>
    <span v-if="note" class="stat-note">{{ note }}</span>
  </div>
</template>

<style scoped>
.stat {
  display: grid;
  gap: 6px;
  padding: 22px 24px;
  border-radius: var(--radius-lg);
  background: var(--paper-sunk);
}

.stat-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.stat-value {
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.15;
  font-variant-numeric: tabular-nums;
}

.stat-unit {
  margin-left: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink-faint);
}

.stat-note {
  font-size: 0.8rem;
  color: var(--ink-faint);
}

.stat.primary {
  background: var(--slate);
}

.stat.primary .stat-label {
  color: var(--on-slate-soft);
}

.stat.primary .stat-value {
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  color: var(--accent);
}

.stat.primary .stat-unit,
.stat.primary .stat-note {
  color: var(--on-slate-soft);
}
</style>
