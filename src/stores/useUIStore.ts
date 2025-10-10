import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  LoadingState,
  ModalState,
  NotificationState,
  FormState,
  ScrollState,
  AnimationState,
  BreadcrumbItem,
} from '@/types/interfaces'

export const useUIStore = defineStore('ui', () => {
  // Loading States
  const loading = ref<LoadingState>({
    global: false,
    form: false,
    navigation: false,
    content: false,
    products: false,
    contact: false,
  })

  // Modal States
  const modals = ref<ModalState>({
    contact: false,
    consultation: false,
    demo: false,
    newsletter: false,
    productPreview: false,
    videoPlayer: false,
    imageGallery: false,
  })

  // Navigation State
  const navigation = ref({
    isMenuOpen: false,
    activeSection: 'home',
    showScrollTop: false,
    breadcrumbs: [] as BreadcrumbItem[],
  })

  // Notification System
  const notification = ref<NotificationState>({
    show: false,
    type: 'info',
    title: '',
    message: '',
    duration: 5000,
  })

  // Form States
  const forms = ref({
    contact: {
      isSubmitting: false,
      errors: {} as Record<string, string>,
      isValid: false,
      data: {},
    } as FormState,
    newsletter: {
      isSubmitting: false,
      errors: {} as Record<string, string>,
      isValid: false,
      data: {},
    } as FormState,
    consultation: {
      isSubmitting: false,
      errors: {} as Record<string, string>,
      isValid: false,
      data: {},
    } as FormState,
  })

  // Scroll Tracking
  const scroll = ref<ScrollState>({
    y: 0,
    direction: 'down',
    isScrolled: false,
  })

  // Animation States
  const animations = ref<AnimationState>({
    heroLoaded: false,
    sectionsVisible: [],
    enableAnimations: true,
  })

  // Search State
  const search = ref({
    query: '',
    isOpen: false,
    results: [],
    isSearching: false,
  })

  // Theme State
  const theme = ref({
    isDark: false,
    currentTheme: 'light',
    isTransitioning: false,
  })

  // Page State
  const page = ref({
    title: '',
    isLoading: false,
    hasError: false,
    errorMessage: '',
  })

  // Computed Properties
  const isAnyModalOpen = computed(() => {
    return Object.values(modals.value).some(Boolean)
  })

  const isLoading = computed(() => {
    return Object.values(loading.value).some(Boolean)
  })

  const hasFormErrors = computed(() => {
    return Object.values(forms.value).some((form) => Object.keys(form.errors).length > 0)
  })

  const isFormSubmitting = computed(() => {
    return Object.values(forms.value).some((form) => form.isSubmitting)
  })

  // Loading Methods
  const setLoading = (key: keyof LoadingState, value: boolean) => {
    loading.value[key] = value
  }

  const setGlobalLoading = (value: boolean) => {
    loading.value.global = value
  }

  // Modal Methods
  const openModal = (modal: keyof ModalState) => {
    modals.value[modal] = true
    document.body.style.overflow = 'hidden'
  }

  const closeModal = (modal: keyof ModalState) => {
    modals.value[modal] = false
    if (!isAnyModalOpen.value) {
      document.body.style.overflow = ''
    }
  }

  const closeAllModals = () => {
    Object.keys(modals.value).forEach((key) => {
      modals.value[key as keyof ModalState] = false
    })
    document.body.style.overflow = ''
  }

  // Navigation Methods
  const toggleMenu = () => {
    navigation.value.isMenuOpen = !navigation.value.isMenuOpen
    if (navigation.value.isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    navigation.value.isMenuOpen = false
    document.body.style.overflow = ''
  }

  const setActiveSection = (section: string) => {
    navigation.value.activeSection = section
  }

  const setBreadcrumbs = (breadcrumbs: BreadcrumbItem[]) => {
    navigation.value.breadcrumbs = breadcrumbs
  }

  const addBreadcrumb = (breadcrumb: BreadcrumbItem) => {
    navigation.value.breadcrumbs.push(breadcrumb)
  }

  // Notification Methods
  const showNotification = (options: Partial<NotificationState>) => {
    notification.value = {
      ...notification.value,
      ...options,
      show: true,
    }

    if (options.duration !== 0) {
      setTimeout(() => {
        notification.value.show = false
      }, options.duration || 5000)
    }
  }

  const hideNotification = () => {
    notification.value.show = false
  }

  const showSuccess = (message: string, title = 'Success') => {
    showNotification({
      type: 'success',
      title,
      message,
      duration: 4000,
    })
  }

  const showError = (message: string, title = 'Error') => {
    showNotification({
      type: 'error',
      title,
      message,
      duration: 6000,
    })
  }

  const showWarning = (message: string, title = 'Warning') => {
    showNotification({
      type: 'warning',
      title,
      message,
      duration: 5000,
    })
  }

  const showInfo = (message: string, title = 'Info') => {
    showNotification({
      type: 'info',
      title,
      message,
      duration: 4000,
    })
  }

  // Scroll Methods
  const updateScroll = (y: number) => {
    const previousY = scroll.value.y
    scroll.value.y = y
    scroll.value.direction = y > previousY ? 'down' : 'up'
    scroll.value.isScrolled = y > 100
    navigation.value.showScrollTop = y > 500
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Form Methods
  const setFormState = (form: keyof typeof forms.value, state: Partial<FormState>) => {
    forms.value[form] = { ...forms.value[form], ...state }
  }

  const setFormData = (form: keyof typeof forms.value, data: Record<string, unknown>) => {
    forms.value[form].data = { ...forms.value[form].data, ...data }
  }

  const setFormErrors = (form: keyof typeof forms.value, errors: Record<string, string>) => {
    forms.value[form].errors = errors
    forms.value[form].isValid = Object.keys(errors).length === 0
  }

  const clearFormErrors = (form: keyof typeof forms.value) => {
    forms.value[form].errors = {}
    forms.value[form].isValid = true
  }

  const resetForm = (form: keyof typeof forms.value) => {
    forms.value[form] = {
      isSubmitting: false,
      errors: {},
      isValid: false,
      data: {},
    }
  }

  // Animation Methods
  const addVisibleSection = (section: string) => {
    if (!animations.value.sectionsVisible.includes(section)) {
      animations.value.sectionsVisible.push(section)
    }
  }

  const removeVisibleSection = (section: string) => {
    const index = animations.value.sectionsVisible.indexOf(section)
    if (index > -1) {
      animations.value.sectionsVisible.splice(index, 1)
    }
  }

  const setAnimationsEnabled = (enabled: boolean) => {
    animations.value.enableAnimations = enabled
  }

  const setHeroLoaded = (loaded: boolean) => {
    animations.value.heroLoaded = loaded
  }

  // Search Methods
  const setSearchQuery = (query: string) => {
    search.value.query = query
  }

  const toggleSearch = () => {
    search.value.isOpen = !search.value.isOpen
    if (search.value.isOpen) {
      // Focus search input
      setTimeout(() => {
        const searchInput = document.getElementById('search-input')
        if (searchInput) {
          searchInput.focus()
        }
      }, 100)
    }
  }

  const closeSearch = () => {
    search.value.isOpen = false
    search.value.query = ''
    search.value.results = []
  }

  // Theme Methods
  const setTheme = (themeName: string) => {
    theme.value.currentTheme = themeName
    theme.value.isDark = themeName.includes('dark') || themeName === 'midnight'
  }

  const toggleTheme = () => {
    theme.value.isDark = !theme.value.isDark
    theme.value.currentTheme = theme.value.isDark ? 'dark' : 'light'
  }

  const setThemeTransition = (transitioning: boolean) => {
    theme.value.isTransitioning = transitioning
  }

  // Page Methods
  const setPageTitle = (title: string) => {
    page.value.title = title
    document.title = `${title} - MyxoFlow`
  }

  const setPageLoading = (loading: boolean) => {
    page.value.isLoading = loading
  }

  const setPageError = (error: string) => {
    page.value.hasError = !!error
    page.value.errorMessage = error
  }

  const clearPageError = () => {
    page.value.hasError = false
    page.value.errorMessage = ''
  }

  // Initialize app
  const initializeApp = async () => {
    setLoading('global', true)

    try {
      // Simulate initialization tasks
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Set hero as loaded
      setHeroLoaded(true)

      // Clear any initialization errors
      clearPageError()
    } catch {
      setPageError('Failed to initialize application')
    } finally {
      setLoading('global', false)
    }
  }

  // Cleanup on page leave
  const cleanup = () => {
    closeAllModals()
    closeMenu()
    closeSearch()
    hideNotification()
    // Reset forms if needed
  }

  return {
    // State
    loading,
    modals,
    navigation,
    notification,
    forms,
    scroll,
    animations,
    search,
    theme,
    page,

    // Computed
    isAnyModalOpen,
    isLoading,
    hasFormErrors,
    isFormSubmitting,

    // Loading Methods
    setLoading,
    setGlobalLoading,

    // Modal Methods
    openModal,
    closeModal,
    closeAllModals,

    // Navigation Methods
    toggleMenu,
    closeMenu,
    setActiveSection,
    setBreadcrumbs,
    addBreadcrumb,

    // Notification Methods
    showNotification,
    hideNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,

    // Scroll Methods
    updateScroll,
    scrollToTop,
    scrollToElement,

    // Form Methods
    setFormState,
    setFormData,
    setFormErrors,
    clearFormErrors,
    resetForm,

    // Animation Methods
    addVisibleSection,
    removeVisibleSection,
    setAnimationsEnabled,
    setHeroLoaded,

    // Search Methods
    setSearchQuery,
    toggleSearch,
    closeSearch,

    // Theme Methods
    setTheme,
    toggleTheme,
    setThemeTransition,

    // Page Methods
    setPageTitle,
    setPageLoading,
    setPageError,
    clearPageError,

    // App Methods
    initializeApp,
    cleanup,
  }
})
