<template>
  <div class="product-detail-page">
    <!-- Product Navigation Bar -->
    <nav class="product-nav">
      <div class="nav-container">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <img src="@/assets/myxoflow.svg" alt="MyxoFlow" class="brand-logo" />
            <span class="brand-text">MyxoFlow</span>
          </router-link>
        </div>

        <div class="nav-breadcrumb">
          <router-link to="/products" class="breadcrumb-link">All Products</router-link>
          <span class="breadcrumb-separator">→</span>
          <span class="breadcrumb-current">{{ productDetail?.name }}</span>
        </div>

        <div class="nav-actions">
          <button class="nav-btn nav-btn-primary" @click="scrollToSection('cta')">
            Get Started
          </button>
          <router-link to="/" class="nav-btn nav-btn-secondary"> Back to Home </router-link>
        </div>
      </div>
    </nav>

    <!-- Product Content -->
    <main class="product-content" v-if="productDetail">
      <!-- Hero Section -->
      <section class="product-hero" id="hero">
        <div class="hero-container">
          <div class="hero-content">
            <div class="product-badge">
              <span class="badge-text">{{ getBadgeText(productKey) }}</span>
            </div>

            <h1 class="hero-title">
              {{ productDetail.name }}
            </h1>

            <p class="hero-tagline">
              {{ productDetail.tagline }}
            </p>

            <div class="hero-benefits">
              <div class="benefit-item" v-for="(feature, index) in getKeyFeatures()" :key="index">
                <div class="benefit-icon">✓</div>
                <span class="benefit-text">{{ feature }}</span>
              </div>
            </div>

            <div class="hero-actions">
              <button class="btn btn-primary btn-large" @click="scrollToSection('demo')">
                {{ getPrimaryCTA(productKey) }}
              </button>
              <button class="btn btn-secondary btn-large" @click="scrollToSection('features')">
                Learn More
              </button>
            </div>
          </div>

          <div class="hero-visual">
            <div class="product-preview">
              <div class="preview-header">
                <div class="preview-dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
                <div class="preview-title">{{ productDetail.name }}</div>
              </div>
              <div class="preview-content">
                <div class="preview-dashboard">
                  <div class="dashboard-header">
                    <div class="header-nav">
                      <div class="nav-item active">Overview</div>
                      <div class="nav-item">Analytics</div>
                      <div class="nav-item">Settings</div>
                    </div>
                  </div>
                  <div class="dashboard-body">
                    <div class="dashboard-cards">
                      <div class="dash-card" v-for="i in 4" :key="i">
                        <div class="card-header"></div>
                        <div class="card-content"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="product-overview section-padding" id="overview">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">What {{ productDetail.name }} Does</h2>
            <p class="section-subtitle">{{ productDetail.overview }}</p>
          </div>

          <div class="overview-grid">
            <div class="overview-content">
              <div class="content-block">
                <h3>Who It's For</h3>
                <p>{{ getTargetAudience(productKey) }}</p>
              </div>

              <div class="content-block">
                <h3>Key Differentiators</h3>
                <ul class="differentiator-list">
                  <li v-for="diff in getDifferentiators(productKey)" :key="diff">
                    {{ diff }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="platform-connection">
              <div class="connection-card">
                <div class="card-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect
                      x="8"
                      y="8"
                      width="24"
                      height="24"
                      rx="4"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <path d="M12 16L20 20L28 16" stroke="currentColor" stroke-width="2" />
                    <path d="M12 20L20 24L28 20" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
                <h4>Built on MyxoFlow Platform</h4>
                <p>
                  Powered by our unified dashboard technology with cross-market optimization
                  benefits.
                </p>
                <router-link to="/products/dashboards" class="platform-link">
                  Learn about the platform →
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="product-features section-padding" id="features">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Features & Capabilities</h2>
            <p class="section-subtitle">Comprehensive tools designed for your market needs</p>
          </div>

          <div class="features-grid">
            <div
              class="feature-card"
              v-for="(feature, index) in productDetail.features"
              :key="index"
            >
              <div class="feature-icon">
                <div class="icon-circle">
                  <span class="icon-number">{{ index + 1 }}</span>
                </div>
              </div>
              <div class="feature-content">
                <h4 class="feature-title">{{ getFeatureTitle(feature) }}</h4>
                <p class="feature-description">{{ feature }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="product-process section-padding bg-surface" id="how-it-works">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">How {{ productDetail.name }} Works</h2>
            <p class="section-subtitle">Simple, effective workflow designed for results</p>
          </div>

          <div class="process-steps">
            <div
              class="step-item"
              v-for="(step, index) in getProcessSteps(productKey)"
              :key="index"
            >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-description">{{ step.description }}</p>
              </div>
              <div
                class="step-connector"
                v-if="index < getProcessSteps(productKey).length - 1"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section class="product-use-cases section-padding" id="use-cases">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Use Cases</h2>
            <p class="section-subtitle">Real-world applications for {{ productDetail.name }}</p>
          </div>

          <div class="use-cases-grid">
            <div
              class="use-case-card"
              v-for="(useCase, index) in productDetail.useCases"
              :key="index"
            >
              <div class="use-case-icon">
                <div class="icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
              </div>
              <div class="use-case-content">
                <h4 class="use-case-title">{{ getUseCaseTitle(useCase) }}</h4>
                <p class="use-case-description">{{ useCase }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="product-pricing section-padding bg-surface" id="pricing">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Pricing</h2>
            <p class="section-subtitle">
              Transparent, value-driven pricing for {{ productDetail.name }}
            </p>
          </div>

          <div class="pricing-card">
            <div class="pricing-content">
              <div class="pricing-model">
                <h3 class="pricing-title">
                  {{ getPricingModel(productKey).title }}
                </h3>
                <p class="pricing-description">{{ productDetail.pricing }}</p>
              </div>

              <div class="pricing-benefits">
                <h4>What's Included:</h4>
                <ul class="benefits-list">
                  <li v-for="benefit in getPricingBenefits(productKey)" :key="benefit">
                    {{ benefit }}
                  </li>
                </ul>
              </div>

              <div class="pricing-actions">
                <button class="btn btn-primary" @click="scrollToSection('cta')">
                  Get Pricing Details
                </button>
                <button class="btn btn-secondary" @click="scrollToSection('demo')">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="product-cta section-padding" id="cta">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">Ready to Get Started with {{ productDetail.name }}?</h2>
            <p class="cta-description">
              Join companies already optimizing their
              {{ getIndustryName(productKey) }} operations with MyxoFlow.
            </p>

            <div class="cta-actions">
              <button class="btn btn-primary btn-large">
                {{ getPrimaryCTA(productKey) }}
              </button>
              <button class="btn btn-secondary btn-large">Schedule Consultation</button>
              <router-link to="/contact" class="btn btn-outline btn-large">
                Contact Sales
              </router-link>
            </div>

            <div class="cta-footer">
              <p class="cta-note">
                <strong>Direct developer support.</strong> No account managers, just rapid iteration
                and results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Product not found -->
    <div v-else class="product-not-found">
      <div class="container">
        <h1>Product not found</h1>
        <p>The product you're looking for doesn't exist.</p>
        <router-link to="/products" class="btn btn-primary"> View All Products </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useContentStore } from '@/stores/useContentStore'

// Props and route
const route = useRoute()
const router = useRouter()
const contentStore = useContentStore()

// Get product key from route params
const productKey = computed(() => route.params.productKey as string)

// Get product details from store
const productDetail = computed(() => {
  return contentStore.getProductDetailByKey(productKey.value)
})

// Helper functions for dynamic content
const getBadgeText = (key: string): string => {
  const badges: Record<string, string> = {
    dashboards: 'Core Platform',
    stichflow: 'Most Popular',
    fill: 'Growing Fast',
    date: 'Premium Service',
    golgappa: 'Innovative',
    craft: 'Creative',
  }
  return badges[key] || 'Product'
}

const getPrimaryCTA = (key: string): string => {
  const ctas: Record<string, string> = {
    dashboards: 'Request Platform Demo',
    stichflow: 'View Workshop Network',
    fill: 'See Talent Competition',
    date: 'View Membership Benefits',
    golgappa: 'Calculate Savings',
    craft: 'Browse Design Library',
  }
  return ctas[key] || 'Get Started'
}

const getKeyFeatures = (): string[] => {
  if (!productDetail.value) return []
  return productDetail.value.features.slice(0, 3).map((feature) => {
    return feature.split(' ').slice(0, 4).join(' ') + (feature.split(' ').length > 4 ? '...' : '')
  })
}

const getTargetAudience = (key: string): string => {
  const audiences: Record<string, string> = {
    dashboards:
      'Technology companies, startups, and enterprises looking to deploy multi-market dashboard solutions rapidly.',
    stichflow:
      'Clothing manufacturers, apparel retailers, and fashion brands managing complex supply chain operations.',
    fill: 'Companies managing distributed teams, project managers, and organizations requiring specialized talent.',
    date: 'High-income professionals, executives, and serious relationship-seekers in urban markets.',
    golgappa: 'Food truck operators, mobile vendors, and sustainable food service entrepreneurs.',
    craft:
      'Designers, small manufacturers, and businesses needing custom merchandise and branding materials.',
  }
  return audiences[key] || 'Organizations looking to optimize their operations.'
}

const getDifferentiators = (key: string): string[] => {
  const diffs: Record<string, string[]> = {
    dashboards: [
      'Unified technology across markets',
      'Rapid deployment in weeks',
      'Cross-market optimization sharing',
    ],
    stichflow: [
      'Real workshop network',
      'Multi-language European support',
      'Integrated payment processing',
    ],
    fill: ['Regional talent competitions', 'AI-powered matching', 'Cross-market talent sharing'],
    date: [
      'Income verification required',
      '$100/month premium model',
      'Professional networking integration',
    ],
    golgappa: [
      'DC power optimization',
      'Weather-resistant operations',
      'Autonomous delivery ready',
    ],
    craft: [
      'Open-source design library',
      'Direct manufacturing pipeline',
      'Community-driven development',
    ],
  }
  return diffs[key] || ['Platform-based solution', 'Direct developer support', 'Proven results']
}

const getProcessSteps = (key: string) => {
  const steps: Record<string, Array<{ title: string; description: string }>> = {
    dashboards: [
      {
        title: 'Market Analysis',
        description: 'Analyze your industry workflows and requirements',
      },
      {
        title: 'Platform Customization',
        description: 'Adapt our dashboard technology to your market needs',
      },
      {
        title: 'Rapid Deployment',
        description: 'Launch your solution in weeks using proven infrastructure',
      },
      {
        title: 'User Onboarding',
        description: 'Train your team on the unified platform interface',
      },
      {
        title: 'Optimization',
        description: 'Continuous improvement and cross-market benefit sharing',
      },
    ],
    stichflow: [
      {
        title: 'Workshop Onboarding',
        description: 'Manufacturers join our verified network with capability profiles',
      },
      {
        title: 'Order Processing',
        description: 'Retailers submit bulk orders with specifications',
      },
      {
        title: 'Smart Matching',
        description: 'Our system matches orders with optimal workshops',
      },
      {
        title: 'Production Tracking',
        description: 'Real-time monitoring of manufacturing progress',
      },
      {
        title: 'Quality & Delivery',
        description: 'Quality control, payment processing, and shipment coordination',
      },
    ],
    fill: [
      {
        title: 'Talent Competition',
        description: 'Regional contests identify top freelancers in your area',
      },
      {
        title: 'Project Submission',
        description: 'Submit your project requirements and specifications',
      },
      {
        title: 'AI Matching',
        description: 'Algorithm matches projects with optimal talent based on skills and cost',
      },
      {
        title: 'Project Management',
        description: 'Milestone tracking and quality gates throughout delivery',
      },
      {
        title: 'Performance Analytics',
        description: 'Continuous rating and improvement of freelancer network',
      },
    ],
    date: [
      {
        title: 'Membership Application',
        description: 'Premium $100/month membership with income verification',
      },
      {
        title: 'Profile Verification',
        description: 'Background checks and identity verification process',
      },
      {
        title: 'Compatibility Matching',
        description: 'Advanced algorithm matching based on lifestyle and values',
      },
      {
        title: 'Curated Connections',
        description: 'Quality introductions and communication facilitation',
      },
      {
        title: 'Relationship Support',
        description: 'Event planning and relationship development tools',
      },
    ],
    golgappa: [
      {
        title: 'Power System Setup',
        description: 'Configure DC power system with 36V/48V battery compatibility',
      },
      {
        title: 'Route Planning',
        description: 'Optimize location and route based on analytics and weather',
      },
      {
        title: 'Equipment Integration',
        description: 'Connect compatible appliances and monitoring systems',
      },
      {
        title: 'Operations Management',
        description: 'Real-time monitoring and inventory management',
      },
      {
        title: 'Performance Optimization',
        description: 'Continuous improvement and efficiency optimization',
      },
    ],
    craft: [
      {
        title: 'Design Selection',
        description: 'Browse open-source SVG library or upload custom designs',
      },
      {
        title: 'Customization',
        description: 'Use integrated editor to customize designs and specifications',
      },
      {
        title: 'Manufacturing Match',
        description: 'System finds optimal manufacturing partner for your project',
      },
      {
        title: 'Production Tracking',
        description: 'Monitor manufacturing progress and quality control',
      },
      {
        title: 'Fulfillment',
        description: 'Quality assurance, packaging, and delivery coordination',
      },
    ],
  }
  return steps[key] || []
}

const getFeatureTitle = (feature: string): string => {
  return feature.split(' ').slice(0, 3).join(' ')
}

const getUseCaseTitle = (useCase: string): string => {
  return useCase.split(' ').slice(0, 3).join(' ')
}

const getPricingModel = (key: string) => {
  const models: Record<string, { title: string }> = {
    dashboards: { title: 'Platform Licensing' },
    stichflow: { title: 'Subscription Model' },
    fill: { title: 'Commission-Based' },
    date: { title: 'Premium Membership' },
    golgappa: { title: 'Hardware + Software' },
    craft: { title: 'Per-Item Production' },
  }
  return models[key] || { title: 'Custom Pricing' }
}

const getPricingBenefits = (key: string): string[] => {
  const benefits: Record<string, string[]> = {
    dashboards: [
      'Unified technology stack',
      'Cross-market optimizations',
      'Developer support',
      'Custom integrations',
    ],
    stichflow: [
      'Workshop network access',
      'Order management system',
      'Payment processing',
      'Multi-language support',
    ],
    fill: [
      'Talent competition access',
      'AI-powered matching',
      'Project management tools',
      'Performance analytics',
    ],
    date: [
      'Income-verified members',
      'Advanced matching',
      'Event planning tools',
      'Privacy protection',
    ],
    golgappa: [
      'DC power optimization',
      'Route planning',
      'Weather integration',
      'Equipment monitoring',
    ],
    craft: [
      'Design library access',
      'Integrated editor',
      'Manufacturing pipeline',
      'Quality control',
    ],
  }
  return benefits[key] || ['Platform access', 'Support included', 'Regular updates']
}

const getIndustryName = (key: string): string => {
  const industries: Record<string, string> = {
    dashboards: 'multi-market',
    stichflow: 'clothing manufacturing',
    fill: 'freelancer management',
    date: 'premium dating',
    golgappa: 'mobile food service',
    craft: 'design and manufacturing',
  }
  return industries[key] || 'business'
}

// Scroll to section functionality
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Redirect if product not found
onMounted(() => {
  if (!productDetail.value) {
    router.push('/products')
  }
})
</script>

<style scoped>
/* =====================
   Navigation
===================== */
.product-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--md-sys-color-outline-variant);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--md-sys-color-on-surface);
}

