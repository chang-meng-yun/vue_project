<template>
    <div>
        <el-form label-width="80px" :model="formLabelAlign">
            <el-input v-model="formLabelAlign.id" type="hidden"></el-input>
            <el-input v-model="formLabelAlign.password" type="hidden"></el-input>
            <el-input v-model="formLabelAlign.userrole" type="hidden"></el-input>
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
                <el-button type="primary" @click="submitForm()">修改</el-button>
                <el-button @click="resetForm()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {

            return {
                formLabelAlign: {
                    id: userObj.id,
                    password:'',
                    username: '',
                    address: '',
                    address: '',
                    userrole:''
                }

            }
        },
        methods: {
            submitForm() {
                        console.log(this.formLabelAlign)
                        this.$postRequest('/user/updateUser', this.formLabelAlign).then(res => {
                            
                            this.$message({
                                type: 'success',
                                message: '修改成功!'
                            });
                        })
            },
            // 取消修改
            resetForm() {
                this.$router.push({ path: '/main' })
                console.log(this.formLabelAlign)
            }
        },
        mounted() {
            this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
            // this.formLabelAlign.id = this.userObj.id;
            // this.formLabelAlign.password = this.userObj.password;
            // this.formLabelAlign.username = this.userObj.username;
            // this.formLabelAlign.address = this.userObj.address;
            // this.formLabelAlign.phone = this.userObj.phone;
            // this.formLabelAlign.userrole = this.userObj.userrole;
            console.log(this.userObj)
        },
    }
</script>