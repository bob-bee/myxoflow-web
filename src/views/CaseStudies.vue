<!-- src/views/CaseStudies.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const content = useContentStore()
</script>

<template>
  <div class="case-studies">
    <section class="hero">
      <div class="container">
        <h1>{{ content.caseStudies.title }}</h1>
        <p>{{ content.caseStudies.subtitle }}</p>
      </div>
    </section>

    <section class="studies section">
      <div class="container">
        <div v-for="study in content.caseStudies.studies" :key="study.id" class="case-study-card">
          <div class="study-header">
            <h2>{{ study.client }}</h2>
          </div>

          <div class="study-content">
            <div class="challenge">
              <h3>Challenge</h3>
              <p>{{ study.challenge }}</p>
            </div>

            <div class="solution">
              <h3>Solution</h3>
              <p>{{ study.solution }}</p>
            </div>

            <div class="results">
              <h3>Results</h3>
              <ul>
                <li v-for="result in study.results" :key="result">
                  {{ result }}
                </li>
              </ul>
            </div>

            <div class="quote">
              <blockquote>"{{ study.quote }}"</blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.case-study-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  overflow: hidden;
}

.study-header {
  background: #f8fafc;
  padding: 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.study-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
}

.study-content {
  padding: 2rem;
}

.challenge,
.solution,
.results {
  margin-bottom: 2rem;
}

.challenge h3,
.solution h3,
.results h3 {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.challenge h3 {
  color: #dc2626;
}

.solution h3 {
  color: #3b82f6;
}

.results h3 {
  color: #10b981;
}

.results ul {
  list-style: none;
  padding: 0;
}

.results li {
  padding: 0.5rem 0;
  border-left: 3px solid #10b981;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  background: #f0fdf4;
}

.quote {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
}

.quote blockquote {
  font-style: italic;
  font-size: 1.125rem;
  color: #4b5563;
  margin: 0;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .study-content {
    padding: 1.5rem;
  }

  .study-header {
    padding: 1.5rem;
  }
}
</style>
