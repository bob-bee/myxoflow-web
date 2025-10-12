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
/* copy action button styles */
</style>
