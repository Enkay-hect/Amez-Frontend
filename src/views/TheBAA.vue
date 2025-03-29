<template>
    <NavBar style="height: 9.5rem">

        
    </NavBar>

    <div class="relative w-full h-auto flex" >
        <!-- Main Content Area (Scrollable & Centered) -->
        <div class="flex-1 h-[40rem] overflow-y-auto p-8 bg-gray-100 mr-56 flex justify-center" 
        >
        <div class="">

            <div class="flex flex-row gap-60 pb-8 ">
                <div style="border-radius: 10rem;">
                    <img src="/images/BAA/Dr-TAKIS.png" alt="" srcset="" height="200" width="200">
                </div>

                <div class="flex flex-col align-middle justify-center">

                    <h1 class="font-bold">REV. DR. TAKIS E. CAIAFAS</h1>
                    <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                    <h3>CROSS RIVER NIGERIA CONFERENCE</h3>

                </div>
            </div>


            <div class="flex flex-row gap-60">
                <div class="flex flex-col align-middle justify-center">

                <h1 class="font-bold">REV. DR. DONALD J. EKPO</h1>
                <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                <h3>SOUTHERN NIGERIA CONFERENCE</h3>

                </div>

                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/Dr-DONALD.png" alt="" srcset="" height="200" width="200">
                </div>
            </div>


            <div class="flex flex-row gap-60 pb-8 ">
                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.BARR.OZIOHAV.EKEMAM.jpg" alt="" srcset="" height="200" width="200">
                </div>

                <div class="flex flex-col align-middle justify-center">

                    <h1 class="font-bold">REV. BARR. OZIOHA V. EKEMAM</h1>
                    <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                    <h3>NORTHERN NIGERIA CONFERENCE</h3>

                </div>
            </div>


            <div class="flex flex-row gap-60">
                <div class="flex flex-col align-middle justify-center">

                <h1 class="font-bold">REV. CLEMENT  EGHUANOYE- GRAHAM</h1>
                <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                <h3>PORT HARCOURT NIGERIA CONFERENCE 	</h3>

                </div>

                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.CLEMENT EGHUANOYE- GRAHAM.png" alt="" srcset="" height="200" width="200">
                </div>
            </div>

            <div class="flex flex-row gap-60 pb-8 ">
                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.DR.EFREKEE.EKPENYONG.png" alt="" srcset="" height="200" width="200">
                </div>

                <div class="flex flex-col align-middle justify-center">

                    <h1 class="font-bold">REV. DR. EFREKE E. EKPENYONG</h1>
                    <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                    <h3> NIGERIA CONFERENCE </h3>

                </div>
            </div>

            <div class="flex flex-row gap-60">
                <div class="flex flex-col align-middle justify-center">

                <h1 class="font-bold">REV. DR. GODSON N. ELIJAH</h1>
                <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                <h3>SOUTHEASTERN NIGERIA CONFERENCE 	 	</h3>

                </div>

                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.DR.GODSONN.ELIJAH.png" alt="" srcset="" height="200" width="200">
                </div>
            </div>

            <div class="flex flex-row gap-60 pb-8 ">
                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.DR.SAMUEL ASUAMIOM.png" alt="" srcset="" height="200" width="200">
                </div>

                <div class="flex flex-col align-middle justify-center">

                    <h1 class="font-bold">REV. DR. SAMUEL ASUAMIOM</h1>
                    <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                    <h3> MAINLAND NIGERIA CONFERENCE 	 </h3>

                </div>
            </div>

            <div class="flex flex-row gap-60">
                <div class="flex flex-col align-middle justify-center">

                <h1 class="font-bold">REV. DR. SAMUEL O. IBEMERE, SR</h1>
                <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                <h3>CENTRAL NIGERIA CONFERENCE 	 	 	</h3>

                </div>

                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.DR.SAMUELO.IBEMERE,SR.png" alt="" srcset="" height="200" width="200">
                </div>
            </div>

            <div class="flex flex-row gap-60 pb-8 ">
                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.DR.UMOROLU.png" alt="" srcset="" height="200" width="200">
                </div>

                <div class="flex flex-col align-middle justify-center">

                    <h1 class="font-bold">REV. DR. UMOR OLU</h1>
                    <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                    <h3>  RIVERS  NIGERIA CONFERENCE  </h3>

                </div>
            </div>

            <div class="flex flex-row gap-60">
                <div class="flex flex-col align-middle justify-center">

                <h1 class="font-bold">REV. PROF. IMO E. UMOINYANG</h1>
                <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                <h3>AKWA NIGERIA CONFERENCE 	</h3>

                </div>

                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/REV.PROF.IMOE.UMOINYANG.png" alt="" srcset="" height="200" width="200">
                </div>
            </div>






           

        </div>
        </div>

        <!-- Right Sidebar (Non-overlapping footer) -->
            <aside
                class="w-56 bg-gray-600 text-white flex flex-col justify py-6 shadow-lg transition-all duration-300 z-[-1] overflow-y-auto"
                :class="isFixed ? 'fixed top-0 right-0 h-screen' : 'absolute top-0 right-0 h-full'"
                >

                <nav class="flex flex-col gap-4 px-4 items-center">
                    <a href="#" class="hover:text-[#dec043]">REV. DR. TAKIS</a>
                    <a href="#" class="hover:text-[#dec043]">REV. DR. DONALD</a>
                    <!-- <a href="#" class="hover:text-[#dec043]">Contact</a> -->
                </nav>
        </aside>
    </div>

  </template>

<script setup>
import NavBar from '../components/NavBar.vue';

import { ref, onMounted, onUnmounted } from 'vue';

const isFixed = ref(false);

const handleScroll = () => {
  isFixed.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>

</style>