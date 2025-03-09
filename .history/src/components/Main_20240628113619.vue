<template>
    <div>
        <!-- <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <router-link to="/lg">编程语言</router-link>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <router-link to="/love">个人爱好</router-link>
                </div>
            </el-col>
        </el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <router-view></router-view>
                </div>
        </el-row> -->






<!-- 盒子容器 -->
        <el-container>
            <!-- 头部 -->
            <el-header>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <router-link to="/lg">编程语言</router-link>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <router-link to="/love">个人爱好</router-link>
                    </div>
                </el-col>
            </el-header>
            <el-container>
                <!-- 左边 -->
                <el-aside width="200px">
                    <div class="grid-content bg-purple">
                        <router-view></router-view>
                    </div>
                </el-aside>
                <!-- 中间 -->
                <el-main>
                    <!-- <router-view></router-view> -->
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>
<script>

</script>
<style>
      .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>