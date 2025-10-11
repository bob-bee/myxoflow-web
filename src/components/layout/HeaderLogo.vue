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
/* copy relevant logo styles here */
</style>
