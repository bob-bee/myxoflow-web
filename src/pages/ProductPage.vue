<template>
  <div v-if="product" class="product-page">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="container">
        <div class="hero-content">
          <div class="breadcrumb">
            <router-link to="/">Home</router-link>
            <q-icon name="chevron_right" size="16px" />
            <router-link to="/products">Products</router-link>
            <q-icon name="chevron_right" size="16px" />
            <span>{{ product.name }}</span>
          </div>

          <div class="product-header">
            <div class="header-text">
              <h1>{{ product.name }}</h1>
              <p class="tagline">{{ product.tagline }}</p>
              <p class="description">{{ product.description }}</p>
              
              <div v-if="product.geography" class="geography">
                <q-icon name="public" size="20px" />
                <span>{{ product.geography }}</span>
              </div>

              <div class="hero-actions">
                <q-btn
                  :label="product.pricing.tiers[0]?.cta"
                  color="primary"
                  size="lg"
                  unelevated
                  rounded
                  @click="scrollToSection('pricing')"
                />
                <q-btn
                  label="Learn More"
                  color="primary"
                  size="lg"
                  outline
                  rounded
                  @click="navigateToProduct(product.key)"
                />
              </div>
            </div>

            <div class="header-visual">
              <div class="product-icon">
                <q-icon name="apps" size="120px" color="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="overview-section">
      <div class="container">
        <div class="overview-content">
          <div class="section-header">
            <h2>Overview</h2>
          </div>
          <p class="overview-text">{{ product.overview }}</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>Key Features</h2>
          <p>Everything you need to optimize your operations</p>
        </div>

        <div class="features-grid">
          <div 
            v-for="(feature, index) in product.features" 
            :key="index"
            class="feature-card"
          >
            <div class="feature-icon">
              <q-icon name="check_circle" size="32px" color="primary" />
            </div>
            <h3>{{ feature }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section id="use-cases" class="use-cases-section">
      <div class="container">
        <div class="section-header">
          <h2>Use Cases</h2>
          <p>Perfect for these scenarios</p>
        </div>

        <div class="use-cases-grid">
          <div 
            v-for="(useCase, index) in product.useCases" 
            :key="index"
            class="use-case-card"
          >
            <q-icon name="arrow_right" size="24px" color="primary" />
            <span>{{ useCase }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing-section">
      <div class="container">
        <div class="section-header">
          <h2>Pricing</h2>
          <p class="pricing-model">{{ product.pricing.model }}</p>
        </div>

        <div class="pricing-grid">
          <div 
            v-for="tier in product.pricing.tiers" 
            :key="tier.name"
            class="pricing-card"
            :class="{ 'popular': tier.popular }"
          >
            <div v-if="tier.popular" class="popular-badge">
              Most Popular
            </div>

            <h3>{{ tier.name }}</h3>
            <p class="tier-description">{{ tier.description }}</p>

            <div class="price-display">
              <span class="price">{{ tier.price }}</span>
              <span class="period">{{ tier.billingPeriod }}</span>
            </div>

            <div class="tier-features">
              <h4>Includes:</h4>
              <ul>
                <li v-for="feature in tier.features" :key="feature">
                  <q-icon name="check" size="18px" color="positive" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <q-btn
              :label="tier.cta"
              :color="tier.popular ? 'primary' : 'secondary'"
              size="lg"
              unelevated
              rounded
              class="tier-cta"
              @click="handleCTA(tier.name)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products Section -->
    <section v-if="relatedProducts.length > 0" class="related-section">
      <div class="container">
        <div class="section-header">
          <h2>Related Products</h2>
          <p>You might also be interested in</p>
        </div>

        <div class="related-grid">
          <div 
            v-for="related in relatedProducts" 
            :key="related.key"
            class="related-card"
            @click="navigateToProduct(related.key)"
          >
            <h3>{{ related.name }}</h3>
            <p class="related-tagline">{{ related.tagline }}</p>
            <p class="related-description">{{ related.description }}</p>
            
            <div class="related-footer">
              <span class="related-price">{{ related.pricing.tiers[0]?.price }}</span>
              <q-icon name="arrow_forward" size="24px" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="product-cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join hundreds of companies optimizing with {{ product.name }}</p>
          
          <div class="cta-actions">
            <q-btn
              :label="product.pricing.tiers[0]?.cta"
              color="white"
              text-color="primary"
              size="xl"
              unelevated
              rounded
              @click="scrollToSection('pricing')"
            />
            <q-btn
              label="Contact Sales"
              color="transparent"
              text-color="white"
              size="xl"
              outline
              rounded
              @click="navigateToContact"
            />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Loading State -->
  <div v-else-if="isLoading" class="loading-state">
    <q-spinner color="primary" size="64px" />
  </div>

  <!-- Error State -->
  <div v-else class="error-state">
    <div class="container">
      <div class="error-content">
        <q-icon name="error_outline" size="80px" color="negative" />
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <q-btn
          label="Back to Home"
          color="primary"
          size="lg"
          unelevated
          rounded
          @click="navigateToHome"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore,   } from '../stores/useProductStore'
import { updatePageTitle, updateMetaDescription } from '../utils'
import type { Product } from '../types/index'
const route = useRoute()
const router = useRouter()
const productStore = useProductStore()

// Strict typing for product key
const productKey = computed<string>(() => {
  const key = route.params.key
  if (typeof key !== 'string') throw new Error('Invalid product key in route params')
  return key
})

// Strict typing for product
const product = computed<Product | null>(() => productStore.currentProduct)
const isLoading = computed<boolean>(() => productStore.isLoading)

const relatedProducts = computed<Product[]>(() => {
  return product.value ? productStore.getRelatedProducts(product.value.key) : []
})

// Load product data
const loadProduct = (): void => {
  const key = productKey.value
  const foundProduct = productStore.getProductByKey(key)
  if (foundProduct) {
    productStore.setCurrentProduct(foundProduct)
    updatePageTitle(foundProduct.name)
    updateMetaDescription(foundProduct.description)
  }
}

// Watch for route changes
watch(() => route.params.key, () => {
  loadProduct()
  window.scrollTo(0, 0)
})

// On component mount
onMounted(() => {
  loadProduct()
})

// Scroll to section
const scrollToSection = (sectionId: string, offset = 80): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    const top = element.offsetTop - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

// Navigate functions
const navigateToProduct = async (key: string): Promise<void> => {
  await router.push({ name: 'product', params: { key } })
}

const navigateToContact = async (): Promise<void> => {
  await router.push({ name: 'contact' })
}

const navigateToHome = async (): Promise<void> => {
  await router.push({ name: 'home' })
}

// CTA handler
const handleCTA = async (tierName: string): Promise<void> => {
  console.log(`CTA clicked for tier: ${tierName}`)
  // Implement your CTA logic here
  await navigateToContact()
}
</script>

<style scoped lang="scss">
.product-page {
  width: 100%;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

// Product Hero
.product-hero {
  padding: 140px 0 100px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  font-size: 14px;

  a {
    color: var(--q-primary);
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  span {
    color: var(--q-dark);
    font-weight: 600;
  }
}

.product-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.header-text {
  h1 {
    font-size: 56px;
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1.1;
    color: var(--q-dark);
  }

  .tagline {
    font-size: 24px;
    color: var(--q-primary);
    font-weight: 700;
    margin-bottom: 24px;
  }

  .description {
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 32px;
    opacity: 0.8;
  }
}

.geography {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: white;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 40px;
  color: var(--q-secondary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.header-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-icon {
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transform: rotate(-5deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.05);
  }
}

// Section Styles
section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;

  h2 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 20px;
    color: var(--q-dark);
  }

  p {
    font-size: 20px;
    opacity: 0.7;
    max-width: 700px;
    margin: 0 auto;
  }
}

// Overview Section
.overview-section {
  background: white;
}

.overview-content {
  max-width: 900px;
  margin: 0 auto;
}

.overview-text {
  font-size: 22px;
  line-height: 1.8;
  text-align: center;
  opacity: 0.85;
}

// Features Section
.features-section {
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.feature-card {
  padding: 40px 32px;
  background: white;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }

  .feature-icon {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    color: var(--q-dark);
  }
}

// Use Cases Section
.use-cases-section {
  background: white;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
}

.use-case-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 32px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
}

// Pricing Section
.pricing-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, white 100%);
}

