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

      <child myTitle="信息展示" :mysrc="img_path" >
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

      </child>
      
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
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
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