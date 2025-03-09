<template>
    <div>
        
    </div>
</template>
<script>
    export default{
        mounted() {
            this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
            console.log(this.userObj)
        },
        date(){
            return{
            
            }
        },
        methods: {
            
        },

    }
</script>