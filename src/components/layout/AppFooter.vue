<template>
  <footer class="app-footer">
    <div class="footer-content container">
      <FooterLogo />
      <FooterLinks title="Products" :links="contentStore.footerNavigation.products" />
      <FooterLinks title="Company" :links="contentStore.footerNavigation.company" />
      <FooterLinks title="Resources" :links="contentStore.footerNavigation.resources" />
      <NewsletterSignup />
    </div>
    <FooterBottom />
  </footer>
</template>

<script setup lang="ts">
import FooterLogo from '@/components/layout/FooterLogo.vue'
import FooterBottom from '@/components/layout/FooterBottom.vue'
import FooterLinks from '@/components/layout/FooterLinks.vue'
import NewsletterSignup from '@/components/layout/NewsletterSignup.vue'
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()
</script>
