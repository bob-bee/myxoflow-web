import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  LoadingState,
  ModalState,
  NavigationState,
  NotificationState,
  FormState,
  ScrollState,
  AnimationState,
  SearchState,
  PageState,
  BreadcrumbItem,
} from '@/types/ui'
import { isValidNotificationType } from '@/types/ui'

/**
 * UI Store
 *
 * Manages global UI state including modals, navigation,
 * loading states, notifications, and form management.
 */
export const useUIStore = defineStore('ui', () => {
  // ✅ Reactive state
  const loading = ref<LoadingState>({
    global: false,
    form: false,
    navigation: false,
    content: false,
    products: false,
    contact: false,
  })

  const modals = ref<ModalState>({
    contact: false,
    consultation: false,
    demo: false,
    newsletter: false,
    productPreview: false,
    videoPlayer: false,
    imageGallery: false,
  })

  const navigation = ref<NavigationState>({
    isMenuOpen: false,
    activeSection: 'home',
    showScrollTop: false,
    breadcrumbs: [],
  })

  const notification = ref<NotificationState>({
    show: false,
    type: 'info',
    title: '',
    message: '',
    duration: 5000,
  })

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

  const scroll = ref<ScrollState>({
    y: 0,
    direction: 'down',
    isScrolled: false,
  })

  const animations = ref<AnimationState>({
    heroLoaded: false,
    sectionsVisible: [],
    enableAnimations: true,
  })

  const search = ref<SearchState>({
    query: '',
    isOpen: false,
    results: [],
    isSearching: false,
  })

  const page = ref<PageState>({
    title: '',
    isLoading: false,
    hasError: false,
    errorMessage: '',
  })

  // ✅ Enhanced computed properties
  const isAnyModalOpen = computed(() => Object.values(modals.value).some(Boolean))

  const isLoading = computed(() => Object.values(loading.value).some(Boolean))

  const hasFormErrors = computed(() =>
    Object.values(forms.value).some((form) => Object.keys(form.errors).length > 0),
  )

  const isFormSubmitting = computed(() =>
    Object.values(forms.value).some((form) => form.isSubmitting),
  )

  const currentBreadcrumb = computed(
    () => navigation.value.breadcrumbs[navigation.value.breadcrumbs.length - 1],
  )

  const scrollProgress = computed(() => {
    const winHeight = window.innerHeight
    const docHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    return Math.min((scrollTop / (docHeight - winHeight)) * 100, 100)
  })

  // ✅ Loading methods with JSDoc

  /**
   * Set loading state for a specific key
   * @param key - Loading state key
   * @param value - Loading status
   */
  const setLoading = (key: keyof LoadingState, value: boolean) => {
    loading.value[key] = value
  }

  /**
   * Set global loading state
   * @param value - Loading status
   */
  const setGlobalLoading = (value: boolean) => {
    loading.value.global = value
  }

  // ✅ Modal methods with body scroll management

  /**
   * Open a specific modal
   * @param modal - Modal key to open
   */
  const openModal = (modal: keyof ModalState) => {
    modals.value[modal] = true
    document.body.style.overflow = 'hidden'
  }

  /**
   * Close a specific modal
   * @param modal - Modal key to close
   */
  const closeModal = (modal: keyof ModalState) => {
    modals.value[modal] = false
    if (!isAnyModalOpen.value) {
      document.body.style.overflow = ''
    }
  }

  /**
   * Close all open modals
   */
  const closeAllModals = () => {
    Object.keys(modals.value).forEach((key) => {
      modals.value[key as keyof ModalState] = false
    })
    document.body.style.overflow = ''
  }

  // ✅ Navigation methods

  /**
   * Toggle mobile menu
   */
  const toggleMenu = () => {
    navigation.value.isMenuOpen = !navigation.value.isMenuOpen
    document.body.style.overflow = navigation.value.isMenuOpen ? 'hidden' : ''
  }

  /**
   * Close mobile menu
   */
  const closeMenu = () => {
    navigation.value.isMenuOpen = false
    document.body.style.overflow = ''
  }

  /**
   * Set active navigation section
   * @param section - Section identifier
   */
  const setActiveSection = (section: string) => {
    navigation.value.activeSection = section
  }

  /**
   * Set breadcrumb trail
   * @param breadcrumbs - Array of breadcrumb items
   */
  const setBreadcrumbs = (breadcrumbs: BreadcrumbItem[]) => {
    navigation.value.breadcrumbs = breadcrumbs
  }

  /**
   * Add breadcrumb to trail
   * @param breadcrumb - Breadcrumb item to add
   */
  const addBreadcrumb = (breadcrumb: BreadcrumbItem) => {
    navigation.value.breadcrumbs.push(breadcrumb)
  }

  // ✅ Enhanced notification methods

  /**
   * Show notification with options
   * @param options - Notification configuration
   */
  const showNotification = (options: Partial<NotificationState>) => {
    // Validate notification type
    if (options.type && !isValidNotificationType(options.type)) {
      console.warn(`Invalid notification type: ${options.type}`)
      options.type = 'info'
    }

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

  /**
   * Hide current notification
   */
  const hideNotification = () => {
    notification.value.show = false
  }

  /**
   * Show success notification
   * @param message - Success message
   * @param title - Optional title
   */
  const showSuccess = (message: string, title = 'Success') => {
    showNotification({
      type: 'success',
      title,
      message,
      duration: 4000,
    })
  }

  /**
   * Show error notification
   * @param message - Error message
   * @param title - Optional title
   */
  const showError = (message: string, title = 'Error') => {
    showNotification({
      type: 'error',
      title,
      message,
      duration: 6000,
    })
  }

  /**
   * Show warning notification
   * @param message - Warning message
   * @param title - Optional title
   */
  const showWarning = (message: string, title = 'Warning') => {
    showNotification({
      type: 'warning',
      title,
      message,
      duration: 5000,
    })
  }

  /**
   * Show info notification
   * @param message - Info message
   * @param title - Optional title
   */
  const showInfo = (message: string, title = 'Info') => {
    showNotification({
      type: 'info',
      title,
      message,
      duration: 4000,
    })
  }

  // ✅ Enhanced scroll methods

  /**
   * Update scroll state
   * @param y - Scroll position
   */
  const updateScroll = (y: number) => {
    const previousY = scroll.value.y
    scroll.value.y = y
    scroll.value.direction = y > previousY ? 'down' : 'up'
    scroll.value.isScrolled = y > 100
    navigation.value.showScrollTop = y > 500
  }

  /**
   * Scroll to top of page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /**
   * Scroll to element by ID
   * @param elementId - Element ID to scroll to
   */
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // ✅ Form management methods (existing methods kept as-is for brevity)
  const setFormState = (form: keyof typeof forms.value, state: Partial<FormState>) => {
    forms.value[form] = { ...forms.value[form], ...state }
  }

  const setFormData = (form: keyof typeof forms.value, data: Record<string, object>) => {
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

  // ✅ Animation methods (existing methods kept as-is)
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

  // ✅ Search methods (existing methods kept)
  const setSearchQuery = (query: string) => {
    search.value.query = query
  }

  const toggleSearch = () => {
    search.value.isOpen = !search.value.isOpen
    if (search.value.isOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById('search-input')
        searchInput?.focus()
      }, 100)
    }
  }

  const closeSearch = () => {
    search.value.isOpen = false
    search.value.query = ''
    search.value.results = []
  }

  // ✅ Page methods (existing methods kept)
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

  // ✅ Enhanced app initialization
  const initializeApp = async () => {
    setLoading('global', true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setHeroLoaded(true)
      clearPageError()
    } catch (error) {
      setPageError('Failed to initialize application')
      console.error('App initialization error:', error)
    } finally {
      setLoading('global', false)
    }
  }

  /**
   * Cleanup method for page transitions
   */
  const cleanup = () => {
    closeAllModals()
    closeMenu()
    closeSearch()
    hideNotification()
  }

  return {
    // ✅ Reactive state (readonly)
    loading: loading,
    modals: modals,
    navigation: navigation,
    notification: notification,
    forms: forms,
    scroll: scroll,
    animations: animations,
    search: search,
    page: page,

    // ✅ Computed properties
    isAnyModalOpen,
    isLoading,
    hasFormErrors,
    isFormSubmitting,
    currentBreadcrumb,
    scrollProgress,

    // ✅ Methods (organized by category)
    // Loading
    setLoading,
    setGlobalLoading,

    // Modals
    openModal,
    closeModal,
    closeAllModals,

    // Navigation
    toggleMenu,
    closeMenu,
    setActiveSection,
    setBreadcrumbs,
    addBreadcrumb,

    // Notifications
    showNotification,
    hideNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,

    // Scroll
    updateScroll,
    scrollToTop,
    scrollToElement,

    // Forms
    setFormState,
    setFormData,
    setFormErrors,
    clearFormErrors,
    resetForm,

    // Animations
    addVisibleSection,
    removeVisibleSection,
    setAnimationsEnabled,
    setHeroLoaded,

    // Search
    setSearchQuery,
    toggleSearch,
    closeSearch,

    // Page
    setPageTitle,
    setPageLoading,
    setPageError,
    clearPageError,

    // App lifecycle
    initializeApp,
    cleanup,
  }
})

/**
 * Export types for component use
 */
export type {
  LoadingState,
  ModalState,
  NavigationState,
  NotificationState,
  FormState,
  ScrollState,
  AnimationState,
  SearchState,
  PageState,
  BreadcrumbItem,
} from '@/types/ui'
