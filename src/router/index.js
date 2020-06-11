import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Museum from '../views/Museum.vue'
import Park from '../views/Park.vue'
import Restaurant from '../views/Restaurant.vue'
import Sightseeing from '../views/Sightseeing.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/museum',
    name: 'museum',
    component: Museum
  },
  {
    path:'/park',
    name: 'park',
    component: Park
  },
  {
    path:'/restaurant',
    name: 'restaurant',
    component: Restaurant
  },
  {
    path:'/sightseeing',
    name: 'sightseeing',
    component: Sightseeing
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
