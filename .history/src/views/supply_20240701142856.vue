<template>
    <div>
        <h1>supply页面</h1>
        <button @click="queryAll">查询按钮</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
             
            }
        },
        mounted() {
        },
        methods: {
            queryAll(){
                this.$axios.post("bill/listAll")
                .then(res=>{
                    console.log("响应请求的结果"+res.data.data.billList)
                    
                }).catch(err=>{
                    console.log("请求出问题了")
                });
            }
        
        },

    };
</script>