<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-input v-model="formLabelAlign.id" type="hidden"></el-input>
            <el-form-item label="用户名">
                <el-input v-model="formLabelAlign.username  "></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="formLabelAlign.address"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="formLabelAlign.address"></el-input>
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
                formLabelAlign: {
                    username: '',
                    address: '',
                    address: ''
                }
            }
        },
        methods: {

        },
        mounted() {

        },
    }
</script>