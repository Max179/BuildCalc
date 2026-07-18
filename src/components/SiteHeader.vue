<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Hammer, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <router-link to="/" class="brand" aria-label="BuildCalc home">
        <span class="brand-mark"><Hammer :size="20" :stroke-width="2.2" /></span>
        <span class="brand-name">BuildCalc</span>
      </router-link>

      <nav class="nav-desktop" aria-label="Primary">
        <router-link to="/#calculators" class="nav-link">Calculators</router-link>
        <router-link to="/guides/" class="nav-link">Guides</router-link>
        <router-link to="/about/" class="nav-link">About</router-link>
      </nav>

      <button
        class="nav-toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>

    <nav v-show="menuOpen" class="nav-mobile" aria-label="Mobile">
      <router-link to="/#calculators" class="nav-mobile-link">Calculators</router-link>
      <router-link to="/guides/" class="nav-mobile-link">Guides</router-link>
      <router-link to="/about/" class="nav-mobile-link">About</router-link>
      <router-link to="/contact/" class="nav-mobile-link">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--slate);
  border-bottom: 1px solid rgba(244, 240, 233, 0.1);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--on-slate);
  letter-spacing: -0.01em;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--on-slate-soft);
  transition: color 120ms ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--on-slate);
}

.nav-toggle {
  display: none;
  padding: 8px;
  border: none;
  background: none;
  color: var(--on-slate);
  cursor: pointer;
}

.nav-mobile {
  display: none;
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .nav-toggle {
    display: grid;
    place-items: center;
  }

  .nav-mobile {
    display: grid;
    gap: 4px;
    padding: 12px 18px 18px;
    background: var(--slate-deep);
  }

  .nav-mobile-link {
    padding: 12px 8px;
    border-radius: 8px;
    font-weight: 600;
    color: var(--on-slate-soft);
  }

  .nav-mobile-link:hover {
    background: rgba(244, 240, 233, 0.06);
    color: var(--on-slate);
  }
}
</style>
