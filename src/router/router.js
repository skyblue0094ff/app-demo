import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'

    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: () => import('@/pages/Ceshi.vue')
    },
    { path: '*', redirect: '/404' },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/404/404.vue')
    }
  ]
})
