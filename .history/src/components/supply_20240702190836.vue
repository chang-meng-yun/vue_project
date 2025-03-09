<template>
	<div>
		<!-- <h1>我是订单的组件</h1> -->
		<el-button type="success" @click="queryAll()">查询按钮</el-button>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="billCode" label="订单编号" width="180">
			</el-table-column>
			<el-table-column prop="productName" label="商品名称" width="180">
			</el-table-column>
			<el-table-column prop="productDesc" label="商品描述">
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
				}]
			}
		},
		methods: {
			queryAll() {
				// this.$axios.post("/bill/listAll").then(res => {
					this.$postRequest("/bill/listAll").then(res => {
					// console.log("响应回来的请求结果在这里处理" + JSON.stringify(res.data.data.billList))
                    console.log("响应回来的请求结果在这里处理"+JSON.stringify(res.data.data.billList));
                    this.tableData = res.data.data.billList;
				}).catch(err => {
					// console.log(billList)
					console.log("响应回来的请求结果出问题了")
				});
			}
		}
	}
</script>

<style>
</style>