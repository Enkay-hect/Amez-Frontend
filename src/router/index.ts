import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue'),
    },
    
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/the-church',
      name: 'the-church',
      component: () => import('../views/TheChurch.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/Event.vue'),
    },
    {
      path: '/hood-speaks',
      name: 'hood-speaks',
      component: () => import('../views/HoodSpeaks.vue'),
    },
    ,
    {
      path: '/the-bishop',
      name: 'the-bishop',
      component: () => import('../views/Bishop.vue'),
    },
    {
      path: '/BAA',
      name: 'Bishop-Administrative-Assistant',
      component: () => import('../views/TheBAA.vue'),
    },
    {
      path: '/field-workers',
      name: 'field-workers',
      component: () => import('../views/FieldWorkers.vue'),
    },
    {
      path: '/missionary-supervisor',
      name: 'missionary-supervisor',
      component: () => import('../views/Missionary.vue'),
    },
    {
      path: '/men-of-zion',
      name: 'Men-of-Zion',
      component: () => import('../views/MOZ.vue'),
    },
    {
      path: '/directorate-youth',
      name: 'youth',
      component: () => import('../views/Youth.vue'),
    },
    {
      path: '/connectional-lay-council',
      name: 'ConnectionLayCouncil',
      component: () => import('../views/ConnectionLayCouncil.vue'),
    },
    {
      path: '/About-Us',
      name: 'ABout Us',
      component: () => import('../views/Aboutus.vue'),
    },
    {
      path: '/Departments',
      name: 'Departments',
      component: () => import('../views/Departments.vue'),
    },
    {
      path: '/Donate',
      name: 'Donate',
      component: () => import('../views/Donate.vue'),
    },
    {
      path: '/Music',
      name: 'Music',
      component: () => import('../views/Music.vue'),
    },
    {
      path: '/Youth',
      name: 'Youth',
      component: () => import('../views/Youth.vue'),
    },
    {
      path: '/Annual-Conference/Nigeria-Conference',
      name: 'Nigeria-Conference',
      component: () => import('../components/Conferences/NigeriaConference.vue'),
    },




    ///ConnectionLayCouncil
  ],
})

export default router
