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
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: #111; /* primary text color */
  padding: 8px 12px;
  border-radius: 6px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.nav-link.router-link-active {
  color: #0d6efd; /* primary accent for active link */
  font-weight: 600;
}

.nav-link:hover {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.nav-arrow {
  width: 12px;
  height: 12px;
  fill: currentColor;
  transition: transform 0.2s ease;
}

.nav-item:hover .nav-arrow {
  transform: rotate(180deg);
}

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s;
  z-index: 50;
}

.nav-dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #111;
  font-weight: 400;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.dropdown-link:hover {
  background-color: rgba(13, 110, 253, 0.05);
  color: #0d6efd;
  font-weight: 500;
}

/* Responsive tweaks for smaller screens */
@media (max-width: 1024px) {
  .desktop-nav {
    gap: 16px;
  }

  .nav-link {
    padding: 6px 10px;
  }

  .dropdown-link {
    padding: 6px 12px;
  }
}
</style>
