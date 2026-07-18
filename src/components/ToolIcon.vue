<script setup lang="ts">
import { computed } from 'vue'
import {
  Blocks,
  PaintRoller,
  Layers,
  Sprout,
  Mountain,
  Square,
  LayoutGrid,
  House,
  Hammer,
  type LucideIcon,
} from 'lucide-vue-next'

// 内容数据 icon 字段 → lucide 组件映射（新增计算器时从此表选键）
const iconMap: Record<string, LucideIcon> = {
  blocks: Blocks,
  'paint-roller': PaintRoller,
  layers: Layers,
  sprout: Sprout,
  mountain: Mountain,
  square: Square,
  grid: LayoutGrid,
  house: House,
  hammer: Hammer,
}

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 24 })
const icon = computed(() => iconMap[props.name] ?? Hammer)
</script>

<template>
  <component :is="icon" :size="size" :stroke-width="1.8" aria-hidden="true" />
</template>
