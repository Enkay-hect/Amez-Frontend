<template>
  <button
    type="button"
    aria-label="Back to top"
    class="fixed right-6 bottom-6 z-[900] grid place-items-center w-12 h-12 rounded-full text-brand-green950 bg-brand-gold500 shadow-brand-sm transition-all duration-200"
    :class="isVisible
      ? 'opacity-100 visible translate-y-0'
      : 'opacity-0 invisible translate-y-[14px]'"
    @click="scrollToTop"
  >
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > 600
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>