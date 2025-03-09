<template>
    <div>
        <div>
         <el-input v-model="username" placeholder="请输入内容"></el-input> 
         <el-button type="success" @click="sub()">提交数据</el-button> 
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                username:''
            }
        },
        props:[],
        methods: {
            
        },
        components:{

        }
    }

</script>
<style>

</style>