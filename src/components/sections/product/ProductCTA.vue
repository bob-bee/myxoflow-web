<!-- src/components/sections/product/ProductCTA.vue -->
<template>
  <section id="pricing" class="product-cta">
    <h2>Pricing</h2>
    <p>
      <strong>{{ detail.pricing }}</strong>
    </p>

    <h3>{{ detail.pricingModel.title }}</h3>
    <ul>
      <li v-for="b in detail.pricingModel.benefits" :key="b">
        {{ b }}
      </li>
    </ul>

    <router-link :to="`/contact?product=${detail.key}`" class="btn btn-primary">
      Get Started
    </router-link>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/useProductStore'
defineProps<{ detail: Product }>()
</script>

<style scoped>
/* Add your styles here */
</style>
