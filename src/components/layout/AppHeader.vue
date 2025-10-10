<template>
  <header class="app-header" :class="{ scrolled: uiStore.scroll.isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/" class="logo-link" @click="uiStore.closeMenu">
            <h1>{{ contentStore.company.name }}</h1>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav-menu desktop-nav" :class="{ active: uiStore.navigation.isMenuOpen }">
          <router-link
            v-for="item in contentStore.navigation"
            :key="item.path"
            :to="item.path"
            @click="uiStore.closeMenu"
            class="nav-link"
            :class="{ 'router-link-active': $route.path === item.path }"
          >
            {{ item.label }}
          </router-link>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button
          class="nav-toggle"
          @click="uiStore.toggleMenu"
          :class="{ active: uiStore.navigation.isMenuOpen }"
          :aria-label="uiStore.navigation.isMenuOpen ? 'Close navigation' : 'Open navigation'"
          :aria-expanded="uiStore.navigation.isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div
      class="mobile-nav-overlay"
      :class="{ active: uiStore.navigation.isMenuOpen }"
      @click="uiStore.closeMenu"
    >
      <nav class="mobile-nav" @click.stop>
        <router-link
          v-for="item in contentStore.navigation"
          :key="'mobile-' + item.path"
          :to="item.path"
          @click="uiStore.closeMenu"
          class="mobile-nav-link"
          :class="{ 'router-link-active': $route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useUIStore } from '@/stores/useUIStore'

const contentStore = useContentStore()
const uiStore = useUIStore()

// Handle scroll tracking
const handleScroll = () => {
  uiStore.updateScroll(window.scrollY)
}

// Handle escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    uiStore.closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.app-header {
  background: rgba(var(--surface-color-rgb, 255, 255, 255), 0.95);
  border-bottom: 1px solid var(--border-light);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.app-header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
}

.logo h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  transition: color 0.3s ease;
}

.logo-link {
  text-decoration: none;
}

.logo-link:hover h1 {
  color: var(--primary-hover);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

/* Mobile Menu Toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 1.5rem;
  height: 2px;
  background: var(--text-primary);
  margin: 0.25rem 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(0.375rem, 0.375rem);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(0.375rem, -0.375rem);
}

/* Mobile Navigation */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background: var(--surface-color);
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
}

.mobile-nav-overlay.active .mobile-nav {
  transform: translateX(0);
}

.mobile-nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: var(--primary-color);
  padding-left: 1rem;
}

.mobile-nav-link.router-link-active {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 100%;
  }

  .logo h1 {
    font-size: 1.5rem;
  }
}
</style>
