<!-- src/App.vue -->
<template>
  <div id="app" class="app-container">
    <!-- Loading overlay -->
    <Transition name="fade">
      <div v-if="isLoading" class="global-loading">
        <div class="loading-spinner"></div>
      </div>
    </Transition>

    <!-- Main layout -->
    <div class="app-layout" :class="{ loading: isLoading }">
      <!-- Header -->
      <AppHeader />

      <!-- Main content + theme toggle -->
      <main class="main-content">
        <router-view v-slot="{ Component, route }">
          <Transition name="slide-fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
        </router-view>

        <!-- Simple theme toggle button -->
        <TubeLight />
      </main>

      <!-- Footer -->
      <AppFooter />

      <!-- Scroll-to-top button -->
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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import TubeLight from '@/components/common/TubeLight.vue'
import { useThemeStore } from '@/stores/useThemeStore'

// Loading & scroll state
const isLoading = ref(true)
const showScrollTop = ref(false)
const themeStore = useThemeStore()
onMounted(() => {
  themeStore.initTheme()
})

// Scroll handler
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const handleScroll = () => (showScrollTop.value = window.scrollY > 500)

// Simulate loading and attach scroll listener
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
  window.addEventListener('scroll', handleScroll)
})

// Clean up
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
onMounted(() => {
  useThemeStore().initTheme()
})
</script>
