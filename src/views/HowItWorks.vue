<template>
  <section class="hero-section">
    <!-- Material Background -->
    <div class="hero-background">
      <div class="material-gradient"></div>
      <div class="surface-elevation">
        <div class="floating-surfaces">
          <div class="surface-card" v-for="i in 4" :key="i" :style="getSurfaceStyle(i)">
            <div class="surface-content">
              <div class="surface-icon">{{ getSurfaceIcon(i) }}</div>
              <div class="surface-label">{{ getSurfaceLabel(i) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <!-- Material Badge -->
        <div class="material-badge" v-if="showBadge">
          <div class="badge-surface">
            <div class="badge-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2L9.09 5.26L12 6L10 8.5L10.91 12L8 10.5L5.09 12L6 8.5L4 6L6.91 5.26L8 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span class="badge-text">Unified Dashboard Platform</span>
          </div>
        </div>

        <!-- Material Typography -->
        <div class="headline-container">
          <h1 class="material-headline-large">
            <span class="headline-primary">{{ content.hero.headline }}</span>
            <span class="headline-emphasis">Infinite Possibilities</span>
          </h1>
        </div>

        <!-- Material Body Text -->
        <div class="body-container">
          <p class="material-body-large">
            {{ content.hero.subheadline }}
          </p>
        </div>

        <!-- Material Chip Group -->
        <div class="chip-group">
          <div class="material-chip" v-for="(chip, index) in chipData" :key="index">
            <div class="chip-icon" v-html="chip.icon"></div>
            <span class="chip-label">{{ chip.label }}</span>
          </div>
        </div>

        <!-- Material Button Group -->
        <div class="button-group">
          <button class="material-button material-button-filled">
            <div class="button-content">
              <span>{{ content.hero.ctaPrimary }}</span>
              <div class="button-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4.5 9H13.5M13.5 9L9.75 5.25M13.5 9L9.75 12.75"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="button-state-layer"></div>
          </button>

          <button class="material-button material-button-outlined">
            <div class="button-content">
              <span>{{ content.hero.ctaSecondary }}</span>
            </div>
            <div class="button-state-layer"></div>
          </button>
        </div>

        <!-- Material Stats Cards -->
        <div class="stats-container">
          <div class="stats-surface">
            <div class="stat-card" v-for="(stat, index) in statsData" :key="index">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-trend">
                <div class="trend-icon" :class="stat.trend">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 7L5 4L7 6L10 3"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span class="trend-text">{{ stat.change }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Material Dashboard Preview -->
      <div class="dashboard-preview">
        <div class="preview-surface">
          <!-- Dashboard Header -->
          <div class="dashboard-header">
            <div class="header-content">
              <div class="dashboard-title">MyxoFlow Dashboard</div>
              <div class="dashboard-tabs">
                <div class="tab-indicator"></div>
                <div class="tab-item active">Overview</div>
                <div class="tab-item">Markets</div>
                <div class="tab-item">Analytics</div>
              </div>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="dashboard-content">
            <div class="dashboard-grid">
              <!-- Market Cards -->
              <div class="market-card" v-for="market in marketData" :key="market.key">
                <div class="card-surface">
                  <div class="card-header">
                    <div
                      class="market-icon"
                      :style="{ backgroundColor: market.color + '20', color: market.color }"
                    >
                      <div v-html="market.icon"></div>
                    </div>
                    <div class="market-info">
                      <div class="market-name">{{ market.name }}</div>
                      <div class="market-status">{{ market.status }}</div>
                    </div>
                  </div>
                  <div class="card-metrics">
                    <div class="metric">
                      <span class="metric-value">{{ market.users }}</span>
                      <span class="metric-label">Active Users</span>
                    </div>
                    <div class="metric">
                      <span class="metric-value">{{ market.growth }}</span>
                      <span class="metric-label">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Material Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-surface">
        <div class="scroll-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8L10 12L14 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="scroll-text">Explore Solutions</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()
const content = contentStore.$state

// Component state
const showBadge = ref(true)

// Data for material chips
const chipData = [
  {
    icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M6 3V1.5C6 1.22 6.22 1 6.5 1H7.5C7.78 1 8 1.22 8 1.5V3" stroke="currentColor" stroke-width="1.2"/></svg>',
    label: 'One Platform',
  },
  {
    icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    label: 'Multiple Markets',
  },
  {
    icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L8.5 5L13 5L9.5 8L11 12L7 9.5L3 12L4.5 8L1 5L5.5 5L7 1Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    label: 'Rapid Deploy',
  },
]

// Stats data
const statsData = [
  { value: '5+', label: 'Market Solutions', change: '+2 This Year', trend: 'up' },
  { value: '90%', label: 'Cost Reduction', change: 'Proven Results', trend: 'up' },
  { value: '3 weeks', label: 'Deploy Time', change: 'Avg. Launch', trend: 'neutral' },
]

// Market data for dashboard preview
const marketData = [
  {
    key: 'stichflow',
    name: 'StichFlow',
    status: 'Active',
    users: '150+',
    growth: '+25%',
    color: '#1976D2',
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6C4 4.89543 4.89543 4 6 4H10C11.1046 4 12 4.89543 12 6V10C12 11.1046 11.1046 12 10 12H6C4.89543 12 4 11.1046 4 10V6Z" fill="currentColor"/></svg>',
  },
  {
    key: 'myxofill',
    name: 'MyxoFill',
    status: 'Active',
    users: '500+',
    growth: '+40%',
    color: '#388E3C',
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="4" fill="currentColor"/></svg>',
  },
  {
    key: 'golgappa',
    name: 'Golgappa.inc',
    status: 'Beta',
    users: '25+',
    growth: '+200%',
    color: '#F57C00',
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="4" y="4" width="8" height="8" rx="2" fill="currentColor"/></svg>',
  },
]

// Methods
const getSurfaceStyle = (index: number) => {
  const positions = [
    { 'inset-block-start': '10%', 'inset-inline-start': '15%', delay: '0s' },
    { 'inset-block-start': '60%', 'inset-inline-end': '10%', delay: '0.5s' },
    { 'inset-block-start': '80%', 'inset-inline-start': '5%', delay: '1s' },
    { 'inset-block-start': '30%', 'inset-inline-end': '20%', delay: '1.5s' },
  ]
  const pos = positions[index - 1]
  return pos ? { ...pos, '--animation-delay': pos.delay } : {}
}

const getSurfaceIcon = (index: number) => {
  const icons = ['📊', '⚡', '🎯', '🚀']
  return icons[index - 1]
}

const getSurfaceLabel = (index: number) => {
  const labels = ['Analytics', 'Speed', 'Precision', 'Scale']
  return labels[index - 1]
}

onMounted(() => {
  // Animation initialization if needed
})
</script>

<style scoped>
/* Material Design 3 Variables */
.hero-section {
  --md-sys-color-primary: #1976d2;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #d3e4fd;
  --md-sys-color-on-primary-container: #001c3b;

  --md-sys-color-secondary: #388e3c;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #c8e6c9;
  --md-sys-color-on-secondary-container: #1b5e20;

  --md-sys-color-surface: #fefbff;
  --md-sys-color-on-surface: #1c1b1f;
  --md-sys-color-surface-variant: #e7e0ec;
  --md-sys-color-on-surface-variant: #49454f;

  --md-sys-color-outline: #79767d;
  --md-sys-color-outline-variant: #cac4d0;

  --md-elevation-level-1: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  --md-elevation-level-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  --md-elevation-level-3: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  --md-elevation-level-4: 0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3);

  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--md-sys-color-surface);
  overflow: hidden;
  padding: 120px 0 80px;
}

