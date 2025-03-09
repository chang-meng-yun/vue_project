<template>
	<div>
		<div>
			<!-- 功能区域 -->
			<el-form :inline="true" :model="queryObj" class="demo-form-inline">
				<el-form-item>
					<el-input v-model="queryObj.name" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-date-picker v-model="queryObj.time" type="date" placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="query()" icon="el-icon-message-solid">查询</el-button>
				</el-form-item>
			</el-form>

		</div>
		<div>
			<!-- 数据显示区域 -->
			<el-table :data="logData" style="width: 100%" stripe border>
				<el-table-column prop="date" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
			</el-table>
		</div>
		<!-- 分页 -->
		<div class="block" style="margin-top: 20px;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
				:current-page="currentPage" :page-sizes="[5, 10]" :page-size="100"
				layout="total, sizes, prev, pager, next, jumper" :total="400">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			// 查询按钮的功能
			query() {

			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		},
		data() {
			return {
				//保存面板需要的属性
				saveMark: false,
				studentObj: {
					name: "",
					city: ""
				},
				formLabelWidth: '120px',
				// 分页有关的属性
				currentPage: 1,
				//查询条件
				queryObj: {
					name: "",
					city: "",
					time: ""
				},
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		}
	}
</script>

<style>
	/* 全局样式 */
	
</style>