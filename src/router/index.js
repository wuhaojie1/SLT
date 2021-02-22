import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
