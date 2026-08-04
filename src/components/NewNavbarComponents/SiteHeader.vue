<template>
    <LgHeader v-if="isLgScreen">
    </LgHeader>

    <MobileHeader v-else>
    </MobileHeader>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LgHeader from './LgHeader.vue' 
import MobileHeader from './MobileHeader.vue'

// 941px matches the breakpoint the header markup itself was built around
// (the point where the inline nav stops fitting and switches to the
// off-canvas panel). Adjust if you redesign the breakpoints later.
const isLgScreen = ref(window.matchMedia('(min-width: 941px)').matches)

let resizeTimeout

const checkScreenSize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    isLgScreen.value = window.matchMedia('(min-width: 941px)').matches
  }, 100) // Debounced
}

onMounted(() => {
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
  clearTimeout(resizeTimeout)
})
</script>

<style scoped></style>
