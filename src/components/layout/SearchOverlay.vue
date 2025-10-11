<template>
  <transition name="search-fade">
    <div v-if="useUIStore().search.isOpen" class="search-overlay" @click="useUIStore().closeSearch">
      <div class="search-container" @click.stop>
        <!-- input and results here -->
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useUIStore } from '@/stores/useUIStore'

// implement as before
</script>

<style scoped>
/* copy overlay styles */
</style>
