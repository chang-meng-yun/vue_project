<template>
	<div>
		<div>
			<!-- 功能区域 -->
			<el-form :inline="true" :model="queryCondition" class="demo-form-inline">
				<el-form-item>
                    <el-button type="primary" @click="exportExcel()">导出</el-button>
                </el-form-item>
				<el-form-item>
					<el-button type="primary" @click="deleteAllBill()">批量删除</el-button>
				</el-form-item>
				<el-form-item>
					<el-input v-model="queryCondition.productName" placeholder="商品名称"></el-input>
				</el-form-item>
				<!-- 下拉列表框 -->
				<el-form-item>
					<el-select v-model="queryCondition.providerId" placeholder="供应商">
						<el-option :label="obj.proName" :value="obj.id" v-for="(obj,index) in providersList"
							:key="index"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="newaddBill()" icon="el-icon-search">新增</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="query()" icon="el-icon-message-solid">查询</el-button>
				</el-form-item>
			</el-form>

		</div>
		<div>
			<!-- 数据显示区域 -->
			<el-table :data="billData" style="width: 100%" stripe border ref="multipleTable" tooltip-effect="dark"  @selection-change="handleSelectionChange">
				<el-table-column
				type="selection"
				width="55">
			  </el-table-column>
				<el-table-column prop="id" label="订单ID" width="120">
				</el-table-column>
				<el-table-column prop="billCode" label="订单编号" width="150">
				</el-table-column>
				<el-table-column prop="productName" label="商品名称" width="150">
				</el-table-column>
				<el-table-column prop="isPayment" label="是否支付" width="120">
					<template slot-scope="scope">
						{{scope.row.isPayment==2?'已支付':'未支付'}}
					</template>
				</el-table-column>
				<el-table-column prop="createdBy" label="创建者" width="120">
					<template slot-scope="scope">
						{{scope.row.createdBy==1?'管理员':'普通用户'}}
					</template>
				</el-table-column>
				<el-table-column prop="creationDate" label="创建日期">
				</el-table-column>

				<el-table-column label="操作">
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
				:current-page="queryCondition.currentPage" :page-sizes="[5, 10]" :page-size="queryCondition.pageSize"
				layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
		<!-- 保存的面板，对话框，模态框 新增一条订单信息-->
		<el-dialog title="新增订单" :visible.sync="saveMark">
			<el-form :model="BillObj" status-icon class="demo-ruleForm" :rules="rules" ref="ruleForm">
				<el-form-item label="订单编号" :label-width="formLabelWidth" prop="billCode">
					<el-input v-model="BillObj.billCode" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="订单商品" :label-width="formLabelWidth"  prop="productName">
					<el-input v-model="BillObj.productName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="是否支付" :label-width="formLabelWidth" prop="isPayment">
					<!-- <el-input v-model="BillObj.isPayment" autocomplete="off"></el-input> -->
					<template>
						<el-radio v-model="BillObj.isPayment" label='1'>未支付</el-radio>
						<el-radio v-model="BillObj.isPayment" label='2'>已支付</el-radio>
					</template>
				</el-form-item>
				<!-- 创建者 默认为登录用户 -->
					<el-input v-model="BillObj.createdBy" autocomplete="off" type="hidden" prop="createdBy"></el-input>

				<el-form-item label="订单日期" :label-width="formLabelWidth" prop="createdDate">
					<el-date-picker v-model="BillObj.creationDate" type="datetime" placeholder="选择日期时间" format = "yyyy-MM-dd HH:mm:ss"></el-date-picker>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="saveMark = false">取 消</el-button>
				<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
			</div>
		</el-dialog>
			<!-- 保存的面板 修改订单信息-->
			<el-dialog title="修改订单" :visible.sync="updateMark">
				<el-form :model="BillObj" status-icon class="demo-ruleForm" :rules="rules" ref="ruleForm">
					<el-form-item label="订单编号" :label-width="formLabelWidth" prop="billCode">
						<el-input v-model="BillObj.billCode" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="订单商品" :label-width="formLabelWidth"  prop="productName">
						<el-input v-model="BillObj.productName" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="是否支付" :label-width="formLabelWidth" prop="isPayment">
						<!-- <el-input v-model="BillObj.isPayment" autocomplete="off"></el-input> -->
						<template>
							<el-radio v-model="BillObj.isPayment" label='1'>未支付</el-radio>
							<el-radio v-model="BillObj.isPayment" label='2'>已支付</el-radio>
						</template>
					</el-form-item>
					<!-- 创建者 默认为登录用户 -->
						<el-input v-model="BillObj.createdBy" autocomplete="off" type="hidden" prop="createdBy"></el-input>
	
					<el-form-item label="订单日期" :label-width="formLabelWidth" prop="createdDate">
						<el-date-picker v-model="BillObj.creationDate" type="datetime" placeholder="选择日期时间" format = "yyyy-MM-dd HH:mm:ss"></el-date-picker>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="updateMark = false">取 消</el-button>
					<el-button type="primary" @click="updateForm('ruleForm')">确 定</el-button>
				</div>
			</el-dialog>
	</div>
