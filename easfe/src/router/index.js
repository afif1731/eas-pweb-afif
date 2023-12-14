import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/landing.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/register.vue')
    }
  ]
})

export default router
