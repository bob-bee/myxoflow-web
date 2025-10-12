<template>
  <transition name="mobile-nav-fade">
    <div v-if="ui.navigation.isMenuOpen" class="mobile-nav-overlay" @click="closeMenu">
      <nav class="mobile-nav" @click.stop>
        <!-- mobile menu structure -->
      </nav>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUIStore } from '@/stores/useUIStore'

const ui = useUIStore()
const expanded = ref<string[]>([])
function closeMenu() {
  ui.closeMenu()
  expanded.value = []
}
</script>

<style scoped>
/* Overlay behind the menu */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
}

/* Mobile nav container */
.mobile-nav {
  width: 280px;
  max-width: 80%;
  height: 100%;
  background-color: #fff;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  overflow-y: auto;
  position: relative;
  transition: transform 0.3s ease;
}

/* Transition for menu fade + slide */
.mobile-nav-fade-enter-active,
.mobile-nav-fade-leave-active {
  transition: opacity 0.25s ease;
}

.mobile-nav-fade-enter-from,
.mobile-nav-fade-leave-to {
  opacity: 0;
}

/* Menu links */
.mobile-nav a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  text-decoration: none;
  color: #111;
  font-weight: 500;
  border-radius: 6px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.mobile-nav a:hover {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

/* Dropdowns */
.mobile-nav .dropdown {
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-left: 12px;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-nav .dropdown-link {
  padding: 8px 8px;
  font-weight: 400;
  color: #111;
  border-radius: 4px;
}

.mobile-nav .dropdown-link:hover {
  background-color: rgba(13, 110, 253, 0.05);
  color: #0d6efd;
  font-weight: 500;
}

/* Expand/collapse arrow */
.mobile-nav .arrow {
  transition: transform 0.2s ease;
}

.mobile-nav .arrow.expanded {
  transform: rotate(90deg);
}

/* Scrollbar styling (optional) */
.mobile-nav::-webkit-scrollbar {
  width: 6px;
}

.mobile-nav::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

/* Responsive tweaks (optional) */
@media (max-width: 400px) {
  .mobile-nav {
    width: 240px;
    padding: 20px 12px;
  }
}
</style>
