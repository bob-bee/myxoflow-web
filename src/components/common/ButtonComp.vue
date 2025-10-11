<template>
  <button
    :class="['btn', variant ? `btn--${variant}` : null]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'outline' | 'link'

defineProps<{
  variant?: Variant
  disabled?: boolean
}>()

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.1s;
}

/* Variants */
.btn--primary {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
.btn--primary:hover {
  background: var(--md-sys-color-primary-container);
}
.btn--secondary {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-primary);
}
.btn--secondary:hover {
  background: var(--md-sys-color-surface-variant);
}
.btn--outline {
  background: transparent;
  border: 1px solid var(--md-sys-color-primary);
  color: var(--md-sys-color-primary);
}
.btn--outline:hover {
  background: var(--md-sys-color-surface-variant);
}
.btn--link {
  background: none;
  color: var(--md-sys-color-primary);
  padding: 0;
}
.btn--link:hover {
  text-decoration: underline;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
