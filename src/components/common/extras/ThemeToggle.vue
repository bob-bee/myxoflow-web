<template>
  <button @click="cycleTheme">
    <img :src="currentIcon" alt="Toggle Theme" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentTheme, cycleTheme } from '@/stores/useThemeStore'

// Import or define the Theme type
type Theme = 'light' | 'dark' | 'sunrise' | 'midnight' | 'forest'

const icons: Record<Theme, string> = {
  light: '@/assets/sunLogo/light.svg',
  dark: '@/assets/sunLogo/dark.svg',
  sunrise: '@/assets/sunLogo/sunrise.svg',
  midnight: '@/assets/sunLogo/midnight.svg',
  forest: '@/assets/sunLogo/forest.svg',
}

const currentIcon = computed(() => icons[currentTheme.value as Theme])
</script>
