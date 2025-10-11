<template>
  <div class="footer-newsletter">
    <h4 class="newsletter-title">Stay Updated</h4>
    <form @submit.prevent="submit">
      <input v-model="email" type="email" placeholder="Your email" required />
      <button type="submit" :disabled="isSubmitting">Subscribe</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUIStore } from '@/stores/useUIStore'
import { isValidEmail } from '@/utils'

const uiStore = useUIStore()
const email = ref('')

const isSubmitting = computed(() => uiStore.forms.newsletter.isSubmitting)

async function submit() {
  if (!isValidEmail(email.value)) return
  uiStore.setFormState('newsletter', { isSubmitting: true, errors: {} })
  try {
    await new Promise((r) => setTimeout(r, 1000))
    uiStore.showSuccess('Subscribed!')
    email.value = ''
  } catch {
    uiStore.showError('Subscription failed.')
  } finally {
    uiStore.setFormState('newsletter', { isSubmitting: false })
  }
}
</script>

<style scoped>
.footer-newsletter {
  padding: 1rem;
  background: var(--surface-color);
}
input {
  padding: 0.5rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
}
button {
  margin-left: 0.5rem;
}
</style>
