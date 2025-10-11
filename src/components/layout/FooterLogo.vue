<template>
  <div class="footer-logo-section">
    <img :src="logoSrc" :alt="company.name" class="footer-logo-image" />
    <div>
      <h3>{{ company.name }}</h3>
      <p>{{ company.tagline }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useUIStore } from '@/stores/useUIStore'

const contentStore = useContentStore()
const uiStore = useUIStore()

const company = contentStore.company

const logoSrc = computed(() =>
  ['midnight', 'dark'].includes(uiStore.theme.currentTheme)
    ? '/assets/sunLogo/vue_light.svg'
    : '/assets/sunLogo/vue_dark.svg',
)
</script>

<style scoped>
.footer-logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.footer-logo-image {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}
</style>
