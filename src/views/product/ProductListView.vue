<!-- src/views/product/ProductListView.vue -->
<template>
  <section class="products-list">
    <div class="container">
      <h1>Our Products</h1>
      <div class="products-grid">
        <ProductCard v-for="p in products" :key="p.key" :product="p" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/useProductStore'
import ProductCard from '@/components/sections/product/ProductCard.vue'

const store = useProductStore()
const products = store.products
</script>

<style scoped>
/* Add your styles here */
</style>
