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







        <el-container>
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
              <el-aside width="200px">Aside</el-aside>
              <el-main>Main</el-main>
            </el-container>
          </el-container>
    </div>
    
</template>
<script>

</script>
<style>

</style>