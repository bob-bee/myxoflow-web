<template>
  <section class="products">
    <div v-for="product in products" :key="product.key" class="product-card">
      <!-- Header -->
      <header>
        <h2>{{ product.name }}</h2>
        <p>{{ product.tagline }}</p>
        <span v-if="product.badge" class="badge" :class="`badge--${product.badge.type}`">
          {{ product.badge.text }}
        </span>
      </header>

      <!-- Overview -->
      <p class="overview">{{ product.overview }}</p>

      <!-- Stats -->
      <ul class="stats">
        <li v-for="stat in product.stats" :key="stat.label">
          <strong>{{ stat.value }}</strong> — {{ stat.label }}
          <span v-if="stat.change"> ({{ stat.change }})</span>
        </li>
      </ul>

      <!-- Features -->
      <h3>Key Features</h3>
      <ul class="features">
        <li v-for="feature in product.features" :key="feature">
          {{ feature }}
        </li>
      </ul>

      <!-- Use Cases -->
      <h3>Use Cases</h3>
      <ul class="use-cases">
        <li v-for="useCase in product.useCases" :key="useCase">
          {{ useCase }}
        </li>
      </ul>

      <!-- Pricing -->
      <div class="pricing">
        <p><strong>Pricing:</strong> {{ product.pricing }}</p>
        <h4>{{ product.pricingModel.title }}</h4>
        <ul>
          <li v-for="benefit in product.pricingModel.benefits" :key="benefit">
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Stat {
  value: string
  label: string
  trend?: string
  change?: string
}

interface Badge {
  text: string
  type: 'primary' | 'success' | 'warning'
}

interface PricingModel {
  title: string
  benefits: string[]
}

interface Product {
  key: string
  name: string
  tagline: string
  description: string
  overview: string
  features: string[]
  useCases: string[]
  pricing: string
  badge?: Badge
  stats: Stat[]
  targetAudience?: string
  differentiators?: string[]
  processSteps?: { title: string; description: string; duration?: string }[]
  pricingModel: PricingModel
  screenshots?: string[]
  testimonials?: { name: string; role: string; company: string; content: string; rating: number }[]
}

const products = ref<Product[]>([
  {
    key: 'stichflow',
    name: 'StichFlow',
    tagline: 'Textile Manufacturing Optimization',
    description:
      'Streamline your textile manufacturing process with real-time production tracking, quality control, and supply chain optimization.',
    overview:
      'StichFlow revolutionizes textile manufacturing by providing end-to-end visibility and control over your production pipeline.',
    badge: { text: 'Most Popular', type: 'primary' },
    stats: [
      { value: '40%', label: 'Production Increase', trend: 'up', change: '+5%' },
      { value: '25%', label: 'Waste Reduction', trend: 'up', change: '+3%' },
    ],
    features: [
      'Real-time production monitoring',
      'Automated quality control',
      'Supply chain optimization',
    ],
    useCases: ['Large-scale textile manufacturing', 'Custom garment production'],
    pricing: 'Starting at $299/month per facility',
    pricingModel: {
      title: 'Enterprise Manufacturing Solution',
      benefits: ['Unlimited production tracking', 'Advanced analytics', '24/7 support'],
    },
  },
  {
    key: 'fill',
    name: 'MyxoFill',
    tagline: 'Manufacturing Optimization Platform',
    description:
      'Optimize your manufacturing operations with intelligent resource allocation and predictive maintenance.',
    overview:
      'MyxoFill provides comprehensive manufacturing optimization through intelligent automation and insights.',
    badge: { text: 'Growing Fast', type: 'success' },
    stats: [
      { value: '35%', label: 'Efficiency Gain', trend: 'up', change: '+2%' },
      { value: '50%', label: 'Downtime Reduction', trend: 'up', change: '+5%' },
    ],
    features: ['Resource allocation', 'Predictive maintenance', 'Efficiency tracking'],
    useCases: ['Manufacturing plant optimization', 'Cost reduction initiatives'],
    pricing: 'Starting at $199/month per facility',
    pricingModel: {
      title: 'Complete Manufacturing Suite',
      benefits: ['Unlimited monitoring', 'Predictive recommendations', 'Priority support'],
    },
  },
])
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
