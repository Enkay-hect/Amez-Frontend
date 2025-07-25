<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-900">
    <div class="text-center">
      <h1 class="text-8xl font-bold text-green-600 animate-pulse">✔️</h1>
      <h2 class="text-2xl font-semibold mt-4">Success!</h2>
      <p class="text-green-700 mt-2">{{ message || 'Your action was completed successfully.' }}</p>

      <router-link
        to="/"
        class="mt-6 inline-block px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition-all"
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
