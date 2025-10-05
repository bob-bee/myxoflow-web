<!-- src/components/sections/WhyChooseUs.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import FeatureCard from '@/components/common/FeatureCard.vue'

const content = useContentStore()
</script>

<template>
  <section class="why-choose-us">
    <div class="container">
      <h2>{{ content.why.title }}</h2>
      <div class="features-grid">
        <FeatureCard v-for="point in content.why.points" :key="point.key" :feature="point" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-us {
  padding: 5rem 0;
  background: #f8fafc;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
