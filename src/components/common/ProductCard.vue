<!-- src/components/common/ProductCard.vue -->
<script setup lang="ts">
import type { Product } from '@/stores/useProductStore'

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
  background: var(--surface-secondary);
  padding: var(--space-8);
  border-radius: var(--radius-base);
  box-shadow: var(--shadow-base);
  border: 1px solid var(--border-strong);
  transition: all var(--transition-duration-200) var(--transition-timing-ease-in-out);
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

h3 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

p {
  flex: 1;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-6);
}

.card-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  transition: color var(--transition-duration-150) var(--transition-timing-ease-in-out);
}

.card-link:hover {
  color: var(--primary-hover);
}
</style>
