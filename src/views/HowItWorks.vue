<!-- src/views/HowItWorks.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import ProcessStep from '@/components/common/ProcessStep.vue'

const content = useContentStore()
</script>

<template>
  <div class="how-it-works">
    <section class="hero">
      <div class="container">
        <h1>{{ content.howItWorks.title }}</h1>
        <p>{{ content.howItWorks.subtitle }}</p>
      </div>
    </section>

    <section class="manufacturing-process section">
      <div class="container">
        <h2>{{ content.howItWorks.manufacturingProcess.heading }}</h2>
        <p class="process-description">{{ content.howItWorks.manufacturingProcess.description }}</p>

        <div class="process-steps">
          <ProcessStep
            v-for="step in content.howItWorks.manufacturingProcess.steps"
            :key="step.step"
            :step="step"
          />
        </div>

        <div class="results-highlight">
          <p>{{ content.howItWorks.manufacturingProcess.results }}</p>
        </div>
      </div>
    </section>

    <section class="freelancer-process section">
      <div class="container">
        <h2>{{ content.howItWorks.freelancerProcess.heading }}</h2>
        <p class="process-description">{{ content.howItWorks.freelancerProcess.description }}</p>

        <div class="process-steps">
          <ProcessStep
            v-for="step in content.howItWorks.freelancerProcess.steps"
            :key="step.step"
            :step="step"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  color: white;
  text-align: center;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.section {
  padding: 4rem 0;
}

.section:nth-child(even) {
  background: #f8fafc;
}

.section h2 {
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #1f2937;
}

.process-description {
  text-align: center;
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.process-steps {
  max-width: 800px;
  margin: 0 auto;
}

.results-highlight {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 3rem;
  font-weight: 600;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .section h2 {
    font-size: 1.875rem;
  }
}
</style>
