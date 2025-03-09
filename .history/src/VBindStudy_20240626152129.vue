<template>
<div>
    <div :class="my_class"> </div>
        <el-button type="primary" @click="bind_class()">改变大小</el-button>
</div>
</template>
<script>
  export default{
    data(){
        return{
            // 数组
            my_class:["div_class"]
        }
    },
    methods:{
        bind_class(){
       this.my_class.push('div_class_two')
        }
    },
    components:{

    }
  }
</script>
<style>
.div_class{
    background-color: red;
    height: 200px;
    width: 200px;
}
.div_class_two{
    font-size: x-large;
    color: blue;
}
</style>