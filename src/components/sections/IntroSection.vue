<!-- src/components/sections/IntroSection.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const content = useContentStore()
</script>

<template>
  <section class="intro">
    <div class="container">
      <h2>{{ content.intro.title }}</h2>
      <p class="intro-text">{{ content.intro.body }}</p>
    </div>
  </section>
</template>

<style scoped>
.intro {
  padding: 5rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1f2937;
}

.intro-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4b5563;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1rem;
  }
}
</style>
