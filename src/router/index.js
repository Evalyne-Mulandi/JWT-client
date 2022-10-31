import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
 
 import visit from '@/views/visit.vue'
 

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  
  {
    path: '/visit',
    name: 'visit',
    component:  visit
  },
   
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
