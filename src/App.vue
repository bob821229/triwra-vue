<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import { useRecaptchaProvider } from 'vue-recaptcha'
// useRecaptchaProvider()

</script>

<template>
  <Header />

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
