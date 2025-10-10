<template>
  <button
    class="sun-switch"
    :aria-label="`Switch theme (${currentTheme.name})`"
    @click="cycleTheme"
  >
    <img :src="currentTheme.icon" alt="" class="sun-icon" />
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { currentTheme, cycleTheme, initTheme } from '@/composables/useThemes'

onMounted(() => initTheme())
</script>

<style scoped>
.sun-switch {
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sun-icon {
  width: 32px;
  height: 32px;
}
@media (max-width: 768px) {
  .sun-switch {
    right: 12px;
    width: 44px;
    height: 44px;
  }
  .sun-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
