<!-- src/components/common/ProcessStep.vue -->
<script setup lang="ts">
import type { ProcessStep as ProcessStepType } from '@/types/content'

interface Props {
  step: ProcessStepType
}

defineProps<Props>()
</script>

<template>
  <div class="process-step">
    <div class="step-number">{{ step.step }}</div>
    <div class="step-content">
      <h3>{{ step.title }}</h3>
      <p>{{ step.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.process-step {
  display: flex;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.step-number {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: var(--text-inverse);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
}

.step-content h3 {
  font-size: 1.25rem; /* could also use var(--font-size-xl) */
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-2);
  color: var(--text-primary);
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .process-step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
