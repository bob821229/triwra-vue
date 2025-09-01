<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import { useRecaptchaProvider } from 'vue-recaptcha'
// useRecaptchaProvider()

</script>

<template>
  <div style="z-index: 1000;position: relative;">
    <Header />
  </div>

  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
@media (max-width: 768px) {
  main {
    padding: 0 15px;
  }
}
</style>
