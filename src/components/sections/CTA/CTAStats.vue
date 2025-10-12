<template>
  <div class="cta-stats">
    <div v-for="stat in stats" :key="stat.label" class="stat-item">
      <component :is="getIcon(stat.icon)" class="stat-icon" />
      <div class="stat-content">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
        <div v-if="stat.change" class="stat-change" :class="`trend-${stat.trend}`">
          {{ stat.change }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TrendUpIcon from '@/assets/icons/other/TrendUpIcon.vue'
import TrendDownIcon from '@/assets/icons/other/TrendDownIcon.vue'

type Stat = {
  icon: 'up' | 'down'
  value: string | number
  label: string
  change?: string
  trend?: 'up' | 'down'
}

const { stats } = defineProps<{ stats: Stat[] }>()

const iconMap = {
  up: TrendUpIcon,
  down: TrendDownIcon,
} as const

function getIcon(name: Stat['icon']) {
  return iconMap[name]
}
</script>

<style scoped>
.stat-item {
  /* existing stat-item styles */
}
</style>
