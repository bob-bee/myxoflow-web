<template>
  <section class="hero-section" ref="heroRef">
    <!-- Background Elements -->
    <div class="hero-background">
      <div class="hero-gradient"></div>
      <div class="hero-pattern"></div>
      <div class="floating-elements">
        <div
          class="floating-element"
          v-for="i in 6"
          :key="i"
          :style="getFloatingElementStyle(i)"
        ></div>
      </div>
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <!-- Announcement Badge -->
        <div class="announcement-badge" v-if="showAnnouncement">
          <span class="badge-icon">✨</span>
          <span class="badge-text">New: MyxoCraft Platform Now Live!</span>
          <router-link to="/products" class="badge-link">Learn More →</router-link>
        </div>

        <!-- Main Headline -->
        <h1 class="hero-headline">
          <span class="headline-main">{{ content.hero.headline }}</span>
          <span class="headline-highlight">One Task at a Time</span>
        </h1>

        <!-- Subheadline -->
        <p class="hero-subheadline">
          {{ content.hero.subheadline }}
        </p>

        <!-- Key Features -->
        <div class="hero-features">
          <div class="feature-item" v-for="(feature, index) in keyFeatures" :key="index">
            <div class="feature-icon" v-html="feature.icon"></div>
            <span>{{ feature.text }}</span>
          </div>
        </div>

        <!-- Call-to-Action Buttons -->
        <div class="hero-actions">
          <router-link to="/how-it-works" class="cta-primary">
            <span>{{ content.hero.ctaPrimary }}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.16675 10H15.8334"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 4.16669L15.8334 10L10 15.8334"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>

          <router-link to="/contact" class="cta-secondary">
            <span>{{ content.hero.ctaSecondary }}</span>
          </router-link>
        </div>

        <!-- Social Proof -->
        <div class="social-proof">
          <p class="social-proof-text">Trusted by 500+ manufacturers worldwide</p>
          <div class="social-proof-stats">
            <div class="stat-item">
              <span class="stat-number">90%</span>
              <span class="stat-label">Cost Reduction</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Task Makers</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">2 sec</span>
              <span class="stat-label">Response Time</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Visual -->
      <div class="hero-visual">
        <div class="visual-container">
          <!-- Dashboard Preview -->
          <div class="dashboard-preview" :style="{ transform: dashboardTransform }">
            <div class="dashboard-header">
              <div class="dashboard-logo">MyxoFlow</div>
              <div class="dashboard-nav">
                <span class="nav-dot"></span>
                <span class="nav-dot"></span>
                <span class="nav-dot"></span>
              </div>
            </div>
            <div class="dashboard-content">
              <div class="dashboard-card" v-for="i in 3" :key="i">
                <div class="card-header"></div>
                <div class="card-content">
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: 40 + i * 20 + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Cards -->
          <div class="floating-card card-1" :style="{ transform: card1Transform }">
            <div class="card-icon">📈</div>
            <div class="card-text">
              <div class="card-title">Cost Optimized</div>
              <div class="card-value">-90%</div>
            </div>
          </div>

          <div class="floating-card card-2" :style="{ transform: card2Transform }">
            <div class="card-icon">⚡</div>
            <div class="card-text">
              <div class="card-title">Tasks Completed</div>
              <div class="card-value">1,234</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 13L12 18L17 13"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span class="scroll-text">Scroll to explore</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()
const content = contentStore.$state

// Refs
const heroRef = ref<HTMLElement>()
const mouseX = ref(0)
const mouseY = ref(0)
const scrollY = ref(0)

// State
const showAnnouncement = ref(true)

// Key features for the hero section
const keyFeatures = [
  {
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L10.09 5.26L15 6L12 8.96L12.71 13.98L8 11.82L3.29 13.98L4 8.96L1 6L5.91 5.26L8 1Z" fill="currentColor"/></svg>',
    text: 'No Premium Price Tag',
  },
  {
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1V15M1 8H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    text: 'Horizontal Scaling',
  },
  {
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 6L8 12L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: 'Direct Partnership',
  },
]

// Computed transforms for parallax effects
const dashboardTransform = computed(() => {
  const parallaxX = (mouseX.value - window.innerWidth / 2) * 0.02
  const parallaxY = (mouseY.value - window.innerHeight / 2) * 0.02 + scrollY.value * 0.5
  return `translate3d(${parallaxX}px, ${parallaxY}px, 0) rotateY(${parallaxX * 0.5}deg)`
})