.brand-logo {
  width: 32px;
  height: 32px;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--md-sys-color-primary);
}

.nav-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
}

.breadcrumb-link {
  color: var(--md-sys-color-on-surface-variant);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--md-sys-color-primary);
}

.breadcrumb-separator {
  color: var(--md-sys-color-outline-variant);
}

.breadcrumb-current {
  color: var(--md-sys-color-on-surface);
  font-weight: 500;
}

.nav-actions {
  display: flex;
  gap: 12px;
}

.nav-btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn-primary {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

.nav-btn-primary:hover {
  background: var(--md-sys-color-primary-container);
  transform: translateY(-1px);
}

.nav-btn-secondary {
  background: transparent;
  color: var(--md-sys-color-on-surface-variant);
  border: 1px solid var(--md-sys-color-outline-variant);
}

.nav-btn-secondary:hover {
  background: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-primary);
}

/* =====================
   Product Hero
===================== */
.product-hero {
  padding: 80px 0;
  background: linear-gradient(
    135deg,
    var(--md-sys-color-surface) 0%,
    var(--md-sys-color-surface-variant) 100%
  );
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

.hero-content {
  text-align: center;
}

.product-badge {
  display: inline-block;
  margin-bottom: 16px;
}

.badge-text {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--md-sys-color-on-surface);
  margin-bottom: 16px;
  line-height: 1.2;
}

