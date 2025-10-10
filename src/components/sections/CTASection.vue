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
  background: linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-secondary) 100%);
  color: var(--text-inverse);
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 2rem;
  color: var(--text-inverse);
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
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-duration-200);
}

.btn-primary {
  background: var(--primary-color);
  color: var(--text-inverse);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: var(--text-inverse);
  border: 2px solid var(--text-inverse);
}

.btn-secondary:hover {
  background: var(--text-inverse);
  color: var(--surface-dark);
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
