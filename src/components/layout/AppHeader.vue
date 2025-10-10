<template>
  <header class="app-header" :class="headerClasses">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/" class="logo-link" @click="closeMenu">
            <div class="logo-icon">
              <img :src="logo" :alt="contentStore.company.name" class="logo-image" />
            </div>
            <div class="logo-text">
              <h1 class="logo-title">{{ contentStore.company.name }}</h1>
              <p class="logo-subtitle">{{ contentStore.company.tagline }}</p>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav-menu desktop-nav">
          <div v-for="item in contentStore.navigation" :key="item.path" class="nav-item">
            <router-link
              :to="item.path ?? '#'"
              @click="closeMenu"
              class="nav-link"
              :class="{
                'router-link-active': isActiveRoute(item.path ?? ''),
                'has-children': item.children && item.children.length > 0,
              }"
              @mouseenter="handleNavHover(item)"
              @mouseleave="handleNavLeave"
            >
              {{ item.label }}
              <svg
                v-if="item.children && item.children.length > 0"
                class="nav-arrow"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>

            <!-- Dropdown Menu -->
            <div
              v-if="item.children && item.children.length > 0"
              class="nav-dropdown"
              :class="{ show: hoveredItem === item.label }"
            >
              <router-link
                v-for="child in item.children"
                :key="child.path"
                :to="child.path"
                class="dropdown-link"
                @click="closeMenu"
              >
                {{ child.label }}
              </router-link>
            </div>
          </div>
        </nav>

        <!-- Action Buttons -->
        <div class="header-actions">
          <button
            class="search-toggle"
            @click="uiStore.toggleSearch"
            :aria-label="uiStore.search.isOpen ? 'Close search' : 'Open search'"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <ThemeToggle />

          <router-link to="/contact" class="btn btn-primary header-cta">
            {{ contentStore.cta.primaryAction.text }}
          </router-link>

          <!-- Mobile Menu Toggle -->
          <button
            class="nav-toggle"
            @click="toggleMenu"
            :class="{ active: uiStore.navigation.isMenuOpen }"
            :aria-label="uiStore.navigation.isMenuOpen ? 'Close navigation' : 'Open navigation'"
            :aria-expanded="uiStore.navigation.isMenuOpen"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Search Overlay -->
    <transition name="search-fade">
      <div v-if="uiStore.search.isOpen" class="search-overlay" @click="uiStore.closeSearch">
        <div class="search-container" @click.stop>
          <div class="search-box">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
              <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" />
            </svg>

            <!-- v-model driven input — handleSearch is debounced and reads searchQuery -->
            <input
              id="search-input"
              v-model="searchQuery"
              type="text"
              placeholder="Search products, features, documentation..."
              class="search-input"
              @input="handleSearch"
              @keydown.escape="uiStore.closeSearch"
              autocomplete="off"
            />

            <button class="search-close" @click="uiStore.closeSearch" aria-label="Close search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </div>

          <div v-if="searchResults.length > 0" class="search-results">
            <div
              v-for="result in searchResults"
              :key="result.path + '|' + result.title"
              class="search-result"
              @click="navigateToResult(result)"
            >
              <div class="result-icon">{{ result.icon }}</div>
              <div class="result-content">
                <h4 class="result-title">{{ result.title }}</h4>
                <p class="result-description">{{ result.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Mobile Navigation Overlay -->
    <transition name="mobile-nav-fade">
      <div v-if="uiStore.navigation.isMenuOpen" class="mobile-nav-overlay" @click="closeMenu">
        <nav class="mobile-nav" @click.stop>
          <div class="mobile-nav-header">
            <div class="mobile-logo">
              <img
                :src="currentLogoSrc"
                :alt="contentStore.company.name"
                class="mobile-logo-image"
              />
              <span class="mobile-logo-text">{{ contentStore.company.name }}</span>
            </div>
            <button class="mobile-nav-close" @click="closeMenu" aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </div>

          <div class="mobile-nav-content">
            <template v-for="item in contentStore.navigation" :key="item.path">
              <router-link
                v-if="!item.children || item.children.length === 0"
                :to="item.path"
                @click="closeMenu"
                class="mobile-nav-link"
                :class="{ 'router-link-active': isActiveRoute(item.path ?? '') }"
              >
                {{ item.label }}
              </router-link>

              <div v-else class="mobile-nav-group">
                <button
                  class="mobile-nav-group-toggle"
                  @click="toggleMobileGroup(item.label)"
                  :class="{ active: expandedGroups.includes(item.label) }"
                >
                  {{ item.label }}
                  <svg class="group-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" />
                  </svg>
                </button>

                <div
                  class="mobile-nav-sublinks"
                  :class="{ expanded: expandedGroups.includes(item.label) }"
                >
                  <router-link
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="mobile-nav-sublink"
                    @click="closeMenu"
                  >
                    {{ child.label }}
                  </router-link>
                </div>
              </div>
            </template>

            <div class="mobile-nav-cta">
              <router-link to="/contact" class="btn btn-primary mobile-cta" @click="closeMenu">
                {{ contentStore.cta.primaryAction.text }}
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useContentStore } from '@/stores/useContentStore'
import { useUIStore } from '@/stores/useUIStore'
import { useProductStore } from '@/stores/useProductStore'
import ThemeToggle from '@/components/common/extras/ThemeToggle.vue'
import { debounce } from '@/utils'
import logo from '@/assets/main/myxoflow.svg'

// ----------------- Types -----------------
interface SearchResult {
  title: string
  description: string
  path: string
  icon: string
  type: 'product' | 'page' | 'blog' | 'doc'
  external?: boolean
}

type SearchSource = (query: string) => SearchResult[]

interface NavItem {
  label: string
  path?: string
  external?: boolean
  children?: NavItem[]
}

// ----------------- Stores & router -----------------
const route = useRoute()
const router = useRouter()
const contentStore = useContentStore()
const uiStore = useUIStore()
const productStore = useProductStore()

// ----------------- Local reactive state -----------------
const hoveredItem = ref<string | null>(null)
let hoverTimeout: number | null = null
const expandedGroups = ref<string[]>([])
const searchQuery = ref('')
const searchResults = ref<SearchResult[]>([])
const currentQuery = ref('')

// ----------------- Computeds -----------------
const headerClasses = computed(() => ({
  scrolled: uiStore.scroll.isScrolled,
  'menu-open': uiStore.navigation.isMenuOpen,
  'search-open': uiStore.search.isOpen,
}))

const currentLogoSrc = computed(() => {
  const theme = uiStore.theme.currentTheme
  // adjust paths to your project structure
  return theme === 'midnight' || theme === 'dark'
    ? '/src/assets/sunLogo/vue_light.svg'
    : '/src/assets/sunLogo/vue_dark.svg'
})

// ----------------- Nav helpers -----------------
const isActiveRoute = (path: string): boolean => {
  if (!path) return false
  return route.path === path || route.path.startsWith(path + '/')
}

const handleNavHover = (item: NavItem) => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
  if (item.children && item.children.length > 0) {
    hoveredItem.value = item.label
  }
}

