import Vue from 'vue'
import VueRouter from 'vue-router'

import Section from '../views/Section.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Section',
  component: Section,
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