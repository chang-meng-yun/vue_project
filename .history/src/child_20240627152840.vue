<template>
    <div>
        <div>
         {{myTitle}}   
         <!-- <img :src="mysrc" height="300px" width="300px"> -->
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                // img_path: require("@/assets/花.jpg"),
            }
        },
        props:["myTitle","mysrc"],
        methods: {
            
        },
        components:{

        }
    }

</script>
<style>

</style>