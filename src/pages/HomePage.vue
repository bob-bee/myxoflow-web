<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">{{ heroSection.badge.icon }}</span>
            <span class="badge-text">{{ heroSection.badge.text }}</span>
          </div>
          
          <h1 class="hero-title">{{ heroSection.title }}</h1>
          <p class="hero-subtitle">{{ heroSection.subtitle }}</p>
          
          <div class="hero-highlights">
            <div 
              v-for="highlight in heroSection.highlights" 
              :key="highlight"
              class="highlight-item"
            >
              <q-icon name="check_circle" color="white" size="20px" />
              <span>{{ highlight }}</span>
            </div>
          </div>
          
          <div class="hero-actions">
            <q-btn
              :label="heroSection.cta.primary"
              color="white"
              text-color="primary"
              size="lg"
              unelevated
              rounded
              class="hero-btn-primary"
              @click="scrollToSection('products')"
            />
            <q-btn
              :label="heroSection.cta.secondary"
              color="transparent"
              text-color="white"
              size="lg"
              outline
              rounded
              class="hero-btn-secondary"
              @click="scrollToSection('partners')"
            />
          </div>
        </div>
      </div>
      
      <!-- Animated background pattern -->
      <div class="hero-pattern"></div>
    </section>

    <!-- Philosophy Section -->
    <section id="philosophy" class="philosophy-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ philosophy.title }}</h2>
          <p>{{ philosophy.subtitle }}</p>
        </div>
        
        <div class="philosophy-grid">
          <div 
            v-for="principle in philosophy.principles" 
            :key="principle.title"
            class="principle-card"
          >
            <div class="principle-icon">
              <q-icon :name="principle.icon" size="48px" color="primary" />
            </div>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ team.title }}</h2>
          <p>{{ team.subtitle }}</p>
        </div>
        
        <div class="team-grid">
          <div 
            v-for="member in team.members" 
            :key="member.name"
            class="team-card"
          >
            <div class="member-header">
              <div class="member-avatar">
                <q-icon name="person" size="80px" color="primary" />
              </div>
              <div class="member-info">
                <h3>{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
              </div>
            </div>
            
            <p class="member-bio">{{ member.bio }}</p>
            
            <div class="member-responsibilities">
              <h4>Key Responsibilities</h4>
              <ul>
                <li v-for="resp in member.responsibilities" :key="resp">
                  <q-icon name="arrow_right" size="16px" color="primary" />
                  <span>{{ resp }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Network Section -->
    <section id="network" class="network-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ network.title }}</h2>
        </div>
        
        <div class="network-grid">
          <div class="network-card deployment">
            <div class="network-header">
              <q-icon name="location_on" size="40px" color="primary" />
              <span class="network-scope">{{ network.deployment.scope }}</span>
            </div>
            <h3>{{ network.deployment.title }}</h3>
            <p>{{ network.deployment.description }}</p>
          </div>
          
          <div class="network-card supply">
            <div class="network-header">
              <q-icon name="public" size="40px" color="secondary" />
              <span class="network-scope global">{{ network.supply.scope }}</span>
            </div>
            <h3>{{ network.supply.title }}</h3>
            <p>{{ network.supply.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>Products & Services</h2>
          <p>Decentralized solutions for every industry vertical</p>
        </div>
        
        <div class="products-grid">
          <div 
            v-for="product in allProducts" 
            :key="product.key"
            class="product-card"
            :class="{ 'featured': product.featured }"
          >
            <div v-if="product.featured" class="product-badge">
              Featured
            </div>
            
            <div class="product-header">
              <h3>{{ product.name }}</h3>
              <p class="product-tagline">{{ product.tagline }}</p>
            </div>
            
            <p class="product-description">{{ product.description }}</p>
            
            <div class="product-features">
              <h4>Key Features</h4>
              <ul>
                <li v-for="feature in product.features.slice(0, 4)" :key="feature">
                  <q-icon name="check" size="18px" color="positive" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div v-if="product.geography" class="product-geography">
              <q-icon name="public" size="16px" />
              <span>{{ product.geography }}</span>
            </div>
            
            <div class="product-pricing">
              <div class="pricing-model">{{ product.pricing.model }}</div>
              <div class="price-display">
                <span class="price">{{ product.pricing.tiers[0]?.price }}</span>
                <span class="period">{{ product.pricing.tiers[0]?.billingPeriod }}</span>
              </div>
            </div>

           <q-btn
              :label="product.pricing.tiers[0]?.cta"
              color="primary"
              unelevated
              rounded
              class="product-cta"
              @click="navigateToProduct(product.key)"
            />>
          </div>
        </div>
      </div>
    </section>

    <!-- Operational Model Section -->
    <section id="how-it-works" class="operational-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ operationalModel.title }}</h2>
          <p>{{ operationalModel.subtitle }}</p>
        </div>
        
        <div class="operational-timeline">
          <div 
            v-for="(step, index) in operationalModel.steps" 
            :key="step.number"
            class="operational-step"
          >
            <div class="step-number">{{ step.number }}</div>
            <div class="step-content">
              <div class="step-icon">
                <q-icon :name="step.icon" size="32px" color="primary" />
              </div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
            <div v-if="index < operationalModel.steps.length - 1" class="step-connector"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Opportunities Section -->
    <section id="partners" class="partners-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ partnerOpportunities.title }}</h2>
          <p>{{ partnerOpportunities.subtitle }}</p>
        </div>
        
        <div class="partners-grid">
          <div 
            v-for="benefit in partnerOpportunities.benefits" 
            :key="benefit.title"
            class="partner-card"
          >
            <q-icon :name="benefit.icon" size="56px" color="primary" />
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
        
        <div class="partner-ideal">
          <q-icon name="lightbulb" size="32px" color="amber" />
          <p>{{ partnerOpportunities.ideal }}</p>
        </div>
      </div>
    </section>

    <!-- Revenue Model Section -->
    <section id="revenue" class="revenue-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ revenue.title }}</h2>
        </div>
        
        <div class="revenue-grid">
          <div 
            v-for="stream in revenue.streams" 
            :key="stream.name"
            class="revenue-card"
          >
            <div class="revenue-icon">
              <q-icon name="payments" size="32px" color="primary" />
            </div>
            <h3>{{ stream.name }}</h3>
            <p>{{ stream.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section id="vision" class="vision-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ vision.title }}</h2>
        </div>
        
        <div class="vision-goals">
          <div 
            v-for="(goal, index) in vision.goals" 
            :key="index"
            class="vision-goal"
          >
            <q-icon name="arrow_forward" size="24px" color="primary" />
            <span>{{ goal }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section id="cta" class="final-cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ finalCTA.title }}</h2>
          <p>{{ finalCTA.subtitle }}</p>
          
          <div class="cta-actions">
            <q-btn
              :label="finalCTA.primary"
              color="white"
              text-color="primary"
              size="xl"
              unelevated
              rounded
              @click="scrollToSection('products')"
            />
            <q-btn
              :label="finalCTA.secondary"
              color="transparent"
              text-color="white"
              size="xl"
              outline
              rounded
              @click="scrollToSection('partners')"
            />
          </div>
          
          <div class="cta-guarantee">
            <q-icon name="verified" size="24px" />
            <p>{{ finalCTA.guarantee }}</p>
          </div>
          
          <div class="cta-contact">
            <div class="contact-item">
              <q-icon name="email" size="20px" />
              <a :href="`mailto:${companyInfo.email}`">{{ companyInfo.email }}</a>
            </div>
            <div class="contact-item">
              <q-icon name="phone" size="20px" />
              <a :href="`tel:${companyInfo.phone}`">{{ companyInfo.phone }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '../stores/useHomeStore'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
const router = useRouter()

// Destructure computed properties from store
const {
  heroSection,
  companyInfo,
  philosophy,
  team,
  network,
  operationalModel,
  partnerOpportunities,
  revenue,
  vision,
  finalCTA,
  allProducts,
} = homeStore

// Destructure methods from store
const { scrollToSection } = homeStore

// Navigation methods
const navigateToProduct = async (productKey: string) => {
  await router.push({ name: 'product', params: { key: productKey } })
}
</script>

<style scoped lang="scss">
.home-page {
  width: 100%;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

// Hero Section
.hero-section {
  position: relative;
  padding: 160px 0 120px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 50px, #fff 50px, #fff 51px),
    repeating-linear-gradient(90deg, transparent, transparent 50px, #fff 50px, #fff 51px);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 28px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  
  .badge-icon {
    font-size: 24px;
  }
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 32px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 22px;
  margin-bottom: 48px;
  opacity: 0.9;
  line-height: 1.7;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-highlights {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 56px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

// Section Styles
section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 72px;

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
    line-height: 1.6;
  }
}

// Philosophy Section
.philosophy-section {
  background: white;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 48px;
}

.principle-card {
  text-align: center;
  padding: 48px 32px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  .principle-icon {
    margin-bottom: 28px;
  }

  h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--q-dark);
  }

  p {
    font-size: 17px;
    line-height: 1.7;
    opacity: 0.8;
  }
}

// Team Section
.team-section {
  background: linear-gradient(to bottom, white 0%, #f8f9fa 100%);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 48px;
}

.team-card {
  background: white;
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 60px rgba(0, 0, 0, 0.12);
  }
}

.member-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
}

.member-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.member-info {
  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .member-role {
    font-size: 18px;
    color: var(--q-primary);
    font-weight: 600;
    margin: 0;
  }
}

.member-bio {
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: 28px;
  opacity: 0.8;
}

.member-responsibilities {
  h4 {
    font-size: 16px;
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
      font-size: 16px;
      line-height: 1.5;

      span {
        flex: 1;
      }
    }
  }
}

// Network Section
.network-section {
  background: var(--q-dark);
  color: white;
}

.network-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;
}

.network-card {
  padding: 48px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
  }
}

.network-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.network-scope {
  padding: 10px 24px;
  background: var(--q-primary);
  color: white;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &.global {
    background: var(--q-secondary);
  }
}

.network-card {
  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 17px;
    line-height: 1.7;
    opacity: 0.9;
  }
}

// Products Section
.products-section {
  background: #f8f9fa;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;
}

.product-card {
  position: relative;
  padding: 40px;
  background: white;
  border-radius: 20px;
  border: 2px solid #e9ecef;
  transition: all 0.4s ease;

  &.featured {
    border-color: var(--q-primary);
    box-shadow: 0 12px 48px rgba(var(--q-primary-rgb), 0.15);
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
}

.product-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 20px;
  background: var(--q-primary);
  color: white;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-header {
  margin-bottom: 24px;

  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--q-dark);
  }

  .product-tagline {
    font-size: 17px;
    color: var(--q-primary);
    font-weight: 600;
    margin: 0;
  }
}

.product-description {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 28px;
  opacity: 0.8;
}

.product-features {
  margin-bottom: 28px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 16px;
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
      padding: 8px 0;
      font-size: 15px;
      line-height: 1.5;
    }
  }
}

