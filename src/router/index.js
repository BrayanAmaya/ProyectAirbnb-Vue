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
    path: '/alojamientoUser/',
    name: 'alojamientoUser',
    component: () => import( '../views/usuario/AlojamientoView.vue')
  },

  {
    path: '/inicio',
    component: () => import( '../views/usuario/InicioView.vue')
  },
 
  {
    path: '/inicio/:id',
    name: 'inicio',
    component: () => import( '../views/usuario/InicioView.vue')
  },

  {
    path: '/reservar/:idServicio',
    name: 'reserva',
    component: () => import( '../views/usuario/ReservaView.vue')
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