.hero-tagline {
  font-size: 1.125rem;
  color: var(--md-sys-color-on-surface-variant);
  margin-bottom: 32px;
  line-height: 1.5;
}

.hero-benefits {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}

.benefit-icon {
  width: 20px;
  height: 20px;
  background: var(--md-sys-color-secondary);
  color: var(--md-sys-color-on-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.benefit-text {
  color: var(--md-sys-color-on-surface-variant);
  font-size: 0.875rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

/* =====================
   Product Preview
===================== */
.hero-visual {
  display: flex;
  justify-content: center;
}

.product-preview {
  background: var(--md-sys-color-surface);
  border-radius: 12px;
  box-shadow: var(--md-elevation-level-2);
  overflow: hidden;
  max-width: 500px;
  width: 100%;
}

.preview-header {
  background: var(--md-sys-color-surface-variant);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--md-sys-color-outline-variant);
}

.preview-dots .dot {
  width: 8px;
  height: 8px;
  background: var(--md-sys-color-outline-variant);
  border-radius: 50%;
}

.preview-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--md-sys-color-on-surface-variant);
}

.preview-content {
  padding: 20px;
}

/* =====================
   Overview, Features, Use Cases
===================== */
.overview-grid,
.features-grid,
.use-cases-grid {
  display: grid;
  gap: 24px;
}

