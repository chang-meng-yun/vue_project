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
                this.$axios.post("http://localhost:8080/ssm_market_project/swagger-ui.html#!/bill-controller/listAll")
            }
        
        },

    };
</script>