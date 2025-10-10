<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">{{ contentStore.pageMeta.contact.title.split(' - ')[0] }}</h1>
          <p class="hero-description">
            {{ contentStore.pageMeta.contact.description }}
          </p>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="contact-content">
        <!-- Contact Methods -->
        <section class="contact-methods">
          <div class="method-grid">
            <div
              v-for="method in contentStore.contactMethods"
              :key="method.title"
              class="method-card"
            >
              <div class="method-icon" :class="`icon-${method.type}`">
                <component :is="getMethodIcon()" />
              </div>

              <div class="method-content">
                <h3 class="method-title">{{ method.title }}</h3>
                <p class="method-description">{{ method.description }}</p>

                <a
                  v-if="method.type === 'email' && method.contact"
                  :href="`mailto:${method.contact}`"
                  class="method-link"
                >
                  {{ method.contact }}
                </a>

                <a
                  v-else-if="method.type === 'phone' && method.contact"
                  :href="`tel:${method.contact}`"
                  class="method-link"
                >
                  {{ method.contact }}
                </a>

                <button
                  v-else-if="method.type === 'consultation' && method.cta"
                  @click="scrollToForm"
                  class="btn btn-outline"
                >
                  {{ method.cta }}
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Form -->
        <section id="contact-form" class="contact-form-section">
          <div class="form-container">
            <div class="form-header">
              <h2 class="form-title">Send Us a Message</h2>
              <p class="form-description">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">Full Name *</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="form-input"
                    :class="{ error: uiStore.forms.contact.errors.name }"
                    placeholder="Enter your full name"
                  />
                  <span v-if="uiStore.forms.contact.errors.name" class="error-text">
                    {{ uiStore.forms.contact.errors.name }}
                  </span>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email *</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="form-input"
                    :class="{ error: uiStore.forms.contact.errors.email }"
                    placeholder="Enter your email"
                  />
                  <span v-if="uiStore.forms.contact.errors.email" class="error-text">
                    {{ uiStore.forms.contact.errors.email }}
                  </span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="company" class="form-label">Company</label>
                  <input
                    id="company"
                    v-model="formData.company"
                    type="text"
                    class="form-input"
                    placeholder="Enter your company name"
                  />
                </div>

                <div class="form-group">
                  <label for="industry" class="form-label">Industry</label>
                  <select id="industry" v-model="formData.industry" class="form-select">
                    <option value="">Select an industry</option>
                    <option value="textiles">Textiles & Fashion</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="dating">Dating & Social</option>
                    <option value="food">Food & Beverage</option>
                    <option value="crafts">Crafts & Handmade</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="form-textarea"
                  :class="{ error: uiStore.forms.contact.errors.message }"
                  placeholder="Tell us about your needs and challenges..."
                ></textarea>
                <span v-if="uiStore.forms.contact.errors.message" class="error-text">
                  {{ uiStore.forms.contact.errors.message }}
                </span>
              </div>

              <button
                type="submit"
                class="btn btn-primary form-submit"
                :disabled="uiStore.forms.contact.isSubmitting"
              >
                <span v-if="!uiStore.forms.contact.isSubmitting">Send Message</span>
                <span v-else>Sending...</span>

                <svg
                  v-if="!uiStore.forms.contact.isSubmitting"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useContentStore } from '@/stores/useContentStore'
import { useUIStore } from '@/stores/useUIStore'

const contentStore = useContentStore()
const uiStore = useUIStore()

// Form data
const formData = reactive({
  name: '',
  email: '',
  company: '',
  industry: '',
  message: '',
})

const getMethodIcon = () => {
  // Return appropriate icon component based on type
  return 'div'
}

const scrollToForm = () => {
  const element = document.getElementById('contact-form')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const validateForm = () => {
  const errors: Record<string, string> = {}

  if (!formData.name.trim()) {
    errors.name = contentStore.errorMessages.form.required
  }

  if (!formData.email.trim()) {
    errors.email = contentStore.errorMessages.form.required
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = contentStore.errorMessages.form.email
  }

  if (!formData.message.trim()) {
    errors.message = contentStore.errorMessages.form.required
  }

  uiStore.setFormState('contact', { errors, isValid: Object.keys(errors).length === 0 })
  return Object.keys(errors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return

  uiStore.setFormState('contact', { isSubmitting: true })

  try {
    // Submit form logic here
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    Object.keys(formData).forEach((key) => {
      formData[key as keyof typeof formData] = ''
    })

    // Show success message
    uiStore.showNotification({
      type: 'success',
      title: 'Message Sent!',
      message: contentStore.errorMessages.form.success,
      duration: 5000,
    })

    uiStore.setFormState('contact', { errors: {}, isValid: false })
  } catch {
    uiStore.showNotification({
      type: 'error',
      title: 'Error',
      message: contentStore.errorMessages.form.error,
      duration: 5000,
    })
  } finally {
    uiStore.setFormState('contact', { isSubmitting: false })
  }
}
</script>

<style scoped>
.contact-page {
  background: var(--surface-color);
  min-height: 100vh;
}

.contact-hero {
  background: linear-gradient(135deg, var(--surface-secondary), var(--surface-tertiary));
  padding: 5rem 0 3rem;
  text-align: center;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-content {
  padding: 4rem 0;
}

.contact-methods {
  margin-bottom: 5rem;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.method-card {
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.method-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 8px 25px rgba(var(--primary-color-rgb), 0.15);
  transform: translateY(-4px);
}

.method-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
}

.icon-email {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

.icon-phone {
  background: linear-gradient(135deg, #10b981, #047857);
  color: white;
}

.icon-consultation {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.method-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
}

.method-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.method-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.method-link:hover {
  color: var(--primary-hover);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-outline {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-outline:hover {
  background: var(--primary-color);
  color: white;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 4px 14px rgba(var(--primary-color-rgb), 0.3);
}

.btn-primary:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--primary-color-rgb), 0.4);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Form Styles */
.contact-form-section {
  background: var(--surface-secondary);
  border-radius: 24px;
  padding: 0;
  overflow: hidden;
}

.form-container {
  padding: 3rem;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
}

.form-description {
  color: var(--text-secondary);
  font-size: 1.125rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  background: var(--surface-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
}

.error-text {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
}

.form-submit {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-hero {
    padding: 3rem 0 2rem;
  }

  .contact-content {
    padding: 2rem 0;
  }

  .contact-methods {
    margin-bottom: 3rem;
  }

  .method-grid {
    grid-template-columns: 1fr;
  }

  .form-container {
    padding: 2rem 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-header {
    margin-bottom: 2rem;
  }

  .form-title {
    font-size: 1.75rem;
  }
}
</style>
