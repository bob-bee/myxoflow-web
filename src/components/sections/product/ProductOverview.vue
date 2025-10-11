<!-- src/components/sections/product/ProductOverview.vue -->
<template>
  <section id="overview" class="product-overview">
    <h2>Overview</h2>
    <p>{{ detail.overview }}</p>

    <h3 id="features">Features</h3>
    <ul>
      <li v-for="f in detail.features" :key="f">{{ f }}</li>
    </ul>

    <h3 id="use-cases">Use Cases</h3>
    <ul>
      <li v-for="u in detail.useCases" :key="u">{{ u }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/useProductStore'
defineProps<{ detail: Product }>()
</script>

<style scoped>
/* Add your styles here */
</style>
