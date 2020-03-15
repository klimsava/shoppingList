import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('../views/Register')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main'},
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/ditail',
      name: 'ditail',
      meta: {layout: 'main'},
      component: () => import('../views/Detail')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main'},
      component: () => import('../views/History')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'main'},
      component: () => import('../views/Planning')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('../views/Profile')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main'},
      component: () => import('../views/Record')
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('../views/Home')
    }
  ]
});
