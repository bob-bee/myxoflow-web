<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="container">
        <!-- Main Footer -->
        <div class="footer-main">
          <!-- Company Info -->
          <div class="footer-section company-info">
            <div class="footer-logo">
              <img
                :src="currentLogoSrc"
                :alt="contentStore.company.name"
                class="footer-logo-image"
              />
              <div class="footer-logo-text">
                <h3 class="footer-company-name">{{ contentStore.company.name }}</h3>
                <p class="footer-tagline">{{ contentStore.company.tagline }}</p>
              </div>
            </div>

            <p class="footer-description">
              {{ contentStore.company.description }}
            </p>

            <div class="company-stats">
              <div v-for="stat in displayStats" :key="stat.label" class="footer-stat">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>

            <div class="social-links">
              <a
                v-for="social in contentStore.socialLinks"
                :key="social.name"
                :href="social.url"
                class="social-link"
                :aria-label="`Follow us on ${social.name}`"
                :style="{ '--social-color': social.color }"
                target="_blank"
                rel="noopener noreferrer"
                @mouseenter="handleSocialHover"
                @mouseleave="handleSocialLeave"
              >
                <component :is="getSocialIcon(social.icon)" />
                <span class="social-label">{{ social.name }}</span>
              </a>
            </div>
          </div>

          <!-- Products -->
          <div class="footer-section">
            <h4 class="footer-heading">Products</h4>
            <ul class="footer-links">
              <li v-for="link in contentStore.footerNavigation.products" :key="link.path">
                <router-link
                  :to="link.path"
                  class="footer-link"
                  :class="{ external: link.external }"
                >
                  {{ link.label }}
                  <svg
                    v-if="link.external"
                    class="external-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                    />
                  </svg>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-section">
            <h4 class="footer-heading">Company</h4>
            <ul class="footer-links">
              <li v-for="link in contentStore.footerNavigation.company" :key="link.path">
                <router-link
                  :to="link.path"
                  class="footer-link"
                  :class="{ external: link.external }"
                >
                  {{ link.label }}
                  <svg
                    v-if="link.external"
                    class="external-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                    />
                  </svg>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="footer-section">
            <h4 class="footer-heading">Resources</h4>
            <ul class="footer-links">
              <li v-for="link in contentStore.footerNavigation.resources" :key="link.path">
                <a
                  :href="link.path"
                  class="footer-link"
                  :class="{ external: link.external }"
                  :target="link.external ? '_blank' : '_self'"
                  :rel="link.external ? 'noopener noreferrer' : ''"
                >
                  {{ link.label }}
                  <svg
                    v-if="link.external"
                    class="external-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="footer-newsletter">
          <div class="newsletter-content">
            <h4 class="newsletter-title">Stay Updated</h4>
            <p class="newsletter-description">
              Get the latest product updates, feature releases, and industry insights.
            </p>
          </div>

          <form @submit.prevent="handleNewsletterSubmit" class="newsletter-form">
            <div class="newsletter-input-group">
              <input
                v-model="newsletterEmail"
                type="email"
                placeholder="Enter your email address"
                class="newsletter-input"
                :disabled="uiStore.forms.newsletter.isSubmitting"
                required
              />
              <button
                type="submit"
                class="newsletter-button"
                :disabled="uiStore.forms.newsletter.isSubmitting || !isValidEmail"
              >
                <span v-if="!uiStore.forms.newsletter.isSubmitting">Subscribe</span>
                <span v-else>Subscribing...</span>
                <svg class="newsletter-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" />
                </svg>
              </button>
            </div>
            <p v-if="uiStore.forms.newsletter.errors.email" class="newsletter-error">
              {{ uiStore.forms.newsletter.errors.email }}
            </p>
          </form>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="footer-bottom-left">
              <p class="copyright">
                {{ contentStore.company.copyright }}
              </p>
              <div class="footer-meta">
                <span class="meta-item">Made with ❤️ in {{ contentStore.company.address }}</span>
                <span class="meta-separator">•</span>
                <span class="meta-item">Founded {{ contentStore.company.founded }}</span>
                <span class="meta-separator">•</span>
                <span class="meta-item">{{ contentStore.company.employees }} employees</span>
              </div>
            </div>

            <div class="footer-bottom-right">
              <div class="legal-links">
                <a
                  v-for="link in contentStore.footerNavigation.legal"
                  :key="link.path"
                  :href="link.path"
                  class="legal-link"
                >
                  {{ link.label }}
                </a>
              </div>

              <div class="footer-actions">
                <button
                  @click="scrollToTop"
                  class="scroll-top-btn"
                  :class="{ visible: uiStore.scroll.isScrolled }"
                  aria-label="Scroll to top"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" />
                  </svg>
                </button>

                <ThemeToggle variant="footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useUIStore } from '@/stores/useUIStore'
import { useStatsStore } from '@/stores/useStatsStore'
import { isValidEmail as validateEmail } from '@/utils'
import ThemeToggle from '@/components/common/extras/ThemeToggle.vue'

const contentStore = useContentStore()
const uiStore = useUIStore()
const statsStore = useStatsStore()

// Local state
const newsletterEmail = ref('')