/* Material Background */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.material-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--md-sys-color-primary-container) 0%,
    rgba(25, 118, 210, 0.1) 25%,
    rgba(56, 142, 60, 0.1) 75%,
    var(--md-sys-color-secondary-container) 100%
  );
}

.surface-elevation {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-surfaces {
  position: relative;
  width: 100%;
  height: 100%;
}

.surface-card {
  position: absolute;
  width: 120px;
  height: 80px;
  background: var(--md-sys-color-surface);
  border-radius: 16px;
  box-shadow: var(--md-elevation-level-2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
  animation-delay: var(--animation-delay);
  border: 1px solid var(--md-sys-color-outline-variant);
}

.surface-content {
  text-align: center;
}

.surface-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.surface-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--md-sys-color-on-surface-variant);
  letter-spacing: 0.5px;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-0.5deg);
  }
}

/* Container */
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

/* Hero Content */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

/* Material Badge */
.material-badge {
  align-self: center;
  animation: slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.badge-surface {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: var(--md-elevation-level-1);
  border: 1px solid var(--md-sys-color-outline-variant);
}

.badge-icon {
  display: flex;
  align-items: center;
}

/* Material Typography */
.headline-container {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
}

.material-headline-large {
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.25px;
  color: var(--md-sys-color-on-surface);
  margin: 0;
}

.headline-emphasis {
  display: block;
  font-weight: 600;
  background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.body-container {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.material-body-large {
  font-size: 18px;
  line-height: 1.5;
  color: var(--md-sys-color-on-surface-variant);
  margin: 0;
}

/* Material Chips */
.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

.material-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface-variant);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--md-sys-color-outline-variant);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.material-chip:hover {
  box-shadow: var(--md-elevation-level-1);
  transform: translateY(-1px);
}

.chip-icon {
  display: flex;
  align-items: center;
  color: var(--md-sys-color-primary);
}

/* Material Buttons */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

.material-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  border-radius: 20px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  min-width: 200px;
  height: 48px;
}

