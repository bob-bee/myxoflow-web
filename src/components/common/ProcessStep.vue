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
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.step-number {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.125rem;
}

.step-content h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.step-content p {
  color: #6b7280;
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
