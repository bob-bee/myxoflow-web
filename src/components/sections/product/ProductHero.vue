<!-- src/components/sections/product/ProductHero.vue -->
<template>
  <section class="product-hero">
    <h1>{{ detail.name }}</h1>
    <p class="tagline">{{ detail.tagline }}</p>
    <span v-if="detail.badge" class="badge" :class="`badge--${detail.badge.type}`">
      {{ detail.badge.text }}
    </span>
    <p class="description">{{ detail.description }}</p>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/useProductStore'
defineProps<{ detail: Product }>()
</script>

<style scoped>
/* Add your styles here */
</style>
