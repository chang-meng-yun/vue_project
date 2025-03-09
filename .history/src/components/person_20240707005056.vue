<template>
    <div>
        111
        <el-form :model="userObj" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="userObj.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input v-model="userObj.password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="name">
                <el-input v-model="userObj.passwordage"></el-input>
              </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
        },
        date(){
            return{
                userObj:{
                    name:'',
                    password:'',
                    passwordage


                }
            }
        },
        methods: {
            
        },

    }
</script>