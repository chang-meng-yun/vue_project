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
                    <el-button type="primary" @click="newAddAdd" icon="el-icon-search">新增</el-button>
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
                <el-table-column prop="roleName" label="角色" width="120">
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
        <!-- 保存的面板，对话框，模态框 新增地址 -->
        <el-dialog title="添加地址" :visible.sync="saveMark">
            <el-form :model="addressObj" status-icon class="demo-ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="contact">
                    <el-input v-model="addressObj.contact" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="地址描述" :label-width="formLabelWidth" prop="addressDesc">
                    <el-input v-model="addressObj.addressDesc" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮编" :label-width="formLabelWidth"  prop="postCode">
                    <el-input v-model="addressObj.postCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth"  prop="tel">
                    <el-input v-model="addressObj.tel" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="创建者" :label-width="formLabelWidth"> -->
                <el-input v-model="addressObj.createdByName" autocomplete="off" type="hidden"></el-input>
                <el-input v-model="addressObj.createdBy" autocomplete="off" type="hidden"></el-input>
                <!-- </el-form-item> -->
                <!-- <el-form-item label="创建时间" :label-width="formLabelWidth"> -->
                <el-date-picke v-model="addressObj.creationDate" autocomplete="off"  type="datetime" format="yyyy-MM-dd HH:mm:ss"></el-date-picke>
                <!-- </el-form-item> -->
                <!-- <el-form-item label="修改者" :label-width="formLabelWidth"> -->
                <el-input v-model="addressObj.modifyBy" autocomplete="off" type="hidden"></el-input>
                <!-- </el-form-item> -->
                <!-- <el-form-item label="修改时间" :label-width="formLabelWidth"> -->
                <el-input v-model="addressObj.modifyDate" autocomplete="off" type="hidden"></el-input>
                <el-input v-model="addressObj.roleId" autocomplete="off" type="hidden"></el-input>
                <!-- </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="saveMark = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.query()
            this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
			console.log(this.userObj)
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
                    console.log(typeof (idList))
                    console.log(idList);
                    this.$deleteRequest('/address/deleteAddresses?ids=' + idList).then(res => {
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
            // 新增
            newAddAdd() {
              this.saveMark = true
            },
            // 确定新增
            submitForm(formName){
                this.saveMark = false
                this.addressObj.createdByName = this.userObj.username;
                this.addressObj.createdBy = this.userObj.id;
                // 获取当前时间
                var time  = new Date();
                var year = time.getUTCFullYear();
                var month = time.getUTCMonth();
                var day = time.getUTCDate;
                var hours = time.getHours();
                var minutes = time.getMinutes();
                var seconds = time.getSeconds();
                var nowTime = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;

                this.addressObj.creationDate = nowTime;
                console.log(data)
                this.addressObj.roleId = this.userObj.id;
                console.log(this.addressObj)
                this.$refs[formName].validate((valid) => {
					if (valid) {
						// alert('submit!');
						this.$postRequest('/address/insertAddress', this.addressObj).then(res => {
							this.saveMark = false
							this.$message({
								message: '添加成功',
								type: 'success'
							});
							this.query()
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
            },
        },
        data() {
            return {
                //保存面板需要的属性
                saveMark: false,
                addressObj: {
                    contact: "",
                    addressDesc: "",
                    postCode: '',
                    tel: '',
                    createdBy: '',
                    creationDate: '',
                    modifyBy: '',
                    modifyDate: '',
                    createdByName:'',
                    roleId:''
                },
                rules: {
					contact: [{
						required: true,
						message: '请输入联系人',
						trigger: 'blur'
					}],
					addressDesc: [
						{ required: true, message: '请输入地址', trigger: 'blur' }
					],
					postCode: [
						{ required: true, message: '请输入邮编', trigger: 'blur' }
					],
                    tel: [
						{ required: true, message: '请输入电话', trigger: 'blur' }
					]
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