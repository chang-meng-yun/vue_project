<template>
    <div>
      
         







        <el-container>
            <el-header>
                <el-row>
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
            </el-header>
            <el-container>
              <el-aside width="200px">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <router-view></router-view>
                    </div>
            </el-row>
              </el-aside>
              <el-main>Main</el-main>
            </el-container>
          </el-container>
    </div>
    
</template>
<script>

</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>