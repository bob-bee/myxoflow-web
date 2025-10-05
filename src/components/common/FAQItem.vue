<!-- src/components/common/FAQItem.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import type { FAQQuestion } from '@/types/content'

interface Props {
  question: FAQQuestion
}

defineProps<Props>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="faq-item">
    <button class="faq-question" :class="{ active: isOpen }" @click="toggle">
      <span>{{ question.question }}</span>
      <span class="faq-icon">{{ isOpen ? '−' : '+' }}</span>
    </button>
    <div v-if="isOpen" class="faq-answer">
      <p>{{ question.answer }}</p>
    </div>
  </div>
</template>

<style scoped>
.faq-item {
  border-bottom: 1px solid #e5e7eb;
}

.faq-question {
  width: 100%;
  padding: 1.5rem 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  transition: color 0.2s;
}

.faq-question:hover {
  color: #3b82f6;
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3b82f6;
}

.faq-answer {
  padding-bottom: 1.5rem;
  animation: slideDown 0.3s ease-out;
}

.faq-answer p {
  color: #6b7280;
  line-height: 1.7;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}
</style>
