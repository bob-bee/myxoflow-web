<!-- src/views/AboutView.vue -->
<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const content = useContentStore()
</script>

<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <h1>{{ content.about.title }}</h1>
        <p class="subtitle">{{ content.about.subtitle }}</p>
      </div>
    </section>

    <section class="mission section">
      <div class="container">
        <h2>{{ content.about.mission.heading }}</h2>
        <p class="mission-text">{{ content.about.mission.text }}</p>
      </div>
    </section>

    <section class="team section">
      <div class="container">
        <h2>{{ content.about.team.heading }}</h2>
        <p class="team-text">{{ content.about.team.text }}</p>
      </div>
    </section>

    <section class="philosophy section">
      <div class="container">
        <h2>{{ content.about.philosophy.heading }}</h2>
        <ul class="philosophy-list">
          <li v-for="point in content.about.philosophy.points" :key="point">
            {{ point }}
          </li>
        </ul>
      </div>
    </section>

    <section class="values section">
      <div class="container">
        <h2>{{ content.about.values.heading }}</h2>
        <div class="values-grid">
          <div v-for="(value, index) in content.about.values.items" :key="index" class="value-card">
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
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
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0;
  padding: 2rem 2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.section {
  padding: 4rem 0;
}

.section:nth-child(even) {
  background: var(--background-color-alt);
}

.section h2 {
  font-size: 2.25rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 2rem;
  color: var(--text-color);
  text-align: center;
}

.mission-text,
.team-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.philosophy-list {
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
}

.philosophy-list li {
  padding: 1rem 0;
  border-left: 3px solid var(--primary-color);
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: var(--surface-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.value-card h3 {
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 1rem;
  color: var(--text-color);
}

.value-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .section h2 {
    font-size: 1.875rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
