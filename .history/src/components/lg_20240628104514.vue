<template>
    <div>
        <el-row>
            <!-- 左边 -->
            <el-col :span="8"><div class="grid-content bg-purple">
                <div>
                    <router-link to="/lg/Java" >Java</router-link>
                </div>
                <div>
                    <router-link to="/lg/Python" >Python</router-link>
                </div>
            </div></el-col>
            <!-- 右边 -->
            <el-col :span="16"><div class="grid-content bg-purple-light">
              <router-link to="">显示区域</router-link>
            </div></el-col>
          </el-row>
    </div>
</template>
<script>

</script>
<style>

</style>