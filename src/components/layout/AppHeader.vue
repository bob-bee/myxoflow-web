<template>
  <header class="app-header" :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="logo-link" @click="closeMobileMenu">
        <div class="logo">
          <img src="@/assets/myxoflow.svg" alt="MyxoFlow" class="logo-image" />
          <span class="logo-text">MyxoFlow</span>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav" aria-label="Main navigation">
        <ul class="nav-list">
          <li v-for="item in navigationItems" :key="item.name" class="nav-item">
            <router-link
              :to="item.path"
              class="nav-link"
              :class="{ active: $route.path === item.path }"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- CTA Button -->
      <div class="header-actions">
        <router-link to="/contact" class="cta-button" @click="closeMobileMenu">
          Get Started
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="mobile-menu">
      <nav v-if="isMobileMenuOpen" class="mobile-nav" aria-label="Mobile navigation">
        <ul class="mobile-nav-list">
          <li v-for="item in navigationItems" :key="item.name" class="mobile-nav-item">
            <router-link
              :to="item.path"
              class="mobile-nav-link"
              :class="{ active: $route.path === item.path }"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
          </li>
          <li class="mobile-nav-item">
            <router-link to="/contact" class="mobile-cta-button" @click="closeMobileMenu">
              Get Started
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>

    <!-- Mobile menu overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="mobile-overlay"
      @click="closeMobileMenu"
      aria-hidden="true"
    ></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// State
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Navigation items
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'FAQ', path: '/faq' },
]

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Close mobile menu on escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMobileMenu()
    }
  }
  document.addEventListener('keydown', handleEscape)

  return () => {
    document.removeEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-normal);
  z-index: 1000;
}

.app-header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  border-bottom-color: var(--border-color);
  box-shadow: var(--shadow-sm);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.logo-image {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: var(--spacing-xl);
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
  padding: var(--spacing-sm) 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-color);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  border-radius: 1px;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.cta-button {
  display: none;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: all var(--transition-fast);
}

.cta-button:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  gap: 4px;
  transition: all var(--transition-fast);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: var(--text-color);
  transition: all var(--transition-fast);
  border-radius: 1px;
}

.menu-open .hamburger-line:first-child {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.menu-open .hamburger-line:last-child {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Navigation */
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.mobile-nav-list {
  list-style: none;
  padding: var(--spacing-lg) 0;
}

.mobile-nav-link {
  display: block;
  padding: var(--spacing-md) var(--spacing-lg);
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--primary-color);
  background: var(--surface-color);
}

.mobile-cta-button {
  display: block;
  margin: var(--spacing-md) var(--spacing-lg);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-align: center;
  transition: background var(--transition-fast);
}

.mobile-cta-button:hover {
  background: var(--primary-dark);
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all var(--transition-normal);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Desktop Styles */
@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }

  .cta-button {
    display: flex;
  }

  .mobile-menu-btn {
    display: none;
  }

  .header-container {
    padding: 0 var(--spacing-xl);
  }
}

@media (min-width: 1024px) {
  .nav-list {
    gap: 2.5rem;
  }

  .logo-text {
    font-size: 1.75rem;
  }
}
</style>
