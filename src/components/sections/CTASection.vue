<!-- src/components/sections/CTASection.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const content = useContentStore()
</script>

<template>
  <section class="cta-section">
    <div class="container">
      <h2>{{ content.ctaFooter.heading }}</h2>
      <div class="cta-buttons">
        <router-link to="/contact" class="btn btn-primary">
          {{ content.ctaFooter.primaryButton }}
        </router-link>
        <router-link to="/products" class="btn btn-secondary">
          {{ content.ctaFooter.secondaryButton }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  color: white;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #1f2937;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
