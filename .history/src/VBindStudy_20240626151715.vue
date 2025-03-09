<template>
<div>
    <div :class="my_class">
        <el-button type="primary" @click="bind_class()">改变大小</el-button>

    </div>
</div>
</template>
<script>
  export default{
    data(){
        my_class:"div_class"
    },
    methods:{
        bind_class(){

        }
    },
    components:{

    }
  }
</script>
<style>

</style>