<template>
    <div class="asset-item">
        <div class="img-con">
            <img :src=item.img alt="">
        </div>
        <div class="counttype">{{item.counttype}}</div>
        <div class="num">{{item.num}}</div>
        <div class="persent">{{item.persent}}</div>
    </div>
</template>

<script>
    export default {
        name: "assetitem",
        props:{
            item:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style scoped lang="less">
.asset-item{
    /*width: 34rem;*/
    height: 34rem;
    display: flex;
    .img-con{
        width: 34rem;
        height: 34rem;
        border-radius: 50%;
        margin-left: 20rem;
        img{
            width: 34rem;
            height: 34rem;
        }
    }
    .counttype{
        font-size: 16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        line-height: 34rem;
        margin-left: 12rem;
    }
    .num{
        font-size: 16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        line-height: 34rem;
        margin-left: 70rem;
    }
    .persent{
        font-size: 16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        line-height: 34rem;
        margin-left: 83rem;
    }
}
</style>