<template>
    <div>
        <div>
            <!-- 功能区域 -->
            <el-form :inline="true" :model="queryCondition" class="demo-form-inline">

                <el-form-item>
                    <el-button type="primary" @click="deleteAllAddress()">批量删除</el-button>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="queryCondition.id" placeholder="地址ID"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="queryCondition.contact" placeholder="联系人"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="queryCondition.postCode" placeholder="邮编">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="saveMark=true" icon="el-icon-search">新增</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="query()" icon="el-icon-message-solid">查询</el-button>
                </el-form-item>
            </el-form>

        </div>
        <div>
            <!-- 数据显示区域 -->
            <el-table :data="addressData" border style="width: 100%" ref="multipleTable" tooltip-effect="dark"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" fixed>
                </el-table-column>
                <el-table-column prop="id" label="地址ID" width="150">
                </el-table-column>
                <el-table-column prop="contact" label="联系人" width="120">
                </el-table-column>
                <el-table-column prop="addressDesc" label="地址描述" width="280">
                </el-table-column>
                <el-table-column prop="postCode" label="邮编" width="120">
                </el-table-column>
                <el-table-column prop="tel" label="联系电话" width="140">
                </el-table-column>
                <el-table-column prop="username" label="创建者" width="120">
                </el-table-column>
                <el-table-column prop="creationDate" label="创建时间" width="120">
                </el-table-column>
                <el-table-column prop="modifyBy" label="修改者" width="120">
                </el-table-column>
                <el-table-column prop="modifyDate" label="修改时间" width="120">
                </el-table-column>
                <el-table-column prop="roleName" label="用户id" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div class="block" style="margin-top: 20px;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="queryCondition.currentPage" :page-sizes="[5, 10]" :page-size="queryCondition.pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
        <!-- 保存的面板，对话框，模态框 -->
        <el-dialog title="添加地址" :visible.sync="saveMark">
            <el-form :model="queryObj">
                <el-form-item label="联系人" :label-width="formLabelWidth">
                    <el-input v-model="queryObj.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="queryObj.contact" placeholder="请选择活动区域">
                        <el-option label="上海" value="shanghai"></el-option>
                        <el-option label="北京" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="saveMark = false">取 消</el-button>
                <el-button type="primary" @click="saveMark = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.query()
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.queryCondition.pageSize = val;
                this.query();
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.queryCondition.currentPage = val;
                this.query();
            },
            // 查询按钮的功能
            query() {
                this.$postRequest('/address/queryLimit', this.queryCondition).then(res => {
                    if (res) {
                        this.addressList = res.data.addressList;
                        this.addressData = res.data.addressPageData;
                        this.total = res.data.total;
                        console.log(this.addressData.id)
                    }
                    // this.currentPage = 1;
                })
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            // 删除一条数据
            handleDelete(row) {
                console.log(row.id)
                this.$deleteRequest('/address/deleteAddressById?id=' + row.id).then(res => {
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
            // 批量删除
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(val)
            },
            deleteAllAddress() {
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
					console.log(typeof(idList))
					console.log(idList);
					this.$deleteRequest('/address/deleteAddresses?ids='+idList).then(res => {
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
        },
        data() {
            return {
                //保存面板需要的属性
                saveMark: false,
                queryObj: {
                    id: "",
                    contact: "",
                    postCode: ''
                },
                formLabelWidth: '120px',
                // 分页有关的属性
                // currentPage: 1,
                total: 10,
                //查询条件
                queryCondition: {
                    "addressDesc": "",
                    "contact": "",
                    "createdBy": 0,
                    "creationDate": "",
                    "currentPage": 1,
                    "id": '',
                    "modifyBy": 0,
                    "modifyDate": "",
                    "pageSize": 5,
                    "postCode": "",
                    "tel": "",
                    "username": "",
                    "roleName": ""
                    // "userId": 1
                },
                addressData: [],
                multipleSelection: [],
                addressList: []
            }
        }
    }
</script>

<style>
    /* 全局样式 */
</style>