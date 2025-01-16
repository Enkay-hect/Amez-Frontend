<template>
    <nav class="relative text-white w-full h-screen">

    <div class="flex flex-row w-full h-20 justify-center items-center bg-black relative z-10" >
        <svg fill="#dec043" height="1rem" width="1.5rem" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" stroke="#dec043">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g id="Location-Pin-Filled"> 
                    <path d="M12,1c-4.97,0-9,4.03-9,9c0,6.75,9,13,9,13s9-6.25,9-13C21,5.03,16.97,1,12,1z M12,13c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,13,12,13z">

                    </path> 
                </g> 
            </g>
        </svg>
        <h3 class="text-white font-semibold text-center">
            EASTERN WEST AFRICA EPISCOPAL DISTRICT
        </h3>
        </div>

        <div class="w-full grid md:grid-cols-4 px-20 h-20 items-center border-b-4 border-white relative z-10">
        <div class="col-span-1">
            Logo
        </div>

        <ul class="col-span-3 justify-between flex items-center">
                <li>
                    Home
                </li>

                <li>
                    The Church
                </li>

                <li class="flex gap-2 items-center justify-center">
                    <h3 class="">Leadership</h3>
                    <svg viewBox="0 0 1024 1024" height="1rem" width="1rem" class="icon mt-1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff">

                            </path>
                        </g>
                    </svg>
                </li>

                <li class="flex gap-2 items-center justify-center">
                    <h3 class=""> Department & Ministries
                    </h3>
                    <svg viewBox="0 0 1024 1024" height="1rem" width="1rem" class="icon mt-1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff">

                            </path>
                        </g>
                    </svg>
                </li>

                <li class="flex gap-2 items-center justify-center">
                    <h3 class=""> Schools & Seminary
                    </h3>
                    <svg viewBox="0 0 1024 1024" height="1rem" width="1rem" class="icon mt-1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff">

                            </path>
                        </g>
                    </svg>
                </li>

                <li class="flex gap-2 items-center justify-center">
                    <h3 class=""> Events
                    </h3>
                    <svg viewBox="0 0 1024 1024" height="1rem" width="1rem" class="icon mt-1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff">

                            </path>
                        </g>
                    </svg>
                </li>

                <li>
                    Contact
                </li>

            <div class="flex items-center">
                <div class="p-3">
                    <svg viewBox="0 0 24 24" fill="none" height="2rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg" stroke="#ffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                    </path> 
                    </g>
                </svg>
                </div>
                
                <button class="border-2 border-red-500  p-3 rounded-md">
                    DONATE
                </button>
            </div>
        </ul>

    </div>

    <slot>

    </slot>




</nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>