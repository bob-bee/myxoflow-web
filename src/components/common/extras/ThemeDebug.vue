<!-- Debugging component to test themes -->
<template>
  <div class="theme-debug">
    <h3>Theme Debug Panel</h3>
    <p>Current Theme: {{ currentTheme.name }}</p>
    <p>Document Classes: {{ documentClasses }}</p>
    <div class="color-test">
      <div class="surface-test">Surface Color Test</div>
      <div class="primary-test">Primary Color Test</div>
      <div class="text-test">Text Color Test</div>
    </div>
    <button @click="cycleTheme">Cycle Theme</button>
    <button @click="refreshClasses">Refresh Classes</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { currentTheme, cycleTheme } from '@/composables/useThemes'

const documentClasses = ref('')

function refreshClasses() {
  documentClasses.value = document.documentElement.className
}

onMounted(() => {
  refreshClasses()
  // Update classes when theme changes
  setInterval(refreshClasses, 1000)
})
</script>

<style scoped>
.theme-debug {
  position: fixed;
  top: 20px;
  left: 20px;
  background: var(--surface-color, #fff);
  border: 2px solid var(--border-light, #e5e7eb);
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  z-index: 10000;
  max-width: 300px;
}

.color-test {
  margin: 10px 0;
}

.surface-test {
  background: var(--surface-secondary, #f8fafc);
  padding: 8px;
  margin: 4px 0;
}

.primary-test {
  background: var(--primary-color, #3b82f6);
  color: white;
  padding: 8px;
  margin: 4px 0;
}

.text-test {
  color: var(--text-primary, #374151);
  padding: 8px;
  margin: 4px 0;
}
</style>
