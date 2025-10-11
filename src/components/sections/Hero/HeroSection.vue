<template>
  <section class="hero-section" :class="{ loaded: uiStore.animations.heroLoaded }">
    <HeroBackground />
    <div class="container">
      <div class="hero-content">
        <HeroText />
        <HeroVisual />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useUIStore } from '@/stores/useUIStore'
import HeroBackground from '@/components/sections/Hero/HeroBackground.vue'
import HeroText from '@/components/sections/Hero/HeroText.vue'
import HeroVisual from '@/components/sections/Hero/HeroVisual.vue'
const uiStore = useUIStore()
onMounted(() => {
  setTimeout(() => {
    uiStore.animations.heroLoaded = true
  }, 500)
})
</script>
