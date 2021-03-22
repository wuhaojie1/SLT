<template>
    <div class="bottom">
        <div class="copyright">
            <img class="img" src="../../../static/img/shoppingMall/copyright.png" alt="">
            <span class="text">SLT 2021 {{this.$t('Mmall.copyright')}}</span>
        </div>
        <div class="police1">
            <img class="img" src="../../../static/img/shoppingMall/police1.png" alt="">
            <span class="text">{{this.$t('Mmall.right')}}</span>
        </div>
        <div class="police2">
            <img class="img" src="../../../static/img/shoppingMall/police2.png" alt="">
            <span class="text">{{this.$t('Mmall.beian')}} 5250530000050</span>
        </div>
        <div class="bottomimg">
            <img class="img" src="../../../static/img/shoppingMall/bottomimg.png" alt="">
        </div>
        <div class="goshopcart" @click="toPage('MshoppingCart')">
            <img class="img" src="../../../static/img/chatorshopcart/shopcart.png" alt="">
        </div>
    </div>
</template>
<style lang="less" scoped>
    .police1{
        width: 750rem;
        height: 24rem;
        background-color: #F3F5F7;
        padding-top: 35rem;
        .img{
            width: 22rem;
            height: 22rem;
            /*float: left;*/
        }
        .text{
            font-size: 24rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
        }
    }
    .police2{
        width: 750rem;
        height: 24rem;
        background-color: #F3F5F7;
        padding-top: 15rem;
        .img{
            width: 22rem;
            height: 22rem;
            /*float: left;*/
        }
        .text{
            font-size: 24rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
        }
    }
    .bottomimg{
        width: 750rem;
        height: 42rem;
        padding-top: 45rem;
        padding-bottom: 38rem;
        background-color: #F3F5F7;
        .img{
            width: 80rem;
            height: 42rem;
        }
    }
</style>