import { ref, computed, watch } from 'vue'

// Persistent key
const STORAGE_KEY = 'myxoflow-theme'

// Valid theme names
export type ThemeName = 'light' | 'dark' | 'sunrise' | 'midnight' | 'forest' | 'outdoor'

// Theme interface
export interface Theme {
  name: ThemeName
  icon: string
}

// Theme list (icon paths must exist under /src/assets/sunLogo)
export const themes: readonly Theme[] = [
  { name: 'light', icon: '/assets/sunLogo/light.svg' },
  { name: 'dark', icon: '/assets/sunLogo/dark.svg' },
  { name: 'sunrise', icon: '/assets/sunLogo/sunrise.svg' },
  { name: 'midnight', icon: '/assets/sunLogo/midnight.svg' },
  { name: 'forest', icon: '/assets/sunLogo/forest.svg' },
  { name: 'outdoor', icon: '/assets/sunLogo/outdoor.svg' },
]

// Reactive index
const idx = ref(0)

export const currentTheme = computed<Theme>(() => {
  const safeIndex = Math.min(Math.max(idx.value, 0), themes.length - 1)
  return themes[safeIndex]! // <--- non-null assertion
})

// Persist on theme change
watch(
  currentTheme,
  (theme) => {
    // theme is guaranteed defined
    localStorage.setItem(STORAGE_KEY, theme.name)
  },
  { immediate: true },
)
// Initialize theme from storage or system preference
// Initialize theme
export function initTheme(): void {
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null
  const found = saved ? themes.findIndex((t) => t.name === saved) : -1
  idx.value =
    found >= 0
      ? found
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themes.findIndex((t) => t.name === 'dark')
        : themes.findIndex((t) => t.name === 'light')
  applyTheme()
}

// Apply the CSS class for the current theme
export function applyTheme(): void {
  const classes = themes.map((t) => `theme-${t.name}`)
  document.documentElement.classList.remove(...classes)
  document.documentElement.classList.add(`theme-${currentTheme.value.name}`)
}

// Cycle to the next theme
export function cycleTheme(): void {
  idx.value = (idx.value + 1) % themes.length
  applyTheme()
}

// Helper: get all theme names
export const getThemeNames = (): ThemeName[] => themes.map((t) => t.name)

// Helper: set theme by name
export function setTheme(name: string): boolean {
  const i = themes.findIndex((t) => t.name === name)
  if (i >= 0) {
    idx.value = i
    applyTheme()
    return true
  }
  return false
}
