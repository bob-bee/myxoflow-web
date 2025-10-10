import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface LoadingState {
  global: boolean
  form: boolean
  navigation: boolean
  content: boolean
}

interface ModalState {
  contact: boolean
  consultation: boolean
  demo: boolean
  newsletter: boolean
}

interface NotificationState {
  show: boolean
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration: number
}

export const useUIStore = defineStore('ui', () => {
  // Loading states
  const loading = ref<LoadingState>({
    global: true,
    form: false,
    navigation: false,
    content: false,
  })

  // Modal states
  const modals = ref<ModalState>({
    contact: false,
    consultation: false,
    demo: false,
    newsletter: false,
  })

  // Navigation state
  const navigation = ref({
    isMenuOpen: false,
    activeSection: 'home',
    showScrollTop: false,
  })

  // Notification system
  const notification = ref<NotificationState>({
    show: false,
    type: 'info',
    title: '',
    message: '',
    duration: 5000,
  })

  // Form states
  const forms = ref({
    contact: {
      isSubmitting: false,
      errors: {} as Record<string, string>,
      isValid: false,
    },
    newsletter: {
      isSubmitting: false,
      errors: {} as Record<string, string>,
      isValid: false,
    },
  })

  // Scroll tracking
  const scroll = ref({
    y: 0,
    direction: 'down',
    isScrolled: false,
  })

  // Animation states
  const animations = ref({
    heroLoaded: false,
    sectionsVisible: [] as string[],
    enableAnimations: true,
  })

  // Computed
  const isAnyModalOpen = computed(() => {
    return Object.values(modals.value).some(Boolean)
  })

  const isLoading = computed(() => {
    return Object.values(loading.value).some(Boolean)
  })

  // Methods
  const setLoading = (key: keyof LoadingState, value: boolean) => {
    loading.value[key] = value
  }

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

  const toggleMenu = () => {
    navigation.value.isMenuOpen = !navigation.value.isMenuOpen
  }

  const closeMenu = () => {
    navigation.value.isMenuOpen = false
  }

  const setActiveSection = (section: string) => {
    navigation.value.activeSection = section
  }

  const showNotification = (options: Partial<NotificationState>) => {
    notification.value = {
      ...notification.value,
      ...options,
      show: true,
    }

    setTimeout(() => {
      notification.value.show = false
    }, options.duration || 5000)
  }

  const hideNotification = () => {
    notification.value.show = false
  }

  const updateScroll = (y: number) => {
    const previousY = scroll.value.y
    scroll.value.y = y
    scroll.value.direction = y > previousY ? 'down' : 'up'
    scroll.value.isScrolled = y > 100
    navigation.value.showScrollTop = y > 500
  }

  const setFormState = (
    form: keyof typeof forms.value,
    state: Partial<typeof forms.value.contact>,
  ) => {
    forms.value[form] = { ...forms.value[form], ...state }
  }

  const addVisibleSection = (section: string) => {
    if (!animations.value.sectionsVisible.includes(section)) {
      animations.value.sectionsVisible.push(section)
    }
  }

  const setAnimationsEnabled = (enabled: boolean) => {
    animations.value.enableAnimations = enabled
  }

  // Initialize app
  const initializeApp = async () => {
    setLoading('global', true)

    // Simulate initialization
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading('global', false)
    animations.value.heroLoaded = true
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

    // Computed
    isAnyModalOpen,
    isLoading,

    // Methods
    setLoading,
    openModal,
    closeModal,
    closeAllModals,
    toggleMenu,
    closeMenu,
    setActiveSection,
    showNotification,
    hideNotification,
    updateScroll,
    setFormState,
    addVisibleSection,
    setAnimationsEnabled,
    initializeApp,
  }
})
