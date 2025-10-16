<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/useThemeStore'

const themeStore = useThemeStore()

const themeIcon = computed(() => themeStore.currentTheme.src)
const themeName = computed(() => themeStore.currentTheme.name)
const cycleTheme = () => themeStore.cycleTheme()

// Optional: initialize theme if not already done
themeStore.initTheme()
</script>

<template>
  <button class="tubelight-toggle" @click="cycleTheme" aria-label="Toggle theme">
    <img v-if="themeIcon" class="theme-icon" :src="themeIcon" :alt="themeName + ' theme'" />
  </button>
</template>

<style scoped>
.tubelight-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  box-shadow: var(--md-elevation-level-1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.tubelight-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--md-elevation-level-2);
}

.theme-icon {
  width: 24px;
  height: 24px;
}
</style>
