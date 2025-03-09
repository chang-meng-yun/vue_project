<template>
    <div>
        <div style="float: left;width: 450px;">
            <h1>修改头像</h1>
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div style="float: left;width: 450px;">
        <h1 style="text-align: center;">修改密码</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
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
            id:'',
            username:'',
            phone:'',
            address:'',
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
        //  this.ruleForm.id = this.userObj.id;
        
          this.$refs[formName].validate((valid) => {
            this.userObj.password = this.ruleForm.newpassword;
            if (valid) {
            //   console.log(this.ruleForm)
              console.log(this.userObj)
            this.$postRequest('/user/updatePassword',this.userObj).then(res => {
                this.$router.push({path:'/main'})
                this.$message({
							type: 'success',
							message: '修改成功!'
						});
            })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        // 取消修改
        resetForm(formName) {
        //   this.$refs[formName].resetFields();
        this.$router.push({path:'/main'})
        }
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