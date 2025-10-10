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
  background: var(--surface-secondary);
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: all var(--transition-duration-200) var(--transition-timing-ease-in-out);
}

.feature-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.feature-icon {
  margin-bottom: 1.5rem;
}

.icon-placeholder {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  border-radius: 50%;
  margin: 0 auto;
}

h3 {
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 1rem;
  color: var(--text-primary);
}

p {
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
