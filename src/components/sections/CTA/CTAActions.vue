<template>
  <div class="cta-actions">
    <router-link :to="primary.link" class="btn btn-primary">
      {{ primary.text }}
      <ArrowIcon class="arrow-icon" />
    </router-link>
    <router-link :to="secondary.link" class="btn btn-secondary">
      {{ secondary.text }}
    </router-link>
    <div class="cta-note">{{ note }}</div>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from '@/assets/icons/other/ArrowIcon.vue'

interface Action {
  text: string
  link: string
}

// Destructure props directly to avoid unused variable
const { primary, secondary, note } = defineProps<{
  primary: Action
  secondary: Action
  note: string
}>()
</script>

<style scoped>
.cta-note {
  /* existing cta-note styles */
}
</style>
