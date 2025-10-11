<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useStatsStore } from '@/stores/useStatsStore'

const contentStore = useContentStore()
const statsStore = useStatsStore()

// Pull hero data from content store
const hero = computed(() => contentStore.hero)

// Pull company stats or hero stats from stats store for showing stats
const statsData = computed(() => statsStore.companyStats)

// Pull market data - this probably needs to be added or adapted in your store if necessary
// For now, keeping the local array as example (else define in store)
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
  // add others ...
]

// Chips can be derived from hero.chips to keep dynamic
const chipData = computed(() => hero.value?.chips || [])

const showBadge = computed(() => hero.value?.badge != null)

// Methods for surfaces etc. remain same
// ...
</script>

<template>
  <section class="hero-section">
    <!-- Use hero props from store -->
    <div class="material-badge" v-if="showBadge">
      <div class="badge-surface">
        <div class="badge-icon">
          <!-- You can customize the icon if needed -->
          {{ hero.badge.icon }}
        </div>
        <span class="badge-text">{{ hero.badge.text }}</span>
      </div>
    </div>

    <h1>{{ hero.title }}</h1>
    <p>{{ hero.description }}</p>

    <!-- Chips -->
    <div class="chip-group">
      <div class="material-chip" v-for="(chip, index) in chipData" :key="index">
        <span class="chip-label">{{ chip.label }}</span>
      </div>
    </div>

    <!-- Stats -->
    <div class="stats-container">
      <div class="stat-card" v-for="(stat, index) in statsData" :key="index">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Market cards remain local or can be moved to store -->
    <div class="market-card" v-for="market in marketData" :key="market.key">
      <!-- Content -->
    </div>
  </section>
</template>

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
