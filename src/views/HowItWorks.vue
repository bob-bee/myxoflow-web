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
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--md-sys-color-surface);
  overflow: hidden;
  padding: 120px 0 80px;

  /* Elevation levels (still local, since they’re just shadows) */
  --md-elevation-level-1: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  --md-elevation-level-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  --md-elevation-level-3: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  --md-elevation-level-4: 0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3);
}
</style>
