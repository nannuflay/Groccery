import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

const Register = () => import(/* webpackChunkName: 'Register' */ '@/views/user/Register')
const Panier = () => import(/* webpackChunkName: 'Panier' */ '@/views/Panier')
const Fruits = () => import(/* webpackChunkName: 'Fruits' */ '@/views/store/Fruits')
const Legumes = () => import(/* webpackChunkName: 'Legumes' */ '@/views/store/Legumes')
const Olives = () => import(/* webpackChunkName: 'Olives' */ '@/views/store/Olives')
const Salades = () => import(/* webpackChunkName: 'Salades' */ '@/views/store/Salades')
const Herbes = () => import(/* webpackChunkName: 'Herbes' */ '@/views/store/Herbes')
const Epices = () => import(/* webpackChunkName: 'Epices' */ '@/views/store/Epices')
const Packs = () => import(/* webpackChunkName: 'Packs' */ '@/views/store/Packs')
const Offers = () => import(/* webpackChunkName: 'Offers' */ '@/views/store/Offers')
const Poules = () => import(/* webpackChunkName: 'Poules' */ '@/views/store/meat')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/panier',
    name: 'Panier',
    component: Panier
  },
  {
    path: '/fruits',
    name: 'Fruits',
    component: Fruits
  },
  {
    path: '/legumes',
    name: 'Legumes',
    component: Legumes
  },
  {
    path: '/olives',
    name: 'Olives',
    component: Olives
  },
  {
    path: '/herbes',
    name: 'Herbes',
    component: Herbes
  },
  {
    path: '/salades',
    name: 'Salades',
    component: Salades
  },
  {
    path: '/epices',
    name: 'Epices',
    component: Epices
  },
  {
    path: '/packs',
    name: 'Packs',
    component: Packs
  },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/poules',
    name: 'Poules',
    component: Poules
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
