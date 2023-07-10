import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Products.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