.material-button-filled {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  box-shadow: var(--md-elevation-level-1);
}

.material-button-outlined {
  background: transparent;
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-outline);
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}

.button-state-layer {
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.material-button:hover .button-state-layer {
  opacity: 0.08;
}

.material-button:active .button-state-layer {
  opacity: 0.12;
}

.material-button:hover {
  box-shadow: var(--md-elevation-level-2);
}

/* Stats Container */
.stats-container {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
}

.stats-surface {
  display: flex;
  justify-content: space-between;
  background: var(--md-sys-color-surface);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--md-elevation-level-2);
  border: 1px solid var(--md-sys-color-outline-variant);
  gap: 16px;
}

.stat-card {
  text-align: center;
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: var(--md-sys-color-primary);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: var(--md-sys-color-on-surface-variant);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.stat-trend {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 11px;
  color: var(--md-sys-color-secondary);
}

.trend-icon {
  display: flex;
  align-items: center;
}

/* Dashboard Preview */
.dashboard-preview {
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
  display: none;
}

.preview-surface {
  background: var(--md-sys-color-surface);
  border-radius: 24px;
  box-shadow: var(--md-elevation-level-4);
  overflow: hidden;
  border: 1px solid var(--md-sys-color-outline-variant);
}

.dashboard-header {
  padding: 24px;
  border-bottom: 1px solid var(--md-sys-color-outline-variant);
}

.dashboard-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 16px;
}

.dashboard-tabs {
  display: flex;
  gap: 24px;
  position: relative;
}

.tab-item {
  font-size: 14px;
  font-weight: 500;
  color: var(--md-sys-color-on-surface-variant);
  padding: 8px 0;
  cursor: pointer;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-item.active {
  color: var(--md-sys-color-primary);
}

.dashboard-content {
  padding: 24px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.market-card {
  animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.market-card:nth-child(2) {
  animation-delay: 0.1s;
}
.market-card:nth-child(3) {
  animation-delay: 0.2s;
}

.card-surface {
  background: var(--md-sys-color-surface-variant);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid var(--md-sys-color-outline-variant);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-surface:hover {
  box-shadow: var(--md-elevation-level-2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.market-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.market-info {
  flex: 1;
}

.market-name {
  font-size: 16px;
  font-weight: 500;
  color: var(--md-sys-color-on-surface);
  line-height: 1;
  margin-bottom: 4px;
}

.market-status {
  font-size: 12px;
  color: var(--md-sys-color-on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-metrics {
  display: flex;
  justify-content: space-between;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: var(--md-sys-color-primary);
  line-height: 1;
  margin-bottom: 4px;
}

.metric-label {
  font-size: 11px;
  color: var(--md-sys-color-on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s ease-in-out infinite;
}

.scroll-surface {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: var(--md-sys-color-surface);
  border-radius: 20px;
  box-shadow: var(--md-elevation-level-2);
  border: 1px solid var(--md-sys-color-outline-variant);
}

.scroll-icon {
  color: var(--md-sys-color-primary);
}

.scroll-text {
  font-size: 12px;
  color: var(--md-sys-color-on-surface-variant);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Animations */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40%,
  43% {
    transform: translateX(-50%) translateY(-8px);
  }
  70% {
    transform: translateX(-50%) translateY(-4px);
  }
}

/* Responsive Design */
@media (min-width: 768px) {
  .button-group {
    flex-direction: row;
  }

  .stats-surface {
    gap: 24px;
  }

  .hero-content {
    text-align: left;
    margin: 0;
  }

  .material-badge {
    align-self: flex-start;
  }

  .chip-group {
    justify-content: flex-start;
  }

  .button-group {
    align-items: flex-start;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }

  .dashboard-preview {
    display: block;
  }
}

@media (min-width: 1200px) {
  .hero-container {
    padding: 0 40px;
  }
}
</style>
