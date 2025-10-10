<template>
  <section class="hero-section" :class="{ loaded: uiStore.animations.heroLoaded }">
    <div class="hero-background">
      <div class="hero-gradient"></div>
      <div class="hero-shapes">
        <div
          v-for="(shape, index) in 3"
          :key="'shape-' + shape"
          class="shape"
          :class="`shape-${index + 1}`"
          :style="{ animationDelay: `${index * 2}s` }"
        ></div>
      </div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="badge-icon">{{ contentStore.hero.badge.icon }}</span>
            {{ contentStore.hero.badge.text }}
          </div>

          <h1 class="hero-title">
            {{ contentStore.hero.title }}
            <span class="highlight">{{ contentStore.hero.highlight }}</span>
          </h1>

          <p class="hero-description">
            {{ contentStore.hero.description }}
          </p>

          <div class="hero-stats">
            <div v-for="stat in statsStore.heroStats" :key="stat.label" class="stat-item">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div v-if="stat.change" class="stat-change" :class="`trend-${stat.trend}`">
                {{ stat.change }}
              </div>
            </div>
          </div>

          <div class="hero-actions">
            <router-link :to="contentStore.hero.primaryAction.link" class="btn btn-primary">
              {{ contentStore.hero.primaryAction.text }}
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

            <router-link :to="contentStore.hero.secondaryAction.link" class="btn btn-secondary">
              {{ contentStore.hero.secondaryAction.text }}
            </router-link>
          </div>

          <div class="hero-chips">
            <div v-for="chip in contentStore.hero.chips" :key="chip.label" class="chip">
              {{ chip.label }}
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="dashboard-preview">
            <div class="dashboard-header">
              <div class="dashboard-logo">{{ contentStore.company.name }}</div>
              <div class="dashboard-tabs">
                <div class="tab active">Overview</div>
                <div class="tab">Markets</div>
                <div class="tab">Analytics</div>
              </div>
            </div>

            <div class="dashboard-content">
              <div class="dashboard-grid">
                <div
                  v-for="market in productStore.marketData"
                  :key="market.name"
                  class="dashboard-card"
                >
                  <div class="market-header">
                    <div
                      class="market-icon"
                      :style="{
                        backgroundColor: market.color + '20',
                        color: market.color,
                      }"
                    >
                      {{ market.icon }}
                    </div>
                    <div class="market-info">
                      <div class="market-name">{{ market.name }}</div>
                      <div class="market-status">{{ market.status }}</div>
                    </div>
                  </div>

                  <div class="market-stats">
                    <div class="market-stat">
                      <div class="stat-value">{{ market.users }}</div>
                      <div class="stat-label">Active Users</div>
                    </div>
                    <div class="market-stat">
                      <div class="stat-value text-green">{{ market.growth }}</div>
                      <div class="stat-label">Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useProductStore } from '@/stores/useProductStore'
import { useStatsStore } from '@/stores/useStatsStore'
import { useUIStore } from '@/stores/useUIStore'

const contentStore = useContentStore()
const productStore = useProductStore()
const statsStore = useStatsStore()
const uiStore = useUIStore()

onMounted(() => {
  // Trigger hero loaded animation
  setTimeout(() => {
    uiStore.animations.heroLoaded = true
  }, 500)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--surface-color);
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease;
}

.hero-section.loaded {
  opacity: 1;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--surface-color) 0%,
    var(--surface-secondary) 50%,
    var(--surface-tertiary) 100%
  );
  opacity: 0.8;
}

.hero-shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  right: 10%;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 5%;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 30%;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 4rem 0;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  padding: 0.75rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
}

.highlight {
  display: block;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 2rem 0;
  max-width: 90%;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.stat-item {
  text-align: center;
  position: relative;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-tertiary);
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

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
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
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-strong);
}

.btn-secondary:hover {
  background: var(--surface-secondary);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.btn:hover .arrow-icon {
  transform: translateX(4px);
}

.hero-chips {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.chip {
  background: var(--surface-tertiary);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border-light);
}

/* Dashboard Preview */
.dashboard-preview {
  background: var(--surface-color);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: transform 0.3s ease;
}

.dashboard-preview:hover {
  transform: perspective(1000px) rotateY(-2deg) rotateX(2deg);
}

.dashboard-header {
  background: var(--surface-secondary);
  border-bottom: 1px solid var(--border-light);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-logo {
  font-weight: 700;
  color: var(--primary-color);
}

.dashboard-tabs {
  display: flex;
  gap: 1rem;
}

.tab {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab.active {
  background: var(--primary-color);
  color: white;
}

.dashboard-content {
  padding: 1.5rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.dashboard-card {
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 1rem;
}

.market-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.market-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

.market-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
}

.market-status {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

.market-stats {
  display: flex;
  gap: 1rem;
}

.market-stat {
  text-align: center;
  flex: 1;
}

.market-stat .stat-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.market-stat .stat-label {
  font-size: 0.625rem;
  color: var(--text-tertiary);
  margin-top: 0.25rem;
}

.text-green {
  color: #10b981 !important;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-text {
    order: 1;
  }

  .hero-visual {
    order: 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 2rem 0;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    justify-content: center;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-preview {
    transform: none;
  }
}
</style>
