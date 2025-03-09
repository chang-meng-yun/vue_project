<template>
    <div style="width: 1100px;margin: 0 auto;">
        <!-- 功能区域 -->
        <div style="float: left;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                    <el-button type="danger" @click="deleteAll">批量删除</el-button>
                </el-form-item>
                <el-form-item prop="date">
                    <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date"
                        style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="formInline.user" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="城市">
                    <el-select v-model="formInline.region" placeholder="选择城市">
                        <el-option label="上海" value="shanghai"></el-option>
                        <el-option label="北京" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="adduser = true">添加</el-button>
                </el-form-item>
            </el-form>
        </div>


        <!-- 数据显示区 -->
        <div>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址">
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
        <!-- 完整功能--页码 -->
        <div class="block" style="margin-top: 10px;float: left;">
            <span class="demonstration"></span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
        <!-- 保存的面板 对话框 -->

        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
        <el-dialog title="收货地址" :visible.sync="adduser">
            <el-form :model="addform">
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-input v-model="addform.date" autocomplete="off" type="date"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="addform.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="addform.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="adduser = false">取 消</el-button>
                <el-button type="primary" @click="adduser = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // 保存需要的面板
                // subObj: {
                //     formLabelWidth: '150px',
                //     adduser: true,
                //     name: "",
                //     city: ""
                // },
                // 添加面板
                addform: {
                    name: '',
                    address: '',
                    date: '',
                    // date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                // 表格
                tableData: [
                    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
                    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
                    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
                    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
                ],
                formInline: {
                    user: '',
                    region: '',
                    date: '',
                },
                // 分页
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                adduser: false,

            }
        },
        methods: {
            handleEdit(index, row) {
                // 修改一条数据
                console.log(index, row);
            },
            handleDelete(index, row) {
                // 删除一条数据
                console.log(index, row);
                console.log(index);
                this.tableData.splice(index, index);
                console.log("删除到这一步")

            },
            onSubmit() {
                // 查询
                console.log('submit!');
            },
            handleSizeChange(val) {
                // 显示每页多少条数据
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                // 显示当前几页
                console.log(`当前页: ${val}`);
            },
            deleteAll() {
                // 批量删除
                console.log("deleteAll====")
            },
            // adduser() {
            //     // 添加
            //     console.log("addUser====");
            //     console.log(this.addform.date)
            //     console.log(this.addform.name)
            //     console.log(this.addform.address)


            // },
            // add(){
            //     console.log(this.addform.date)
            //     console.log(this.addform.name)
            //     console.log(this.addform.address)
            // }
        },
        components: {

        }
    }
</script>
<style>

</style>