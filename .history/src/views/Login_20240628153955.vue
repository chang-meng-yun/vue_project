<template>
    <div class="LoginAll">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3 class="title" style="line-height: 40px;">xx后台管理系统</h3>
            </div>
            <el-form :label-position="labelPosition" label-width="5px" :model="formLabelAlign">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign.name" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="formLabelAlign.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-row>
                        <el-col :span="16">
                            <el-input v-model="formLabelAlign.code" placeholder="验证码"></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input placeholder="图片验证码"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="float: left;margin-left: 75px;">登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    password: '',
                    code: ''
                }
            };
        },
        methods: {
            onSubmit(){
                this.$router.push('/main');
            }
        },
    }

</script>
<style>
  
    .LoginAll{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: url('../assets/登录背景图2.jpg') no-repeat;
        background-size: cover;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
    .clearfix{
        height: 30px;
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
</style>