.overview-grid {
  grid-template-columns: 1fr;
}

.features-grid {
  grid-template-columns: 1fr;
}

.use-cases-grid {
  grid-template-columns: 1fr;
}

.content-block h3,
.feature-content h4,
.connection-card h4,
.use-case-title {
  color: var(--md-sys-color-on-surface);
}

.content-block p,
.feature-description,
.connection-card p,
.use-case-description {
  color: var(--md-sys-color-on-surface-variant);
}

/* Cards */
.feature-card,
.connection-card,
.use-case-card,
.pricing-card {
  background: var(--md-sys-color-surface);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--md-sys-color-outline-variant);
  box-shadow: var(--md-elevation-level-1);
}

/* Lists */
.differentiator-list li::before,
.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--md-sys-color-secondary);
  font-weight: bold;
}

/* =====================
   Pricing & CTA
===================== */
.pricing-actions,
.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-cta {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  color: var(--md-sys-color-on-primary);
}

.cta-description {
  color: var(--md-sys-color-on-primary-container);
}

.cta-actions .btn-primary {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-primary);
}

.cta-actions .btn-primary:hover {
  background: var(--md-sys-color-surface-variant);
}

.cta-actions .btn-secondary,
.cta-actions .btn-outline {
  color: var(--md-sys-color-on-primary);
  border-color: var(--md-sys-color-on-primary);
}

.cta-actions .btn-secondary:hover,
.cta-actions .btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* =====================
   Responsive Design
===================== */
@media (min-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  .hero-content {
    text-align: left;
  }

  .hero-benefits {
    align-items: flex-start;
  }

  .benefit-item {
    justify-content: flex-start;
  }

  .hero-actions {
    flex-direction: row;
  }

  .overview-grid {
    grid-template-columns: 1fr 1fr;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .use-cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pricing-actions,
  .cta-actions {
    flex-direction: row;
  }
}

@media (max-width: 767px) {
  .nav-container {
    padding: 0 16px;
  }

  .nav-breadcrumb {
    display: none;
  }

  .nav-actions {
    flex-direction: column;
    gap: 8px;
  }

  .nav-btn {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
}
</style>
