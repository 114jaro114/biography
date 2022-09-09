import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Home0 from '../views/Home0.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    allowAnonymous: true
  },
}, {
  path: '/test',
  name: 'Home0',
  component: Home0,
  meta: {
    allowAnonymous: true
  },
}]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})


export default router