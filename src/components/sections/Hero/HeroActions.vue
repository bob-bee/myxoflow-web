<template>
  <div class="hero-actions">
    <router-link :to="contentStore.hero.primaryAction.link" class="btn btn-primary">
      {{ contentStore.hero.primaryAction.text }}
      <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" />
      </svg>
    </router-link>
    <router-link :to="contentStore.hero.secondaryAction.link" class="btn btn-secondary">
      {{ contentStore.hero.secondaryAction.text }}
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
const contentStore = useContentStore()
</script>
