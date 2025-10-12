<template>
  <footer class="app-footer">
    <div class="footer-top container">
      <FooterLogo />
      <div class="footer-links-groups">
        <FooterLinks title="Products" :links="contentStore.footerNavigation.products" />
        <FooterLinks title="Company" :links="contentStore.footerNavigation.company" />
        <FooterLinks title="Resources" :links="contentStore.footerNavigation.resources" />
        <NewsletterSignup />
      </div>
    </div>
    <FooterBottom />
  </footer>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import FooterLogo from '@/components/layout/FooterLogo.vue'
import FooterLinks from '@/components/layout/FooterLinks.vue'
import NewsletterSignup from '@/components/layout/NewsletterSignup.vue'
import FooterBottom from '@/components/layout/FooterBottom.vue'

const contentStore = useContentStore()
</script>

<style scoped>
.app-footer {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  border-top: 1px solid var(--md-sys-color-outline);
  padding: var(--spacing-lg) 0;
}
.footer-top {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  justify-content: space-between;
  align-items: flex-start;
}
.footer-links-groups {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xxl);
}
.footer-logo-section {
  flex: 1 1 200px;
}
.footer-logo-image {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}
.footer-logo-section h3 {
  margin: 0.5rem 0 0.25rem;
  font-size: 1.25rem;
}
.footer-logo-section p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--md-sys-color-on-surface-variant);
}
.footer-section {
  flex: 1 1 150px;
}
.footer-heading {
  font-size: 1rem;
  margin-bottom: var(--spacing-sm);
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-link {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--md-sys-color-on-surface-variant);
  text-decoration: none;
  transition: color var(--transition-normal);
}
.footer-link:hover {
  color: var(--md-sys-color-on-surface);
}
.footer-link.external::after {
  content: ' ↗';
  font-size: 0.85rem;
}
.newsletter-signup {
  flex: 1 1 250px;
}
.footer-bottom {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--md-sys-color-outline);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--md-sys-color-on-surface-variant);
}
.footer-bottom-left,
.footer-bottom-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1 1 200px;
}
.legal-link {
  margin-left: var(--spacing-md);
  color: var(--md-sys-color-on-surface-variant);
  text-decoration: none;
  transition: color var(--transition-normal);
}
.legal-link:hover {
  color: var(--md-sys-color-on-surface);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-top,
  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  .footer-links-groups {
    flex-direction: column;
  }
  .footer-logo-section,
  .footer-section,
  .newsletter-signup,
  .footer-bottom-left,
  .footer-bottom-right {
    flex: 1 1 auto;
  }
}
</style>
