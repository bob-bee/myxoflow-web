<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useStatsStore } from '@/stores/useStatsStore'
import HeroSection from '@/components/sections/Hero/HeroSection.vue'
import IntroSection from '@/components/sections/IntroSection.vue'
import ProductsOverview from '@/components/sections/ProductsOverview.vue'
import WhyChooseUs from '@/components/sections/WhyChooseUs.vue'
import CTASection from '@/components/sections/CTA/CTASection.vue'

const content = useContentStore()
const stats = useStatsStore()
const mappedStats = computed(() =>
  stats.companyStats.map((s) => ({
    label: s.label,
    value: s.value,
    icon: s.trend === 'up' || s.trend === 'down' ? s.trend : 'up', // fallback to 'up'
    change: s.change,
  })),
)
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

    <!-- Correctly pass companyStats or another stats array -->
    <CTASection :stats="mappedStats" />
  </div>
</template>
