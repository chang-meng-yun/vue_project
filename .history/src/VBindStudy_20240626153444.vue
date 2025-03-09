<template>
<div>
    <div :class="my_class">111111</div>
    <!-- <div :"my_class:['false']">222222</div> -->
    <el-button type="primary" @click="bind_class()">改变</el-button>
    <hr>
    <table border="1">
        <tr>
            <td>编号</td>
            <td>姓名</td>
            <td>年龄</td>
        </tr>
        <tr v-for="(obj,index) in person" :key="index">
            <td>{{obj.id}}======{{index}}</td>
            <td>{{obj.name}}</td>
            <td>{{obj.age}}</td>
        </tr>
    </table>
</div>
</template>
<script>
  export default{
    data(){
        return{
            // 数组
            my_class:["div_class"],
            person:[
                {id:"1001",name:"张三1",age:21},
                {id:"1002",name:"张三2",age:22},
                {id:"1003",name:"张三3",age:23},
            ]
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