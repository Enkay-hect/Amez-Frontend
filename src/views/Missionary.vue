<template>
    <NavBar style="height: 9.5rem">

        
    </NavBar>

    <div class="relative w-full h-auto flex">
        <!-- Main Content Area (Scrollable & Centered) -->
        <div class="flex-1 h-[40rem] overflow-y-auto p-8 bg-gray-100 mr-56 flex justify-center">
        <div class="">

            <div class="flex flex-row gap-60 pb-8">
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
                <div style="border-radius: 10rem;">
                    <img src="/public/images/BAA/Dr-DONALD.png" alt="" srcset="" height="200" width="200">
                </div>

                <div class="flex flex-col align-middle justify-center">

                    <h1 class="font-bold">REV. DR. DONALD J. EKPO</h1>
                    <h2>BISHOP’S ADMINISTRATIVE ASSISTANT</h2>
                    <h3>SOUTHERN NIGERIA CONFERENCE</h3>

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