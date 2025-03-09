<template>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside :width="asideW" style="background-color: rgb(238, 241, 246);
	  height: 100%;box-shadow: 2px 0 6px rgb(0 21 41 / 35%);">
            <el-menu style="height: 100%;overflow-x: hidden;" background-color="rgb(48,68,88)" text-color="#fff"
                active-text-color="#ffd04b" :collapse-transition="false" :collapse="isCollspan" router>
                <!-- 左上角logo区域 -->
                <div style="height: 60px;line-height: 60px;text-align: center;">
                    <img src="../assets/logo.png" alt="" width="20px"
                        style="position: relative;top: 5px;margin-right: 5px;">
                    <b style="color: white;" v-show="myTitle">超市订单管理系统</b>
                </div>
                <!-- 用户管理 -->
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">系统设置</span>
                    </template>
                    <!-- 简单的权限判断 -->
                    <el-menu-item index="/main/user" v-if="userObj.userrole==1">用户管理</el-menu-item>
                    <el-menu-item index="/main/person" v-if="userObj.userrole>1">用户管理</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-shopping-cart-2"></i>
                        <span slot="title">订单管理</span>
                    </template>
                    <el-menu-item index="/main/bill">订单管理</el-menu-item>
                </el-submenu>
                <!-- 地址管理 -->
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-office-building"></i>
                        <span slot="title">地址管理</span>
                    </template>
                    <el-menu-item index="/main/address">地址管理</el-menu-item>
                </el-submenu>
                <!-- 供应商管理 -->
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-odometer"></i>
                        <span slot="title">供应商管理</span>
                    </template>
                    <el-menu-item index="/main/supply">供应商管理</el-menu-item>
                </el-submenu>

                <!-- 老师管理 -->
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-user"></i>
                        <span slot="title">老师管理</span>
                    </template>
                    <el-menu-item index="/main/teacher">老师管理</el-menu-item>
                </el-submenu>

                <!-- 图表管理 -->
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-pie-chart"></i>
                        <span slot="title">图表管理</span>
                    </template>
                    <el-menu-item index="/main/bill">每月分析</el-menu-item>
                </el-submenu>

            </el-menu>
        </el-aside>
        <el-container>
            <!-- 头部内容 -->
            <el-header style="font-size: 14px;border-bottom: 1px solid #ccc;line-height: 60px;display: flex;">
                <!-- div收缩按钮 -->
                <div style="flex: 1;font-size: 18px;">
                    <span :class="collspanBtnClass" @click="collspanBtn">
                    </span>
                </div>

                <el-upload class="avatar-uploader" action="/login/fileUpload" :show-file-list="false"
                    :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="userObj.user_face" :src="userObj.user_face" class="avatar"
                        style="width: 30px;height: 30px; border-radius: 50%;position: relative;top:0px;margin-right: 5px;">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-dropdown style="width: 150px;cursor: pointer;">

                    <div>
                        <!-- <img :src="userObj.user_face" alt=""
                            style="width: 30px;height: 30px; border-radius: 50%;position: relative;top:5px;margin-right: 5px;"> -->
                        <span>{{userObj.name}}</span><i class="el-icon-arrow-down" style="margin-left: 10px;"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <span @click="userInfo">个人信息</span>
                        </el-dropdown-item>
                        <el-dropdown-item><span @click="exit()">退出系统</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <!-- 内容显示区域 -->
            <el-main>
                <!-- 路由显示区域 -->
                <el-breadcrumb v-if="this.$router.currentRoute.path!='/main'">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
                    <el-divider></el-divider>
                </el-breadcrumb>

                <div v-if="this.$router.currentRoute.path=='/main'">
                    <h1>欢迎进入超市订单管理系统</h1>
                </div>
                <!-- 二级路由打开的地方 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                imageUrl: '',
                //用户对象
                userObj: {
                    name: "",
                    userImg: "",
                    userRole: "",
                    // user_face
                },
                collspanBtnClass: 'el-icon-s-fold',
                isCollspan: false,
                asideW: "200px",
                myTitle: true,
            }
        },
        mounted() {
            this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
        },
        methods: {
            // 没有执行
            collspanBtn() {
                this.isCollspan = !this.isCollspan;
                if (this.isCollspan) {
                    this.asideW = "64px";
                    this.collspanBtnClass = 'el-icon-s-unfold',
                        this.myTitle = false;
                } else {
                    this.asideW = "200px";
                    this.collspanBtnClass = 'el-icon-s-fold',
                        this.myTitle = true;
                }
            },
            userInfo() {
                this.$router.push('/main/person');
            },
            exit() {
                this.$router.push("/")
                //清除前端的sessionStore
                sessionStorage.removeItem("userObj")
            },
            handleAvatarSuccess(res, file) {
                console.log("打印输出的结果"+JSON.stringify(res))
                this.userObj.user_face=res.data.image_path;
                console.log(this.userObj)
                this.$deleteRequest('/login/fileUpload?id=' +this.userObj.id).then(res => {
                    console.log(this.userObj.id)
                        
                    })
                // this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },

    };
</script>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>