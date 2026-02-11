<template>

   <RouterView />


    <Footer class="relative bg-gray-800 z-5" />
   
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from '@/components/Footer.vue';

</script>

<style scoped>

</style>
