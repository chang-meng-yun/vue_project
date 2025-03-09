<template>
    <div>
        <div>
         <h3>{{myTitle}}</h3>   
         <!-- <img :src="mysrc" height="300px" width="300px"> -->
         <el-table
         :data="tableData1"
         style="width: 80px">
         <el-table-column
           prop="id"
           label="编号"
           width="180">
         </el-table-column>
         <el-table-column
           prop="name"
           label="姓名"
           width="180">
         </el-table-column>
         <el-table-column
           prop="age"
           label="年龄">
         </el-table-column>
       </el-table>
        </div>
        <div>
            <h3>{{myTitle2}}</h3>   
            <!-- <img :src="mysrc" height="300px" width="300px"> -->
            <el-table
            :data="tableData2"
            style="width: 100%">
            <el-table-column
              prop="id"
              label="编号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄">
            </el-table-column>
          </el-table>
           </div>
           <div>
            <h3>{{myTitle3}}</h3>   
            <!-- <img :src="mysrc" height="300px" width="300px"> -->
            <el-table
            :data="tableData3"
            style="width: 100%">
            <el-table-column
              prop="id"
              label="编号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄">
            </el-table-column>
          </el-table>
           </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                // img_path: require("@/assets/花.jpg"),
            }
        },
        // props:["myTitle","mysrc"],
        props:["myTitle","tableData1","myTitle2","tableData2","myTitle3","tableData3"],
        methods: {
            
        },
        components:{

        }
    }

</script>
<style>

</style>