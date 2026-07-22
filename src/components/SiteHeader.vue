<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Hammer, Menu, X, ChevronDown } from 'lucide-vue-next'
import { calculatorMetas } from '@/data/calculators'
import ToolIcon from '@/components/ToolIcon.vue'

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
        <div class="nav-item">
          <router-link to="/#calculators" class="nav-link nav-dropdown-toggle">
            Calculators <ChevronDown :size="14" />
          </router-link>
          <div class="dropdown">
            <router-link
              v-for="c in calculatorMetas"
              :key="c.slug"
              :to="`/${c.slug}-calculator/`"
              class="dropdown-link"
            >
              <ToolIcon :name="c.icon" :size="16" />
              <span>{{ c.name }}</span>
            </router-link>
          </div>
        </div>
        <router-link to="/reviews/" class="nav-link">Reviews</router-link>
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
      <router-link to="/reviews/" class="nav-mobile-link">Reviews</router-link>
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
  background: rgba(46, 58, 56, 0.82);
  -webkit-backdrop-filter: blur(14px) saturate(1.3);
  backdrop-filter: blur(14px) saturate(1.3);
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

.nav-dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nav-item {
  position: relative;
}

.dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translate(-50%, -4px);
  min-width: 250px;
  padding: 8px;
  display: grid;
  gap: 2px;
  background: rgba(255, 255, 255, 0.86);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 140ms ease, transform 140ms ease, visibility 140ms;
  z-index: 60;
}

/* 桥接悬停间隙，防止移入下拉时消失 */
.dropdown::before {
  content: '';
  position: absolute;
  top: -14px;
  left: 0;
  right: 0;
  height: 14px;
}

.nav-item:hover .dropdown,
.nav-item:focus-within .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

.dropdown-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ink);
  transition: background 120ms ease, color 120ms ease;
}

.dropdown-link svg {
  color: var(--accent-strong);
}

.dropdown-link:hover {
  background: var(--accent-soft);
  color: var(--accent-strong);
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
