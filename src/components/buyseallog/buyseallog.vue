<template>
    <div class="buyseallog">
        <div class="log-left">
            <img src="../../static/img/trade/moneycoin.png" alt="">
            <div class="filish">完成订单 {{item.name}}</div>
            <div class="time">{{item.time}}</div>
        </div>
        <div :class="item.buy?'log-right':'log-right-active'">{{item.money}}</div>
    </div>
</template>

<script>
    export default {
        name: "buyseallog",
        props:{
            item:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style scoped lang="less">
.buyseallog{
    width: 775rem;
    height: 34rem;
    display: flex;
    justify-content: space-between;
    margin-left: 25rem;
    margin-top: 25rem;
    .log-left{
        /*margin-top: 37rem;*/
        img{
            width: 34rem;
            height: 34rem;
            float: left;
            margin-right: 8rem;
        }
        .filish{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            text-align: left;
            margin-left: 15rem;
            /*margin-top: 3rem;*/
        }
        .time{
            font-size: 10rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
            width: 400rem;
            text-align: left;
            margin-top: 7rem;
        }
    }
    .log-right{
        /*margin-top: 37rem;*/
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #0DA88B;
        line-height: 34rem;
        margin-right: 24rem;
    }
    .log-right-active{
        /*margin-top: 37rem;*/
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #EF5656;
        line-height: 34rem;
        margin-right: 24rem;
    }
}
</style>