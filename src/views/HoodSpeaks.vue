<template>
      <NavBar class="">
        <div class="absolute inset-0 flex flex-col justify-center items-center gap-3 pt-24 bg-black w-[100%]">
            <div class="relative flex flex-col justify-center items-center w-full max-w-screen-lg pt-8">
                <img src="/images/logo1.jpeg" alt="Logo" class="w-full h-auto max-h-[500px] object-contain">
                <!-- <h2 class="absolute text-4xl font-extrabold text-white">THE BISHOP</h2> -->
            </div>
        </div>
    </NavBar>

    <div class="p-4">
        <h2 class="text-2xl font-bold text-center mb-4">Hood-Speaks Gallery</h2>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden">
            <img :src="image" :alt="'Image ' + (index + 1)" 
            class="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
        </div>
    </div>
   
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';

const images = ref([
  '/images/hood-speaks/hoodspeak4.jpeg',
  '/images/hood-speaks/hoodspeak2.jpeg',
  '/images/hood-speaks/hoodspeak1.jpeg',
  '/images/hood-speaks/hoodspeak3.jpeg',
  '/images/hood-speaks/hoodspeak6.jpeg',
  '/images/hood-speaks/hoodspeak5.jpeg',
  '/images/hood-speaks/hoodspeak7.jpeg',
  '/images/hood-speaks/hoodspeak8.jpeg',
]);


</script>

<style lang="scss" scoped>


</style>