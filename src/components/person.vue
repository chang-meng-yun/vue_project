<template>
        <div style="float: left;width: 450px;">
            <h1 style="text-align: center;">修改密码</h1>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm">
                <el-input v-model.id="ruleForm.id" type="hidden"></el-input>
                <!-- <el-form-item label="用户名" prop="username">
                <el-input v-model.number="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model.number="ruleForm.address"></el-input>
            </el-form-item> -->
                <el-form-item label="原密码" prop="password">
                    <el-input v-model.number="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="newpassword">
                    <el-input type="password" v-model="ruleForm.newpassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm()">取消</el-button>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id: '',
                    // username: '',
                    // phone: '',
                    // address: '',
                    password: '',
                    checkPass: '',
                    newpassword: ''
                },
                rules: {
                    newpassword: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    ],
                    checkPass: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' },
                    ],
                    password: [
                    { required: true, message: '请输入输入密码', trigger: 'blur' },
                    ]
                }
            };
        },
        methods: {
            submitForm() {
                        this.ruleForm.id = this.userObj.id;
                          console.log(this.ruleForm)
                        // console.log(this.userObj)
                        this.$postRequest('/admin/updatePassword', this.ruleForm).then(res => {
                            // this.$router.push({ path: '/main' })
                });
            },
            // 取消修改
            resetForm(formName) {
                //   this.$refs[formName].resetFields();
                this.$router.push({ path: '/main' })
            },
    },
    mounted() {
        this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
        this.ruleForm.username = this.userObj.username;
        this.ruleForm.phone = this.userObj.phone;
        this.ruleForm.address = this.userObj.address;
        console.log(this.userObj)
    },
    }
</script>
<style>
    
</style>