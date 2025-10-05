<!-- src/components/common/FeatureCard.vue -->
<script setup lang="ts">
import type { WhyPoint } from '@/types/content'

interface Props {
  feature: WhyPoint
}

defineProps<Props>()
</script>

<template>
  <div class="feature-card">
    <div class="feature-icon">
      <div class="icon-placeholder"></div>
    </div>
    <h3>{{ feature.heading }}</h3>
    <p>{{ feature.description }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.2s;
}

.feature-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.feature-icon {
  margin-bottom: 1.5rem;
}

.icon-placeholder {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  margin: 0 auto;
}

h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
}

p {
  color: #6b7280;
  line-height: 1.6;
}
</style>
