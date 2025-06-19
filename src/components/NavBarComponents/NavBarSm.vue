<template>
  <nav class="relative text-white w-full h-auto bg-black">
    <div 
        v-show="sideBarVisible"
        class="fixed h-[100vh] w-full bg-white text-black z-20 p-6 sidebar"
        :class="{ 'sidebar-open': sideBar }"
        role="dialog"
        aria-expanded="sideBar"
      >
      <div class="flex justify-between mb-10  w-[100%]">
        <div>                
          <img src="/images/logo/amezlogo.png" alt="" srcset="" height="60" width="100">
        </div>
        <button @click="setSideBar(false)" aria-label="Close sidebar" class="w-16 flex justify-end item-center">
            <svg height="3rem" width="2rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
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

       
        <ul class="">
          <li class="relative flex gap-2  items-start cursor-pointer">

                        <div class="flex flex-row items-center ">
                            
                            <h3 @click.stop.prevent="toggleDropdown1('leadership')">
                              Leadership
                            </h3>
                            
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
                                class="icon mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                >
                                <path
                                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                    fill="#000000"
                                />
                            </svg>
                        </div>

                        <!-- Parent Dropdown -->
                        <ul
                            v-show="true"
                            class="absolute mt-[-1rem] h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black z-10 "

                            :style="{
                            opacity: activeDropdown === 'leadership' || activeDropdown === 'child-dropdown' ? 1 : 0,
                            
                            transform: activeDropdown === 'leadership' || activeDropdown === 'child-dropdown' ? 'translateY(3rem)' : 'translateY(2.5rem)',

                            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',

                            visibility: activeDropdown === 'leadership' || activeDropdown === 'child-dropdown' ? 'visible' : 'hidden',
                            }"
                        >

                            <li class="border-b-2 border-gray-400 pb-3">
                              <router-link to="/the-bishop">Bishop</router-link>
                            </li>

                            <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="/BAA">Bishop’s Administrative <br> Assistants</router-link></li>

                            <!-- Child Dropdown Trigger -->
                            <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @click.stop.prevent="toggleDropdown1('child-dropdown')"
                                >

                                <div class="flex items-center">
                                    <h4 >Annual Conferences</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        // transition: '1s ease-in-out, transform 0.5s ease-in-out',
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

                                    class="absolute left-[40%] top-0 bg-gray-100 p-4 pt-2 w-max text-black shadow-md overflow-y-auto max-h-64"
                                    :style="{
                                      opacity: activeDropdown === 'child-dropdown' ? 1 : 0,
                                      transform: activeDropdown === 'child-dropdown' ? 'translateX(0)' : 'translateX(-5rem)',
                                      zIndex: activeDropdown === 'child-dropdown' ? 1 : -10,
                                      pointerEvents: activeDropdown === 'child-dropdown' ? 'auto' : 'none',
                                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-2"><router-link to="/Annual-Conference/Nigeria-Conference">Nigeria Conference</router-link></li>
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
        </ul>

        <ul>
          <li class="relative flex gap-2  items-start cursor-pointer">
                        <div class="flex flex-row items-center">
                            
                            <h3 @click.stop.prevent="toggleDropdown1('Departments')">Departments and Ministries</h3>
                            
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
                                    fill="#000000"
                                />
                            </svg>
                        </div>

                        <!-- Parent Dropdown -->
                        <ul
                            v-show="true"

                            class="absolute mt-[-1rem] h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black z-10"

                            :style="{
                            opacity: activeDropdown === 'Departments' || activeDropdown === 'child-dropdown2.1' || activeDropdown === 'child-dropdown2.2' ? 1 : 0,
                            
                            transform: activeDropdown === 'Departments' || activeDropdown === 'child-dropdown2.1' || activeDropdown === 'child-dropdown2.2' ? 'translateY(3rem)' : 'translateY(2.5rem)',

                            transition: 'opacity 0.3s ease-in-out, transform 1s ease-in-out',

                            visibility: activeDropdown === 'Departments' || activeDropdown === 'child-dropdown2.1' || activeDropdown === 'child-dropdown2.2' ? 'visible' : 'hidden',
                            }"
                            >

                            <li class="border-b-2 border-gray-400 pb-3 "
                                @click.stop.prevent="toggleDropdown1('child-dropdown2.1')">
                                
                                <div class="flex items-center">
                                    <h4>Women’s Home and <br> Overseas Missionary Society</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown2.1' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown2.1' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        // transition: '1s ease-in-out, transform 0.5s ease-in-out',
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
                                    class="absolute left-[60%] top-0 bg-gray-100 p-4 w-max text-black shadow-md overflow-y-auto max-h-60"
                                    

                                  :style="{
                                      opacity: activeDropdown === 'child-dropdown2.1' ? 1 : 0,
                                      transform: activeDropdown === 'child-dropdown2.1' ? 'translateX(0)' : 'translateX(-1.5rem)',
                                      zIndex: activeDropdown === 'child-dropdown2.1' ? 1 : -10,
                                      pointerEvents: activeDropdown === 'child-dropdown2.1' ? 'auto' : 'none',
                                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-3"><router-link to="/missionary-supervisor">Missionary supervisor</router-link></li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="/field-workers">Field workers</router-link></li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="/Departments"> Departments</router-link></li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="/About-Us">About Us</router-link></li>
                                   

                                </ul>
                            </li>


                            <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="connectional-lay-council">Connectional Lay Council</router-link> </li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="men-of-zion">Men of Zion Ministry</router-link></li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Minister’s Spouses Fellowship</li>


                            <!-- Child Dropdown Trigger -->
                            <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @click.stop.prevent="toggleDropdown1('child-dropdown2.2')">
                                
                                <div class="flex items-center">
                                    <h4>Directorates</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown2.2' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown2.2' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        // transition: '1s ease-in-out, transform 0.5s ease-in-out',
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
                                    class="absolute left-[30%] top-[-9rem] bg-gray-100 p-4 w-max text-black shadow-md overflow-y-auto max-h-56"
                                    :style="{
                                      opacity: activeDropdown === 'child-dropdown2.2' ? 1 : 0,
                                      transform: activeDropdown === 'child-dropdown2.2' ? 'translateX(0)' : 'translateX(-1.5rem)',
                                      zIndex: activeDropdown === 'child-dropdown2.2' ? 1 : -10,
                                      pointerEvents: activeDropdown === 'child-dropdown2.2' ? 'auto' : 'none',
                                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-3"><router-link to="the-chruchh">Christian Education <br> Department</router-link></li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Finance, Assets & Property <br> Development </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Historical Society, Research & <br> Publications </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Ecumenical Affairs </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Social Concerns & Empowerment </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Church Growth & Development </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Legal Affairs </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Communication </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="/Music">Music</router-link> </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3"><router-link to="/Youth">Youth</router-link> </li>
                                    <li class="border-b-2 border-gray-400 pt-3 pb-3">Children </li>
                                </ul>
                            </li>
                        </ul>
          </li>
        </ul>

        <ul class="">
          <li class="relative flex gap-2  items-start cursor-pointer"
                      >

                        <div class="flex flex-row items-center ">
                            
                            <h3 @click.stop.prevent="toggleDropdown1('Events')"
                            >
                            Schools & Seminary
                            </h3>
                            
                            <svg
                                v-show="true"
                                :style="{
                                    opacity: activeDropdown === 'Seminary' ? 1 : 1,
                                    transform: activeDropdown === 'Seminary' ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: '0.3s ease-in-out, transform 0.5s ease-in-out',
                                }"
                                viewBox="0 0 1024 1024"
                                height="0.5rem"
                                width="1rem"
                                class="icon mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                >
                                <path
                                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                    fill="#000000"
                                />
                            </svg>
                        </div>

                        <!-- Parent Dropdown -->
                        <ul
                            v-show="true"
                            class="absolute mt-[-1rem] h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black z-10 "

                            :style="{
                            opacity: activeDropdown === 'Seminary' || activeDropdown === 'child-dropdown3' ? 1 : 0,
                            
                            transform: activeDropdown === 'Seminary' || activeDropdown === 'child-dropdown3' ? 'translateY(3rem)' : 'translateY(2.5rem)',

                            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',

                            visibility: activeDropdown === 'Seminary' || activeDropdown === 'child-dropdown3' ? 'visible' : 'hidden',
                            }"
                        >

                        <li class="border-b-2 border-gray-400 pb-3"><router-link to="/hood-speaks">About</router-link></li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">School Leadership</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Programs</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Admission and Funding</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Academic Calender and press release</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Students services</li>
                            <!-- Child Dropdown Trigger -->
                            <!-- <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @click.stop.prevent="toggleDropdown1('child-dropdown3')"
                                
                                >
                                

                                <div class="flex items-center">
                                    <h4>Annual Conferences</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown3' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown3' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        // transition: '1s ease-in-out, transform 0.5s ease-in-out',
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

                             Child Dropdown
                                <ul
                                    v-show="true"
                                    class="absolute left-[40%] top-0 bg-gray-100 p-4 pt-2 w-max text-black shadow-md overflow-y-auto max-h-64"
                                    :style="{
                                    opacity: activeDropdown === 'child-dropdown3' ? 1 : 0,
                                    zIndex: activeDropdown === 'child-dropdown3' ? 1 : -10,
                                    pointerEvents: activeDropdown === 'child-dropdown3' ? 'auto' : 'none',
                                    transform: activeDropdown === 'child-dropdown3' ? 'translateX(0)' : 'translateX(-5rem)',
                                    transition: 'opacity 1s ease-in-out, transform 0.3s ease-in-out',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-2"><router-link to="/the-churchh" >Nigeria Conference</router-link></li>
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
                            </li> -->
                        </ul>
          </li> 
        </ul>

        <ul class="">
          <li class="relative flex gap-2  items-start cursor-pointer"
                      >

                        <div class="flex flex-row items-center ">
                            
                            <h3 @click.stop.prevent="toggleDropdown1('Events')"
                            >
                            Events                            </h3>
                            
                            <svg
                                v-show="true"
                                :style="{
                                    opacity: activeDropdown === 'Events' ? 1 : 1,
                                    transform: activeDropdown === 'Events' ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: '0.3s ease-in-out, transform 0.5s ease-in-out',
                                }"
                                viewBox="0 0 1024 1024"
                                height="0.5rem"
                                width="1rem"
                                class="icon mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                >
                                <path
                                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                                    fill="#000000"
                                />
                            </svg>
                        </div>

                        <!-- Parent Dropdown -->
                        <ul
                            v-show="true"
                            class="absolute mt-[-1rem] h-auto space-y-2 bg-gray-100 pb-6 px-6 py-4 w-max text-black z-10 "

                            :style="{
                            opacity: activeDropdown === 'Events' || activeDropdown === 'child-dropdown3' ? 1 : 0,
                            
                            transform: activeDropdown === 'Events' || activeDropdown === 'child-dropdown3' ? 'translateY(3rem)' : 'translateY(2.5rem)',

                            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',

                            visibility: activeDropdown === 'Events' || activeDropdown === 'child-dropdown3' ? 'visible' : 'hidden',
                            }"
                        >

                            <li class="border-b-2 border-gray-400 pb-3"><router-link to="/event">Media Center</router-link> </li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Centennial Planning</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Upcoming events</li>
                            <li class="border-b-2 border-gray-400 pt-3 pb-3">Gallery</li>
                            
                            <!-- Child Dropdown Trigger -->
                            <!-- <li class="border-b-2 border-gray-400 pt-3 pb-3 relative"
                                @click.stop.prevent="toggleDropdown1('child-dropdown3')"
                                
                                >
                                

                                <div class="flex items-center">
                                    <h4>Annual Conferences</h4>
                                    <svg
                                    :style="{
                                        opacity: activeDropdown === 'child-dropdown3' ? 1 : 1,
                                        transform: activeDropdown === 'child-dropdown3' ? 'rotate(90deg)' : 'rotate(0deg)',
                                        // transition: '1s ease-in-out, transform 0.5s ease-in-out',
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

                             Child Dropdown
                                <ul
                                    v-show="true"
                                    class="absolute left-[40%] top-0 bg-gray-100 p-4 pt-2 w-max text-black shadow-md overflow-y-auto max-h-64"
                                    :style="{
                                    opacity: activeDropdown === 'child-dropdown3' ? 1 : 0,
                                    zIndex: activeDropdown === 'child-dropdown3' ? 1 : -10,
                                    pointerEvents: activeDropdown === 'child-dropdown3' ? 'auto' : 'none',
                                    transform: activeDropdown === 'child-dropdown3' ? 'translateX(0)' : 'translateX(-5rem)',
                                    transition: 'opacity 1s ease-in-out, transform 0.3s ease-in-out',
                                    }"
                                    >
                                    <li class="border-b-2 border-gray-400 pb-2"><router-link to="/the-churchh" >Nigeria Conference</router-link></li>
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
                            </li> -->
                        </ul>
          </li> 
        </ul>

        <li style="list-style: none;">
            Contact
        </li>

        <router-link to="/Donate">
                <button class="border-2 px-1 py-2 rounded-md w-[50%]" style="border: 1px solid #dec043;">
                        DONATE
                </button>
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

    <div class="flex justify-between px-5 h-20 items-center  relative z-10"
      :class="{ 'fixed-nav': isFixed, 'setNavBg': bgBlack  }">

        <div>                
          <img src="/images/logo/amezlogo.png" alt="" srcset="" height="60" width="100">
        </div>
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
    import { nextTick } from 'vue';
    import { useRoute, onBeforeRouteLeave } from 'vue-router';

    const sideBar = ref(false); 
    const sideBarVisible = ref(false); 
    const isFixed = ref(false);
    const bgBlack = ref(false);

    const isClicked = ref(false);


    const activeDropdown = ref('');

    
    const toggleDropdown1 = async (dropdown) => {
      isClicked.value = activeDropdown.value !== dropdown;
      activeDropdown.value = isClicked.value ? dropdown : '';
      await nextTick();
    };

  
    const setDropdownActive = (dropdown) => {
      if (!isClicked.value) {
        activeDropdown.value = dropdown;
      }
    };

    const handleMouseLeave = () => {
      if (!isClicked.value) {
        activeDropdown.value = '';
      }
    };



    const setSideBar = (toggleSideBar) => {
      sideBar.value = toggleSideBar;
      
      if(toggleSideBar){
        document.body.style.overflow = 'hidden';
      }

      else{
        document.body.style.overflow = 'auto';
      }
    };

      const handleLinkClick = (e) => {
        e.preventDefault();
      }

    

    onMounted(() => {
        setTimeout(() => {
            sideBarVisible.value = true;
        }, 0); 
    });

    const handleClickOutside = (event) => {
      const dropdownElements = document.querySelectorAll('.resetting');

      let isOutside = true;
      dropdownElements.forEach((dropdownElement) => {
        if (dropdownElement.contains(event.target)) {
          isOutside = false;
        }
      });

      if (isOutside) {
        activeDropdown.value = '';
        isClicked.value = false; // Reset the click flag
      }
    };


    // Attach and detach the click-outside listener
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });


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

    .setNavBg{
    background-color: black;
    /* border-bottom: none; */
}
</style>