const handleNavLeave = () => {
  if (hoverTimeout) clearTimeout(hoverTimeout)
  hoverTimeout = window.setTimeout(() => {
    hoveredItem.value = null
    hoverTimeout = null
  }, 150)
}

const toggleMenu = () => uiStore.toggleMenu()

const closeMenu = () => {
  uiStore.closeMenu()
  expandedGroups.value = []
}

const toggleMobileGroup = (groupLabel: string) => {
  const idx = expandedGroups.value.indexOf(groupLabel)
  if (idx > -1) expandedGroups.value.splice(idx, 1)
  else expandedGroups.value.push(groupLabel)
}

// ----------------- Search sources -----------------
// Product source reads directly from product store
const productSearchSource: SearchSource = (q) =>
  productStore.searchProducts(q).map((product) => ({
    title: product.name,
    description: product.description,
    path: `/products/${product.key}`,
    icon: productStore.getProductIcon(product.key),
    type: 'product' as const,
    external: false,
  }))

// Static pages source
const pageSearchSource: SearchSource = (q) => {
  const pages: SearchResult[] = [
    {
      title: 'About Us',
      description: 'Learn about MyxoFlow',
      path: '/about',
      icon: '🏢',
      type: 'page',
    },
    { title: 'Contact', description: 'Get in touch', path: '/contact', icon: '📞', type: 'page' },
    { title: 'FAQ', description: 'Find answers', path: '/faq', icon: '❓', type: 'page' },
  ]
  // simple client-side filter
  const nq = q.trim().toLowerCase()
  if (!nq) return []
  return pages.filter(
    (p) => p.title.toLowerCase().includes(nq) || p.description.toLowerCase().includes(nq),
  )
}

// Combine sources — add more sources here if necessary
const allSources: SearchSource[] = [productSearchSource, pageSearchSource]

// ----------------- Search handling -----------------
const MAX_RESULTS_PER_TYPE: Record<string, number> = {
  product: 3,
  page: 2,
  blog: 3,
  doc: 3,
}

// Debounced handler (reads v-model searchQuery so we avoid event typing issues)
const runSearch = () => {
  const q = searchQuery.value.trim()
  currentQuery.value = q

  if (q.length <= 2) {
    searchResults.value = []
    return
  }

  const normalized = q.toLowerCase()

  // gather and filter results from each source (each source may handle its own filtering)
  let aggregated: SearchResult[] = []
  for (const src of allSources) {
    aggregated = aggregated.concat(src(q))
  }

  // additional filtering to ensure description/title match
  const filtered = aggregated.filter(
    (r) =>
      r.title.toLowerCase().includes(normalized) ||
      r.description.toLowerCase().includes(normalized),
  )

  // limit per type
  const counts: Record<string, number> = {}
  const finalResults: SearchResult[] = []
  for (const r of filtered) {
    const type = r.type
    counts[type] = counts[type] ?? 0
    if (counts[type] < (MAX_RESULTS_PER_TYPE[type] ?? 3)) {
      finalResults.push(r)
      counts[type]++
    }
  }

  searchResults.value = finalResults
}

