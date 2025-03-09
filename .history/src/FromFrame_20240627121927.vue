<template>
    <div style="width: 1000px;margin: 0 auto;">
        <!-- 功能区域 -->
        <div>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                    <el-button type="danger" @click="deleteAll">批量删除</el-button>
                  </el-form-item>
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
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
              </el-form>
        </div>
        
        
        <!-- 数据显示区 -->
    <div>
        <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column  prop="date" label="日期"width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
    <!-- 完整功能--页码 -->
    <div class="block" style="margin-top: 10px;">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
</template>
<script>
     export default{
        data(){
        return{
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
            }],
            formInline: {
            user: '',
            region: '',
            date1: '',
            },
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
         }
        },
        methods: {
            handleEdit(index, row) {
            console.log(index, row);
            },
            handleDelete(index, row) {
            console.log(index, row);
            },
            onSubmit() {
           console.log('submit!');
           },
           handleSizeChange(val) {
           console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            deleteAll(){
                // 批量删除
            }
        },
        components:{

        }
     }
</script>
<style>

</style>