<template>
    <div>
       <h3>请选择你喜欢的语言</h3>
       <table cellspacing="0" border="1" style="margin: 0 auto;">
        <tr>
            <td v-for="(obj,index) in subjects" 
            :key="index" 
            v_bind :class="{'bg1':obj.mark}"
            @click="changeColor(obj,index)">
            {{obj.name}}
            </td>
        </tr>
       </table>
       <p>我最喜欢的语言是{{proname}}</p>
    </div>
</template>
<script>
  export default{
    data(){
        return{
          proname:"java",
          subjects:[
            {name:"Java",mark:true},
            {name:"C",mark:false},
            {name:"C++",mark:false},
            {name:"Python",mark:false},
          ]
        }
    },
    methods:{
        changeColor(obj,index){
            console.log(obj,index)
            this.proname=obj.name
            for(var i = 0;i<this.subjects.length;i++){
                this.subjects[i].mark=false;
            }
            obj.mark=true;
        }
    },
    components:{

    },
  }
</script>
<style>
   .bg1{
        width: 200px;
        height: 50px;
        background-color: rgb(130, 236, 176);
    }
    .bg1{
        background-color: rgb(218, 103, 80);
    }
</style>