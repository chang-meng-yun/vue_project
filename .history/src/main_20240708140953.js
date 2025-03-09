import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
// import { from } from 'core-js/core/array';
// 导入axios
// import axios from 'axios';
Vue.config.productionTip=false;
Vue.use(ElementUI);


// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 注册全局变量
// Vue.prototype.$axios=axios;
// 引入封装的请求工具类
import { postRequest } from './utils/api';
import {putRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
// 注册全局变量
Vue.prototype.$postRequest = postRequest;
Vue.prototype.$putRequest = putRequest;
Vue.prototype.$getRequest = getRequest;
Vue.prototype.$deleteRequest = deleteRequest;

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
  store,
  render: h => h(App)
// 将创建的共享数据对象，挂载到 Vue 实例中
// 所有的组件，就可以直接从 store 中获取全局的数据了

}).$mount('#app')


