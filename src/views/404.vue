<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div class="text-center">
        <h1 class="text-8xl font-bold text-blue-600 animate-bounce">404</h1>
        <h2 class="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p class="text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>

        <!-- <img
        src="https://source.unsplash.com/400x300/?lost"
        alt="404 Illustration"
        class="w-64 mx-auto mt-6"
        /> -->


        <router-link
          to="/"
          class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Go Back Home
        </router-link>
      </div>
    </div>

    <!-- <div>
      <div class="text-center mt-10">
        <h1 class="text-2xl">Counter: {{ count }}</h1>
        <button @click="increment" class="px-4 py-2 bg-green-500 text-white rounded m-2">+</button>
        <button @click="decrement" class="px-4 py-2 bg-red-500 text-white rounded m-2">-</button>
      </div>
    </div> -->
  </template>

  <script setup>

    // import { computed } from 'vue'
    // import { useStore } from 'vuex'

    // const store = useStore()
    // const count = computed(() => store.state.count)

    // function increment() {
    //   store.commit('increment')
    // }

    // function decrement() {
    //   store.commit('decrement')
    // }


  </script>
