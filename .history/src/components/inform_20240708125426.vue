<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules"
            ref="ruleForm" class="demo-ruleForm">
            <el-input v-model="formLabelAlign.id" type="hidden"></el-input>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formLabelAlign.username"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model="formLabelAlign.address"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="formLabelAlign.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    address: [
                        { required: true, message: '请输入地址', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'change' }
                    ],
                },
                formLabelAlign: {
                    username: '',
                    address: '',
                    address: ''
                }

            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // 取消修改
            resetForm(formName) {
                this.$router.push({ path:'/main' })
            }
        },
        mounted() {
            this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
            this.formLabelAlign.username = this.userObj.username;
            this.formLabelAlign.address = this.userObj.address;
            this.formLabelAlign.phone = this.userObj.phone;
            console.log(this.userObj)
        },
    }
</script>