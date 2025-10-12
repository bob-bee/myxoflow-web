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
/* Overlay background */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 150;
}

/* Search container */
.search-container {
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Input field */
.search-container input {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.search-container input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
}

/* Search results container */
.search-results {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 300px;
  overflow-y: auto;
}

/* Individual result link */
.search-results a {
  padding: 10px 12px;
  text-decoration: none;
  color: #111;
  border-radius: 6px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.search-results a:hover {
  background-color: rgba(13, 110, 253, 0.05);
  color: #0d6efd;
  font-weight: 500;
}

/* Fade transition for overlay */
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.25s ease;
}

.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
}

/* Responsive tweaks */
@media (max-width: 480px) {
  .search-container {
    padding: 16px;
  }

  .search-container input {
    padding: 10px 14px;
  }
}
</style>
