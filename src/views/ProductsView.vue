<template>
  <div class="products-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">{{ content.products.title }}</h1>
        <p class="page-description">
          Discover our suite of market solutions powered by unified dashboard technology. Each
          solution is tailored for specific industries while sharing the same powerful foundation.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        <div
          class="product-card"
          v-for="product in content.products.list"
          :key="product.key"
          :class="getProductCardClass(product.key)"
        >
          <!-- Product Header -->
          <div class="product-header">
            <div class="product-icon">
              <div class="icon-container" :style="getIconStyle(product.key)">
                <span class="icon-symbol">{{ getProductIcon(product.key) }}</span>
              </div>
            </div>

            <div class="product-badge" v-if="getProductBadge(product.key)">
              <span class="badge-text">{{ getProductBadge(product.key) }}</span>
            </div>
          </div>

          <!-- Product Content -->
          <div class="product-content">
            <h3 class="product-name">{{ product.name }}</h3>

            <p class="product-description">{{ product.description }}</p>

            <!-- Key Features -->
            <div class="product-features">
              <div
                class="feature-item"
                v-for="feature in getKeyFeatures(product.key)"
                :key="feature"
              >
                <div class="feature-icon">✓</div>
                <span class="feature-text">{{ feature }}</span>
              </div>
            </div>

            <!-- Product Stats -->
            <div class="product-stats" v-if="getProductStats(product.key)">
              <div class="stat-item" v-for="stat in getProductStats(product.key)" :key="stat.label">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <!-- Product Actions -->
          <div class="product-actions">
            <router-link :to="'/products/' + product.key" class="btn btn-primary product-cta">
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="btn-icon">
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>

            <button class="btn btn-secondary" @click="handleQuickAction(product.key)">
              {{ getQuickActionText(product.key) }}
            </button>
          </div>
        </div>
      </div>

      <!-- Platform Connection -->
      <div class="platform-connection">
        <div class="connection-content">
          <div class="connection-header">
            <h2 class="connection-title">All Products Built on MyxoFlow Platform</h2>
            <p class="connection-description">
              Every solution leverages our unified dashboard technology, ensuring consistent user
              experience and shared optimizations across all market verticals.
            </p>
          </div>

          <div class="connection-benefits">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h4 class="benefit-title">Rapid Deployment</h4>
              <p class="benefit-text">New market solutions in weeks, not months</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" />
                  <path
                    d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h4 class="benefit-title">Cross-Market Optimization</h4>
              <p class="benefit-text">Improvements in one market benefit all solutions</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="2" />
                </svg>
              </div>
              <h4 class="benefit-title">Unified Experience</h4>
              <p class="benefit-text">Consistent interface design across all products</p>
            </div>
          </div>

          <div class="connection-action">
            <router-link to="/products/dashboards" class="btn btn-outline">
              Explore the Platform
            </router-link>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="bottom-cta">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Transform Your Market Operations?</h2>
          <p class="cta-description">
            Schedule a consultation to see how MyxoFlow's unified platform can be adapted for your
            industry.
          </p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-primary btn-large">
              Schedule Consultation
            </router-link>
            <router-link to="/how-it-works" class="btn btn-secondary btn-large">
              See How It Works
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()
const content = contentStore.$state

// Product customization functions
const getProductIcon = (key: string): string => {
  const icons: Record<string, string> = {
    dashboards: '⚡',
    stichflow: '👔',
    fill: '👥',
    date: '💕',
    golgappa: '🍛',
    craft: '🎨',
  }
  return icons[key] || '📊'
}

