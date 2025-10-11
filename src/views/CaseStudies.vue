<!-- src/views/CaseStudies.vue -->
<script setup lang="ts">
import { useStatsStore } from '@/stores/useStatsStore'

const content = useStatsStore()
</script>

<template>
  <div class="case-studies">
    <section class="hero">
      <div class="container">
        <h1>Case Studies</h1>
        <p>Real results from real clients across diverse industries</p>
      </div>
    </section>

    <section class="studies section">
      <div class="container">
        <div v-for="study in content.caseStudies" :key="study.client" class="case-study-card">
          <!-- Study Header with Image -->
          <div class="study-header">
            <div class="header-content">
              <h2>{{ study.client }}</h2>
              <span class="industry-tag">{{ study.industry }}</span>
              <span class="duration-tag">{{ study.duration }}</span>
            </div>
            <div class="study-image" v-if="study.image">
              <img :src="study.image" :alt="study.client" />
            </div>
          </div>

          <div class="study-content">
            <!-- Challenge Section -->
            <div class="challenge">
              <h3>Challenge</h3>
              <p>{{ study.challenge }}</p>
            </div>

            <!-- Solution Section -->
            <div class="solution">
              <h3>Solution</h3>
              <p>{{ study.solution }}</p>
            </div>

            <!-- Metrics Section -->
            <div class="metrics" v-if="study.metrics && study.metrics.length">
              <h3>Key Metrics</h3>
              <div class="metrics-grid">
                <div v-for="metric in study.metrics" :key="metric.label" class="metric-card">
                  <div class="metric-label">{{ metric.label }}</div>
                  <div class="metric-values">
                    <div class="before">
                      <span class="label">Before:</span>
                      <span class="value">{{ metric.before }}</span>
                    </div>
                    <div class="arrow">→</div>
                    <div class="after">
                      <span class="label">After:</span>
                      <span class="value">{{ metric.after }}</span>
                    </div>
                  </div>
                  <div
                    class="improvement"
                    :class="{
                      positive: !metric.improvement.startsWith('-'),
                      negative: metric.improvement.startsWith('-'),
                    }"
                  >
                    {{ metric.improvement }}
                  </div>
                  <div class="unit">{{ metric.unit }}</div>
                </div>
              </div>
            </div>

            <!-- Results Section -->
            <div class="results">
              <h3>Results</h3>
              <ul>
                <li v-for="result in study.results" :key="result">
                  {{ result }}
                </li>
              </ul>
            </div>

            <!-- Quote Section -->
            <div class="quote">
              <blockquote>"{{ study.quote }}"</blockquote>
              <cite>— {{ study.client }}</cite>
            </div>
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
  background: var(--surface-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  margin-bottom: 4rem;
  overflow: hidden;
}

.study-header {
  background: var(--background-color-alt);
  padding: 2rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.header-content {
  flex: 1;
}

.study-header h2 {
  font-size: 1.75rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-color);
  margin: 0 0 0.75rem 0;
}

.industry-tag,
.duration-tag {
  display: inline-block;
  background: var(--primary-color);
  color: var(--text-on-primary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.duration-tag {
  background: var(--secondary-color);
}

.study-image {
  width: 120px;
  height: 80px;
  border-radius: var(--border-radius);
  overflow: hidden;
  flex-shrink: 0;
}

.study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.study-content {
  padding: 2rem;
}

.challenge,
.solution,
.results,
.metrics {
  margin-bottom: 3rem;
}

.challenge h3,
.solution h3,
.results h3,
.metrics h3 {
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-color);
}

.challenge h3 {
  color: var(--danger-color);
}

.solution h3 {
  color: var(--primary-color);
}

.results h3 {
  color: var(--success-color);
}

.metrics h3 {
  color: var(--secondary-color);
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.metric-card {
  background: var(--background-color-alt);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--secondary-color);
  text-align: center;
}

.metric-label {
  font-weight: var(--font-weight-bold);
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metric-values {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.before,
.after {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.before .label,
.after .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
}

.before .value,
.after .value {
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-color);
}

.arrow {
  font-size: 1.25rem;
  color: var(--secondary-color);
  font-weight: bold;
}

.improvement {
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  margin-bottom: 0.5rem;
}

.improvement.positive {
  background: var(--success-bg);
  color: var(--success-color);
}

.improvement.negative {
  background: var(--danger-bg);
  color: var(--danger-color);
}

.unit {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Results List */
.results ul {
  list-style: none;
  padding: 0;
}

.results li {
  padding: 0.75rem 1rem;
  border-left: 3px solid var(--success-color);
  margin-bottom: 0.75rem;
  background: var(--success-bg);
  border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
  position: relative;
}

.results li::before {
  content: '✓';
  position: absolute;
  left: -0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: var(--success-color);
  color: white;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

/* Quote Section */
.quote {
  background: var(--background-color-alt);
  padding: 2rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
  position: relative;
}

.quote::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.3;
  font-family: serif;
}

.quote blockquote {
  font-style: italic;
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.quote cite {
  display: block;
  font-size: 0.875rem;
  color: var(--text-color);
  font-weight: var(--font-weight-medium);
  text-align: right;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .study-header {
    flex-direction: column;
    text-align: center;
  }

  .study-image {
    width: 100%;
    height: 120px;
  }

  .study-content {
    padding: 1.5rem;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .metric-values {
    flex-direction: column;
    gap: 0.5rem;
  }

  .arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 0;
  }

  .hero h1 {
    font-size: 1.75rem;
  }

  .study-header {
    padding: 1.5rem;
  }

  .study-content {
    padding: 1rem;
  }

  .challenge,
  .solution,
  .results,
  .metrics {
    margin-bottom: 2rem;
  }
}
</style>
