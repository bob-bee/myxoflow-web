<template>
  <div class="footer-section">
    <h4 class="footer-heading">{{ title }}</h4>
    <ul class="footer-links">
      <li v-for="link in links" :key="link.path">
        <router-link :to="link.path" :class="{ external: link.external }" class="footer-link">
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { NavigationItem } from '@/stores/useContentStore'

const props = defineProps<{
  title: string
  links: NavigationItem[]
}>()
const { title, links } = props
</script>

<style scoped>
.footer-heading {
  font-weight: 600;
  margin-bottom: 1rem;
}
.footer-links {
  list-style: none;
  padding: 0;
}
.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
}
.footer-link.external::after {
  content: ' ↗';
}
</style>
