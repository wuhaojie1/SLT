<template>
    <div id="buy">
        <tradebar></tradebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import tradebar from "../../components/tradebar/tradebar";
    export default {
        name: "buy",
        data(){
          return{

          }
        },
        components:{
            tradebar
        }
    }
</script>

<style scoped lang="less">
    #buy{
        width: 100%;
        height: 100%;
    }

</style>