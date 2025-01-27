<template>
  <NavBar>
      <div class="absolute inset-0 bg-cover bg-center flex flex-col justify-center align-middle" style="background-image: url(images/amezchurch.jpg); filter: brightness(0.5);">
      </div>
  </NavBar>




  <div class="w-[100%] flex flex-row flex-wrap md:flex-nowrap gap-8 h-auto px-8 md:px-74 py-7">
    <div class="md:w-[50%]">
      <img src="../../public/images/clergy.jpg" alt="" srcset="">
    </div>

    <p class="md:w-[50%] leading-loose">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, accusamus tenetur debitis exercitationem in vero tempore ducimus eum, molestias id ex, earum cum atque pariatur quaerat culpa reiciendis neque commodi quae? Ipsum quis sapiente tempora error. Distinctio alias voluptatibus eos reprehenderit, autem, excepturi nihil amet eum quidem consequuntur sapiente, commodi nulla. Pariatur illo accusamus quaerat illum at, voluptatibus laboriosam veniam sapiente cum consectetur magnam incidunt! Fugiat ipsa ipsam illum, nobis eos dolores nostrum. Accusamus qui nobis beatae tempore iusto ducimus quasi error odit aut rem iure, ex impedit, quia deserunt sunt ipsa excepturi delectus aspernatur quos sequi sit id ipsam. Placeat, nemo, quae ipsam cumque perferendis similique officiis laborum maxime dolorum ullam itaque illo dicta sequi adipisci animi est nobis excepturi? Omnis soluta, eligendi, obcaecati a labore cum provident veniam totam sint eos odio eaque ratione voluptas minima. Amet molestias, alias harum minus nihil consequatur deleniti recusandae adipisci, repudiandae voluptates, porro nobis. Mollitia tenetur dolorum eos hic ad non commodi!
    </p>
  </div>




  <div class="w-[100%] flex flex-col  gap-10 items-center h-auto px-8 lg:px-96 py-20 bg-gray-200">
    <h1 class="text-[#dec043] font-bold">Get in touch with us</h1>

    <form action="" class="w-[100%] flex flex-row flex-wrap md:flex-nowrap gap-8 bg-white p-4 rounded-md justify-center px-4">

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
import NavBar from '../components/NavBar.vue';
</script>
