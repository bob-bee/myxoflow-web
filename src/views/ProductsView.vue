<!-- src/views/Products.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import ProductCard from '@/components/common/ProductCard.vue'

const content = useContentStore()
</script>

<template>
  <div class="products">
    <section class="hero">
      <div class="container">
        <h1>{{ content.products.title }}</h1>
        <p>Discover our suite of optimization solutions designed to transform your operations.</p>
      </div>
    </section>

    <section class="products-grid section">
      <div class="container">
        <div class="grid">
          <ProductCard
            v-for="product in content.products.list"
            :key="product.key"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.section {
  padding: 4rem 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
