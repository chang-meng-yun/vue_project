<template>
    <div>

        <h3>请选择你喜欢的语言</h3>
        <table border="1" cellspacing="0" >
            <tr>
                <td v-for="(obj,index) in subject " :key="index" class="su-box">{{obj.name}}</td>
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
    .su-box{
        width: 200px;
        height: 50px;
    }

</style>