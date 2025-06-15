<template>
    <NavBar style="height: 10.5rem" class="bg-black">
 
  </NavBar>

      <div class="relative inset-0 flex flex-col justify-center items-center gap-3 pt-24 bg-white w-[100%]">
        <div class="relative flex flex-col justify-center items-center w-full max-w-screen-lg pt-8">
            <img src="/images/logo2.jpeg" alt="Logo" class="w-full h-auto max-h-[500px] object-contain">
        </div>
      </div>
      <!-- flex flex-row flex-wrap md:flex-nowrap -->



      
    <!-- <div class="w-[100%]  gap-10 h-auto px-8 sm:px-10 xls:px-64  py-7 flex flex-row flex-wrap md:flex-nowrap"> -->
      <div class="w-[100%]  gap-10 h-auto px-8 sm:px-10 xls:px-64  py-7 flex flex-col lg:flex-row flex-wrap md:flex-nowrap items-center">

      
       <div class="w-[70%] lg:w-[35%] flex flex-row  align-middle items-center">
        <img
             src="/freedomchurchlogo.png"
             alt="Sample Image"
             class="float-left mr-4 mb-2 rounded-lg shadow-lg h-[full] w-full"
         />
       </div>

        <p class="md:w-[65%] text-justify">
      
          <span class="text-5xl font-extrabold text-[#dec043] ">MISSION</span>
          <br> <br>
          To create a vibrant music ministry that inspires spiritual growth, empowers voices, and glorifies God, while embracing the rich cultural heritage and diversity of the African Methodist Episcopal Zion Church."
        </p>


        

       
    </div>
<br><br>


    <div class="w-[100%]  gap-10 h-auto px-8 sm:px-10 xls:px-64  py-7 flex flex-col-reverse lg:flex-row flex-wrap md:flex-nowrap items-center">

      <p class="md:w-[60%]  text-justify">
          <span class="text-5xl font-extrabold text-[#dec043] ">VISION</span>
          <br> <br>

          To create a vibrant music program that: <br><br>

            - Inspires and uplifts: Through music that is both meaningful and enjoyable. <br>
            - Enhances worship experiences: By providing music that complements and elevates the worship service. <br>
            - Develops future generations: By mentoring and training young musicians and leaders. <br>
            - Preserves traditions: By keeping alive the musical heritage of the African Methodist Episcopal Zion Church. <br>
      </p>

      <div class="w-[80%] sm:w-[60%] lg:w-[35%] flex flex-row sm:justify-end align-middle items-center">
        <img
        src="/thechurchimage2.jpeg"
        alt="Sample Image"
             class="float-left mr-4 mb-2 rounded-lg shadow-lg 96 w-full h-[84%]  object-fill"
         />
       </div>

         
  </div>
  
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue';
  </script>
  