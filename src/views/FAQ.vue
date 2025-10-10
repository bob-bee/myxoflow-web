<!-- src/views/FAQ.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import FAQItem from '@/components/common/FAQItem.vue'

const content = useContentStore()
</script>

<template>
  <div class="faq">
    <section class="hero">
      <div class="container">
        <h1>{{ content.faq.title }}</h1>
        <p>Find answers to common questions about MyxoFlow and our optimization solutions.</p>
      </div>
    </section>

    <section class="faq-content section">
      <div class="container">
        <div v-for="(category, key) in content.faq.categories" :key="key" class="faq-category">
          <h2>{{ category.title }}</h2>
          <div class="faq-list">
            <FAQItem
              v-for="question in category.questions"
              :key="question.question"
              :question="question"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.hero {
  background: linear-gradient(
    135deg,
    var(--background-hero-start) 0%,
    var(--background-hero-end) 100%
  );
  color: var(--text-on-primary);
  text-align: center;
  padding: 4rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.125rem;
  opacity: 0.9;
}

.section {
  padding: 4rem 0;
}

.faq-category {
  margin-bottom: 3rem;
}

.faq-category h2 {
  font-size: 1.875rem;
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-color);
}

.faq-list {
  background: var(--surface-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .faq-category h2 {
    font-size: 1.5rem;
  }
}
</style>
