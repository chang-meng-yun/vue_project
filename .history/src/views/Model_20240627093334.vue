<template>
    <div>
        <div id="app2">
            <el-row>
            选择你喜欢的编程语言 <el-input v-model="inputName" placeholder="请输入你喜欢的
            书"></el-input> <el-button type="primary" @click="addBook">添加你喜欢的书本</elbutton>
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
    </div>
</template>
<script>
   var vue = new Vue({
el:"#app",
data:{
inputName:"",
selName:"Java",
books:[
{"name":"Java","mark":true},
{"name":"c","mark":false},
{"name":"c++","mark":false},
{"name":"python","mark":false},
{"name":"php","mark":false}
]
},
methods:{
addBook(){
newBook = {"name":this.inputName,"mark":false}
this.books.push(newBook)
},
selectBook(a){
//重置选中标记
for(var i=0;i<this.books.length;i++){
this.books[i].mark=false
}
// 将选中的修改标记
this.books[a].mark=true;
this.selName = this.books[a].name;
}
}
})
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
#app2{
padding: 20px 200px;
}
.bg{
background-color: red;
}
</style>