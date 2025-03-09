<template>
	<div>
		<div>
			<!-- 功能区域 -->
			<el-form :inline="true" :model="queryObj" class="demo-form-inline">
				<el-form-item>
					<el-input v-model="queryObj.user_name" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="query()" icon="el-icon-message-solid">查询</el-button>
				</el-form-item>
			</el-form>

		</div>
		<div>
			<!-- 数据显示区域 -->
			<el-table :data="logData" style="width: 100%" stripe border>
				<el-table-column prop="operation" label="流程" width="180">
				</el-table-column>
				<el-table-column prop="operation" label="操作步骤" width="180">
				</el-table-column>
                <el-table-column prop="method" label="方法名" width="180">
				</el-table-column>
                <el-table-column prop="params" label="参数" width="180">
				</el-table-column>
                <el-table-column prop="user_name" label="账号名" width="180">
				</el-table-column>
                <el-table-column prop="time" label="用时" width="180">
				</el-table-column>
                <el-table-column prop="create_time" label="创建时间 " width="180">
				</el-table-column>
                <el-table-column prop="ip" label="ip地址" width="180">
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
	</div>
</template>

<script>
	export default {
        mounted() {
            this.query();
        },
		methods: {
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
                this.$postRequest('/log/queryList', this.queryCondition).then(res => {
                    console.log(res.data.logData)
                    if (res) {
                        this.logList = res.data.logList;
                        this.logData = res.data.logData;
                        this.total = res.data.total;
                    }
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
				formLabelWidth: '120px',
				// 分页有关的属性
				currentPage: 1,
				//查询条件
				queryObj: {
					user_name: "",
				},
				logData: [],
                logList: [],
                // 分页有关的属性
                // currentPage: 1,
                total: 10,
                //查询条件
                queryCondition: {
                    "create_time": "",
                    "currentPage": 1,
                    "id": '',
                    "ip": "",
                    "method": "",
                    "operation": "",
                    "pageSize": 5,
                    "params": "",
                    "time": '',
                    "user_name": ""
                },
			}
		}
	}
</script>

<style>
	/* 全局样式 */
	
</style>