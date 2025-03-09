<template>
	<div>
		<div>
			<!-- 功能区域 -->
			<el-form :inline="true" :model="queryObj" class="demo-form-inline">

				<el-form-item>
					<el-button type="primary" @click="query()">批量删除</el-button>
				</el-form-item>
				<el-form-item>
					<el-input v-model="queryObj.name" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-select v-model="queryObj.city" placeholder="城市">
						<el-option label="上海" value="shanghai"></el-option>
						<el-option label="北京" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-date-picker v-model="queryObj.time" type="date" placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="query()" icon="el-icon-message-solid">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="saveMark=true" icon="el-icon-search">新增</el-button>
				</el-form-item>
			</el-form>

		</div>
		<div>
			<!-- 数据显示区域 -->
            <el-table :data="addressData" border style="width: 100%">
            <el-table-column  prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name"  label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
            <el-table-column  fixed="right"  label="操作" width="150">
              <template slot-scope="scope">
                <el-button  size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
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
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
			}
		}
	}
</script>

<style>
	/* 全局样式 */
	
</style>