<template>
    <div class="order-text-con">
        <div class="text1">{{item.lefttext}}</div>
        <div class="text2">{{item.righttext}}</div>
    </div>
</template>

<script>
    export default {
        name: "orderitemtext",
        props:{
            item:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style scoped lang="less">
.order-text-con{
    width: 660rem;
    margin-top: 19rem;
    height: auto;
    display: flex;
    justify-content: space-between;
    .text1{
        font-size: 16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #8993A0;
    }
    .text2{
        font-size: 16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #8993A0;
    }
}
</style>