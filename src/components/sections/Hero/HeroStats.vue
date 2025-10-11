<template>
  <div class="hero-stats">
    <div v-for="stat in stats" :key="stat.label" class="stat-item">
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
      <div v-if="stat.change" class="stat-change" :class="`trend-${stat.trend}`">
        {{ stat.change }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStatsStore } from '@/stores/useStatsStore'
const stats = useStatsStore().heroStats
</script>
