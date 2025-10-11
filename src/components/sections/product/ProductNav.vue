<!-- src/components/sections/product/ProductNav.vue -->
<template>
  <nav class="product-nav">
    <ul>
      <li v-for="section in sections" :key="section.id" @click="$emit('scroll-to', section.id)">
        {{ section.label }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'cta', label: 'Get Started' },
]
defineProps<{ name: string }>()
</script>

<style scoped>
/* Add your styles here */
</style>
