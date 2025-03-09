<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row> -->
    
    <!-- <input  type="text" v-model="username"> -->
     <!-- <div  v-if="mark" class="box">
      div1-if标签
     </div> -->
     <!-- <el-button type="primary" v-on:click="controller_div()">控制div</el-button> -->
     <!-- <div  v-show ="mark" class="box"> -->
      <!-- div2-show标签 -->
     <!-- </div> -->
    <!-- <div>
      {{username}}
    </div> -->
    <!-- <router-view/> -->
     <!-- <hr> -->
  



     <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
       <img src="./assets/小雏菊.webp" v-bind:width="mywidth" />
       <el-button type="primary" @click="changeImage()">改变图片大小</el-button>
      </div>
    </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple-light">
      </div>
    </el-col>
    </el-row>




  
  </div>
</template>
<script>
  export default{
    data(){
      return{
        mark:true,
        name:"张三",
        mywidth:"410px"
      }
    },
    methods:{
     controller_div(){
        this.mark=!this.mark
        console.log(this.mark)
      },
      changeImage(){
        this.mywidth="500px"
      }
     }
    }
</script>
<style>
  .box{
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
