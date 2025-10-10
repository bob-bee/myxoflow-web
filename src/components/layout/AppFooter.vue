<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Company Info -->
        <div class="footer-section">
          <h3 class="footer-logo">{{ contentStore.company.name }}</h3>
          <p class="footer-description">
            {{ contentStore.company.description }}
          </p>
          <div class="social-links">
            <a
              v-for="social in contentStore.socialLinks"
              :key="social.name"
              :href="social.url"
              class="social-link"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component :is="getSocialIcon()" />
            </a>
          </div>
        </div>

        <!-- Products -->
        <div class="footer-section">
          <h4 class="footer-heading">Products</h4>
          <ul class="footer-links">
            <li v-for="link in contentStore.footerNavigation.products" :key="link.path">
              <router-link :to="link.path" class="footer-link">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-section">
          <h4 class="footer-heading">Company</h4>
          <ul class="footer-links">
            <li v-for="link in contentStore.footerNavigation.company" :key="link.path">
              <router-link :to="link.path" class="footer-link">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="footer-section">
          <h4 class="footer-heading">Resources</h4>
          <ul class="footer-links">
            <li v-for="link in contentStore.footerNavigation.resources" :key="link.path">
              <a :href="link.path" class="footer-link">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            {{ contentStore.company.copyright }}
          </p>
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
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()

const getSocialIcon = () => {
  // Return appropriate icon component based on name
  // This would typically use a dynamic component or icon library
  return 'div'
}
</script>

<style scoped>
.app-footer {
  background: var(--surface-secondary);
  border-top: 1px solid var(--border-light);
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 3rem 0 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--surface-tertiary);
  color: var(--text-secondary);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.footer-heading {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
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
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid var(--border-light);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 2rem;
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

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0 1.5rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .legal-links {
    gap: 1rem;
  }
}
</style>
