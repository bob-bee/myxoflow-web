<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <AppHeader :nav="nav" />

    <!-- PAGE CONTAINER -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <AppFooter />
    <!-- 🟡 THEME TOGGLE BUTTON (TubeLight) -->
    <TubeLight class="tubelight-fixed" />
  </q-layout>
</template>

<script setup lang="ts">
import navigationJson from "../data/navigation.json";
import AppHeader from "src/components/AppHeader.vue";
import AppFooter from "src/components/AppFooter.vue";
import TubeLight from "src/components/TubeLight.vue";

// Header nav and footer sections
const nav = navigationJson.navigation;
</script>

<style lang="scss" scoped>
.q-header {
  backdrop-filter: blur(8px);
}
.q-btn {
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}
.q-footer {
  font-size: 0.9rem;
}
.tubelight-fixed {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 2000; /* higher than headers/footers */
}
</style>
