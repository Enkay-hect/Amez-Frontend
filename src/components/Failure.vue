<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-900">
    <div class="text-center">
      <h1 class="text-8xl font-bold text-red-600 animate-ping">❌</h1>
      <h2 class="text-2xl font-semibold mt-4">Something went wrong</h2>
      <p class="text-red-700 mt-2">{{ message || 'We couldn’t complete your request. Please try again later.' }}</p>

      <router-link
        to="/"
        class="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-lg rounded-lg shadow-md hover:bg-red-700 transition-all"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const message = route.query.msg
</script>
