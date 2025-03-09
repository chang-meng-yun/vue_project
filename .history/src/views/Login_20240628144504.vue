<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3 class="title">xx后台管理系统</h3>
                <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="">
                  <el-input v-model="formLabelAlign.name" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-input v-model="formLabelAlign.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                  <el-input v-model="formLabelAlign.code" placeholder="验证码"></el-input>
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
    }
  }

</script>
<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
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
        width: 480px;
    }
</style>