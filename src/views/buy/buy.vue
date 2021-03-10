<template>
    <div id="buy">
        <ThemeStickyHeader></ThemeStickyHeader>
        <tradebar class="tradebar"></tradebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import tradebar from "../../components/tradebar/tradebar";
    import ThemeStickyHeader from "@/components/header/themeStickyHeader";
    export default {
        name: "buy",
        data(){
          return{

          }
        },
        components:{
            ThemeStickyHeader,
            tradebar
        }
    }
</script>

<style scoped lang="less">
    #buy{
        width: 100%;
        height: 100%;

        .tradebar {
            padding-top: 75rem;
        }
    }

</style>