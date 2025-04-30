<template>
    <NavBar class="bg-black" style="height: 10.5rem;">
      
        
    </NavBar>

     <div class="relative flex flex-col text-white justify-center align-center ">
        <div class=" inset-0 bg-cover bg-center sm:flex flex-col  justify-center align-middle gap-3" style="background-image: url(images/women/img119.jpg); background-color: grey; background-blend-mode: multiply;">
            <h2 class="text-4xl font-extrabold text-center"> </h2>
        </div>
     </div>
  
    <div class="w-[100%] flex flex-row flex-wrap md:flex-nowrap gap-8 h-auto px-8  py-7">
      <!-- <div class="md:w-[50%]">
        <img src="../../public/images/clergy.jpg" alt="" srcset="">
      </div> -->
  
        <div class="video-container w-[100%%] md:w-[70%]">
            <iframe
                width="100%"
                height="500"
                :src="embedUrl"
                title="YouTube Live Stream"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                >
            </iframe>
        </div>
    </div>





  
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue';

  import { ref, computed } from 'vue';

    // Define the YouTube video ID (Replace 'YOUR_VIDEO_ID' with your actual ID)
    // const props = defineProps({
    //     videoId: {
    //         type: String,
    //         required: true
    //     }
    // });

    const videoId = 'Oc6Fuj1DBWI';

    // Compute the embed URL
    const embedUrl = computed(() => `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`);
  </script>


<style scoped>
    .video-container {
    max-width: 800px;
    margin: auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
</style>
  