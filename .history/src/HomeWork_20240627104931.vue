<template>
    <div id="all">

        <h3>请选择你喜欢的语言</h3>
        <table border="1" cellspacing="0" style="margin: 0 auto;" >
            <tr>
                <td v-for="(obj,index) in subject " 
                :key="index" 
                v-bind:class="{'bg':obj.mark}" 
                @click="changeColor(obj,index)">{{obj.name}}</td>
            </tr>
        </table>

        <p style="text-align: center;">我最喜欢的编程语言是{{pro_name}}</p>
        <el-input v-model="inputName" placeholder="请输入你喜欢的书" style="width: 300px;"></el-input>
        <el-button type="primary" @click="addBook()">添加你喜欢的书本</el-button>
        <!-- <el-button type="primary" v-if="">隐藏</el-button> -->
       <!-- {{message}} -->


    </div>
</template>
<script>
    export default{
        data(){
        return{
            pro_name:"Java",
            inputName:"",
            subject:[
            {id:"1",name:"Java",mark:true},
            {id:"2",name:"C",mark:false},
            {id:"3",name:"C++",mark:false},
            {id:"4",name:"Python",mark:false},
            ],
        }
        },
        methods:{
            addBook(){
                console.log(this.inputName)
                this.subject.push({"name":this.inputName,"mark":false})
            },
            changeColor(obj,index){
                console.log(obj,index)
                this.pro_name = obj.name;
                for(var i=0;i<this.subject.length;i++){
                    this.subject[i].mark=false;
                }
                this.subject[index].mark=true;
                this.pro_name=this.subject[index].name;
            }   
        },
        components:{

        }
    }

</script>
<style>
 tr td{
        width: 200px;
        height: 50px;
        background-color: rgb(130, 236, 176);
    }
    .bg{
        background-color: rgb(218, 103, 80);
    }
</style>