
<template>
  <NavBar style="height: 9.5rem">
 
  </NavBar>

  <div class="relative flex flex-col text-white justify-center align-center" style="height: 80rem; ">
      
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


  <div class="w-[100%] flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-8 h-auto px-8 lg:px-52 xl:px-74 py-7">
    <div class="md:w-[70%]  ">
      <img src="/images/men/img1112.jpg" alt="" srcset="" height="">
    </div>

    <p class="md:w-[70%] leading-loose ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis laudantium. Odio saepe placeat repellendus ratione amet temporibus error voluptatum alias dolores nulla. Similique exercitationem alias a asperiores porro laborum optio fuga quod debitis perferendis eaque, voluptate mollitia adipisci dolores explicabo pariatur consequatur, natus dolore temporibus voluptates. Reiciendis, quo earum?
    <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis laudantium. Odio saepe placeat repellendus ratione amet temporibus error voluptatum alias dolores nulla. Similique exercitationem alias a asperiores porro laborum optio fuga quod debitis perferendis eaque, voluptate mollitia adipisci dolores explicabo pariatur consequatur, natus dolore temporibus voluptates. Reiciendis, quo earum?

    </p>
  </div>




  <div class="w-[100%] flex flex-col  gap-10 items-center h-auto px-8 md:px-48 lg:px-80 py-20 bg-gray-200">
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
  '/images/women/img114.jpg',
  '/images/women/img116.jpg',
  '/images/hood-speaks/hoodspeak9.jpeg',
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
