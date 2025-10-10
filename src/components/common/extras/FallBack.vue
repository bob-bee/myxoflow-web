<!-- Quick fallback for TubeLight component -->
<template>
  <button
    class="theme-toggle"
    @click="cycleTheme"
    :title="`Current theme: ${currentTheme.name}`"
  >
    <!-- Fallback icons (no SVG needed) -->
    <div class="theme-icon" :class="`theme-${currentTheme.name}`">
      {{ getThemeEmoji(currentTheme.name) }}
    </div>
    <span class="theme-name">{{ currentTheme.name }}</span>
  </button>
</template>

<script setup lang="ts">
import { currentTheme, cycleTheme } from '@/composables/useThemes'

function getThemeEmoji(themeName: string): string {
  const emojiMap: Record<string, string> = {
    light: '☀️',
    dark: '🌙',
    sunrise: '🌅',
    midnight: '🌌',
    forest: '🌲',
    outdoor: '🏔️',
  }
  return emojiMap[themeName] || '🎨'
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  background: var(--surface-color, #fff);
  border: 2px solid var(--border-light, #e5e7eb);
  border-radius: 50px;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.theme-icon {
  font-size: 20px;
  transition: all 0.3s ease;
}

.theme-name {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-primary, #374151);
  text-transform: capitalize;
}

/* Theme-specific styling */
.theme-light { filter: brightness(1.2); }
.theme-dark { filter: brightness(0.8); }
.theme-sunrise { filter: hue-rotate(30deg); }
.theme-midnight { filter: hue-rotate(240deg); }
.theme-forest { filter: hue-rotate(120deg); }
.theme-outdoor { filter: hue-rotate(180deg); }
</style>