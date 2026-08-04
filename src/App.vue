<template>

    <siteHeader />
   <RouterView />
    <BackToTop />

    <!-- <Footer class="relative bg-gray-800 z-5" /> -->
   
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BackToTop from '@/components/BackToTop.vue'
import siteHeader from '@/components/NewNavbarComponents/SiteHeader.vue'


</script>

<style scoped>

</style>
