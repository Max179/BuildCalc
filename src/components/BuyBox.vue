<script setup lang="ts">
import { ArrowUpRight, ShoppingCart } from 'lucide-vue-next'
import type { BuyLink } from '@/data/types'
import { appendAffiliateTag } from '@/lib/affiliate'

// 结果页购买推荐：Amazon 搜索链接即插即用；配置 VITE_AMAZON_TAG 后自动附加联盟 tag
defineProps<{ links: BuyLink[] }>()

const amazonTag = import.meta.env.VITE_AMAZON_TAG as string | undefined

function withTag(url: string): string {
  return appendAffiliateTag(url, amazonTag)
}
</script>

<template>
  <aside class="buy-box" aria-label="Where to buy">
    <div class="buy-head">
      <ShoppingCart :size="18" />
      <h3>Buy materials for this project</h3>
    </div>
    <ul class="buy-list">
      <li v-for="link in links" :key="link.label">
        <a :href="withTag(link.url)" target="_blank" rel="sponsored nofollow noopener" class="buy-link">
          <span class="buy-label">{{ link.label }}</span>
          <span v-if="link.note" class="buy-note">{{ link.note }}</span>
          <ArrowUpRight :size="16" class="buy-arrow" />
        </a>
      </li>
    </ul>
    <p class="buy-disclosure">
      Prices are estimates and may vary by store. As an affiliate, we may earn a commission on
      qualifying purchases at no extra cost to you.
    </p>
  </aside>
</template>

<style scoped>
.buy-box {
  margin-top: 20px;
  padding: 24px 28px;
  border: 1px dashed var(--line);
  border-radius: var(--radius-lg);
  background: var(--paper-sunk);
}

.buy-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  color: var(--ink);
}

.buy-head h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
}

.buy-head svg {
  color: var(--accent);
}

.buy-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.buy-link {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  background: var(--paper-raised);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  transition: border-color 140ms ease, transform 140ms ease;
  position: relative;
}

.buy-link:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.buy-label {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink);
  padding-right: 20px;
}

.buy-note {
  font-size: 0.8rem;
  color: var(--ink-faint);
}

.buy-arrow {
  position: absolute;
  top: 14px;
  right: 14px;
  color: var(--ink-faint);
  transition: color 140ms ease;
}

.buy-link:hover .buy-arrow {
  color: var(--accent);
}

.buy-disclosure {
  margin-top: 14px;
  font-size: 0.75rem;
  color: var(--ink-faint);
}

@media (max-width: 768px) {
  .buy-list {
    grid-template-columns: 1fr;
  }
}
</style>
