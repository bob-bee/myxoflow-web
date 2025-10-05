<!-- src/components/sections/ProductsOverview.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import ProductCard from '@/components/common/ProductCard.vue'

const content = useContentStore()
</script>

<template>
  <section class="products-overview">
    <div class="container">
      <h2>{{ content.products.title }}</h2>
      <div class="products-grid">
        <ProductCard
          v-for="product in content.products.list"
          :key="product.key"
          :product="product"
        />
      </div>
      <div class="products-cta">
        <router-link to="/products" class="btn btn-primary"> View All Products </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-overview {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.products-cta {
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
