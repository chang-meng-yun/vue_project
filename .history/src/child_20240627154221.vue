<template>
    <div>
        <div>
         {{myTitle}}   
         <!-- <img :src="mysrc" height="300px" width="300px"> -->
         <el-table
         :data="tableData"
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
        props:["myTitle","tableData"],
        methods: {
            
        },
        components:{

        }
    }

</script>
<style>

</style>