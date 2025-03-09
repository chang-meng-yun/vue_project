import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import { from } from 'core-js/core/array';
// 导入axios
import axios from 'axios';
Vue.config.productionTip=false;
Vue.use(ElementUI);
// 注册全局变量
Vue.prototype.$axios=axios;

// 前置守卫 相当于后端的拦截器
router.beforeEach((to,from,next)=>{
  console.log("打印");
  if(to.path=="/main" && sessionStorage.getItem("userObj")!= null){
  // 判断用户是否登录
  console.log("正常登录")
  next()
  }else{
    if(to.path=="/main"){
      next("/")
    console.log("非法登录")
    }else{
      next()
    }
  }
});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
