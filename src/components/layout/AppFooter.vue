<template>
  <footer class="app-footer">
    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="footer-container">
        <!-- Company Info -->
        <div class="footer-section company-section">
          <div class="footer-logo">
            <img src="@/assets/myxoflow.svg" alt="MyxoFlow" class="logo-image" />
            <span class="logo-text">MyxoFlow</span>
          </div>
          <p class="company-description">
            Optimizing workflows without the premium price tag. Transform your manufacturing and
            service operations with our lean, two-developer team.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div class="footer-section">
          <h3 class="section-title">Products</h3>
          <ul class="footer-links">
            <li><router-link to="/products/dashboards">Myxo-Dashboards</router-link></li>
            <li><router-link to="/products/fill">MyxoFill</router-link></li>
            <li><router-link to="/products/date">MyxoDate</router-link></li>
            <li><router-link to="/products/golgappa">Golgappa.inc</router-link></li>
            <li><router-link to="/products/craft">MyxoCraft</router-link></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-section">
          <h3 class="section-title">Company</h3>
          <ul class="footer-links">
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/how-it-works">How It Works</router-link></li>
            <li><router-link to="/case-studies">Case Studies</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="footer-section">
          <h3 class="section-title">Resources</h3>
          <ul class="footer-links">
            <li><a href="/docs" target="_blank">Documentation</a></li>
            <li><a href="/api" target="_blank">API Reference</a></li>
            <li><a href="/support">Support Center</a></li>
            <li><a href="/status" target="_blank">System Status</a></li>
            <li><a href="/changelog">Changelog</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-section newsletter-section">
          <h3 class="section-title">Stay Updated</h3>
          <p class="newsletter-description">
            Get the latest updates on process optimization and new features.
          </p>
          <form @submit.prevent="submitNewsletter" class="newsletter-form">
            <div class="input-group">
              <input
                v-model="newsletterEmail"
                type="email"
                placeholder="Enter your email"
                class="newsletter-input"
                required
              />
              <button type="submit" class="newsletter-button" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Subscribe</span>
                <span v-else>...</span>
              </button>
            </div>
            <p class="newsletter-privacy">
              By subscribing, you agree to our
              <router-link to="/privacy">Privacy Policy</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-container">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; {{ currentYear }} MyxoFlow. All rights reserved.</p>
          </div>

          <div class="footer-bottom-links">
            <router-link to="/privacy">Privacy Policy</router-link>
            <router-link to="/terms">Terms of Service</router-link>
            <router-link to="/cookies">Cookie Policy</router-link>
          </div>

          <div class="footer-meta">
            <span class="meta-item">Made with ❤️ by a 2-developer team</span>
            <span class="meta-divider">•</span>
            <span class="meta-item">Hosted sustainably</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// State
const newsletterEmail = ref('')
const isSubmitting = ref(false)

// Computed
const currentYear = computed(() => new Date().getFullYear())

// Methods
const submitNewsletter = async () => {
  if (!newsletterEmail.value) return

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Handle successful subscription
    console.log('Newsletter subscription:', newsletterEmail.value)
    newsletterEmail.value = ''

    // You could show a success message here
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    // Handle error
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: #f9fafb;
  margin-top: auto;
}

.footer-main {
  padding: 4rem 0 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer-main .footer-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Company Section */
.company-section {
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: 1rem;
}

.logo-image {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #60a5fa;
}

.company-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  color: #d1d5db;
  text-decoration: none;
  transition: all var(--transition-normal);
}

.social-link:hover {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  transform: translateY(-2px);
}

/* Footer Sections */
.footer-section {
  min-width: 0;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  color: #d1d5db;
  text-decoration: none;
  transition: color var(--transition-fast);
  display: inline-block;
}

.footer-links a:hover {
  color: #60a5fa;
}

/* Newsletter Section */
.newsletter-section {
  max-width: 300px;
}

.newsletter-description {
  color: #d1d5db;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.input-group {
  display: flex;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: border-color var(--transition-fast);
}

.input-group:focus-within {
  border-color: #60a5fa;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 0.875rem;
}

.newsletter-input::placeholder {
  color: #9ca3af;
}

.newsletter-input:focus {
  outline: none;
}

.newsletter-button {
  padding: 0.75rem 1rem;
  background: #60a5fa;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.newsletter-button:hover:not(:disabled) {
  background: #3b82f6;
}

.newsletter-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.newsletter-privacy {
  font-size: 0.75rem;
  color: #9ca3af;
}

.newsletter-privacy a {
  color: #60a5fa;
  text-decoration: none;
}

.newsletter-privacy a:hover {
  text-decoration: underline;
}

/* Footer Bottom */
.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
}

.copyright {
  color: #9ca3af;
  font-size: 0.875rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-bottom-links a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.footer-bottom-links a:hover {
  color: #60a5fa;
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: #9ca3af;
  font-size: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.meta-divider {
  color: #6b7280;
}

/* Responsive Design */
@media (min-width: 640px) {
  .footer-main .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .company-section {
    max-width: none;
  }

  .newsletter-section {
    max-width: none;
  }
}

@media (min-width: 768px) {
  .footer-main .footer-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-bottom-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .footer-main .footer-container {
    grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  }

  .footer-container {
    padding: 0 var(--spacing-xl);
  }
}
</style>
