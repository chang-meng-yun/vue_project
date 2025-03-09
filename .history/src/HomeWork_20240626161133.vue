<template>
    <div>

        <h3>请选择你喜欢的语言</h3>
        <table border="1" cellspacing="0" width="20px" height="50px" >
            <tr v-for="(obj,index) in subject " :key="index">
                <!-- <td>{{obj.name}}</td> -->
                 <td>1111</td>
                 <td>2222</td>
                 <td>3333</td>
            </tr>
        </table>

       <!-- {{message}} -->


    </div>
</template>
<script>
    export default{
        data(){
        return{
            subject:[
            {id:"1",name:"Java"},
            {id:"2",name:"C"},
            {id:"3",name:"C++"},
            {id:"4",name:"Python"},
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