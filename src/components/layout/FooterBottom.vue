<template>
  <div class="footer-bottom">
    <div class="footer-bottom-left">
      <p>{{ company.copyright }}</p>
      <span>Made with ❤️ in {{ company.address }}</span>
    </div>
    <div class="footer-bottom-right">
      <a v-for="link in footerNav.legal" :key="link.path" :href="link.path" class="legal-link">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()
const company = contentStore.company
const footerNav = contentStore.footerNavigation
</script>

<style scoped>
.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid var(--border-light);
}
.legal-link {
  margin-left: 1rem;
  color: var(--text-secondary);
  text-decoration: none;
}
</style>
