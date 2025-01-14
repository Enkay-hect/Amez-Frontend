<template>
   <div class="flex flex-row w-full h-20 justify-center items-center bg-black" >
      <svg fill="#dec043" height="1rem" width="1.5rem" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" stroke="#dec043">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g id="Location-Pin-Filled"> 
               <path d="M12,1c-4.97,0-9,4.03-9,9c0,6.75,9,13,9,13s9-6.25,9-13C21,5.03,16.97,1,12,1z M12,13c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,13,12,13z">

               </path> 
            </g> 
         </g>
      </svg>
      <h3 class="text-white font-semibold text-center">
         EASTERN WEST AFRICA EPISCOPAL DISTRICT
      </h3>
   </div>



   <RouterView />



   <Footer />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<style scoped>

</style>
