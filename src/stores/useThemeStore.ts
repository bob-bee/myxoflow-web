import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

/**
 * Valid theme names
 */
export type ThemeName = 'light' | 'dark' | 'sunrise' | 'midnight' | 'forest' | 'outdoor'

/**
 * Theme interface
 */
export interface Theme {
  name: ThemeName
  label: string
  icon: string
  description: string
}

/**
 * Theme list with enhanced metadata
 */
export const themes: readonly Theme[] = [
  {
    name: 'light',
    label: 'Light',
    icon: '/assets/sunLogo/light.svg',
    description: 'Clean and bright interface',
  },
  {
    name: 'dark',
    label: 'Dark',
    icon: '/assets/sunLogo/dark.svg',
    description: 'Easy on the eyes, perfect for night work',
  },
  {
    name: 'sunrise',
    label: 'Sunrise',
    icon: '/assets/sunLogo/sunrise.svg',
    description: 'Warm orange and yellow tones',
  },
  {
    name: 'midnight',
    label: 'Midnight',
    icon: '/assets/sunLogo/midnight.svg',
    description: 'Deep blue midnight vibes',
  },
  {
    name: 'forest',
    label: 'Forest',
    icon: '/assets/sunLogo/forest.svg',
    description: 'Nature-inspired green theme',
  },
  {
    name: 'outdoor',
    label: 'Outdoor',
    icon: '/assets/sunLogo/outdoor.svg',
    description: 'Fresh air and adventure theme',
  },
]

export const useThemeStore = defineStore('theme', () => {
  const STORAGE_KEY = 'myxoflow-theme'

  // Internal state
  const themeIndex = ref(0)
  const isTransitioning = ref(false)

  // Computed properties
  const currentTheme = computed(() => {
    const safeIndex = Math.min(Math.max(themeIndex.value, 0), themes.length - 1)
    return themes[safeIndex]!
  })

  const isDarkTheme = computed(() => ['dark', 'midnight'].includes(currentTheme.value.name))

  const themeByName = computed(() => {
    const map = new Map<ThemeName, Theme>()
    themes.forEach((theme) => map.set(theme.name, theme))
    return map
  })

  /**
   * Apply the CSS class for the current theme
   */
  const applyTheme = (): void => {
    const classes = themes.map((t) => `theme-${t.name}`)
    document.documentElement.classList.remove(...classes)
    document.documentElement.classList.add(`theme-${currentTheme.value.name}`)

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      const themeColors = {
        light: '#ffffff',
        dark: '#1a1a1a',
        sunrise: '#ff6b35',
        midnight: '#2c3e50',
        forest: '#27ae60',
        outdoor: '#3498db',
      }
      metaThemeColor.setAttribute('content', themeColors[currentTheme.value.name])
    }
  }

  // Watch for changes, but DO NOT run immediately, to ensure initialization order
  watch(
    currentTheme,
    (theme) => {
      localStorage.setItem(STORAGE_KEY, theme.name)
      applyTheme()
    },
    // No { immediate: true }
  )

  /**
   * Initialize theme from storage or system preference
   */
  const initTheme = (): void => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    const savedIndex = saved ? themes.findIndex((t) => t.name === saved) : -1
    if (savedIndex >= 0) {
      themeIndex.value = savedIndex
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      themeIndex.value = themes.findIndex((t) => t.name === (prefersDark ? 'dark' : 'light'))
    }
    applyTheme()
  }

  /**
   * Set theme by name with validation
   * @param name - Theme name to set
   * @returns Success status
   */
  const setTheme = (name: ThemeName): boolean => {
    const themeObj = themeByName.value.get(name)
    if (!themeObj) return false

    const index = themes.findIndex((t) => t.name === name)
    if (index >= 0) {
      isTransitioning.value = true
      themeIndex.value = index

      setTimeout(() => {
        isTransitioning.value = false
      }, 300)

      return true
    }
    return false
  }

  /**
   * Cycle to the next theme
   */
  const cycleTheme = (): void => {
    isTransitioning.value = true
    themeIndex.value = (themeIndex.value + 1) % themes.length

    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
  }

  /**
   * Toggle between light and dark themes
   */
  const toggleLightDark = (): void => {
    const targetTheme = isDarkTheme.value ? 'light' : 'dark'
    setTheme(targetTheme)
  }

  /**
   * Get theme by name
   * @param name - Theme name
   * @returns Theme object or null
   */
  const getTheme = (name: ThemeName): Theme | null => {
    return themeByName.value.get(name) ?? null
  }

  /**
   * Check if theme exists
   * @param name - Theme name to check
   * @returns True if theme exists
   */
  const hasTheme = (name: string): boolean => {
    return themes.some((t) => t.name === name)
  }

  /**
   * Get all available theme names
   * @returns Array of theme names
   */
  const getThemeNames = (): ThemeName[] => {
    return themes.map((t) => t.name)
  }

  /**
   * Reset theme to system preference
   */
  const resetToSystemTheme = (): void => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }

  /**
   * Listen for system theme changes
   */
  const setupSystemThemeListener = (): void => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem(STORAGE_KEY)
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    })
  }

  // Store API
  return {
    currentTheme,
    isTransitioning,
    isDarkTheme,
    themeByName,
    initTheme,
    applyTheme,
    setTheme,
    cycleTheme,
    toggleLightDark,
    getTheme,
    hasTheme,
    getThemeNames,
    resetToSystemTheme,
    setupSystemThemeListener,
  }
})