const card1Transform = computed(() => {
  const parallaxX = (mouseX.value - window.innerWidth / 2) * 0.05
  const parallaxY = (mouseY.value - window.innerHeight / 2) * 0.05 + scrollY.value * 0.3
  return `translate3d(${parallaxX}px, ${parallaxY}px, 0)`
})

const card2Transform = computed(() => {
  const parallaxX = (mouseX.value - window.innerWidth / 2) * -0.03
  const parallaxY = (mouseY.value - window.innerHeight / 2) * -0.03 + scrollY.value * 0.4
  return `translate3d(${parallaxX}px, ${parallaxY}px, 0)`
})

// Methods
const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const handleScroll = () => {
  scrollY.value = window.scrollY * 0.5
}

const getFloatingElementStyle = (index: number) => {
  const delay = index * 0.5
  return {
    '--delay': `${delay}s`,
    '--duration': `${3 + index}s`,
    left: `${10 + index * 15}%`,
    top: `${20 + index * 10}%`,
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 120px 0 60px;
}

/* Background */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.05) 0%,
    rgba(16, 185, 129, 0.05) 50%,
    rgba(245, 158, 11, 0.05) 100%
  );
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
  animation: patternFloat 20s ease-in-out infinite;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-element {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.3;
  animation: float var(--duration, 4s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
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

@keyframes patternFloat {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(2deg);
  }
}

/* Container */
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

/* Content */
.hero-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.announcement-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 2rem;
  animation: slideInUp 0.6s ease 0.2s both;
}

.badge-link {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  transition: opacity var(--transition-fast);
}

.badge-link:hover {
  opacity: 0.8;
}

.hero-headline {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  animation: slideInUp 0.6s ease 0.4s both;
}

.headline-highlight {
  display: block;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subheadline {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  animation: slideInUp 0.6s ease 0.6s both;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: 2.5rem;
  animation: slideInUp 0.6s ease 0.8s both;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--text-secondary);
  font-weight: 500;
}

.feature-icon {
  color: var(--primary-color);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: 3rem;
  animation: slideInUp 0.6s ease 1s both;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: 1.125rem;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.4);
}

.cta-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px 0 rgba(37, 99, 235, 0.4);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--text-color);
  text-decoration: none;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: 1.125rem;
  transition: all var(--transition-normal);
}

.cta-secondary:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-1px);
}

/* Social Proof */
.social-proof {
  animation: slideInUp 0.6s ease 1.2s both;
}

.social-proof-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.social-proof-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-color);
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 2rem;
  background: var(--border-color);
}

/* Hero Visual */
.hero-visual {
  display: none;
  justify-content: center;
  animation: slideInUp 0.8s ease 0.6s both;
}

.visual-container {
  position: relative;
  width: 400px;
  height: 300px;
}

.dashboard-preview {
  width: 320px;
  height: 240px;
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: var(--spacing-md);
  transition: transform var(--transition-slow);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.dashboard-logo {
  font-weight: 700;
  color: var(--primary-color);
}

.dashboard-nav {
  display: flex;
  gap: var(--spacing-xs);
}

.nav-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-color);
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.dashboard-card {
  background: var(--surface-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-sm);
}

.card-header {
  width: 60%;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  margin-bottom: var(--spacing-xs);
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: var(--border-color);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 3px;
  transition: width 2s ease;
}

/* Floating Cards */
.floating-card {
  position: absolute;
  background: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: transform var(--transition-slow);
}

.card-1 {
  top: -20px;
  right: -40px;
  transform: rotate(5deg);
}

.card-2 {
  bottom: -30px;
  left: -50px;
  transform: rotate(-8deg);
}

.card-icon {
  font-size: 1.5rem;
}

.card-title {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--primary-color);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--text-secondary);
  animation: bounce 2s ease-in-out infinite;
}

.scroll-arrow {
  animation: float 2s ease-in-out infinite;
}

.scroll-text {
  font-size: 0.875rem;
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
    transform: translateX(-50%) translateY(-10px);
  }
  70% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    padding: 0 var(--spacing-md);
  }

  .hero-features {
    flex-direction: column;
    align-items: center;
  }

  .hero-actions {
    flex-direction: column;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }

  .social-proof-stats {
    justify-content: space-around;
  }

  .stat-divider {
    display: none;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .hero-content {
    text-align: left;
    margin: 0;
  }

  .hero-actions {
    justify-content: flex-start;
  }

  .hero-visual {
    display: flex;
  }
}

@media (min-width: 1200px) {
  .visual-container {
    width: 500px;
    height: 400px;
  }

  .dashboard-preview {
    width: 400px;
    height: 300px;
  }
}
</style>
