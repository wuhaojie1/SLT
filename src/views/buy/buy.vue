<template>
    <div id="buy">
        <themeStickyHeader></themeStickyHeader>
        <tradebar style="margin-top: 75rem"></tradebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import tradebar from "../../components/tradebar/tradebar";
    import themeStickyHeader from "../../components/header/themeStickyHeader";
    export default {
        name: "buy",
        data(){
          return{

          }
        },
        components:{
            tradebar,themeStickyHeader
        }
    }
</script>

<style scoped lang="less">
    #buy{
        width: 100%;
        height: 100%;
    }

</style>