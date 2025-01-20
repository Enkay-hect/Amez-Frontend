<template>
    <div>
      
      <NavBarLG v-if="isLgScreen">
        <slot></slot>
      </NavBarLG>
      
      <NavBarSm v-else>
        <slot></slot>
      </NavBarSm>

  
    </div>
</template>



<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import NavBarLG from './NavBarComponents/NavBarLG.vue';
    import NavBarSm from './NavBarComponents/NavBarSm.vue';

    const isLgScreen = ref(window.matchMedia('(min-width: 1281px)').matches);

    let resizeTimeout;

    const checkScreenSize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        isLgScreen.value = window.matchMedia('(min-width: 1024px)').matches;
    }, 100); // Debounced
    };

    onMounted(() => {
    window.addEventListener('resize', checkScreenSize);
    });

    onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
    });
</script>

<style scoped>

</style>