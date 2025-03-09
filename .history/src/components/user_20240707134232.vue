<template>
    <div>
        <!-- 功能区域 -->
        <div style="float: left;">
            <el-form :inline="true" :model="queryCondition" class="demo-form-inline">
                <el-form-item>
                    <el-button type="danger" @click="deleteAllUser()">批量删除</el-button>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="queryCondition.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="queryCondition.address" placeholder="地址"></el-input>
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
            <el-table :data="UserData"stripe border style="width: 100%" ref="multipleTable" tooltip-effect="dark"  @selection-change="handleSelectionChange">
                <el-table-column
				type="selection"
				width="55">
			  </el-table-column>    
                <el-table-column prop="id" label="用户ID" width="80"></el-table-column>
                <el-table-column prop="username" label="用户名" width="120"></el-table-column>
                <el-table-column prop="phone" label="手机号" width="130"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="password" label="密码"></el-table-column>
                <!-- <el-table-column porp="user_face" label="头像">
                </el-table-column> -->
                <el-table-column prop="roleName" label="角色" width="120">
					<!-- <template slot-scope="scope">
						{{scope.row.userRole==1?'管理员':'普通用户'}}
					</template> -->
                    <template>
                        <el-radio v-model="BillObj.userRole" label='1'>管理员</el-radio>
                        <el-radio v-model="BillObj.userRole" label='2'>普通用户</el-radio>
                    </template>
				</el-table-column>
                </el-table-column>
                <!-- @click="handleDelete(scope.$index, scope.row)" -->
                <el-table-column label="操作" width="150" >
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="addform.username" autocomplete="off" type="date"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input v-model="addform.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="addform.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="addform.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色" :label-width="formLabelWidth">
                    <el-input v-model="addform.userRole" autocomplete="off"></el-input>
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
                adduser:false,
                // 添加面板
                addform: {
                    "address": "",
                    "id": '',
                    "password": "",
                    "phone": "",
                    "username": "",
                    "userRole": '',
                },
                formLabelWidth: '120px',
                // 表格
                userData: [],
                userList: [],
                // formInline: {
                //     userName: '',
                //     address: '',
                // },
                // 分页有关的属性
                // currentPage: 1,
                total: 10,
                //查询条件
                queryCondition: {
                    "address": "",
                    "currentPage": 1,
                    "id": '',
                    "pageSize": 5,
                    "password": "",
                    "phone": "",
                    "username": "",
                    "userRole": 0,
                    "user_face": ""
                },

            }
        },
        methods: {
            //分页相关
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
            // 查询按钮的功能
			query() {
				this.$postRequest('/user/queryLimit', this.queryCondition).then(res => {
					console.log(res.data.UserData)
					if (res) {
						this.userList = res.data.userList;
						this.UserData = res.data.UserData;
						this.total = res.data.total;
					}
				})
			},
          	// 批量删除
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(val)
			},
			deleteAllUser(){
				// 确认取消删除弹框
				 // 得到所有批量删除的数据
                 console.log(this.multipleSelection)
                this.$confirm('确认删除多条供货商吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var idList = [];
                    for (var i = 0; i < this.multipleSelection.length; i++) {
                        var id = this.multipleSelection[i].id;
                        idList.push(id);
                    }
                    console.log(typeof (idList))
                    console.log(idList);
                    this.$deleteRequest('/user/deleteUsers?ids=' + idList).then(res => {
                        this.query()
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
			},
             // 删除一条数据
             handleDelete(row) {
                console.log(row.id)
                this.$deleteRequest('/user/deleteUserById?id=' + row.id).then(res => {
                    console.log(row.id)
                    // 确认取消删除弹框
                    this.$confirm('确认要删除该数据吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.query();
                        // console.log("删除到这一步")
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });
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