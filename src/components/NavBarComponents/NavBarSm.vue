<template>
  <nav class="relative text-white w-full h-screen">
    <div 
        v-show="sideBarVisible"
        class="fixed h-screen w-full bg-white text-black z-20 p-6 sidebar"
        :class="{ 'sidebar-open': sideBar }"
        role="dialog"
        aria-expanded="sideBar"
      >
      <div class="flex justify-between mb-10">
        <div>Logo</div>
        <button @click="setSideBar(false)" aria-label="Close sidebar">
            <svg height="1rem" width="1.5rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g> 
                    <line fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"></line> 
                </g> 
                <g> 
                    <line fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"></line> 
                </g> 
                <g> <circle fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" cx="32" cy="32" r="30.999"></circle> </g> </g></svg>
        </button>
      </div>

      <div class="flex flex-col gap-6">
        <router-link to="/" >
            Home
        </router-link>
            
        <router-link to="/the-church">
            The Church
        </router-link>
      </div>
    </div>

    <div class="flex flex-row w-full h-20 justify-center items-center bg-black relative z-10">
      <svg fill="#dec043" height="1rem" width="1.5rem" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" stroke="#dec043">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g id="Location-Pin-Filled"> 
                    <path d="M12,1c-4.97,0-9,4.03-9,9c0,6.75,9,13,9,13s9-6.25,9-13C21,5.03,16.97,1,12,1z M12,13c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,13,12,13z">

                    </path> 
                </g> 
            </g>
        </svg>
      <h3 class="text-white font-semibold text-center text-xs">
        EASTERN WEST AFRICA EPISCOPAL DISTRICT
      </h3>
    </div>

    <div class="flex justify-between px-5 h-20 items-center border-b-2 border-gray-100 relative z-10"
    :class="{ 'fixed-nav': isFixed,  }"

    >
      <div>Logo</div>
      <button @click="setSideBar(true)" aria-label="Open sidebar">
        <svg height="4rem" width="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#FFF">
          <line x1="0" y1="21" x2="6" y2="21" stroke="#FFF" stroke-width="5"></line>
          <line x1="16" y1="21" x2="64" y2="21" stroke="#FFF" stroke-width="5"></line>
          <line x1="0" y1="33" x2="6" y2="33" stroke="#FFF" stroke-width="5"></line>
          <line x1="16" y1="33" x2="64" y2="33" stroke="#FFF" stroke-width="5"></line>
          <line x1="0" y1="45" x2="6" y2="45" stroke="#FFF" stroke-width="5"></line>
          <line x1="16" y1="45" x2="64" y2="45" stroke="#FFF" stroke-width="5"></line>
        </svg>
      </button>
    </div>

    <slot></slot>
  </nav>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, watch } from 'vue';
    import { useRoute, onBeforeRouteLeave } from 'vue-router';

    const sideBar = ref(false); 
    const sideBarVisible = ref(false); 
    const isFixed = ref(false);


    const setSideBar = (toggleSideBar) => {
      sideBar.value = toggleSideBar;
      
      if(toggleSideBar){
        document.body.style.overflow = 'hidden';
      }

      else{
        document.body.style.overflow = 'auto';
      }
    };

    

    onMounted(() => {
        setTimeout(() => {
            sideBarVisible.value = true;
        }, 0); 
    });


    const handleScroll = () => {
      isFixed.value = window.scrollY > 100;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    onBeforeRouteLeave(() => {
      document.body.style.overflow = 'auto';
    });

    watch(sideBar, (newValue) => {
      document.body.style.overflow = newValue ? 'hidden' : 'auto';
    });

</script>

<style scoped>
    .sidebar {
      transform: translateX(-100%);
      transition: transform 0.35s ease-in-out;
    }

    .sidebar-open {
      transform: translateX(0);
    }

    .fixed-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      background-color: rgba(112, 105, 105, 0.089);  */
      backdrop-filter: blur(5px); 
      transition: 0.3s;
      
    }
</style>
