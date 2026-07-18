<script setup lang="ts">
import { calculatorMetas } from '@/data/calculators'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <span class="brand-name">BuildCalc</span>
        <p>
          Free construction material calculators with transparent formulas. No sign-up, no data
          collection — everything runs in your browser.
        </p>
      </div>

      <nav class="footer-col" aria-label="Calculators">
        <h4>Calculators</h4>
        <router-link
          v-for="c in calculatorMetas"
          :key="c.slug"
          :to="`/${c.slug}-calculator/`"
          class="footer-link"
        >
          {{ c.name }}
        </router-link>
      </nav>

      <nav class="footer-col" aria-label="Resources">
        <h4>Resources</h4>
        <router-link to="/guides/" class="footer-link">Guides</router-link>
        <router-link to="/about/" class="footer-link">About</router-link>
        <router-link to="/contact/" class="footer-link">Contact</router-link>
      </nav>

      <nav class="footer-col" aria-label="Legal">
        <h4>Legal</h4>
        <router-link to="/privacy-policy/" class="footer-link">Privacy Policy</router-link>
        <router-link to="/terms/" class="footer-link">Terms of Use</router-link>
      </nav>
    </div>

    <div class="container footer-bottom">
      <p>© {{ year }} BuildCalc. For estimation purposes only — verify quantities before purchase.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 80px;
  background: var(--slate-deep);
  color: var(--on-slate-soft);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-block: 56px 40px;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--on-slate);
}

.footer-brand p {
  margin-top: 12px;
  max-width: 320px;
  font-size: 0.9rem;
  color: var(--on-slate-soft);
}

.footer-col {
  display: grid;
  gap: 10px;
  align-content: start;
}

.footer-col h4 {
  margin-bottom: 6px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--on-slate);
}

.footer-link {
  font-size: 0.92rem;
  color: var(--on-slate-soft);
  transition: color 120ms ease;
}

.footer-link:hover {
  color: var(--accent);
}

.footer-bottom {
  padding-block: 20px;
  border-top: 1px solid rgba(244, 240, 233, 0.1);
}

.footer-bottom p {
  font-size: 0.8rem;
  color: var(--on-slate-soft);
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
