<script setup lang="ts">
import { Info } from 'lucide-vue-next'

// FTC 联盟披露横幅：产品评测页顶部 + 产品卡区域
withDefaults(defineProps<{ variant?: 'banner' | 'inline' }>(), { variant: 'banner' })
</script>

<template>
  <div v-if="variant === 'banner'" class="disclosure-banner" role="note">
    <Info :size="16" />
    <p>
      <strong>Affiliate Disclosure:</strong> We may earn revenue from the products featured on
      this page and participate in affiliate programs. This never influences our recommendations —
      we test and score products independently.
      <router-link to="/affiliate-disclosure/">Learn more</router-link>
    </p>
  </div>
  <p v-else class="disclosure-inline">
    As an affiliate, we may earn a commission on qualifying purchases at no extra cost to you.
  </p>
</template>

<style scoped>
.disclosure-banner {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 18px;
  background: var(--paper-sunk);
  border: 1px solid var(--line-soft);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius);
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--ink-soft);
}

.disclosure-banner svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--accent);
}

.disclosure-banner p {
  margin: 0;
}

.disclosure-banner a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: underline;
}

.disclosure-inline {
  margin: 12px 0 0;
  font-size: 0.75rem;
  color: var(--ink-faint);
  line-height: 1.5;
}
</style>
