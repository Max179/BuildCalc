<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 广告位组件：未配置 VITE_ADSENSE_CLIENT 时渲染中性占位；配置后输出 AdSense 单元
const props = withDefaults(
  defineProps<{
    slot?: string
    format?: 'horizontal' | 'rectangle'
  }>(),
  { format: 'horizontal' },
)

const client = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined
const enabled = Boolean(client && props.slot)
const adEl = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!enabled || !adEl.value) return
  try {
    const w = window as unknown as { adsbygoogle?: unknown[] }
    w.adsbygoogle = w.adsbygoogle || []
    w.adsbygoogle.push({})
  } catch {
    // AdSense 脚本未加载或被拦截时静默降级
  }
})
</script>

<template>
  <div class="ad-wrap" :class="`ad-${format}`">
    <ins
      v-if="enabled"
      ref="adEl"
      class="adsbygoogle"
      style="display: block"
      :data-ad-client="client"
      :data-ad-slot="slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    <div v-else class="ad-slot" role="complementary" aria-label="Advertisement placeholder">
      <span>Advertisement</span>
    </div>
  </div>
</template>

<style scoped>
.ad-wrap {
  margin-block: 8px;
}

.ad-rectangle .ad-slot {
  min-height: 250px;
}
</style>
