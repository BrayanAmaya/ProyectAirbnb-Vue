import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
   
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },

  {
    path: '/alojamiento',
    name: 'alojamiento',
    component: () => import( '../views/AlojamientoView.vue')
  },

  
  {
    path: '/inicio/:id',
    name: 'inicio',
    component: () => import( '../views/usuario/InicioView.vue')
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
