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
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--md-sys-color-surface);
  transition:
    background var(--transition-normal),
    box-shadow var(--transition-normal);
  z-index: 1000;
}
.app-header.scrolled {
  box-shadow: var(--md-elevation-level-2);
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* Desktop navigation group */
.desktop-nav {
  display: flex;
  gap: var(--spacing-lg);
}
.nav-item {
  position: relative;
}
.nav-link {
  color: var(--md-sys-color-on-surface);
  text-decoration: none;
  padding: 0.5rem;
  transition: color var(--transition-fast);
}
.nav-link.router-link-active {
  color: var(--md-sys-color-primary);
}
.nav-link:hover {
  color: var(--md-sys-color-primary-container);
}
.nav-arrow {
  margin-left: 0.25rem;
}
.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--md-sys-color-surface);
  box-shadow: var(--md-elevation-level-1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(0.5rem);
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);
}
.nav-dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-link {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--md-sys-color-on-surface-variant);
  text-decoration: none;
}
.dropdown-link:hover {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
}

/* Header actions (search, CTA, menu toggle) */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}
.search-toggle,
.nav-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.nav-toggle span {
  display: block;
  width: 1.5rem;
  height: 2px;
  background: var(--md-sys-color-on-surface);
  margin: 3px 0;
  transition: transform var(--transition-fast);
}
.nav-toggle.active span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}
.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}
.header-cta {
  margin: 0 0.5rem;
}

/* Logo */
.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.logo-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.logo-text {
  margin-left: var(--spacing-sm);
}
.logo-title {
  font-size: 1.25rem;
  margin: 0;
}
.logo-subtitle {
  font-size: 0.875rem;
  margin: 0;
  color: var(--md-sys-color-on-surface-variant);
}

/* Mobile nav overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
}
.mobile-nav {
  background: var(--md-sys-color-surface);
  width: 80%;
  max-width: 300px;
  height: 100%;
  padding: var(--spacing-lg);
  box-shadow: var(--md-elevation-level-3);
}

/* Search overlay */
.search-overlay {
  position: fixed;
  top: var(--spacing-xl);
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 950;
  padding: var(--spacing-lg);
}
.search-container {
  max-width: 600px;
  margin: 0 auto;
}

/* Transitions */
.mobile-nav-fade-enter-active,
.mobile-nav-fade-leave-active,
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity var(--transition-fast);
}
.mobile-nav-fade-enter-from,
.mobile-nav-fade-leave-to,
.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav,
  .header-cta {
    display: none;
  }
  .header-actions {
    gap: var(--spacing-sm);
  }
}
</style>
