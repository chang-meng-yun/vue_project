<template>
    <div>
        <h1>A</h1>
        <h1>{{this.$store.state.num}}</h1>
        <el-button type="primary" @click="change()">修改vue属性中全局变量得值</el-button>
    </div>
</template>
<script>
    export default{
        data(){
        return{

        }
    },
    methods: {
        change(){
            this.$store.commit('changeNum')
        }
    },
    }
  
</script>