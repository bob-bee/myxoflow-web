<!-- ProductListView.vue - Simple product grid -->
<template>
  <div class="products-page">
    <div class="container mx-auto px-4 py-16">
      <header class="page-header">
        <h1>Our Products</h1>
        <p>Choose the right solution for your business needs</p>
      </header>

      <div class="products-grid">
        <ProductCard v-for="product in products" :key="product.key" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/useProductStore'
import ProductCard from '@/components/sections/product/ProductCard.vue'

const productStore = useProductStore()
const products = computed(() => productStore.products)
</script>

<style scoped>
.products-page {
  min-height: 60vh;
}

.page-header {
  text-align: center;
  margin-bottom: var(--space-32);
}

.page-header h1 {
  font-size: var(--font-size-4xl);
  margin: 0 0 var(--space-12) 0;
}

.page-header p {
  font-size: var(--font-size-xl);
  opacity: 0.8;
  margin: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-24);
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: var(--space-16);
  }

  .page-header h1 {
    font-size: var(--font-size-3xl);
  }
}
</style>
