<template>

   <RouterView />



   <Footer  />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
</script>

<style scoped>

</style>
