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
				queryCondition:{
						"currentPage": 1,
						"id": 0,
						"pageSize": 1,
						"proAddress": "",
						"proContact": ""
						},
				tableData: [],
				providersData:[]
			}
		}
	}
</script>