.pricing-model {
  font-size: 16px;
  font-weight: 600;
  color: var(--q-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 12px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.pricing-card {
  position: relative;
  padding: 48px;
  background: white;
  border-radius: 20px;
  border: 2px solid #e9ecef;
  transition: all 0.4s ease;

  &.popular {
    border-color: var(--q-primary);
    box-shadow: 0 16px 48px rgba(var(--q-primary-rgb), 0.2);
    transform: scale(1.05);
  }

  &:hover:not(.popular) {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
}

.popular-badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 24px;
  background: var(--q-primary);
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pricing-card {
  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--q-dark);
  }

  .tier-description {
    font-size: 16px;
    margin-bottom: 32px;
    opacity: 0.7;
  }
}

.price-display {
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 2px solid #e9ecef;

  .price {
    display: block;
    font-size: 48px;
    font-weight: 800;
    color: var(--q-primary);
    margin-bottom: 8px;
  }

  .period {
    font-size: 16px;
    opacity: 0.7;
  }
}

.tier-features {
  margin-bottom: 32px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 20px;
    opacity: 0.7;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      font-size: 15px;
      line-height: 1.5;
    }
  }
}

.tier-cta {
  width: 100%;
  height: 52px;
  font-size: 16px;
  font-weight: 700;
}

// Related Products
.related-section {
  background: #f8f9fa;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.related-card {
  padding: 32px;
  background: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    border-color: var(--q-primary);
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--q-dark);
  }

  .related-tagline {
    font-size: 16px;
    color: var(--q-primary);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .related-description {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
    opacity: 0.8;
  }
}

.related-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;

  .related-price {
    font-size: 20px;
    font-weight: 700;
    color: var(--q-primary);
  }
}

// Product CTA Section
.product-cta-section {
  padding: 120px 0;
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 24px;
  }

  p {
    font-size: 20px;
    margin-bottom: 48px;
    opacity: 0.95;
  }
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

// Loading & Error States
.loading-state,
.error-state {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-content {
  text-align: center;
  padding: 60px 24px;

  h2 {
    font-size: 36px;
    font-weight: 700;
    margin: 24px 0 16px;
  }

  p {
    font-size: 18px;
    margin-bottom: 32px;
    opacity: 0.7;
  }
}

// Responsive Design
@media (max-width: 1024px) {
  .product-header {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .header-visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .product-hero {
    padding: 100px 0 60px;
  }

  .header-text h1 {
    font-size: 40px;
  }

  .header-text .tagline {
    font-size: 20px;
  }

  .header-text .description {
    font-size: 18px;
  }

  .section-header h2 {
    font-size: 36px;
  }

  .pricing-grid,
  .features-grid,
  .use-cases-grid,
  .related-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.popular {
    transform: scale(1);
  }

  .cta-content h2 {
    font-size: 36px;
  }
}
</style>
