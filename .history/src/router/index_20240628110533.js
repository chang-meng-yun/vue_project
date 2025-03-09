import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/components/Main.vue'),
    children:[
      // 语言
      {
        path: 'lg',
        name: 'lg',
        component: ()=>import('@/components/lg.vue'),
        // 语言下面的子组件
        children:[
          {
            path: 'Java',
            name: 'Java',
            component: ()=>import('@/components/Java.vue')
          },
          {
            path: 'Python',
            name: 'Python',
            component: ()=>import('@/components/Python.vue')
          },
        ]
      },
    ]
  },
  
  // 爱好
  {
     path:'/love',
     name:'love',
     component: ()=>import('@/components/love.vue'),
    //  爱好下面的子组件
     children:[
      {
        path: 'sing',
        name: 'sing',
        component: ()=>import('@/components/sing.vue')
      },
      {
        path: 'swim',
        name: 'swim',
        component: ()=>import('@/components/swim.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
