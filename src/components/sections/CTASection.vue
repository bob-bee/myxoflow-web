<template>
  <section class="cta-section">
    <div class="cta-background">
      <div class="cta-gradient"></div>
      <div class="cta-pattern"></div>
    </div>

    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2 class="cta-title">
            {{ contentStore.cta.title }}
          </h2>

          <p class="cta-description">
            {{ contentStore.cta.description }}
          </p>

          <div class="cta-features">
            <div v-for="feature in contentStore.cta.features" :key="feature" class="feature-item">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ feature }}
            </div>
          </div>
        </div>

        <div class="cta-actions">
          <router-link :to="contentStore.cta.primaryAction.link" class="btn btn-primary">
            {{ contentStore.cta.primaryAction.text }}
            <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M12 5L19 12L12 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>

          <router-link :to="contentStore.cta.secondaryAction.link" class="btn btn-secondary">
            {{ contentStore.cta.secondaryAction.text }}
          </router-link>

          <div class="cta-note">
            {{ contentStore.cta.note }}
          </div>
        </div>
      </div>

      <div class="cta-stats">
        <div v-for="stat in statsStore.companyStats" :key="stat.label" class="stat-item">
          <div class="stat-icon" :data-icon="stat.icon">
            <component :is="getStatIcon()" />
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div v-if="stat.change" class="stat-change" :class="`trend-${stat.trend}`">
              {{ stat.change }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import { useStatsStore } from '@/stores/useStatsStore'

const contentStore = useContentStore()
const statsStore = useStatsStore()

const getStatIcon = () => {
  // Return appropriate icon component
  return 'div'
}
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 5rem 0;
  background: var(--surface-color);
  overflow: hidden;
}

.cta-background {
  position: absolute;
  inset: 0;
}

.cta-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-hover) 50%,
    var(--primary-color) 100%
  );
  opacity: 0.03;
}

.cta-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 25% 25%, var(--primary-color) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.05;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
}

.cta-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 2rem 0;
}

.cta-features {
  display: grid;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.check-icon {
  color: var(--primary-color);
  flex-shrink: 0;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 4px 14px rgba(var(--primary-color-rgb), 0.3);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--primary-color-rgb), 0.4);
}

.btn-secondary {
  background: var(--surface-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border-strong);
}

.btn-secondary:hover {
  background: var(--surface-tertiary);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.btn:hover .arrow-icon {
  transform: translateX(4px);
}

.cta-note {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  line-height: 1.5;
  max-width: 280px;
  font-style: italic;
}

.cta-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border-light);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  border-color: var(--primary-color);
  box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.1);
  transform: translateY(-2px);
}

.stat-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

.stat-change {
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.trend-up {
  color: #10b981;
}
.trend-down {
  color: #ef4444;
}
.trend-stable {
  color: var(--text-tertiary);
}

/* Responsive */
@media (max-width: 1024px) {
  .cta-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .cta-actions {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 3rem 0;
  }

  .cta-content {
    margin-bottom: 2rem;
  }

  .cta-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

  .cta-actions {
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
