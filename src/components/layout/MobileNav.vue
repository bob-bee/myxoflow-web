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
/* copy mobile nav styles */
</style>
