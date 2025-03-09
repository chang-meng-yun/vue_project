import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import { from } from 'core-js/core/array';

Vue.use(ElementUI);

// 前置守卫 相当于后端的拦截器
router.beforeEach((to,from,next)=>{
  console.log("打印");
  if(to.path=="/main" && sessionStorage.getItem("userObj")!= null){
  // 判断用户是否登录
  console.log("正常登录")

  }else{
  next()
  }
});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
