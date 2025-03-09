<template>
    <div>
        <div>
         <el-input v-model="username" placeholder="请输入内容"></el-input> 
         <el-input type="success" @click="sub()">提交数据</el-input> 
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