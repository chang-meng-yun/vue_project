<template>
    <div>
       <h3>请选择你喜欢的语言</h3>
       <table cellspacing="0" border="1">
        <tr>
            <td >

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

    },
    components:{

    }
  }
</script>
<style>

</style>