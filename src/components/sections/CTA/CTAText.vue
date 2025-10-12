<template>
  <div class="cta-text">
    <h2 class="cta-title">{{ CTA.title }}</h2>
    <p class="cta-description">{{ CTA.description }}</p>
    <div class="cta-features">
      <div v-for="feature in CTA.features" :key="feature" class="feature-item">
        <CheckIcon class="check-icon" />
        {{ feature }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckIcon from '@/assets/icons/other/CheckIcon.vue'
// Destructure props directly
const { CTA } = defineProps<{
  CTA: { title: string; description: string; features: string[] }
}>()
</script>

<style scoped>
.feature-item {
  /* existing feature-item styles */
}
</style>
