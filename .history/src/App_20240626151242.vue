<template>
  <div id="app">

  




    <Hello></Hello>
    <VBindStudy></VBindStudy>
  </div>
</template>
<script>
  // 导入组件
  import Hello from '@/Hello.vue'
  import Hello from '@/VBindStudy'
  export default{
    components:{
        Hello,
        VBindStudy
    },
    data(){
      return{
        mark:true,
        name:"张三",
        mywidth:"350px",
        myImage:require("./assets/花.jpg")
      }
    },
    methods:{
     controller_div(){
        this.mark=!this.mark
        console.log(this.mark)
      },
      changeSize(){
        this.mywidth="500px"
      },
      changeImage(){
        console.log("pakaqiu")
        this.myImage=require("./assets/小樱花.webp")
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