</template>

<script>
	export default {
		// 页面加载完之后调用的方法
		mounted() {
			this.query();
			this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
			console.log(this.userObj)
		},
		methods: {
			 // 导出
			 exportExcel(){
               window.location.href="http://localhost:8080/ssm_market_project/bill/exportExcel";
               console.log("aaa")
            },
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
				this.$postRequest('/bill/queryLimit', this.queryCondition).then(res => {
					if (res) {
						this.providersList = res.data.providers;
						this.billData = res.data.billData;
						this.total = res.data.total;
					}
					// this.currentPage = 1;
				})
			},
			// 修改订单信息
			handleEdit(row) {
				console.log(row);
				this.updateMark = true;
				this.BillObj.id = row.id,
				this.BillObj.billCode = row.billCode,
				this.BillObj.productName = row.productName
				if(row.isPayment==1){
					this.BillObj.isPayment = '1';
				}else{
					this.BillObj.isPayment = '2';
				}
				this.BillObj.creationDate = row.creationDate,
				this.BillObj.createdBy = row.createdBy,
				console.log(this.BillObj)
			},
			// 修改确认点击事件
			updateForm(formName){
				this.updateMark = false
				console.log(this.BillObj),
				this.$postRequest('/bill/updateBill',this.BillObj).then(res=>{
					this.$message({
							type: 'success',
							message: '修改成功!'
						});
						this.query();
				})
			},
			// 批量删除
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(val)
			},
			deleteAllBill(){
				// 确认取消删除弹框
				this.$confirm('确认要删除该数据吗?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning',
					}).then(() => {
                       console.log(this.multipleSelection)
					//    提取选中订单id，
					   var idListBill = [];
					  for (var i = 0; i < this.multipleSelection.length; i++) {
						var id = this.multipleSelection[i].id;
						idListBill.push(id);
					}
					console.log(idListBill)
					this.$deleteRequest('/bill/deleteBills?ids='+idListBill).then(res => {
                        // this.query()
					})
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

			},
			// 删除一条订单数据
			handleDelete(row) {
				console.log(row.id)
				this.$deleteRequest('/bill/deleteBillById?id=' + row.id).then(res => {
					console.log(row.id + "qqq")
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
			// 新增
			newaddBill(){
				this.saveMark = true    
				this.BillObj.billCode = '',
				this.BillObj.productName ='',
				this.BillObj.isPayment = '1',
				this.BillObj.creationDate = ''
				console.log("bill")
				console.log(this.userObj);
			},
			// 新增确定
			submitForm(formName){
				this.BillObj.createdBy=this.userObj.id;
				console.log(this.BillObj.creationDate)
				console.log(typeof(this.BillObj.creationDate))
				this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$postRequest('/bill/insertBill',this.BillObj).then(res=>{
						console.log(this.BillObj)
						this.$message({
								message: '添加成功',
								type: 'success'
							});
							// 关闭控制面板
							this.saveMark = false;
							this.query();
					})
				} else {
					console.log('error submit!!');
					return false;
				}
				});

			}
		},
		data() {
			return {
				//保存面板需要的属性
				saveMark: false,
				updateMark:false,
				BillObj: {
					billCode: "",
					productName: "",
					isPayment:'1',
					createdBy:'',
					creationDate:'',
				},
				rules: {
					billCode: [{
						required: true,
						message: '编号不能为空',
						trigger: 'blur'
					}],
					productName: [
						{ required: true, message: '请输入产品名称', trigger: 'blur' }
					],
					creationDate: [
						{ required: true, message: '请输入时间', trigger: 'blur' }
					]
				},
				formLabelWidth: '120px',
				// 分页有关的属性
				total: 10,
				// currentPage: 1,
				//查询条件
				queryCondition: {
					"billCode": "",
					"currentPage": 1,
					"pageSize": 5,
					"productName": "",
					"providerId": 0
				},
				billData: [],
				providersList: [],
				multipleSelection: []
			}
		}
	}
</script>

<style>
	/* 全局样式 */
</style>