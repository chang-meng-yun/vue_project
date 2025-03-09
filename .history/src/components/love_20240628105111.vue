<template>
    <div>
        <el-row>
            <!-- 左边 -->
            <el-col :span="8"><div class="grid-content bg-purple">
                <div>
                    <router-link to="/love/sing" >sing</router-link>
                </div>
                <div>
                    <router-link to="/love/swim" >swim</router-link>
                </div>
            </div></el-col>
            <!-- 右边 -->
            <el-col :span="16"><div class="grid-content bg-purple-light">
             欢迎页面
                <router-view></router-view>
            </div></el-col>
          </el-row>
    </div>
</template>
<script>

</script>
<style>

</style>