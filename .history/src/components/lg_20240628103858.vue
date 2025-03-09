<template>
    <div>
        <el-row>
            <!-- 左边 -->
            <el-col :span="8"><div class="grid-content bg-purple">
                <div>
                    <router-link to="" >Java</router-link>
                </div>
                <div>
                    <router-link to="" >Python</router-link>
                </div>
            </div></el-col>
            <!-- 右边 -->
            <el-col :span="16"><div class="grid-content bg-purple-light">
              <router-link to="/love">显示区域</router-link>
            </div></el-col>
          </el-row>
    </div>
</template>
<script>

</script>
<style>

</style>