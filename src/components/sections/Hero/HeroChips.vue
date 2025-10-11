<template>
  <div class="hero-chips">
    <div v-for="chip in contentStore.hero.chips" :key="chip.label" class="chip">
      {{ chip.label }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
const contentStore = useContentStore()
</script>
