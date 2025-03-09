import Vue from 'vue'
import Vuex from 'vuex'
// 注册为全局变量
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        num:0
    },
    mutations: {
        changeNum(state){
               state.num = 100
        }
    },
    actions: {
    },
    getters:{
    }
})