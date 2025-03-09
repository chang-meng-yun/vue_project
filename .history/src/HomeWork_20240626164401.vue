<template>
    <div id="all">

        <h3>请选择你喜欢的语言</h3>
        <!-- <table border="1" cellspacing="0" style="margin: 0 auto;" > -->
            <!-- <tr>
                <td v-for="(obj,index) in subject " :key="index" class="su-box" v-bind:class="my_class" @click="changeColor()">{{obj.name}}</td>
            </tr> -->
        <!-- </table> -->
         <div  v-bind:class="my_class" @click="changeColor()">Java</div>
         <div  v-bind:class="my_class" @click="changeColor()">C</div>
        <div  v-bind:class="my_class" @click="changeColor()">C++</div>
        <div  v-bind:class="my_class" @click="changeColor()">Python</div>
        <p style="text-align: center;">我最喜欢的编程语言是{{}}</p>

       <!-- {{message}} -->


    </div>
</template>
<script>
    export default{
        data(){
        return{
            // subject:[
            // {id:"1",name:"Java"},
            // {id:"2",name:"C"},
            // {id:"3",name:"C++"},
            // {id:"4",name:"Python"},
            // ],
            my_class:["myClass"]
        }
        },
        methods:{
            changeColor(){
                this.my_class.push("myClass_two")
            }
        },
        components:{

        }
    }

</script>
<style>
    .su-box{
        width: 200px;
        height: 50px;
    }
    #all div{
        width: 200px;
        height: 50px;
        background-color: aquamarine;
        float: left;
        border: 1px solid black;
        text-align: center;
        line-height: 50px;
    }
    .myClass{
        background-color: aquamarine;
    }
    .myClass_two{
        background-color: rgb(240, 118, 18);
    }
</style>