<template>
        <div class="model">
            <el-row>
            选择你喜欢的编程语言
             <el-input v-model="inputName" placeholder="请输入你喜欢的书"></el-input>
             <el-button type="primary" @click="addBook()">添加你喜欢的书本</el-button>
            </el-row>
            <el-row>
            <ul>
            <!-- 将提前定义好的样式，添加到选中的li上面 -->
            <li v-for="(book,index) in books" @click="selectBook(index)" :class="
            {bg:book.mark}">
            {{book.name}} ,{{index}}
            </li>
            </ul>
            </el-row>
            <el-row>
            你选择了:{{selName}}
            </el-row>
            </div>
</template>
<script>
  export default{
    data(){
        return{
            
        }
    }
  }
</script>
<style>
ul{
list-style-type: none;
}
li{
float: left;
width: 200px;
height: 200px;
background-color: royalblue;
}
.model{
padding: 20px 200px;
}
.bg{
background-color: red;
}
</style>