// Computed properties
const currentLogoSrc = computed(() => {
  const theme = uiStore.theme.currentTheme
  if (theme === 'midnight' || theme === 'dark') {
    return '/src/assets/sunLogo/vue_light.svg'
  }
  return '/src/assets/sunLogo/vue_dark.svg'
})

const displayStats = computed(() => {
  return statsStore.heroStats.slice(0, 3)
})

const isValidEmail = computed(() => {
  return newsletterEmail.value.length > 0 && validateEmail(newsletterEmail.value)
})

// Methods
const getSocialIcon = (iconName: string) => {
  // Return appropriate icon component or symbol
  const iconMap: Record<string, string> = {
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
    github: 'GitHub',
    discord: 'Discord',
  }
  return iconMap[iconName] || iconName
}

const handleSocialHover = (event: Event) => {
  const element = event.target as HTMLElement
  element.style.transform = 'translateY(-2px) scale(1.05)'
}

const handleSocialLeave = (event: Event) => {
  const element = event.target as HTMLElement
  element.style.transform = 'translateY(0) scale(1)'
}

const handleNewsletterSubmit = async () => {
  if (!isValidEmail.value) {
    uiStore.setFormErrors('newsletter', { email: 'Please enter a valid email address' })
    return
  }

  uiStore.setFormState('newsletter', { isSubmitting: true, errors: {} })

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Success
    newsletterEmail.value = ''
    uiStore.showSuccess('Successfully subscribed to our newsletter!', 'Welcome aboard!')
    uiStore.setFormState('newsletter', { errors: {}, isValid: true })
  } catch (err: unknown) {
    // Type-guard error if needed
    const message = err instanceof Error ? err.message : 'Failed to subscribe. Please try again.'

    uiStore.setFormErrors('newsletter', {
      email: message,
    })
    uiStore.showError('Failed to subscribe to newsletter', 'Subscription Error')
  } finally {
    // Always stop submitting
    uiStore.setFormState('newsletter', { isSubmitting: false })
  }
}

const scrollToTop = () => {
  uiStore.scrollToTop()
}
</script>

<style scoped>
.app-footer {
  background: var(--surface-secondary);
  border-top: 1px solid var(--border-light);
  margin-top: auto;
}

.footer-content {
  position: relative;
  overflow: hidden;
}

.footer-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  opacity: 0.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 3rem 0 2rem;
}

.company-info {
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.footer-logo-image {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.footer-company-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 0.25rem 0;
}

.footer-tagline {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  margin: 0;
  font-weight: 500;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.company-stats {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.footer-stat {
  text-align: center;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  display: block;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  margin-top: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--surface-color);
  color: var(--text-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--social-color, var(--primary-color));
  transition: left 0.3s ease;
  opacity: 0.1;
}

.social-link:hover::before {
  left: 0;
}

.social-link:hover {
  color: var(--social-color, var(--primary-color));
  border-color: var(--social-color, var(--primary-color));
  transform: translateY(-2px) scale(1.05);
}

.social-label {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--surface-color);
  color: var(--text-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-link:hover .social-label {
  opacity: 1;
  bottom: -25px;
}

/* Footer Sections */
.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--primary-color);
  border-radius: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--primary-color);
  padding-left: 0.5rem;
}

.external-icon {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.footer-link.external:hover .external-icon {
  opacity: 1;
}

/* Newsletter Section */
.footer-newsletter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--surface-color);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.footer-newsletter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.05), transparent);
  pointer-events: none;
}

.newsletter-content {
  flex: 1;
  margin-right: 2rem;
}

.newsletter-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.newsletter-description {
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.newsletter-form {
  flex: 1;
  max-width: 400px;
}

.newsletter-input-group {
  display: flex;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.newsletter-input-group:focus-within {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}

.newsletter-input {
  flex: 1;
  padding: 0.875rem 1rem;
  border: none;
  outline: none;
  background: var(--surface-color);
  color: var(--text-primary);
  font-size: 0.95rem;
}

.newsletter-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.newsletter-button:hover:not(:disabled) {
  background: var(--primary-hover);
}

.newsletter-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.newsletter-icon {
  transition: transform 0.3s ease;
}

.newsletter-button:hover .newsletter-icon {
  transform: translateX(2px);
}

.newsletter-error {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid var(--border-light);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom-left {
  flex: 1;
}

.copyright {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

.meta-separator {
  opacity: 0.5;
}

.footer-bottom-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
}

.legal-link {
  color: var(--text-tertiary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: var(--text-secondary);
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.scroll-top-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--surface-color);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.scroll-top-btn.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-top-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-newsletter {
    flex-direction: column;
    text-align: center;
  }

  .newsletter-content {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0 1.5rem;
  }

  .company-info {
    max-width: none;
  }

  .company-stats {
    justify-content: space-between;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-bottom-right {
    flex-direction: column;
    gap: 1rem;
  }

  .legal-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .newsletter-form {
    max-width: none;
  }

  .newsletter-input-group {
    flex-direction: column;
  }

  .newsletter-button {
    border-radius: 0;
  }
}

@media (max-width: 480px) {
  .social-links {
    justify-content: center;
  }

  .company-stats {
    flex-direction: column;
    text-align: left;
    gap: 1rem;
  }

  .footer-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat-label {
    margin-top: 0;
  }
}
</style>
