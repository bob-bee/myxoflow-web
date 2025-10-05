<!-- src/components/layout/AppHeader.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/" class="logo-link">
          <img
            src="@/assets/myxoflow.svg"
            alt="MyxoFlow Logo"
            class="logo-image"
            width="40"
            height="40"
          />
          <span class="logo-text">MyxoFlow</span>
        </router-link>
      </div>

      <nav class="desktop-nav">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          class="nav-link"
          :class="{ active: route.path === item.path }"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <div class="header-cta">
        <router-link to="/contact" class="cta-button"> Get Started </router-link>
      </div>

      <button
        class="mobile-menu-button"
        @click="toggleMobileMenu"
        :class="{ open: mobileMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav v-if="mobileMenuOpen" class="mobile-nav">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.path"
        class="mobile-nav-link"
        :class="{ active: route.path === item.path }"
        @click="closeMobileMenu"
      >
        {{ item.name }}
      </router-link>
      <router-link to="/contact" class="mobile-cta-button" @click="closeMobileMenu">
        Get Started
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1f2937;
}

.logo-image {
  margin-right: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.desktop-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: #3b82f6;
}

.cta-button {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.cta-button:hover {
  background: #2563eb;
}

.mobile-menu-button {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mobile-menu-button span {
  width: 20px;
  height: 2px;
  background: #374151;
  transition: all 0.3s;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 1rem;
}

.mobile-nav-link {
  color: #6b7280;
  text-decoration: none;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: #3b82f6;
}

.mobile-cta-button {
  background: #3b82f6;
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;
  text-align: center;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .desktop-nav,
  .header-cta {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}
</style>
