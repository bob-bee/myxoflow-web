<template>
  <div class="header-actions">
    <button
      class="search-toggle"
      @click="ui.toggleSearch"
      :aria-label="ui.search.isOpen ? 'Close' : 'Open'"
    >
      <!-- icon SVG -->
    </button>
    <router-link to="/contact" class="btn btn-primary header-cta">{{ ctaText }}</router-link>
    <button class="nav-toggle" @click="ui.toggleMenu" :class="{ active: ui.navigation.isMenuOpen }">
      <span /><span /><span />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUIStore } from '@/stores/useUIStore'
import { useContentStore } from '@/stores/useContentStore'

const ui = useUIStore()
const cs = useContentStore()
const ctaText = cs.cta.primaryAction.text
</script>
<style scoped>
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Search toggle button */
.search-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.search-toggle:hover {
  background-color: rgba(13, 110, 253, 0.1);
}

/* Primary CTA button */
.header-cta {
  padding: 10px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background-color: #0d6efd; /* primary brand color */
  border-radius: 6px;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.header-cta:hover {
  background-color: #0b5ed7;
  transform: translateY(-1px);
}

/* Hamburger / nav toggle */
.nav-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  gap: 4px;
}

.nav-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #111;
  border-radius: 2px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

/* Animate hamburger to X when active */
.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}
.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .header-actions {
    gap: 8px;
  }

  .header-cta {
    padding: 8px 14px;
    font-size: 0.85rem;
  }

  .nav-toggle {
    width: 24px;
    height: 18px;
  }
}
</style>
