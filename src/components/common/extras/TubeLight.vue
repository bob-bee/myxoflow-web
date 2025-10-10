<!-- Suggested TubeLight.vue component structure -->
<template>
  <button
    class="tubelight-toggle"
    @click="handleThemeToggle"
    :aria-label="ariaLabel"
    :title="currentTheme.name.charAt(0).toUpperCase() + currentTheme.name.slice(1) + ' Theme'"
  >
    <!-- Tubelight Container -->
    <div class="tubelight-container">
      <!-- Tubelight Bulb -->
      <div class="tubelight-bulb" :class="`theme-${currentTheme.name}`">
        <!-- Sun Logo SVG -->
        <img :src="currentTheme.icon" :alt="`${currentTheme.name} theme`" class="theme-icon" />
      </div>

      <!-- Tubelight Base -->
      <div class="tubelight-base"></div>

      <!-- Glow Effect -->
      <div class="tubelight-glow" :class="`glow-${currentTheme.name}`"></div>
    </div>

    <!-- Theme Name Label (Optional) -->
    <span class="theme-label">{{ currentTheme.name }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentTheme, cycleTheme } from '@/composables/useThemes'

const ariaLabel = computed(
  () => `Switch theme. Current: ${currentTheme.value.name}. Click to cycle through themes.`,
)

function handleThemeToggle() {
  cycleTheme()
}
</script>

<style scoped>
.tubelight-toggle {
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: var(--z-fixed);
  transition: all 0.3s ease;
  padding: 8px;
}

.tubelight-container {
  position: relative;
  width: 60px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tubelight-bulb {
  width: 40px;
  height: 60px;
  background: var(--surface-color);
  border: 2px solid var(--border-light);
  border-radius: 20px 20px 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.theme-icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
}

.tubelight-base {
  width: 35px;
  height: 15px;
  background: var(--text-secondary);
  border-radius: 2px;
  margin-top: -2px;
  border: 1px solid var(--border-strong);
}

.tubelight-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 25px;
  opacity: 0.3;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Theme-specific bulb styles */
.tubelight-bulb.theme-light {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  box-shadow: 0 0 15px rgba(66, 184, 131, 0.3);
}

.tubelight-bulb.theme-dark {
  background: linear-gradient(135deg, #374151, #1f2937);
  box-shadow: 0 0 15px rgba(44, 62, 80, 0.5);
}

.tubelight-bulb.theme-sunrise {
  background: linear-gradient(135deg, #fef3c7, #fed7aa);
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
}

.tubelight-bulb.theme-midnight {
  background: linear-gradient(135deg, #1e293b, #0c1426);
  box-shadow: 0 0 15px rgba(55, 48, 163, 0.6);
}

.tubelight-bulb.theme-forest {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.4);
}

.tubelight-bulb.theme-outdoor {
  background: linear-gradient(135deg, #e6f7ff, #ccf2ff);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

/* Glow effects */
.glow-light {
  background: radial-gradient(circle, rgba(66, 184, 131, 0.2), transparent);
}

.glow-dark {
  background: radial-gradient(circle, rgba(44, 62, 80, 0.3), transparent);
}

.glow-sunrise {
  background: radial-gradient(circle, rgba(249, 115, 22, 0.3), transparent);
}

.glow-midnight {
  background: radial-gradient(circle, rgba(55, 48, 163, 0.4), transparent);
}

.glow-forest {
  background: radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent);
}

.glow-outdoor {
  background: radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent);
}

/* Hover effects */
.tubelight-toggle:hover .tubelight-bulb {
  transform: scale(1.05);
}

.tubelight-toggle:hover .tubelight-glow {
  opacity: 0.5;
}

/* Theme label */
.theme-label {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.tubelight-toggle:hover .theme-label {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .tubelight-toggle {
    right: 16px;
  }

  .tubelight-container {
    width: 50px;
    height: 70px;
  }

  .tubelight-bulb {
    width: 35px;
    height: 50px;
  }

  .theme-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
