<template>
    <div>
        <el-form :model="userObj" status-icon class="demo-ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="userCode">
                <el-input v-model="userObj.userCode" placeholder="用户名" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="userPassword">
                <el-input v-model="userObj.userPassword" placeholder="密码" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        mounted() {
            
        },
        date(){
            return{

            }
        },
        methods: {
            
        },

    }
</script>