<template>
      <NavBar>
        <div class="absolute inset-0 bg-cover bg-center flex flex-col  justify-center align-middle gap-3" style="background-image: url(images/women/img119.jpg); background-color: grey; background-blend-mode: multiply;">
          <h2 class="text-4xl font-extrabold text-center">THE CHURCH </h2>
        </div>
    </NavBar>
    <div class="p-4">
        <h2 class="text-2xl font-bold text-center mb-4">Image Gallery</h2>
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
  '/images/hood-speaks/hoodspeak9.jpeg',


  
]);


</script>

<style lang="scss" scoped>


</style>