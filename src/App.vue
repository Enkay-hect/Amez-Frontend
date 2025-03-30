<template>

   <RouterView />



   <Footer class="mt-5 relative" />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
</script>

<style scoped>

</style>