const handleSearch = debounce(runSearch, 300)

// ----------------- Navigation from results -----------------
const navigateToResult = (result: SearchResult) => {
  uiStore.closeSearch()
  if (result.external) {
    window.location.href = result.path
  } else {
    // prefer router push for internal navigation
    router.push(result.path).catch(() => {
      // fallback to hard navigation on router errors
      window.location.href = result.path
    })
  }
}

// ----------------- Keyboard & scroll -----------------
const handleScroll = () => uiStore.updateScroll(window.scrollY)

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (uiStore.search.isOpen) uiStore.closeSearch()
    else if (uiStore.navigation.isMenuOpen) closeMenu()
  }
}

// ----------------- Watchers & lifecycle -----------------
watch(searchQuery, (newQ) => uiStore.setSearchQuery(newQ))

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.app-header {
  background: rgba(var(--surface-color-rgb), 0.95);
  border-bottom: 1px solid var(--border-light);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.app-header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  background: rgba(var(--surface-color-rgb), 0.98);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
  position: relative;
}

/* Logo Styles */
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: translateX(2px);
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
}

.logo-subtitle {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1;
  font-weight: 500;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.75rem 0;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-arrow {
  transition: transform 0.3s ease;
}

.nav-link:hover .nav-arrow {
  transform: rotate(180deg);
}

/* Navigation Dropdown */
.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--surface-color);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.nav-dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.dropdown-link:hover {
  background: var(--surface-secondary);
  color: var(--primary-color);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-toggle:hover {
  background: var(--surface-tertiary);
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.header-cta {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
}

/* Mobile Menu Toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 1.5rem;
  height: 2px;
  background: var(--text-primary);
  margin: 0.25rem 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(0.375rem, 0.375rem);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(0.375rem, -0.375rem);
}

/* Search Overlay */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5rem;
}

.search-container {
  background: var(--surface-color);
  border-radius: 16px;
  border: 1px solid var(--border-light);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 600px;
  overflow: hidden;
}

.search-box {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
}

.search-icon {
  color: var(--text-tertiary);
  margin-right: 0.75rem;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.125rem;
  background: transparent;
  color: var(--text-primary);
  placeholder-color: var(--text-tertiary);
}

.search-close {
  background: none;
  border: none;
  color: var(--text-tertiary);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.search-close:hover {
  background: var(--surface-secondary);
  color: var(--text-primary);
}

.search-results {
  max-height: 400px;
  overflow-y: auto;
}

.search-result {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-result:hover {
  background: var(--surface-secondary);
}

.result-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  width: 32px;
  text-align: center;
}

.result-title {
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.result-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Mobile Navigation */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.mobile-nav {
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background: var(--surface-color);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.mobile-nav-overlay .mobile-nav {
  transform: translateX(0);
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-logo-image {
  width: 32px;
  height: 32px;
}

.mobile-logo-text {
  font-weight: 600;
  color: var(--text-primary);
}

.mobile-nav-close {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.mobile-nav-close:hover {
  background: var(--surface-secondary);
  color: var(--text-primary);
}

.mobile-nav-content {
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 1.5rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: var(--surface-secondary);
  color: var(--primary-color);
  padding-left: 2rem;
}

.mobile-nav-link.router-link-active {
  color: var(--primary-color);
  background: rgba(var(--primary-color-rgb), 0.1);
}

.mobile-nav-group-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-primary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-nav-group-toggle:hover {
  background: var(--surface-secondary);
}

.group-arrow {
  transition: transform 0.3s ease;
}

.mobile-nav-group-toggle.active .group-arrow {
  transform: rotate(180deg);
}

.mobile-nav-sublinks {
  max-height: 0;
  overflow: hidden;
  background: var(--surface-secondary);
  transition: max-height 0.3s ease;
}

.mobile-nav-sublinks.expanded {
  max-height: 500px;
}

.mobile-nav-sublink {
  display: block;
  padding: 0.75rem 2rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.mobile-nav-sublink:hover {
  background: var(--surface-tertiary);
  color: var(--primary-color);
  padding-left: 2.5rem;
}

.mobile-nav-cta {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-light);
}

.mobile-cta {
  width: 100%;
  justify-content: center;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 2px 8px rgba(var(--primary-color-rgb), 0.3);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.4);
}

/* Transitions */
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.3s ease;
}

.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
}

.mobile-nav-fade-enter-active,
.mobile-nav-fade-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-nav-fade-enter-from,
.mobile-nav-fade-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .header-cta {
    display: none;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 100%;
  }

  .search-container {
    width: 95%;
    margin-top: 1rem;
  }

  .logo-text {
    display: none;
  }

  .header-actions {
    gap: 0.5rem;
  }
}
</style>
