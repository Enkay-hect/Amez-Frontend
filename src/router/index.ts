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
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
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

    {
      path: '/Annual-Conference/Central-Nigeria-Conference',
      name: 'Central-Nigeria-Conference',
      component: () => import('../components/Conferences/CentralNigeriaConference.vue'),
    },

    {
      path: '/Annual-Conference/Rivers-Nigeria-Conference',
      name: 'Rivers-Nigeria-Conference',
      component: () => import('../components/Conferences/RiversNigeriaConference.vue'),
    },

    {
      path: '/Annual-Conference/Mainland-Nigeria-Conference',
      name: 'Mainland-Nigeria-Conference',
      component: () => import('../components/Conferences/MainlandNigeriaConference.vue'),
    },

    {
      path: '/Annual-Conference/Northern-Nigeria-Conference',
      name: 'Northern-Nigeria-Conference',
      component: () => import('../components/Conferences/NorthernNigeriaConference.vue'),
    },

    {
      path: '/Annual-Conference/PortHarcourt-Conference',
      name: 'PortHarcourt-Nigeria-Conference',
      component: () => import('../components/Conferences/PortHarcourtNigeriaConference.vue'),
    },

    {
      path: '/Annual-Conference/SouthEastern-Conference',
      name: 'SouthEastern-Nigeria-Conference',
      component: () => import('../components/Conferences/SouthEasternNigeriaConference.vue'),
    },

    {
      path: '/Annual-Conference/CrossRiver-Conference',
      name: 'CrossRiver-Nigeria-Conference',
      component: () => import('../components/Conferences/CrossRiverNigeriaConference.vue'),
    },


    {
      path: '/Annual-Conference/AkwaNigeria-Conference',
      name: 'Akwa-Nigeria-Conference',
      component: () => import('../components/Conferences/AkwaNigeriaConference.vue'),
    },

    {
      path: '/Annual-Conference/LagosWestNigeria-Conference',
      name: 'LagosWest-Nigeria-Conference',
      component: () => import('../components/Conferences/LagosWestAnnualConference.vue'),
    },



    ///ConnectionLayCouncil
  ],
})

export default router
