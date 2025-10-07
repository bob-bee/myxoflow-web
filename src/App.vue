<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

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

<style>
/* CSS Custom Properties for theming */
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;

  --background-color: #ffffff;
  --surface-color: #f8fafc;
  --text-color: #1f2937;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 3rem;

  --border-radius: 0.5rem;
  --border-radius-lg: 1rem;

  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Global Reset */
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
  color: var(--text-color);
}

.app-container {
  min-height: 100vh;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
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
}

/* Global Loading */
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
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
}

/* Scroll to Top Button */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Page Transitions */
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
}

/* Utility Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.section {
  padding: 4rem 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: all var(--transition-fast);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.btn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  color: var(--text-color);
  border: 2px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--surface-color);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Responsive Design */
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
