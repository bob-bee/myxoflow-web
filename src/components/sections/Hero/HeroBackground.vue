<template>
  <div class="hero-background">
    <div class="hero-gradient"></div>
    <div class="hero-shapes">
      <div
        v-for="index in 3"
        :key="'shape-' + index"
        class="shape"
        :class="'shape-' + index"
        :style="{ animationDelay: `${(index - 1) * 2}s` }"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
