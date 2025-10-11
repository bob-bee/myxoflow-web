<template>
  <button class="tubelight-toggle" @click="cycleTheme" aria-label="Toggle theme">
    <img class="theme-icon" :src="themeIcon" :alt="themeName + ' theme'" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentTheme, cycleTheme } from '@/stores/useThemeStore'
// Compute icon and name directly
const themeIcon = computed(() => currentTheme.value.icon)
const themeName = computed(() => currentTheme.value.name)
</script>

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
