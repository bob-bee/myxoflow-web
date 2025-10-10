import { ref, computed } from 'vue'
import type { Theme } from '@/types/content'

const STORAGE_KEY = 'myxoflow-theme'

export const themes: Theme[] = [
  { name: 'light', icon: '/assets/sunLogo/light.svg' },
  { name: 'dark', icon: '/assets/sunLogo/dark.svg' },
  { name: 'sunrise', icon: '/assets/sunLogo/sunrise.svg' },
  { name: 'midnight', icon: '/assets/sunLogo/midnight.svg' },
  { name: 'forest', icon: '/assets/sunLogo/forest.svg' },
]

const currentIndex = ref(0)

// ✅ Fix: Provide a fallback so TypeScript knows it's never undefined
export const currentTheme = computed<Theme>(() => themes[currentIndex.value]!)

export function applyTheme() {
  const themeName = currentTheme.value.name
  document.documentElement.classList.remove(...themes.map((t) => `theme-${t.name}`))
  document.documentElement.classList.add(`theme-${themeName}`)
  localStorage.setItem(STORAGE_KEY, themeName)
}

export function cycleTheme() {
  currentIndex.value = (currentIndex.value + 1) % themes.length
  applyTheme()
}

export function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  const idx = themes.findIndex((t) => t.name === saved)
  if (idx >= 0) currentIndex.value = idx
  applyTheme()
}
