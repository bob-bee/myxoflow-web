<template>
  <div :class="['card', variant ? `card--${variant}` : null]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

type Variant = 'default' | 'highlighted' | 'compact'

defineProps<{
  variant?: Variant
}>()
</script>

<style scoped>
.card {
  background: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--md-elevation-level-1);
  transition:
    box-shadow 0.2s,
    transform 0.1s;
}

.card--highlighted {
  border-color: var(--md-sys-color-primary);
  box-shadow: var(--md-elevation-level-2);
}

.card--compact {
  padding: 1rem;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--md-elevation-level-2);
}
</style>
