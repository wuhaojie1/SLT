<template>
    <div class="trade-item-con">
        <div class="trade-org">
            <div class="trade-org-img">
                <div class="trade-org-text">大</div>
            </div>
            <div class="trade-org-name">trade center(1329|99%)</div>
        </div>
        <div class="num-con">
            <div class="num-con-left">数量:1.159935SLT</div>
            <div class="num-con-right">单价</div>
        </div>
        <div class="limit-con">
            <div class="limit-num">限额：40,000.00-387,481.00 ETH</div>
            <div class="charge-num" v-if="dealitem.buyitem">334,260.75 ETH</div>
            <div class="charge-num-seal" v-else>334,260.75 ETH</div>
        </div>
        <div class="coin-con">
            <div class="coin-img-con">
                <img class="coin-img" src="../../static/img/buy/ETH.png" alt="">
            </div>
            <div class="buy-button" v-if="dealitem.buyitem">
                购买SLT
            </div>
            <div class="seal-button" v-else>
                出售SLT
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dealitem",
        props:{
            dealitem:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style scoped lang="less">
    .trade-item-con{
        width: 680rem;
        margin: 0 auto;
        height: auto;
        padding-top: 39rem;
        padding-bottom: 35rem;
        .trade-org{
            height: 52rem;
            width: 100%;
            .trade-org-img{
                width: 52rem;
                height: 52rem;
                background-color: #5D8CC2;
                position: relative;
                border-radius: 52rem;
                float: left;
                .trade-org-text{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    position: absolute;
                    top: 12rem;
                    left: 12rem;
                }
            }
            .trade-org-name{
                width: 337rem;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                float: left;
                margin-top: 9rem;
            }
        }
        .num-con{
            clear: both;
            margin-top: 25rem;
            display: flex;
            justify-content: space-between;
            .num-con-left{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #464646;
            }
            .num-con-right{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
            }
        }
        .limit-con{
            margin-top: 25rem;
            display: flex;
            justify-content: space-between;
            .limit-num{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #464646;
            }
            .charge-num{
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: #22BF7C;
            }
            .charge-num-seal{
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: #EF5656;
            }
        }
        .coin-con{
            margin-top: 25rem;
            display: flex;
            justify-content: space-between;
            .coin-img-con{
                width: 36rem;
                height: 36rem;
                .coin-img{
                    width: 36rem;
                    height: 36rem;
                }
            }
            .buy-button{
                width: 180rem;
                height: 72rem;
                background: #22BF7C;
                border-radius: 4px;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
                line-height: 72rem;
            }
            .seal-button{
                width: 180rem;
                height: 72rem;
                background: #EF5656;
                border-radius: 4px;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
                line-height: 72rem;
            }
        }
    }
</style>