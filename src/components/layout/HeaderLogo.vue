<template>
  <router-link to="/" class="logo-link" @click="closeMenu">
    <div class="logo-icon">
      <img :src="logo" :alt="company.name" class="logo-image" />
    </div>
    <div class="logo-text">
      <h1 class="logo-title">{{ company.name }}</h1>
      <p class="logo-subtitle">{{ company.tagline }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import { useUIStore } from '@/stores/useUIStore'
import logo from '@/assets/icons/main/myxoflow.svg'

const contentStore = useContentStore()
const uiStore = useUIStore()

const company = contentStore.company
function closeMenu() {
  uiStore.closeMenu()
}
</script>

<style scoped>
.logo-link {
  display: flex;
  align-items: center;
  gap: 12px; /* spacing between icon and text */
  text-decoration: none; /* remove underline */
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  cursor: pointer;
}

.logo-link:hover {
  transform: scale(1.05); /* subtle hover effect */
  opacity: 0.9;
}

.logo-icon {
  flex-shrink: 0; /* prevent icon from shrinking */
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111; /* primary text color */
  margin: 0;
}

.logo-subtitle {
  font-size: 0.85rem;
  font-weight: 400;
  color: #666; /* secondary text color */
  margin: 0;
}

/* Responsive tweaks */
@media (max-width: 600px) {
  .logo-link {
    gap: 8px;
  }

  .logo-icon {
    width: 36px;
    height: 36px;
  }

  .logo-title {
    font-size: 1rem;
  }

  .logo-subtitle {
    font-size: 0.75rem;
  }
}
</style>
