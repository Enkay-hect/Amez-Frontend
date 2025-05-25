<template class="">
    <NavBar style="height: 10rem" >
 
  </NavBar>


  <div class=" pt-10 pb-10">
    <div class="flex flex-row gap-6 justify-between flex-wrap xl:px-72">
      <button 
        @click="current = 'A'" 
        :class="{ 
          'active': current === 'A',
          'tab-button': true
        }"
      >
        Mission Imperatives
      </button>
      <button 
        @click="current = 'B'" 
        :class="{ 
          'active': current === 'B',
          'tab-button': true
        }"
      >
        Quadrennial Theme Prospectus
      </button>
      <button 
        @click="current = 'C'" 
        :class="{ 
          'active': current === 'C',
          'tab-button': true
        }"
      >
        Heads of Departments
      </button>
    </div>

    <div class="mt-8 px-4">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Missionimperatives from '../components/AboutusComponent/Missionimperatives.vue';
import Quadrennial from '../components/AboutusComponent/Quadrennial.vue';
import HODs from '../components/AboutusComponent/HODs.vue';
import { ref, computed } from 'vue'

const current = ref('A')

const currentComponent = computed(() => {
  switch (current.value) {
    case 'A': return Missionimperatives
    case 'B': return Quadrennial
    case 'C': return HODs
    default: return Missionimperatives
  }
})
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