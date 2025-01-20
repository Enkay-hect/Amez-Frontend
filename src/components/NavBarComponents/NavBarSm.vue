<template>
    <nav class="relative text-white w-full h-screen ">
        <div class="fixed h-screen w-full bg-white text-black z-20 p-6 hidden">
            <div class="flex flex-row justify-between">
                <div class="">
                    Logo
                </div>

                <div class="">
                    <svg height="2rem" width="3rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-6.4 -6.4 76.80 76.80" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <g> 
                                <line fill="none" stroke="#000000" stroke-width="3.136" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"></line> 
                            </g> 
                            <g> <line fill="none" stroke="#000000" stroke-width="3.136" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"></line> </g> 
                            <g> <circle fill="none" stroke="#000000" stroke-width="3.136" stroke-miterlimit="10" cx="32" cy="32" r="30.999"></circle> </g> 
                        </g>
                    </svg>
                </div>
            </div>
        </div>

    <div class="flex flex-row w-full h-20 justify-center items-center bg-black relative z-10" >
        <svg fill="#dec043" height="1rem" width="1.5rem" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" stroke="#dec043">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <g id="Location-Pin-Filled"> 
                    <path d="M12,1c-4.97,0-9,4.03-9,9c0,6.75,9,13,9,13s9-6.25,9-13C21,5.03,16.97,1,12,1z M12,13c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,13,12,13z">

                    </path> 
                </g> 
            </g>
        </svg>
        <h3 class="text-white font-semibold text-center text-xs">
            EASTERN WEST AFRICA EPISCOPAL DISTRICT
        </h3>
    </div>

    <div class="w-full flex flex-row justify-between px-5 h-20 items-center border-b-2 border-gray-100 relative z-10">
           <div class="">
                Logo
            </div>

            <div class="">
                <svg height="4rem" width="2rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="0" y1="21" x2="6" y2="21"></line> 
                        <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="16" y1="21" x2="64" y2="21"></line> 
                        <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="0" y1="33" x2="6" y2="33"></line> 
                        <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="16" y1="33" x2="64" y2="33"></line> 
                        <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="0" y1="45" x2="6" y2="45"></line> 
                        <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="16" y1="45" x2="64" y2="45">

                        </line> 
                    </g>
                </svg>
            </div>
    </div>

    
    <slot>

    </slot>

</nav>
</template>

<script setup>
import { ref } from 'vue';

const activeDropdown = ref('');

const setDropdownActive = (dropdown) => {
      activeDropdown.value = dropdown;
};




    
</script>

<style scoped>

</style>