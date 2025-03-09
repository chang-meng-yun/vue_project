<template>
  <div id="app">
    <!-- <Hello></Hello> -->
    <!-- <VBindStudy></VBindStudy> -->
    <!-- <HomeWork></HomeWork> -->
    <!-- <reHome></reHome> -->
    <!-- <Model></Model> -->
    <!-- <FromFrame></FromFrame> -->
     <!-- <prents></prents> -->
     <!-- <div>来自父组件得值{{son_title}}</div>
      <son @son_to_parent="getValues"></son> -->

      <!-- <child myTitle="信息展示" :mysrc="img_path" > -->
        <child myTitle="学生信息展示" myTitle2="老师信息展示"  :tableData1="tableData1"></child>
       
      
    </div>
</template>
<script>
  // 导入组件
  import Hello from '@/Hello.vue'
  import VBindStudy from '@/VBindStudy'
  import HomeWork from '@/HomeWork'
  import reHome from './views/reHome.vue'
  import FromFrame from '@/FromFrame.vue'
  import prents from '@/prents.vue'
  import child from '@/child.vue'
   import son from './views/son.vue'
  // import Model from './views/Model.vue'
  export default {
    components: {
      Hello,
      VBindStudy,
      HomeWork,
      FromFrame,
      prents,
      child,
      son
      // Model
    },
    data() {
      return {
        tableData1: [{
            id: '1',
            name: '王小虎',
            age: '19'
          }, {
            id: '2',
            name: '王小虎',
            age: '20'
          }, {
            id: '3',
            name: '王小虎',
            age: '21'
          }, {
            id: '4',
            name: '王小虎',
            age: '22'
          }],
          tableData2: [{
            id: '1',
            name: '王小虎',
            age: '39'
          }, {
            id: '2',
            name: '王小虎',
            age: '32'
          }, {
            id: '3',
            name: '王小虎',
            age: '31'
          }, {
            id: '4',
            name: '王小虎',
            age: '32'
          }]
        // mark: true,
        // name: "张三",
        // mywidth: "350px",
        // myImage: require("./assets/花.jpg"),
        // img_path: require("@/assets/花.jpg"),
        // son_title:""
      }
    },
    methods: {
      controller_div() {
        this.mark = !this.mark
        console.log(this.mark)
      },
      changeSize() {
        this.mywidth = "500px"
      },
      changeImage() {
        console.log("pakaqiu")
        this.myImage = require("./assets/小樱花.webp")
      },
      getValues(n){
        this.son_title=n
      }
    }
  }
</script>
<style>
  .box {
    width: 200px;
    height: 200px;
    background-color: red;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>