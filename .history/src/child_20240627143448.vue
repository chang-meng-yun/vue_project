<template>
    <div>
        <div>
         {{myTitle}}   
         <img :src="img_path" >
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
             
            }
        },
        props:["myTitle","img_path"],
        methods: {
            
        },
        components:{

        }
    }

</script>
<style>

</style>