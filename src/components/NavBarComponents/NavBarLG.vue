<template>
    <nav class="relative text-white w-[100%] h-screen ">

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

        <div class="w-full grid md:grid-cols-6 px-20 h-20 items-center border-b-2 border-gray-100 relative z-10 "
            :class="{ 'fixed-nav': isFixed, 'setNavBg': bgBlack }"
            >
            <div class="col-span-1">
                <img src="/images/logo/amezlogo.png" alt="" srcset="" height="60" width="100">
            </div>

            <ul class="col-span-5 justify-between flex items-center">
                    <router-link to="/" >
                        Home
                    </router-link>
                        
                    <router-link to="/the-church">
                        The Church
                    </router-link>

                    <li class="relative flex gap-2 justify-center h-20 items-center cursor-pointer"
                            @mouseenter="setDropdownActive('leadership')"
                            @mouseleave="setDropdownActive('')">
                        <div class="flex items-center">
                            
                            <h3>Leadership</h3>
                            
                            <svg
                                v-show="true"
                                :style="{
                                    opacity: activeDropdown === 'leadership' ? 1 : 1,
                                    transform: activeDropdown === 'leadership' ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                }"
                                viewBox="0 0 1024 1024"
                                height="0.5rem"
                                width="1rem"
                                class="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                >
                                <path
                                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                    fill="#FFFFFF"
                                />
                            </svg>
                        </div>

                        <!-- Parent Dropdown -->
                        <ul
                            v-show="true"
                            class="absolute mt-40 h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black"

                            :style="{
                            opacity: activeDropdown === 'leadership' || activeDropdown === 'child-dropdown' ? 1 : 0,
                            
                            transform: activeDropdown === 'leadership' || activeDropdown === 'child-dropdown' ? 'translateY(3.6rem)' : 'translateY(2rem)',

                            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',

                            visibility: activeDropdown === 'leadership' || activeDropdown === 'child-dropdown' ? 'visible' : 'hidden',
                            }"
                        >

                            <li class="border-b-2 border-gray-400 pb-3">Bishop</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Bishop’s Administrative <br> Assistants</li>

                            <!-- Child Dropdown Trigger -->
                            <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @mouseenter="setDropdownActive('child-dropdown')"
                                @mouseleave="setDropdownActive('leadership')"
                                >
                                

                                <div class="flex items-center">
                                    <h4>Annual Conferences</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                    }"
                                    viewBox="0 0 1024 1024"
                                    height="0.5rem"
                                    width="1rem"
                                    class="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    >
                                    <path
                                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                        fill="#000000"
                                    />
                                    </svg>
                                </div>

                            <!-- Child Dropdown -->
                                <ul
                                    v-show="true" 
                                    class="absolute left-full top-0 bg-gray-100 p-4 pt-2 w-max text-black shadow-md max-h-80 overflow-y-auto rounded-b-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                                    :style="{
                                    opacity: activeDropdown === 'child-dropdown' ? 1 : 0,
                                    transform: activeDropdown === 'child-dropdown' ? 'translateX(0)' : 'translateX(-5rem)',
                                    transition: 'opacity 1s ease-in-out, transform 0.3s ease-in-out',
                                    // visibility: activeDropdown === 'child-dropdown' ? 'visible' : 'hidden',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-2">Nigeria Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Central Nigeria Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Rivers Nigeria Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Mainland Nigeria Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Northern Nigeria Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Port Harcourt Nigeria <br> Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">South Eastern Nigeria <br> Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Cross River Nigeria <br> Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Southern Nigeria Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Akwa Nigeria Conference</li>
                                    <li class="border-b-2 border-gray-400 pt-2 pb-2">Lagos West Annual Conference</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    

            
                    <li class="relative flex gap-2 justify-center h-20 items-center"
                            @mouseenter="setDropdownActive('Departments')"
                            @mouseleave="setDropdownActive('')">
                        <div class="flex items-center">
                            
                            <h3>Departments and Ministries</h3>
                            
                            <svg
                                v-show="true"
                                :style="{
                                    opacity: activeDropdown === 'Departments' ? 1 : 1,
                                    transform: activeDropdown === 'Departments' ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                }"
                                viewBox="0 0 1024 1024"
                                height="0.5rem"
                                width="1rem"
                                class="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                >
                                <path
                                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                    fill="#FFFFFF"
                                />
                            </svg>
                        </div>

                        <!-- Parent Dropdown -->
                        <ul
                            v-show="true"

                            class="absolute mt-72 h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black"

                            :style="{
                            opacity: activeDropdown === 'Departments' || activeDropdown === 'child-dropdown2.1' || activeDropdown === 'child-dropdown2.2' ? 1 : 0,
                            
                            transform: activeDropdown === 'Departments' || activeDropdown === 'child-dropdown2.1' || activeDropdown === 'child-dropdown2.2' ? 'translateY(3.6rem)' : 'translateY(2rem)',

                            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',

                            visibility: activeDropdown === 'Departments' || activeDropdown === 'child-dropdown2.1' || activeDropdown === 'child-dropdown2.2' ? 'visible' : 'hidden',
                            }"
                            >

                            <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @mouseenter="setDropdownActive('child-dropdown2.1')"
                                @mouseleave="setDropdownActive('Departments')">
                                
                                <div class="flex items-center">
                                    <h4>Women’s Home and Overseas <br> Missionary Society</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown2.1' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown2.1' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                    }"
                                    viewBox="0 0 1024 1024"
                                    height="0.5rem"
                                    width="1rem"
                                    class="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    >
                                    <path
                                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                        fill="#000000"
                                    />
                                    </svg>
                                </div>

                            <!-- Child Dropdown -->
                                <ul
                                    v-show="true"
                                    class="absolute left-full top-0 bg-gray-100 p-4 w-max text-black shadow-md max-h-80 overflow-y-auto rounded-b-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                                    :style="{
                                    opacity: activeDropdown === 'child-dropdown2.1' ? 1 : 0,
                                    transform: activeDropdown === 'child-dropdown2.1' ? 'translateX(0)' : 'translateX(-1.5rem)',
                                    transition: 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out',
                                    // visibility: activeDropdown === 'child-dropdown2.1' ? 'visible' : 'hidden',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-3">Missionary supervisor</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Field workers</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Parent Body</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">YAMS</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">YMS</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Buds of promise</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Bureau supply</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Life Members</li>

                                </ul>
                            </li>


                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Connectional Lay Council </li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Men of Zion Ministry</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Minister’s Spouses Fellowship</li>


                            <!-- Child Dropdown Trigger -->
                            <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @mouseenter="setDropdownActive('child-dropdown2.2')"
                                @mouseleave="setDropdownActive('Departments')">
                                
                                <div class="flex items-center">
                                    <h4>Directorates</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown2.2' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown2.2' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                    }"
                                    viewBox="0 0 1024 1024"
                                    height="0.5rem"
                                    width="1rem"
                                    class="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    >
                                    <path
                                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                        fill="#000000"
                                    />
                                    </svg>
                                </div>

                            <!-- Child Dropdown -->
                                <ul
                                    v-show="true"
                                    class="absolute left-full top-0 bg-gray-100 p-4 w-max text-black shadow-md max-h-80 overflow-y-auto rounded-b-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                                    :style="{
                                    opacity: activeDropdown === 'child-dropdown2.2' ? 1 : 0,
                                    transform: activeDropdown === 'child-dropdown2.2' ? 'translateX(0)' : 'translateX(-1.5rem)',
                                    transition: 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out',
                                    // visibility: activeDropdown === 'child-dropdown2' ? 'visible' : 'hidden',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-3">Christian Education <br> Department</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Finance, Assets & Property <br> Development </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Historical Society, Research & <br> Publications </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Ecumenical Affairs </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Social Concerns & Empowerment </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Church Growth & Development </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Legal Affairs </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Communication </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Music </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Youth </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Children </li>
                                </ul>
                            </li>
                        </ul>
                    </li>


                    <li class="relative flex gap-2 justify-center h-20 items-center"
                            @mouseenter="setDropdownActive('Seminary')"
                            @mouseleave="setDropdownActive('')">
                        <div class="flex items-center">
                            
                            <h3>Schools & Seminary</h3>
                            
                            <svg
                                v-show="true"
                                :style="{
                                    opacity: activeDropdown === 'Seminary' ? 1 : 1,
                                    transform: activeDropdown === 'Seminary' ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                }"
                                viewBox="0 0 1024 1024"
                                height="0.5rem"
                                width="1rem"
                                class="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                >
                                <path
                                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                    fill="#FFFFFF"
                                />
                            </svg>
                        </div>

                        <!-- Parent Dropdown -->
                        <ul
                            v-show="true"
                            class="absolute mt-52 h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black"

                            :style="{
                            opacity: activeDropdown === 'Seminary' || activeDropdown === 'child-dropdown3' ? 1 : 0,
                            
                            transform: activeDropdown === 'Seminary' || activeDropdown === 'child-dropdown3' ? 'translateY(3.6rem)' : 'translateY(2rem)',

                            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',

                            visibility: activeDropdown === 'Seminary' || activeDropdown === 'child-dropdown3' ? 'visible' : 'hidden',
                            }"
                            >


                            <li class="border-b-2 border-gray-400 pb-3"><router-link to="/hood-speaks">Hood-Speak Theological <br> Seminary</router-link></li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">A. M. E. Zion Church <br> Secondary Schools</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">A. M. E. Zion Church <br> Primary and Nursery School</li>

                            <!-- <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @mouseenter="setDropdownActive('child-dropdown3')"
                                @mouseleave="setDropdownActive('Seminary')">
                                
                                <div class="flex items-center">
                                    <h4>Annual Conferences</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown3' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown3' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                    }"
                                    viewBox="0 0 1024 1024"
                                    height="0.5rem"
                                    width="1rem"
                                    class="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    >
                                    <path
                                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                        fill="#000000"
                                    />
                                    </svg>
                                </div>

                                <ul
                                    v-show="true"
                                    class="absolute left-full top-0 bg-gray-100 p-4 w-max text-black shadow-md"
                                    :style="{
                                    opacity: activeDropdown === 'child-dropdown3' ? 1 : 0,
                                    transform: activeDropdown === 'child-dropdown3' ? 'translateX(0)' : 'translateX(-1.5rem)',
                                    transition: 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-3">Hood-Speak Theological <br> Seminary</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">A. M. E. Zion Church <br> Secondary Schools</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">A. M. E. Zion Church <br> Primary and Nursery School</li>

                                </ul>
                            </li> -->
                        </ul>
                    </li>




                    <li class="relative flex gap-2 justify-center h-20 items-center"
                            @mouseenter="setDropdownActive('Events')"
                            @mouseleave="setDropdownActive('')">
                        <div class="flex items-center">
                            
                            <h3>                                
                                <router-link to="/event">Event</router-link> 
                            </h3>
                            
                            <!-- <svg
                                v-show="true"
                                :style="{
                                    opacity: activeDropdown === 'Events' ? 1 : 1,
                                    transform: activeDropdown === 'Events' ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                }"
                                viewBox="0 0 1024 1024"
                                height="0.5rem"
                                width="1rem"
                                class="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                >
                                <path
                                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                    fill="#FFFFFF"
                                />
                            </svg> -->
                        </div>

                        <!-- Parent Dropdown -->
                        <!-- <ul
                            v-show="true"
                            class="absolute mt-45 h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black"

                            :style="{
                            opacity: activeDropdown === 'Events' || activeDropdown === 'child-dropdown4' ? 1 : 0,
                            
                            transform: activeDropdown === 'Events' || activeDropdown === 'child-dropdown4' ? 'translateY(3.6rem)' : 'translateY(2rem)',

                            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',

                            visibility: activeDropdown === 'Events' || activeDropdown === 'child-dropdown4' ? 'visible' : 'hidden',
                            }"
                            > -->

                            <!-- <li class="border-b-2 border-gray-400 pb-3">
                                <router-link to="/event">Event</router-link> 
                            </li> -->
                            <!-- <li class="border-b-2 border-gray-400 pt-3 pb-3">Bishop’s Administrative <br> Assistants</li> -->

                            <!-- Child Dropdown Trigger -->

                            <!-- <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @mouseenter="setDropdownActive('child-dropdown4')"
                                @mouseleave="setDropdownActive('Events')">
                                
                                <div class="flex items-center">
                                    <h4>Annual Conferences</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown4' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown4' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: '1s ease-in-out, transform 0.5s ease-in-out',
                                    }"
                                    viewBox="0 0 1024 1024"
                                    height="0.5rem"
                                    width="1rem"
                                    class="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    >
                                    <path
                                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                        fill="#000000"
                                    />
                                    </svg>
                                </div> -->

                            <!-- Child Dropdown -->
                                <!-- <ul
                                    v-show="true"
                                    class="absolute left-full top-0 bg-gray-100 p-4 w-max text-black shadow-md"
                                    :style="{
                                    opacity: activeDropdown === 'child-dropdown4' ? 1 : 0,
                                    transform: activeDropdown === 'child-dropdown4' ? 'translateX(0)' : 'translateX(-1.5rem)',
                                    transition: 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-3">side text 1</li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">side text two</li>
                                </ul>
                            </li>-->
                        <!-- </ul>  -->
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
                    
                    <button class="border-2 p-3 rounded-md" style="border: 1px solid #dec043;">
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
import { ref, onMounted, onUnmounted } from 'vue';

const activeDropdown = ref('');
const isFixed = ref(false);
const bgBlack = ref(false);


const setDropdownActive = (dropdown) => {
      activeDropdown.value = dropdown;
};

const handleScroll = () => {
  isFixed.value = window.scrollY > 100;
  bgBlack.value = window.scrollY > 700
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});





    
</script>

<style scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  /* background-color: rgba(112, 105, 105, 0.089);  */
  backdrop-filter: blur(5px); 
  transition: 0.3s; 
}

.setNavBg{
    background-color: black;
    /* border-bottom: none; */
}
</style>