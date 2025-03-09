<template>
    <div>

        <h3>请选择你喜欢的语言</h3>
        <table border="1" cellspacing="0" style="margin: 0 auto;" >
            <tr>
                <td v-for="(obj,index) in subject " :key="index" class="su-box" v-bind:class="my_class">{{obj.name}}</td>
            </tr>
        </table>
        <p style="text-align: center;">我最喜欢的编程语言是{{name}}</p>

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