const getIconStyle = (key: string): Record<string, string> => {
  const styles: Record<string, Record<string, string>> = {
    dashboards: { background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: 'white' },
    stichflow: { background: 'linear-gradient(135deg, #10B981, #047857)', color: 'white' },
    fill: { background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', color: 'white' },
    date: { background: 'linear-gradient(135deg, #EC4899, #BE185D)', color: 'white' },
    golgappa: { background: 'linear-gradient(135deg, #F59E0B, #D97706)', color: 'white' },
    craft: { background: 'linear-gradient(135deg, #EF4444, #DC2626)', color: 'white' },
  }
  return styles[key] || { background: '#E5E7EB', color: '#374151' }
}

const getProductBadge = (key: string): string | null => {
  const badges: Record<string, string> = {
    dashboards: 'Core Platform',
    stichflow: 'Most Popular',
    fill: 'Growing Fast',
    date: 'Premium',
  }
  return badges[key] || null
}

const getProductCardClass = (key: string): string => {
  const classes: Record<string, string> = {
    dashboards: 'card-featured',
    stichflow: 'card-popular',
  }
  return classes[key] || ''
}

const getKeyFeatures = (key: string): string[] => {
  const features: Record<string, string[]> = {
    dashboards: ['Unified technology stack', 'Cross-market deployment', 'Rapid customization'],
    stichflow: ['500+ verified workshops', 'Multi-language support', 'Integrated payments'],
    fill: ['Regional competitions', 'AI-powered matching', 'Performance analytics'],
    date: ['Income verification', 'Premium membership', 'Advanced matching'],
    golgappa: ['DC power optimization', 'Weather-resistant', 'Route analytics'],
    craft: ['Open-source library', 'Design editor', 'Direct manufacturing'],
  }
  return features[key] || ['Platform-based solution', 'Direct developer support', 'Proven results']
}

const getProductStats = (key: string) => {
  const stats: Record<string, Array<{ value: string; label: string }>> = {
    dashboards: [
      { value: '5+', label: 'Markets' },
      { value: '90%', label: 'Code Reuse' },
    ],
    stichflow: [
      { value: '500+', label: 'Workshops' },
      { value: '3', label: 'Languages' },
    ],
    fill: [
      { value: '1000+', label: 'Freelancers' },
      { value: '95%', label: 'Match Rate' },
    ],
    date: [
      { value: '$100', label: '/month' },
      { value: '98%', label: 'Verified' },
    ],
    golgappa: [
      { value: '48V', label: 'Power System' },
      { value: '80%', label: 'Efficiency' },
    ],
    craft: [
      { value: '1000+', label: 'Designs' },
      { value: '24hr', label: 'Turnaround' },
    ],
  }
  return stats[key] || null
}

const getQuickActionText = (key: string): string => {
  const actions: Record<string, string> = {
    dashboards: 'Request Demo',
    stichflow: 'View Network',
    fill: 'See Talent',
    date: 'Membership Info',
    golgappa: 'Calculate ROI',
    craft: 'Browse Designs',
  }
  return actions[key] || 'Quick Demo'
}

const handleQuickAction = (key: string) => {
  // This would typically open a modal or navigate to a specific section
  // For now, we'll navigate to the product detail page with a specific anchor
  const actions: Record<string, string> = {
    dashboards: '/products/dashboards#demo',
    stichflow: '/products/stichflow#network',
    fill: '/products/fill#talent',
    date: '/products/date#membership',
    golgappa: '/products/golgappa#calculator',
    craft: '/products/craft#library',
  }

  if (actions[key]) {
    window.location.href = actions[key]
  }
}
</script>

<style scoped>
.products-page {
  padding: 40px 0 80px;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Page Header */
.page-header {
  text-align: center;
  margin-bottom: 64px;
}

.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 16px;
  line-height: 1.2;
}

.page-description {
  font-size: 1.125rem;
  color: var(--md-sys-color-on-surface-variant);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
}

.product-card {
  background: var(--md-sys-color-surface);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--md-elevation-level-1);
  border: 1px solid var(--md-sys-color-outline-variant);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--md-elevation-level-2);
}

.product-card.card-featured {
  border-color: var(--md-sys-color-primary);
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.05), rgba(25, 118, 210, 0.1));
}

.product-card.card-popular {
  border-color: var(--md-sys-color-secondary);
}

/* Product Header */
.product-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
}

.product-icon .icon-container {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: var(--md-elevation-level-1);
}

.product-badge .badge-text {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Product Content */
.product-content {
  margin-bottom: 32px;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 12px;
  line-height: 1.3;
}

.product-description {
  color: var(--md-sys-color-on-surface-variant);
  line-height: 1.6;
  margin-bottom: 24px;
}

/* Product Features */
.product-features {
  margin-bottom: 24px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.feature-icon {
  width: 16px;
  height: 16px;
  background: var(--md-sys-color-secondary);
  color: var(--md-sys-color-on-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  flex-shrink: 0;
}

.feature-text {
  color: var(--md-sys-color-on-surface-variant);
  font-size: 0.875rem;
  line-height: 1.4;
}

/* Product Stats */
.product-stats {
  display: flex;
  gap: 24px;
  padding: 16px;
  background: var(--md-sys-color-surface-variant);
  border-radius: 12px;
  margin-bottom: 24px;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--md-sys-color-primary);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--md-sys-color-on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

/* Product Actions */
.product-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-icon {
  transition: transform 0.2s ease;
}

.product-cta:hover .btn-icon {
  transform: translateX(2px);
}

/* Platform Connection */
.platform-connection {
  background: var(--md-sys-color-surface-variant);
  border-radius: 24px;
  padding: 48px;
  margin-bottom: 80px;
  border: 1px solid var(--md-sys-color-outline-variant);
}

.connection-header {
  text-align: center;
  margin-bottom: 48px;
}

.connection-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 16px;
}

.connection-description {
  font-size: 1.125rem;
  color: var(--md-sys-color-on-surface-variant);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Bottom CTA */
.bottom-cta {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border-radius: 24px;
  padding: 48px;
  text-align: center;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 32px;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.cta-actions .btn-primary {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-primary);
}

.cta-actions .btn-primary:hover {
  background: var(--md-sys-color-surface-variant);
  transform: translateY(-2px);
}

.cta-actions .btn-secondary {
  background: transparent;
  color: var(--md-sys-color-on-primary);
  border-color: var(--md-sys-color-on-primary);
}

.cta-actions .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.btn-large {
  padding: 16px 32px;
  font-size: 1rem;
}

.btn-primary {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

.btn-primary:hover {
  background: var(--md-sys-color-primary-container);
  transform: translateY(-2px);
  box-shadow: var(--md-elevation-level-2);
}

.btn-secondary {
  background: transparent;
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-primary);
}

.btn-secondary:hover {
  background: var(--md-sys-color-primary-container);
}

.btn-outline {
  background: transparent;
  color: var(--md-sys-color-on-surface);
  border: 1px solid var(--md-sys-color-outline-variant);
}

.btn-outline:hover {
  background: var(--md-sys-color-surface-variant);
  border-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-primary);
}

/* Responsive Design */
@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .product-actions {
    flex-direction: row;
  }
  .cta-actions {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .platform-connection {
    padding: 32px 24px;
  }
  .bottom-cta {
    padding: 32px 24px;
  }
}
</style>
