<!-- src/views/Contact.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useContentStore } from '@/stores/useContentStore'

const content = useContentStore()

// Form handling
const formData = ref({
  name: '',
  email: '',
  company: '',
  industry: '',
  message: '',
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // TODO: Replace with actual form submission logic
  try {
    console.log('Form submitted:', formData.value)
    // await submitContactForm(formData.value)
    alert("Thank you! We'll be in touch soon.")

    // Reset form
    formData.value = {
      name: '',
      email: '',
      company: '',
      industry: '',
      message: '',
    }
  } catch (error) {
    alert('Something went wrong. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact">
    <section class="hero">
      <div class="container">
        <h1>{{ content.contact.title }}</h1>
        <p>{{ content.contact.subtitle }}</p>
      </div>
    </section>

    <section class="contact-methods section">
      <div class="container">
        <div class="methods-grid">
          <div v-for="method in content.contact.methods" :key="method.type" class="method-card">
            <h3>{{ method.title }}</h3>
            <p>{{ method.description }}</p>
            <a v-if="method.email" :href="`mailto:${method.email}`" class="btn btn-primary">
              {{ method.cta }}
            </a>
            <router-link
              v-else-if="method.type === 'consultation'"
              to="#contact-form"
              class="btn btn-primary"
            >
              {{ method.cta }}
            </router-link>
            <button v-else class="btn btn-primary" @click="$router.push('#contact-form')">
              {{ method.cta }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="contact-form" class="contact-form section">
      <div class="container">
        <div class="form-wrapper">
          <h2>Send Us a Message</h2>

          <form @submit.prevent="handleSubmit" class="form">
            <div class="form-grid">
              <div class="form-group">
                <label>{{ content.contact.form.fields[0].label }} *</label>
                <input v-model="formData.name" type="text" required class="form-input" />
              </div>

              <div class="form-group">
                <label>{{ content.contact.form.fields[1].label }} *</label>
                <input v-model="formData.email" type="email" required class="form-input" />
              </div>

              <div class="form-group">
                <label>{{ content.contact.form.fields[2].label }}</label>
                <input v-model="formData.company" type="text" class="form-input" />
              </div>

              <div class="form-group">
                <label>{{ content.contact.form.fields[3].label }}</label>
                <select v-model="formData.industry" class="form-select">
                  <option value="">Select an industry</option>
                  <option
                    v-for="option in content.contact.form.fields[3].options"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group full-width">
              <label>{{ content.contact.form.fields[4].label }} *</label>
              <textarea
                v-model="formData.message"
                required
                rows="6"
                class="form-textarea"
              ></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="btn btn-primary submit-btn">
              {{ isSubmitting ? 'Sending...' : content.contact.form.submitText }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  text-align: center;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.section {
  padding: 4rem 0;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.method-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.method-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
}

.method-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-form {
  background: #f8fafc;
}

.form-wrapper {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-wrapper h2 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.btn:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-wrapper {
    padding: 2rem;
  }

  .methods-grid {
    grid-template-columns: 1fr;
  }
}
</style>
