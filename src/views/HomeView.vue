<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import HeroSection from '@/components/sections/HeroSection.vue'
import IntroSection from '@/components/sections/IntroSection.vue'
import ProductsOverview from '@/components/sections/ProductsOverview.vue'
import WhyChooseUs from '@/components/sections/WhyChooseUs.vue'
import CTASection from '@/components/sections/CTASection.vue'

const content = useContentStore()
</script>

<template>
  <div class="home">
    <HeroSection />
    <IntroSection />

    <section class="what-we-do section">
      <div class="container">
        <h2>{{ content.whatWeDo.title }}</h2>
        <div class="what-we-do-grid">
          <div v-for="item in content.whatWeDo.items" :key="item.key" class="what-we-do-item">
            <h3>{{ item.heading }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <ProductsOverview />
    <WhyChooseUs />
    <CTASection />
  </div>
</template>
<style scoped>
.what-we-do {
  padding: 5rem 0;
  background: var(--md-sys-color-surface); /* was white */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.what-we-do h2 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--md-sys-color-on-surface); /* was #1f2937 */
}

.what-we-do-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.what-we-do-item {
  background: var(--md-sys-color-surface-variant); /* was #f8fafc */
  padding: 2rem;
  border-radius: 0.5rem;
  border-left: 4px solid var(--md-sys-color-primary); /* was #3b82f6 */
}

.what-we-do-item h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--md-sys-color-on-surface); /* was #1f2937 */
}

.what-we-do-item p {
  color: var(--md-sys-color-on-surface-variant); /* was #6b7280 */
  line-height: 1.6;
}

@media (max-width: 768px) {
  .what-we-do h2 {
    font-size: 2rem;
  }

  .what-we-do-grid {
    grid-template-columns: 1fr;
  }
}
</style>
