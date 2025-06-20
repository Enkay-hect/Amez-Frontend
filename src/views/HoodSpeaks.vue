<template>
      <NavBar style="height: 12rem" class="bg-black">
        
    </NavBar>

    <div class="relative inset-0 flex flex-col justify-center items-center gap-3 pt-20 bg-black w-[100%]">
        <div class="relative flex flex-col justify-center items-center w-full max-w-screen-lg pt-8">
            <img src="/images/logo1.jpeg" alt="Logo" class="w-full h-auto max-h-[500px] object-contain">
            <!-- <h2 class="absolute text-4xl font-extrabold text-white">THE BISHOP</h2> -->
        </div>
     </div>


    <div class=" pt-10 pb-10">
        <div class="flex flex-row gap-6 justify-between flex-wrap xl:px-72">
            <button 
                @click="current = 'A'" 
                :class="{ 
                'active': current === 'A',
                'tab-button': true
                }"
                >
                About
            </button>
            <button 
                @click="current = 'B'" 
                :class="{ 
                'active': current === 'B',
                'tab-button': true
                }"
                >
                Calendar
            </button>
            <button 
                @click="current = 'C'" 
                :class="{ 
                'active': current === 'C',
                'tab-button': true
                }"
                >
                Leadership
            </button>
            <button 
                @click="current = 'D'" 
                :class="{ 
                'active': current === 'D',
                'tab-button': true
                }"
                >
                Programme
            </button>
            <button 
                @click="current = 'E'" 
                :class="{ 
                'active': current === 'E',
                'tab-button': true
                }"
                >
                Student life
            </button>
        </div>
    
    
    
        <div class="mt-8 px-4">
            <component :is="currentComponent" />
        </div>
  </div>


    

    <!-- <div class="p-4">
        <h2 class="text-2xl font-bold text-center mb-4">Hood-Speaks Gallery</h2>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden">
            <img :src="image" :alt="'Image ' + (index + 1)" 
            class="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
        </div>
    </div> -->
   
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';
    import NavBar from '../components/NavBar.vue';

   
    import About from '../components/HoodspeakComponent/About.vue'
    import Calendar from '../components/HoodspeakComponent/Calendar.vue'
    import Leadership from '../components/HoodspeakComponent/Leadership.vue';
    import Programme from '../components/HoodspeakComponent/Programme.vue';
    import Student_life from '../components/HoodspeakComponent/Student_life.vue';



    const current = ref('A')


    const currentComponent = computed(() => {
    switch (current.value) {
        case 'A': return About
        case 'B': return Calendar
        case 'C': return Leadership
        case 'D': return Programme
        case 'E': return Student_life
        default: return About
    }
    })

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

<style scoped>

.tab-button {
  @apply px-6 py-3 rounded-t-lg font-medium text-gray-700 transition-colors duration-200;
  @apply hover:bg-gray-100 hover:text-gray-900;
}

.tab-button.active {
  @apply bg-white text-blue-600 border-b-2 border-blue-600;
  @apply hover:bg-white hover:text-blue-600;
}

@media (max-width: 768px) {
  .tab-button {
    @apply px-4 py-2 text-sm;
  }
}

</style>