<template>
  <div class="hero-text">
    <div class="hero-badge">
      <span class="badge-icon">{{ contentStore.hero.badge.icon }}</span>
      {{ contentStore.hero.badge.text }}
    </div>
    <h1 class="hero-title">
      {{ contentStore.hero.title }}
      <span class="highlight">{{ contentStore.hero.highlight }}</span>
    </h1>
    <p class="hero-description">{{ contentStore.hero.description }}</p>
    <HeroStats />
    <HeroActions />
    <HeroChips />
  </div>
</template>
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import HeroStats from '@/components/sections/Hero/HeroStats.vue'
import HeroActions from '@/components/sections/Hero/HeroActions.vue'
import HeroChips from '@/components/sections/Hero/HeroChips.vue'
const contentStore = useContentStore()
</script>
