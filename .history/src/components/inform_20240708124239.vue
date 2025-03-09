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