.product-geography {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 10px 16px;
  background: #f8f9fa;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--q-secondary);
}

.product-pricing {
  margin-bottom: 28px;
  padding: 28px 0;
  border-top: 2px solid #e9ecef;
  border-bottom: 2px solid #e9ecef;

  .pricing-model {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
    opacity: 0.6;
    margin-bottom: 12px;
  }

  .price-display {
    display: flex;
    align-items: baseline;
    gap: 8px;

    .price {
      font-size: 40px;
      font-weight: 800;
      color: var(--q-primary);
    }

    .period {
      font-size: 16px;
      opacity: 0.7;
    }
  }
}

.product-cta {
  width: 100%;
  height: 52px;
  font-size: 16px;
  font-weight: 700;
}

// Operational Section
.operational-section {
  background: white;
}

.operational-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0;
  position: relative;
}

.operational-step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.step-number {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  color: white;
  font-size: 32px;
  font-weight: 800;
  border-radius: 50%;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(var(--q-primary-rgb), 0.3);
}

.step-content {
  text-align: center;

  .step-icon {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    opacity: 0.8;
  }
}

.step-connector {
  position: absolute;
  top: 40px;
  left: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--q-primary), var(--q-secondary));
  opacity: 0.3;
  z-index: -1;
}

// Partners Section
.partners-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin-bottom: 64px;
}

