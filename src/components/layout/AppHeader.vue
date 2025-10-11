<template>
  <header class="app-header" :class="headerClasses">
    <div class="container header-content">
      <HeaderLogo />
      <DesktopNav />
      <HeaderActions />
    </div>
    <SearchOverlay />
    <MobileNav />
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useUIStore } from '@/stores/useUIStore'
import HeaderLogo from '@/components/layout/HeaderLogo.vue'
import DesktopNav from '@/components/layout/DesktopNav.vue'
import HeaderActions from '@/components/layout/HeaderActions.vue'
import SearchOverlay from '@/components/layout/SearchOverlay.vue'
import MobileNav from '@/components/layout/MobileNav.vue'

const ui = useUIStore()
const headerClasses = computed(() => ({
  scrolled: ui.scroll.isScrolled,
  'menu-open': ui.navigation.isMenuOpen,
  'search-open': ui.search.isOpen,
}))

function handleScroll() {
  ui.updateScroll(window.scrollY)
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
/* header wrapper styles */
</style>
