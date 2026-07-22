<script setup lang="ts">
import { Check, X, ExternalLink } from 'lucide-vue-next'
import type { Product } from '@/data/types'
import { appendAffiliateTag } from '@/lib/affiliate'
import StarRating from './StarRating.vue'

// 产品卡：评分徽章 + 名称 + 星级 + 优缺点 + 参数 + 多平台购买按钮
defineProps<{ product: Product; featured?: boolean }>()

const amazonTag = import.meta.env.VITE_AMAZON_TAG as string | undefined
const withTag = (url: string) => appendAffiliateTag(url, amazonTag)
</script>

<template>
  <article class="product-card" :class="{ featured }">
    <div v-if="product.badge" class="product-badge">{{ product.badge }}</div>

    <header class="product-head">
      <div class="product-brand">{{ product.brand }}</div>
      <h3 class="product-name">{{ product.name }}</h3>
      <StarRating :rating="product.rating" :count="product.reviewCount" />
      <p class="product-best-for">Best for {{ product.bestFor }}</p>
    </header>

    <div class="product-body">
      <div class="product-col">
        <h4 class="col-title pros-title">
          <Check :size="16" /> Pros
        </h4>
        <ul class="product-list">
          <li v-for="(pro, i) in product.pros" :key="i">{{ pro }}</li>
        </ul>
      </div>
      <div class="product-col">
        <h4 class="col-title cons-title">
          <X :size="16" /> Cons
        </h4>
        <ul class="product-list">
          <li v-for="(con, i) in product.cons" :key="i">{{ con }}</li>
        </ul>
      </div>
    </div>

    <dl class="product-specs">
      <div v-for="(value, key) in product.specs" :key="key" class="spec-row">
        <dt>{{ key }}</dt>
        <dd>{{ value }}</dd>
      </div>
    </dl>

    <footer class="product-foot">
      <div class="product-price">
        <span class="price-num">{{ product.price }}</span>
        <span v-if="product.priceNote" class="price-note">{{ product.priceNote }}</span>
      </div>
      <div class="product-actions">
        <a
          v-for="link in product.buyLinks"
          :key="link.retailer"
          :href="withTag(link.url)"
          target="_blank"
          rel="sponsored nofollow noopener"
          class="buy-btn"
          :class="{ primary: link.retailer === 'Amazon' }"
        >
          {{ link.label }} at {{ link.retailer }}
          <ExternalLink :size="14" />
        </a>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.product-card {
  position: relative;
  display: grid;
  gap: 20px;
  padding: 28px;
  background: var(--paper-raised);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  transition:
    border-color 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;
}

.product-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}

.product-card.featured {
  border: 2px solid var(--accent);
  padding: 32px;
}

.product-badge {
  position: absolute;
  top: -12px;
  left: 24px;
  padding: 6px 14px;
  background: var(--success);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: var(--shadow-1);
}

.product-card.featured .product-badge {
  background: var(--accent);
}

.product-head {
  display: grid;
  gap: 8px;
}

.product-brand {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.product-name {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--ink);
}

.product-best-for {
  font-size: 0.9rem;
  color: var(--ink-soft);
  font-style: italic;
}

.product-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-block: 16px;
  border-block: 1px solid var(--line-soft);
}

.col-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.pros-title {
  color: var(--success);
}

.cons-title {
  color: #b3402e;
}

.product-list {
  display: grid;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-list li {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--ink-soft);
  padding-left: 16px;
  position: relative;
}

.product-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ink-faint);
}

.product-specs {
  display: grid;
  gap: 8px;
  margin: 0;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.85rem;
}

.spec-row dt {
  color: var(--ink-faint);
  font-weight: 500;
}

.spec-row dd {
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--ink);
  text-align: right;
}

.product-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.product-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.price-num {
  font-family: var(--font-mono);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ink);
}

.price-note {
  font-size: 0.8rem;
  color: var(--ink-faint);
}

.product-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.buy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  color: var(--ink);
  transition:
    background 140ms ease,
    color 140ms ease,
    border-color 140ms ease;
}

.buy-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.buy-btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-on);
}

.buy-btn.primary:hover {
  background: var(--accent-strong);
  border-color: var(--accent-strong);
  color: var(--accent-on);
}

@media (max-width: 640px) {
  .product-body {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .product-foot {
    flex-direction: column;
    align-items: stretch;
  }

  .product-actions {
    flex-direction: column;
  }

  .buy-btn {
    justify-content: center;
  }
}
</style>
