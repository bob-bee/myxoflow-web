<!-- src/components/sections/product/ProductCard.vue -->
<template>
  <div class="product-card">
    <header>
      <h3>{{ product.name }}</h3>
      <p>{{ product.tagline }}</p>
      <span v-if="product.badge" class="badge" :class="`badge--${product.badge.type}`">
        {{ product.badge.text }}
      </span>
    </header>

    <p class="overview">{{ product.overview }}</p>

    <ul class="stats">
      <li v-for="stat in product.stats" :key="stat.label">
        <strong>{{ stat.value }}</strong> — {{ stat.label }}
        <span v-if="stat.change">({{ stat.change }})</span>
      </li>
    </ul>

    <h4>Key Features</h4>
    <ul class="features">
      <li v-for="f in product.features" :key="f">{{ f }}</li>
    </ul>

    <router-link :to="`/products/${product.key}`" class="btn btn-outline"> Learn More </router-link>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/useProductStore'
defineProps<{ product: Product }>()
</script>

<style scoped>
/* Add your styles here */
</style>
