<template>
    <div>
        <!-- 功能区域 -->
        <div style="float: left;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                    <el-button type="danger" @click="deleteAll">批量删除</el-button>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="formInline.user" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="formInline.address" placeholder="地址"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="saveuser()">添加</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="query()">查询</el-button>
                </el-form-item>
            </el-form>
        </div>


        <!-- 数据显示区 -->
        <div>
            <el-table :data="userData" stripe style="width: 100%">
                <el-table-column prop="id" label="用户ID" width="180"></el-table-column>
                <el-table-column prop="userName" label="用户名" width="180"></el-table-column>
                <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="password" label="密码"></el-table-column>
                <el-table-column prop="user_face" label="头像"></el-table-column>
                <el-table-column prop="roleName" label="角色"></el-table-column>
                <!-- @click="handleDelete(scope.$index, scope.row)" -->
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="open(scope.$index, scope.row)">
                            删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
      	<!-- 分页 -->
		<div class="block" style="margin-top: 20px;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
				:currentPage="queryCondition.currentPage" :page-sizes="[5, 10]" :page-size="100"
				:page_size="queryCondition.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
        <!-- 保存的面板 对话框 -->
        <el-dialog title="收货地址" :visible.sync="adduser">
            <el-form :model="addform">
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-input v-model="addform.date" autocomplete="off" type="date"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="addform.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="addform.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="adduser = false">取 消</el-button>
                <el-button type="primary" @click="oneuser()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        mounted() {
                this.query()
            },
        data() {
            return {
                // 添加面板
                addform: {
                    name: '',
                    address: '',
                    date: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                // 表格
                userData: [],
                formInline: {
                    user: '',
                    region: '',
                    date: '',
                },
                // 分页有关的属性
                // currentPage: 1,
                total: 10,
                //查询条件
                queryCondition: {
                    "address": "",
                    "currentPage": '',
                    "id": '',
                    "pageSize": '',
                    "password": "",
                    "phone": "",
                    "userName": "",
                    "userRole": '',
                    "user_face": ""
                },

            }
        },
        methods: {
            // 查询按钮的功能
			query() {
				this.$postRequest('/user/queryLimit', this.queryCondition).then(res => {
					console.log(res.data.userData)
					if (res) {
						// this.providerList = res.data.providers;
						this.userData = res.data.userData;
						this.total = res.data.total;
					}
				})

			},
            handleEdit(index, row) {
                // 修改一条数据
                console.log(index, row);
            },
            open(index, row) {
                this.$confirm('确认要删除该数据吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.tableData.splice(index, index)
                    // console.log("删除到这一步")
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleSizeChange(val) {
                // 显示每页多少条数据
                console.log(`每页 ${val} 条`);
                this.queryCondition.pageSize = val;
				this.query();
            },
            handleCurrentChange(val) {
                // 显示当前几页
                console.log(`当前页: ${val}`);
                this.queryCondition.currentPage = val;
				this.query();
            },
            deleteAll() {
                // 批量删除
                console.log("deleteAll====")
            },
            saveuser() {
                this.adduser = true;
                // 添加
                console.log("adduser====");
            },
            // 点击确认添加按钮
            oneuser() {
                this.adduser = false;
                console.log(this.addform.date)
                console.log(this.addform.name)
                console.log(this.addform.address)
                // this.subject.push({ "name": this.inputName, "mark": false })
                this.tableData.push({ "date": this.addform.date, "name": this.addform.name, "address": this.addform.address })
            }
        },
    }
</script>
<style>

</style>