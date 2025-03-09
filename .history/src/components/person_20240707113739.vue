<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-input v-model.id="ruleForm.id"></el-input>
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
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
      data() {
        var password = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('请输入原密码'));
          }else{
            setTimeout(() => {
              if (this.ruleForm.password != this.userObj.password) {
                callback(new Error('密码不正确'));
                console.log("aaa")
                console.log(this.ruleForm.password)
                console.log(this.userObj.password)
              } else {
                callback();
              }
          }, 1000);
        }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.newpassword) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            password: '',
            checkPass: '',
            newpassword: ''
          },
          rules: {
            newpassword: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            password: [
              { validator: password, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.ruleForm)
              console.log(this.userObj)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      mounted() {
        this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
        console.log(this.userObj)
      },
    }
  </script>