.partner-card {
  text-align: center;
  padding: 48px 32px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  }

  h3 {
    font-size: 26px;
    font-weight: 700;
    margin: 24px 0 16px;
  }

  p {
    font-size: 17px;
    line-height: 1.7;
    opacity: 0.8;
  }
}

.partner-ideal {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 32px 48px;
  background: white;
  border-radius: 20px;
  border: 2px solid var(--q-primary);
  box-shadow: 0 8px 32px rgba(var(--q-primary-rgb), 0.15);

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.7;
    margin: 0;
    max-width: 900px;
  }
}

// Revenue Section
.revenue-section {
  background: var(--q-dark);
  color: white;
}

.revenue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.revenue-card {
  padding: 40px 32px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-8px);
  }

  .revenue-icon {
    margin-bottom: 24px;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    opacity: 0.8;
  }
}

// Vision Section
.vision-section {
  background: white;
}

.vision-goals {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.vision-goal {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 32px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.6;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(12px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
}

// Final CTA Section
.final-cta-section {
  padding: 140px 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 900px;
  margin: 0 auto;

  h2 {
    font-size: 56px;
    font-weight: 800;
    margin-bottom: 28px;
    line-height: 1.2;
  }

  p {
    font-size: 22px;
    margin-bottom: 56px;
    opacity: 0.9;
    line-height: 1.7;
  }
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 56px;
  flex-wrap: wrap;
}

.cta-guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin-bottom: 48px;
  backdrop-filter: blur(10px);

  p {
    font-size: 17px;
    font-weight: 600;
    margin: 0;
  }
}

.cta-contact {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 17px;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
}

// Responsive Design
@media (max-width: 1024px) {
  .operational-timeline {
    grid-template-columns: 1fr;
  }

  .step-connector {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 42px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-header h2 {
    font-size: 36px;
  }

  .products-grid,
  .philosophy-grid,
  .team-grid,
  .network-grid,
  .partners-grid {
    grid-template-columns: 1fr;
  }

  .cta-content h2 {
    font-size: 38px;
  }

  .member-header {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 32px;
  }

  section {
    padding: 60px 0;
  }
}
</style>
