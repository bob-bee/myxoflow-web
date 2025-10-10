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
/* Product Navigation */
.product-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-light);
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
  color: var(--text-primary);
}

.brand-logo {
  width: 32px;
  height: 32px;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
}

.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--primary-color);
}

.breadcrumb-separator {
  color: var(--text-tertiary);
}

.breadcrumb-current {
  color: var(--text-primary);
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
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn-primary {
  background: var(--primary-color);
  color: white;
}

.nav-btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.nav-btn-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-light);
}

.nav-btn-secondary:hover {
  background: var(--surface-secondary);
  color: var(--primary-color);
}

/* Product Hero */
.product-hero {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  background: var(--primary-light);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
}

.hero-tagline {
  font-size: 1.125rem;
  color: var(--text-secondary);
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
  background: var(--secondary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.benefit-text {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

/* Product Preview */
.hero-visual {
  display: flex;
  justify-content: center;
}

.product-preview {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 500px;
  width: 100%;
}

.preview-header {
  background: var(--surface-secondary);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border-light);
}

.preview-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  background: var(--border-strong);
  border-radius: 50%;
}

.preview-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.preview-content {
  padding: 20px;
}

.dashboard-header {
  margin-bottom: 16px;
}

.header-nav {
  display: flex;
  gap: 2px;
  background: var(--surface-secondary);
  border-radius: 6px;
  padding: 4px;
}

.nav-item {
  flex: 1;
  text-align: center;
  padding: 6px 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 4px;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.nav-item.active {
  background: white;
  color: var(--primary-color);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.dashboard-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.dash-card {
  background: var(--surface-secondary);
  border-radius: 8px;
  padding: 12px;
  height: 80px;
}

.card-header {
  width: 60%;
  height: 8px;
  background: var(--primary-color);
  border-radius: 4px;
  margin-bottom: 8px;
  opacity: 0.7;
}

.card-content {
  width: 40%;
  height: 6px;
  background: var(--border-strong);
  border-radius: 3px;
}

/* Common Styles */
.section-padding {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.bg-surface {
  background: var(--surface-secondary);
}

/* Button Styles */
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
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-light);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
}

.btn-outline:hover {
  background: var(--surface-secondary);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Overview Section */
.overview-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: start;
}

.content-block {
  margin-bottom: 32px;
}

.content-block h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.content-block p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.differentiator-list {
  list-style: none;
  padding: 0;
}

.differentiator-list li {
  color: var(--text-secondary);
  margin-bottom: 8px;
  padding-left: 24px;
  position: relative;
}

.differentiator-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
}

.connection-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-light);
}

.card-icon {
  color: var(--primary-color);
  margin-bottom: 16px;
}

.connection-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.connection-card p {
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 16px;
}

.platform-link {
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: none;
  font-size: 0.875rem;
}

.platform-link:hover {
  text-decoration: underline;
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.feature-card {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-light);
  transition: all 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  flex-shrink: 0;
}

.icon-circle {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.feature-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Process Steps */
.process-steps {
  position: relative;
}

.step-item {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
}

.step-number {
  width: 48px;
  height: 48px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  padding-top: 8px;
}

.step-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.step-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.step-connector {
  position: absolute;
  left: 23px;
  top: 48px;
  width: 2px;
  height: 40px;
  background: var(--border-light);
}

/* Use Cases */
.use-cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.use-case-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-light);
}

.use-case-icon {
  flex-shrink: 0;
}

.icon-bg {
  width: 40px;
  height: 40px;
  background: var(--secondary-light, #e0f2fe);
  color: var(--secondary-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.use-case-title {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.use-case-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Pricing Section */
.pricing-card {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-light);
}

.pricing-model {
  text-align: center;
  margin-bottom: 32px;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.pricing-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.pricing-benefits {
  margin-bottom: 32px;
}

.pricing-benefits h4 {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  color: var(--text-secondary);
}

.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
}

.pricing-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* CTA Section */
.product-cta {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
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
  margin-bottom: 32px;
}

.cta-actions .btn-primary {
  background: white;
  color: var(--primary-color);
}

.cta-actions .btn-primary:hover {
  background: var(--surface-secondary);
  transform: translateY(-2px);
}

.cta-actions .btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-actions .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.cta-actions .btn-outline {
  background: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
}

.cta-actions .btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.cta-footer {
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-note {
  opacity: 0.8;
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Product Not Found */
.product-not-found {
  padding: 120px 0;
  text-align: center;
}

.product-not-found h1 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.product-not-found p {
  color: var(--text-secondary);
  margin-bottom: 32px;
}

/* Responsive Design */
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

  .pricing-actions {
    flex-direction: row;
  }

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
