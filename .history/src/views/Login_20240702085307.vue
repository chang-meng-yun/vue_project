<template>
    <div class="LoginAll">
        <el-card class="box-card">
            <div class="clearfix">
                <h3 class="title">xx后台管理系统</h3>
            </div>
            <el-form :model="userObj" status-icon class="demo-ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item prop="userCode">
                    <el-input v-model="userObj.userCode" placeholder="用户名" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="userPassword">
                    <el-input v-model="userObj.userPassword" placeholder="密码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-row>
                        <el-col :span="16">
                            <el-input v-model="userObj.code" placeholder="验证码" autocomplete="off"></el-input>
                        </el-col>
                        <el-col :span="8">
                            <!-- <el-input placeholder="图片验证码"></el-input> -->
                            <img :src="verifyCodeImg" class="imgCode">
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')"
                        style="float: left;margin-left: 75px;">登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    export default {
        mounted() {
            // 获取验证码 
            this.verifyCodeImg = '/login/verifyCode?temp=' + new Date();
        },
        data() {
            return {
                rules: {
                    userCode: [{
                        required: true,
                        message: '账号不能为空',
                        trigger: 'blur'
                    }],
                    userPassword: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }],
                    code: [{
                        required: true,
                        message: '验证码不能为空',
                        trigger: 'blur'
                    }],
                },
                labelPosition: 'right',
                userObj: {
                    userCode: '',
                    userPassword: '',
                    code: ''
                },
                verifyCodeImg: "",
                formLabelAlign: {
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!'+this.message);
                        // 给后台发送请求
                        console.log(this.userObj)
                        this.$axios.post("/login/login_system", this.userObj).then(res => {
                            // sessionStore中
                            console.log("登录的结果" + JSON.stringify(res))
                            var code = res.data.code;
                            console.log("====" + code)
                            if (code == 200) {
                                var userObj = res.data.data.userObj;
                                sessionStorage.setItem("userObj", JSON.stringify(userObj));
                                // 页面跳转
                                this.$router.push({ path: '/main' })
                            } else {
                                // 错误的信息

                            }

                        })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // onSubmit() {
            //     // 存储用户个人信息 
            //     var userMessage = { userName: "张三", password: "111" }
            //     sessionStorage.setItem("userObj", JSON.stringify(userMessage))
            //     this.$router.push({ path: '/main' })
            // }
        },
    }

</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .LoginAll {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: url('../assets/背景图3.webp') no-repeat;
        background-size: cover;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix {
        height: 50px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 400px;

    }

    .imgCode {
        width: 100px;
        height: 40px;
        margin-left: 10px;
    }
</style>