import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: 'pokemon' */ '@/views/Pokemon.vue')
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetails',
    component: () => import(/* webpackChunkName: 'pokemon' */ '@/components/PokemonDetails.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
