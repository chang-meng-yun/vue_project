<template>
	<div>
		<div>
			<!-- 功能区域 -->
			<el-form :inline="true" :model="queryCondition" class="demo-form-inline">
				<el-form-item>
					<el-button type="primary" @click="query()">批量删除</el-button>
				</el-form-item>
				<el-form-item>
					<el-input v-model="queryCondition.billCode" placeholder="订单编号"></el-input>
				</el-form-item>
                <el-form-item>
					<el-input v-model="queryCondition.productName" placeholder="商品名称"></el-input>
				</el-form-item>
                <!-- 下拉列表框 -->
				<el-form-item>
					<el-select v-model="queryCondition.providerId" placeholder="供应商">
						<el-option :label="obj.proName" :value="obj.id" v-for="(obj,index) in providersList" :key="index"></el-option>
					</el-select>
				</el-form-item>
				<!-- <el-form-item>
					<el-date-picker v-model="queryCondition.time" type="date" placeholder="选择日期">
					</el-date-picker>
				</el-form-item> -->
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
			<el-table :data="billData" style="width: 100%" stripe border>
                <el-table-column prop="id" label="订单ID" width="180">
				</el-table-column>
				<el-table-column prop="billCode" label="订单编号" width="180">
				</el-table-column>
				<el-table-column prop="productName" label="商品名称" width="180">
				</el-table-column>
				<el-table-column prop="isPayment" label="是否支付" width="180">
				<template slot-scope="scope">
					{{scope.row.isPayment==2?'已支付':'未支付'}}
				</template>
				</el-table-column>
				<el-table-column prop="creationDate" label="创建日期">
				</el-table-column>

				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger"
							@click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
		<el-dialog title="保存学生" :visible.sync="saveMark">
			<el-form :model="studentObj">
				<el-form-item label="活动名称" :label-width="formLabelWidth">
					<el-input v-model="studentObj.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动区域" :label-width="formLabelWidth">
					<el-select v-model="studentObj.city" placeholder="请选择活动区域">
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
        // 页面加载完之后调用的方法
        mounted() {
           this.query();
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
                this.$postRequest('/bill/queryLimit',this.queryCondition).then(res=>{
                if(res){
                    this.providersList = res.data.providers;
                    this.billData = res.data.billData;
                    this.total = res.data.total;
                }
				// this.currentPage = 1;
            })
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
                total:10,
				// currentPage: 1,
				//查询条件
				  queryCondition:{
                    "billCode":"",
                    "currentPage": 1,
                    "pageSize": 5,
                    "productName": "",
                    "providerId": 0
                    },
				billData: [],
                providersList:[]
			}
		}
	}
</script>

<style>
	/* 全局样式 */
	
</style>