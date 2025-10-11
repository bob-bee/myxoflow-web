<template>
  <nav class="desktop-nav">
    <div v-for="item in nav" :key="item.path" class="nav-item">
      <router-link
        :to="item.path ?? '#'"
        class="nav-link"
        :class="{ 'router-link-active': isActive(item.path) }"
        @mouseenter="onHover(item)"
        @mouseleave="onLeave"
      >
        {{ item.label }}
        <svg v-if="item.children?.length" class="nav-arrow">…</svg>
      </router-link>
      <div
        v-if="item.children?.length"
        class="nav-dropdown"
        :class="{ show: hovered === item.label }"
      >
        <router-link v-for="c in item.children" :key="c.path" :to="c.path" class="dropdown-link">
          {{ c.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useRoute } from 'vue-router'

const contentStore = useContentStore()
const nav = contentStore.navigation
const route = useRoute()
const hovered = ref<string | null>(null)

function isActive(path?: string) {
  return path ? route.path.startsWith(path) : false
}
function onHover(item: { label: string; children?: unknown[] }) {
  if (item.children) hovered.value = item.label
}
function onLeave() {
  hovered.value = null
}
</script>

<style scoped>
/* copy desktop nav styles */
</style>
