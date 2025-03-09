<template>
    <div>
        <div>
         {{myTitle}}   
         <!-- <img :src="mysrc" height="300px" width="300px"> -->
         <el-table
         :data="tableData"
         style="width: 100%">
         <el-table-column
           prop="date"
           label="日期"
           width="180">
         </el-table-column>
         <el-table-column
           prop="name"
           label="姓名"
           width="180">
         </el-table-column>
         <el-table-column
           prop="address"
           label="地址">
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
        props:["myTitle","mysrc"],
        methods: {
            
        },
        components:{

        }
    }

</script>
<style>

</style>