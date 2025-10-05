<!-- src/components/common/ProductCard.vue -->
<script setup lang="ts">
import type { Product } from '@/types/content'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <router-link :to="`/products/${product.key}`" class="card-link"> Learn More → </router-link>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
}

p {
  flex: 1;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.card-link:hover {
  color: #2563eb;
}
</style>
