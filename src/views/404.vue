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
  </template>
  