import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: /a,
    name: 'A',
    component:  () => import('/src/components/A.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import( '../views/main.vue'),
    // main页面下面的子页面
    children:[
      {
      path:'bill',
      name:'bill',
      component: () => import( '@/components/bill.vue'),
      },
      {
        path:'supply',
        name:'supply',
        component: () => import( '@/components/supply.vue'),
      },
      {
        path:'FrontFrame',
        name:'FrontFrame',
        component: () => import( '@/components/FrontFrame.vue'),
      },
      {
        path:'FromFrame',
        name:'FromFrame',
        component: () => import( '@/components/FromFrame.vue'),
      },

  ]
  },

]

const router = new VueRouter({
  routes
})

export default router
