<template>
    <div>
        <!-- <el-row>
            左边
            <el-col :span="8"><div class="grid-content bg-purple">
                <div>
                    <router-link to="/lg/Java" >Java</router-link>
                </div>
                <div>
                    <router-link to="/lg/Python" >Python</router-link>
                </div>
            </div></el-col>
            右边
            <el-col :span="16"><div class="grid-content bg-purple-light">
                <router-view></router-view>
            </div></el-col>
          </el-row> -->





        <el-container>
            <!-- 左边 -->
            <el-aside width="200px">
                <div class="grid-content bg-purple">
                    <div>
                        <router-link to="/lg/Java" >Java</router-link>
                    </div>
                    <div>
                        <router-link to="/lg/Python" >Python</router-link>
                    </div>
                </div>
            </el-aside>
            <!-- 中间 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>

</script>
<style>

</style>