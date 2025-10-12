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
import { useThemeStore } from '@/stores/useThemeStore'

const contentStore = useContentStore()
const themeStore = useThemeStore()

const company = contentStore.company

const logoSrc = computed(() =>
  ['midnight', 'dark'].includes(themeStore.currentTheme.name)
    ? '/assets/icons/sunLogo/light.svg'
    : '/assets/icons/sunLogo/dark.svg',
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
