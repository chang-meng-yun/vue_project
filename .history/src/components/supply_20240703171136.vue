<template>
	<div>
		<div>
			<!-- 功能区域 -->
			<el-form :inline="true" :model="queryCondition" class="demo-form-inline">

				<el-form-item>
					<el-button type="primary" @click="query()">批量删除</el-button>
				</el-form-item>
				<el-form-item>
					<el-input v-model="queryCondition.id" placeholder="供货商ID"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="queryCondition.proContact" placeholder="联系人"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="queryCondition.proAddress" placeholder="地址"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="newAddPro()" icon="el-icon-search">新增</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="query()" icon="el-icon-message-solid">查询</el-button>
				</el-form-item>
			</el-form>

		</div>
		<div>
			<!-- 数据显示区域 -->
			<el-table :data="providerData" style="width: 100%" stripe border>
				<el-table-column prop="id" label="供货商ID" width="180">
				</el-table-column>
				<el-table-column prop="proName" label="供货商名称" width="220">
				</el-table-column>
				<el-table-column prop="proContact" label="联系人">
				</el-table-column>
				<el-table-column prop="proAddress" label="地址">
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
				:currentPage="queryCondition.currentPage" :page-sizes="[5, 10]" :page-size="100"
				:page_size="queryCondition.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
		<!-- 保存的面板，对话框，模态框 -->
		<el-dialog title="新增供货商" :visible.sync="saveMark">
			<el-form :model="providerObj">
				<el-form-item label="供货商名称" :label-width="formLabelWidth">
					<el-input v-model="providerObj.proName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="联系人" :label-width="formLabelWidth">
					<el-input v-model="providerObj.proContact" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input v-model="providerObj.proAddress" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="saveMark=false">取 消</el-button>
				<el-button type="primary" @click="addPro()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		mounted() {
			// this.saveMark = false;
			this.query()
		},
		methods: {
			// 分页相关功能
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
				this.$postRequest('/provider/queryLimit', this.queryCondition).then(res => {
					console.log(res.data.providerData)
					if (res) {
						this.providerList = res.data.providers;
						this.providerData = res.data.providerData;
						this.total = res.data.total;
					}
				})

			},
			// 删除一条供应商数据
			handleDelete(row) {
				// 打印删除数据的id
				console.log(row.id)
				// 请求路径
				this.$postRequest('/provider/deleteProById?id=',row.id).then(res => {
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
			// 新增一条供应商数据
			newAddPro() {
				this.saveMark = true
			},
			addPro() {
				console.log(this.providerObj)
				this.$postRequest('/provider/insertPro', this.providerObj).then(res => {
					// this.query();
					this.$message({
						message: '添加成功',
						type: 'success'
					});
				})
				// 取消控制面板
				this.saveMark = false
			},
			// 编辑修改供应商数据
			handleEdit(row) {
				this.saveMark = true
				console.log(row);
				this.$postRequest('/provider/updatePro',row).then(res=>{
				
				this.providerObj.proName = row.proName;
				this.providerObj.proContact = row.proContact;
				this.providerObj.proAddress = row.proAddress;
				})
			},
		},
		data() {
			return {
				//保存面板需要的属性
				saveMark: false,
				providerObj: {
					proName: "",
					proContact: "",
					proAddress: ""
				},
				formLabelWidth: '120px',
				// 分页有关的属性
				// currentPage: 1,
				total: 10,
				//查询条件
				queryCondition: {
					"currentPage": 1,
					"id": '',
					"pageSize": 5,
					"proAddress": "",
					"proContact": ""
				},
				providerData: [],
				providerList: []
			}
		}
	}
</script>

<style>
	/* 全局样式 */
</style>