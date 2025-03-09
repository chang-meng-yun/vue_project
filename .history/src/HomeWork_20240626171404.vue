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

       <!-- {{message}} -->


    </div>
</template>
<script>
    export default{
        data(){
        return{
            pro_name:"Java",
            subject:[
            {id:"1",name:"Java",mark:true},
            {id:"2",name:"C",mark:false},
            {id:"3",name:"C++",mark:false},
            {id:"4",name:"Python",mark:false},
            ],
            // my_class:["myClass"]
        }
        },
        methods:{
            changeColor(obj,index){
                console.log(obj,index)
                this.my_class.push("myClass_two")
                this.pro_name = obj.name;

                for(var i=0;i<this.subject.length;i++){
                    this.subject[i].mark=false;
                }
                obj.mark=true;
            }
        },
        components:{

        }
    }

</script>
<style>
   /* .su-box{
     
    } */
 tr td{
        width: 200px;
        height: 50px;
       background-color: aqua;
    }
    /* .myClass{
        background-color: aquamarine;
    }
    .myClass_two{
        background-color: rgb(240, 118, 18);
    } */
</style>