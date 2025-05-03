
<template>
  <NavBar style="height: 10.5rem" class="bg-black">
 
  </NavBar>

  <div class="relative flex flex-col text-white justify-center align-center " style="height: 58rem; ">
      
      <div 
        v-for="(image, index) in slideImages"
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
         style="background-color: grey; background-blend-mode: multiply;"
        :style="{ backgroundImage: `url(${image})`, opacity: currentIndex === index ? 1 : 0 }">
      </div>
  
      <h2 class="text-4xl font-extrabold text-center relative z-1">Welcome to</h2>
      <h2 class="text-6xl font-bold text-center mt-3 relative z-1">The AME Zion Church in Nigeria</h2>

  </div>


  <div class="w-[100%] flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-10 h-auto px-4 md:px-8 lg:px-24 xl:px-40 py-7">

    <div class="lg:w-[30%] md:w-[50%] xl:w-[50%] w-full h-auto flex items-center justify-center">
      <img src="/images/bishop/bishopwithmummy.png" alt="" srcset="" width="500">
    </div>

    

    <p class="lg:w-[70%] md:w-[50%] xl:w-[50%] w-full leading-loose text-justify">
      <span class="text-xl md:text-2xl font-bold lg:font-extrabold text-[#dec043] ">Our Beliefs</span>
      <br> <br>
      The African Methodist Episcopal Zion Church professes the historical faith in God, who by Himself – outpouring, was manifest incarnate in Jesus Christ for our salvation. By God’s grace and the power of His Holy Spirit all believers become the new humanity. The incarnation having reached its completion in Jesus, who is the Christ, is continuing in the Church and is overcoming the calamity of the human predicament. We strive in the hope that the Church will grow from sinful existence through purification to oneness with God.
      <br> <br>
      Our Heritage in doctrine and our present theological task demand that we renew our faith and understanding of the love of God, our Father, and the Lordship of His Son, Jesus. We believe that all who have faith in Him will be empowered and invigorated by the Holy Spirit to risk all for the reconciling work and fulfillment of the Kingdom of God.
    </p>

  </div>




  <div class="w-[100%] flex flex-col  gap-10 items-center h-auto px-8 md:px-12 lg:px-24 xl:px-64 py-20 bg-gray-200">
    <h1 class="text-[#dec043] font-bold">Get in touch with us</h1>

    <form action="" class="w-[100%] flex flex-col sm:flex-row flex-wrap sm:flex-nowrap gap-8 bg-white p-4 rounded-md justify-center px-4">

      <div class="w-[100%]">
        <div class="gap-2 flex flex-col mb-4">
          <label for="uname">Your Name</label>
          <input type="text" class="px-2 h-10  rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#dec043] focus:border-[#dec043]" id="uname">
        </div>

        <div class="gap-2 flex flex-col mb-4">
          <label for="uemail">Your Email</label>
          <input type="email" class="px-2 h-10 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#dec043] focus:border-[#dec043]" id="uemail">
        </div>

        <div class="gap-2 flex flex-col mb-4">
          <label for="unumber">Your Phone Number</label>
          <input type="text" class="px-2 h-10 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#dec043] focus:border-[#dec043]" id="unumber">
        </div>
      </div>

      <div class="w-[100%]">
        <div class="gap-4 sm:flex sm:flex-col">
          <label for="umessage">Your Message</label>
          <textarea name="" id="umessage" class="px-2 h-52 w-[100%] rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#dec043] focus:border-[#dec043]"></textarea>
        </div>
      </div>

     

    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';

const slideImages = ref([
  '/images/men/img1111.jpg',
  '/images/church/churchview.jpg',
  '/images/choir/choir1.jpg',
  '/images/women/img118.jpg',
  // '/images/women/img119.jpg'
]);

const currentIndex = ref(0);

const changeBackground = () => {
  currentIndex.value = (currentIndex.value + 1) % slideImages.value.length;
};

onMounted(() => {
  setInterval(changeBackground, 4000); // Change image every 4 seconds
});
</script>

<style scoped>
.absolute {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
