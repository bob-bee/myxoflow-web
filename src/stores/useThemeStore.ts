// src/stores/useThemeStore.ts
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

// Import icons so Vite can bundle them
import lightIcon from '@/assets/icons/sunLogo/light.svg'
import darkIcon from '@/assets/icons/sunLogo/dark.svg'
import sunriseIcon from '@/assets/icons/sunLogo/sunrise.svg'
import midnightIcon from '@/assets/icons/sunLogo/midnight.svg'
import forestIcon from '@/assets/icons/sunLogo/forest.svg'
import energyIcon from '@/assets/icons/sunLogo/energy.svg'

export type ThemeName = 'light' | 'dark' | 'sunrise' | 'midnight' | 'forest' | 'energy'

export interface Theme {
  name: ThemeName
  label: string
  src: string
  description: string
}

// Theme definitions
export const themes: readonly Theme[] = [
  { name: 'light', label: 'Light', src: lightIcon, description: 'Clean and bright interface' },
  {
    name: 'dark',
    label: 'Dark',
    src: darkIcon,
    description: 'Easy on the eyes, perfect for night work',
  },
  {
    name: 'sunrise',
    label: 'Sunrise',
    src: sunriseIcon,
    description: 'Warm orange and yellow tones',
  },
  {
    name: 'midnight',
    label: 'Midnight',
    src: midnightIcon,
    description: 'Deep blue midnight vibes',
  },
  { name: 'forest', label: 'Forest', src: forestIcon, description: 'Nature-inspired green theme' },
  {
    name: 'energy',
    label: 'Energy',
    src: energyIcon,
    description: 'Vibrant and lively theme',
  },
]

export const useThemeStore = defineStore('theme', () => {
  const STORAGE_KEY = 'myxoflow-theme'

  const themeIndex = ref(0)
  const isTransitioning = ref(false)
  const currentTheme = computed<Theme>(() => {
    // Clamp the index to valid range
    const index = Math.min(Math.max(themeIndex.value, 0), themes.length - 1)
    const theme = themes[index]

    // Assert non-null with `!` because we know index is in range
    return theme!
  })

  // Apply theme to document and meta
  const applyTheme = () => {
    const classes = themes.map((t) => `theme-${t.name}`)
    document.documentElement.classList.remove(...classes)
    document.documentElement.classList.add(`theme-${currentTheme.value.name}`)

    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      const themeColors: Record<ThemeName, string> = {
        light: '#ffffff',
        dark: '#1a1a1a',
        sunrise: '#ff6b35',
        midnight: '#2c3e50',
        forest: '#27ae60',
        energy: '#3498db',
      }
      metaTheme.setAttribute('content', themeColors[currentTheme.value.name])
    }
  }

  // Watch for theme changes
  watch(currentTheme, (theme?) => {
    if (theme) {
      localStorage.setItem(STORAGE_KEY, theme.name)
      applyTheme()
    }
  })

  // Initialize theme
  const initTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    const savedIndex = saved ? themes.findIndex((t) => t.name === saved) : -1
    themeIndex.value =
      savedIndex >= 0
        ? savedIndex
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? themes.findIndex((t) => t.name === 'dark')
          : 0
    applyTheme()
  }

  // Set theme by name
  const setTheme = (name: ThemeName) => {
    const index = themes.findIndex((t) => t.name === name)
    if (index >= 0) themeIndex.value = index
  }

  // Cycle to next theme
  const cycleTheme = () => {
    themeIndex.value = (themeIndex.value + 1) % themes.length
  }

  return {
    currentTheme,
    themeIndex,
    isTransitioning,

    initTheme,
    setTheme,
    cycleTheme,
    applyTheme,
  }
})
