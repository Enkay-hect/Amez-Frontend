<template>
    <div>
        <div class="p-4">
            <h2 class="text-2xl font-bold text-center mb-4">Image Gallery</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div v-for="(image, index) in images" :key="index" class="relative group">
                <img :src="image" :alt="'Image ' + (index + 1)" class="w-full h-auto object-cover rounded-lg shadow-md transform transition-all duration-300 group-hover:scale-105">
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>