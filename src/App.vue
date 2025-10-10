<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeMount } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ThemeDebug from '@/components/common/extras/ThemeDebug.vue'
import FallBack from '@/components/common/extras/FallBack.vue'
import { initTheme } from '@/composables/useThemes'
// State
const isLoading = ref(true)
const showScrollTop = ref(false)

// Scroll to top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// Handle scroll events
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

// Initialize theme on app load
onBeforeMount(() => {
  initTheme()
})

// Lifecycle
onMounted(() => {
  // Simulate initial loading
  setTimeout(() => {
    isLoading.value = false
  }, 1000)

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="app" class="app-container">
    <!-- Global Loading State -->
    <Transition name="fade">
      <div v-if="isLoading" class="global-loading">
        <div class="loading-spinner"></div>
      </div>
    </Transition>

    <!-- Main App Layout -->
    <div class="app-layout" :class="{ loading: isLoading }">
      <!-- Header -->
      <AppHeader />

      <!-- Main Content with Router -->
      <main class="main-content">
        <router-view v-slot="{ Component, route }">
          <Transition :name="'slide-fade'" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
        </router-view>
        <!-- TubeLight Component        -->
        <FallBack />

        <ThemeDebug />
      </main>

      <!-- Footer -->
      <AppFooter />

      <!-- Scroll to Top Button -->
      <Transition name="slide-up">
        <button
          v-if="showScrollTop"
          @click="scrollToTop"
          class="scroll-top-btn"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 14L12 9L17 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
/* =========================== Material Design 3 Tokens =========================== */
:root {
  /*
Primary & Secondary Colors */
  --md-sys-color-primary: #2563eb;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #dbeafe;
  --md-sys-color-on-primary-container: #1d4ed8;
  --md-sys-color-secondary: #10b981;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #d1fae5;
  --md-sys-color-on-secondary-container: #065f46; /*
Background & Surface */
  --md-sys-color-background: #ffffff;
  --md-sys-color-on-background: #1f2937;
  --md-sys-color-surface: #f8fafc;
  --md-sys-color-on-surface: #1f2937;
  --md-sys-color-surface-variant: #e5e7eb;
  --md-sys-color-on-surface-variant: #6b7280;
  --md-sys-color-outline: #d1d5db; /* Elevation /
Shadows */
  --md-elevation-level-1: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  --md-elevation-level-2: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  --md-elevation-level-3:
    0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23); /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 3rem; /* Border Radius */
  --border-radius: 0.5rem;
  --border-radius-lg: 1rem; /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
} /*
=========================== Global Reset & Body =========================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: var(--md-sys-color-on-background);
  background-color: var(--md-sys-color-background);
}
.app-container {
  min-height: 100vh;
  font-family: inherit;
  color: var(--md-sys-color-on-background);
  background-color: var(--md-sys-color-background);
  line-height: 1.6;
}
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: opacity var(--transition-normal);
}
.app-layout.loading {
  opacity: 0.7;
}
.main-content {
  flex: 1;
  width: 100%;
} /*
=========================== Global Loading Overlay =========================== */
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--md-sys-color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--md-sys-color-outline);
  border-top: 3px solid var(--md-sys-color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} /* =========================== Scroll-to-Top Button
=========================== */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border: none;
  cursor: pointer;
  box-shadow: var(--md-elevation-level-2);
  transition: all var(--transition-normal);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-top-btn:hover {
  background: var(--md-sys-color-primary-container);
  transform: translateY(-2px);
  box-shadow: var(--md-elevation-level-3);
} /* =========================== Buttons =========================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: 0.75rem 1.5rem;
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: all var(--transition-fast);
  border: none;
  cursor: pointer;
  box-shadow: var(--md-elevation-level-1);
}
.btn:hover {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  transform: translateY(-1px);
  box-shadow: var(--md-elevation-level-2);
}
.btn-secondary {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-primary);
  border: 2px solid var(--md-sys-color-primary);
}
.btn-secondary:hover {
  background: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-primary-container);
} /*
Focus styles for accessibility */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--md-sys-color-primary);
  outline-offset: 2px;
} /* =========================== Page Transitions ===========================
*/
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all var(--transition-normal);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-normal);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all var(--transition-normal);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
} /* ===========================
Utility & Layout =========================== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}
.section {
  padding: 4rem 0;
} /* ===========================
Responsive Design =========================== */
@media (max-width: 768px) {
  .scroll-top-btn {
    bottom: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  .container {
    padding: 0 var(--spacing-md);
  }
}
</style>
