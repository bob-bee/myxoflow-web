import { ref, computed } from 'vue'
import type { Theme } from '@/types/content'

const STORAGE_KEY = 'myxoflow-theme'

// Define theme color interface for type safety
interface ThemeColors {
  surface: string
  primary: string
  text: string
}

// Define all available theme names as a union type
type ThemeName = 'light' | 'dark' | 'sunrise' | 'midnight' | 'forest' | 'outdoor'

export const themes: Theme[] = [
  { name: 'light', icon: '/assets/sunLogo/light.svg' },
  { name: 'dark', icon: '/assets/sunLogo/dark.svg' },
  { name: 'sunrise', icon: '/assets/sunLogo/sunrise.svg' },
  { name: 'midnight', icon: '/assets/sunLogo/midnight.svg' },
  { name: 'forest', icon: '/assets/sunLogo/forest.svg' },
  { name: 'energy', icon: '/assets/sunLogo/energy.svg' },
] as const

const currentIndex = ref<number>(0)

export const currentTheme = computed<Theme>(() => {
  // Ensure we always have at least one theme
  if (themes.length === 0) {
    throw new Error('No themes available in themes array')
  }

  // Clamp index to valid range to prevent undefined access
  const safeIndex = Math.max(0, Math.min(currentIndex.value, themes.length - 1))
  return themes[safeIndex] as Theme
})

// Apply a theme to the document
export function applyTheme(): void {
  const themeName = currentTheme.value.name

  // Remove all theme classes (type-safe iteration)
  const themeClasses = themes.map((t): string => `theme-${t.name}`)
  document.documentElement.classList.remove(...themeClasses)
  document.documentElement.classList.add(`theme-${themeName}`)

  try {
    localStorage.setItem(STORAGE_KEY, themeName)
  } catch (error) {
    console.warn('Failed to save theme preference:', error)
  }
}

// Cycle through themes
export function cycleTheme(): void {
  currentIndex.value = (currentIndex.value + 1) % themes.length
  applyTheme()
}

export function initTheme(): void {
  let selectedIndex = 0

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const idx = themes.findIndex((t): boolean => t.name === saved)
      if (idx >= 0) {
        selectedIndex = idx
      }
    } else {
      // System preference detection with type safety
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const lightIndex = themes.findIndex((t): boolean => t.name === 'light')
      const darkIndex = themes.findIndex((t): boolean => t.name === 'dark')

      if (prefersDark && darkIndex >= 0) {
        selectedIndex = darkIndex
      } else if (!prefersDark && lightIndex >= 0) {
        selectedIndex = lightIndex
      }
      // If neither found, selectedIndex remains 0 (first theme)
    }
  } catch (error) {
    console.warn('Failed to read theme preference:', error)
    // selectedIndex remains 0 as fallback
  }

  currentIndex.value = selectedIndex
  applyTheme()
}

// Set theme by name with proper type checking
export function setThemeByName(themeName: string): boolean {
  // Type guard to check if string is a valid theme name
  function isValidThemeName(name: string): name is ThemeName {
    return themes.some((t): boolean => t.name === name)
  }

  if (!isValidThemeName(themeName)) {
    return false
  }

  const idx = themes.findIndex((t): boolean => t.name === themeName)
  if (idx >= 0) {
    currentIndex.value = idx
    applyTheme()
    return true
  }
  return false
}

// Get theme preview colors with strict typing
export function getThemePreview(themeName: string): ThemeColors | null {
  // Type guard
  function isValidThemeName(name: string): name is ThemeName {
    return themes.some((t): boolean => t.name === name)
  }

  if (!isValidThemeName(themeName)) {
    return null
  }

  // Fully typed theme color map
  const themeColorMap: Record<ThemeName, ThemeColors> = {
    light: { surface: '#ffffff', primary: '#42b883', text: '#35495e' },
    dark: { surface: '#1f2937', primary: '#2c3e50', text: '#ffffff' },
    sunrise: { surface: '#fef3c7', primary: '#f97316', text: '#92400e' },
    midnight: { surface: '#0c1426', primary: '#3730a3', text: '#e2e8f0' },
    forest: { surface: '#f0fdf4', primary: '#22c55e', text: '#14532d' },
    outdoor: { surface: '#e6f7ff', primary: '#00ffff', text: '#000000' },
  }

  return themeColorMap[themeName]
}

// Get all theme names (utility) - returns readonly array
export function getThemeNames(): readonly string[] {
  return themes.map((t): string => t.name)
}

// Check if theme exists with type guard
export function isValidTheme(themeName: string): themeName is ThemeName {
  return themes.some((t): boolean => t.name === themeName)
}

// Get current theme index
export function getCurrentThemeIndex(): number {
  return currentIndex.value
}

// Get current theme name with type safety
export function getCurrentThemeName(): ThemeName {
  return currentTheme.value.name as ThemeName
}

// Set theme by index with bounds checking
export function setThemeByIndex(index: number): boolean {
  if (index >= 0 && index < themes.length) {
    currentIndex.value = index
    applyTheme()
    return true
  }
  return false
}

// Get theme by name (type-safe lookup)
export function getThemeByName(themeName: string): Theme | null {
  const theme = themes.find((t): boolean => t.name === themeName)
  return theme ?? null
}

// Export types for external use
export type { ThemeColors, ThemeName }
