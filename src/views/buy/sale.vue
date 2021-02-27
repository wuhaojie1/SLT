<template>
    <div id="buy">
        <tradebar></tradebar>
        <div :style="{marginTop:'20rem'}">
            <dealsltbar></dealsltbar>
<!--            <router-view>-->
            <div class="center-contens">
                <div class="wellcome">SLT团队欢迎您</div>
                <div class="slt-text">任何代币购买出售</div>
                <div class="tradecon">
                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="ethicon" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">我将支付</div>
                                <div class="pay-mtype">ETH</div>
                            </div>
                        </div>
                        <div class="center-con">
                            <div class="pay-num">0.00</div>
                            <div class="pay-eth">ETH</div>
                        </div>
                        <div class="bottom-line"></div>
                    </div>
                    <div class="trade-center">
                        <div class="trade-center-text">暂无报价，您可前往自选区
                            <div class="lookcharge">查看报价</div>
                        </div>
                        <div></div>
                    </div>
                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="ethicon" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">我将获得</div>
                                <div class="pay-mtype">SLTcoin</div>
                            </div>
                        </div>
                        <div class="center-con">
                            <div class="pay-num">≈
                                <input type="text" placeholder="请输入购买总数量" class="inputcon">
                            </div>
                            <div class="pay-eth">SLTcoin</div>
                        </div>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <div class="contents-bottom">
                    <div class="bottom-text">支付方式</div>
                    <div class="bottom-coin">
                        <div class="bottom-coin-left">
                            <img :src="ethicon" alt="" :style="{width:'12rem',height:'20rem'}">
                            <div class="coin-name">ETH</div>
                        </div>
                        <div class="bottom-coin-right">
                            <img :src="ethicon" alt="" :style="{width:'12rem',height:'20rem'}">
                            <div class="coin-name">SLT</div>
                        </div>
                    </div>
                </div>
                <div class="buy-button-con">
                    <div class="buy-button">购买SLT</div>
                </div>
            </div>
<!--            </router-view>-->
        </div>
    </div>
</template>

<script>
    import tradebar from "../../components/tradebar/tradebar";
    import dealsltbar from "../../components/dealsltbar/dealsltbar"
    export default {
        name: "sale",
        data(){
            return{
                ethicon:`${require('../../static/img/trade/moneycoin.png')}`
            }
        },
        components:{
            tradebar,
            dealsltbar
        }
    }
</script>

<style scoped lang="less">
    #buy{
        width: 100%;
        height: 100%;
        .center-contens{
            padding-top: 20rem;
            width: 1200rem;
            height: 810rem;
            background: #FFFFFF;
            box-shadow: 0rem 0rem 20rem 0rem rgba(221, 226, 242, 0.3);
            border-radius: 10rem;
            margin: 0 auto;
            .wellcome{
                width: 100%;
                height: 24rem;
                font-size: 24rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #88A1BC;
                margin-top: 69rem;
                text-align: center;
            }
            .slt-text{
                margin-top: 24rem;
                height: 36rem;
                font-size: 38rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #041037;
            }
            .tradecon{
                width: 100%;
                height: 200rem;
                display: flex;
                justify-content: center;
                margin-top: 109rem;
                .trade-left{
                    width: 380rem;
                    height: 200rem;
                    background: #F9FBFD;
                    box-shadow: 0px 2rem 6rem 0px rgba(242, 249, 255, 0.35);
                    .letf-head{
                        width: 100%;
                        margin-top: 25rem;
                        .img-con{
                            width: 54rem;
                            height: 54rem;
                            margin-left: 19rem;
                            margin-right: 19rem;
                            float: left;
                            .ethicon{
                                width: 48rem;
                                height: 48rem;
                            }
                        }
                        .text-con{
                            float: left;
                            text-align: left;
                            margin-top: 6rem;
                            .pay-text{
                                font-size: 14rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #88A1BC;
                                margin-bottom: 8rem;
                            }
                            .pay-mtype{
                                font-size: 16rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #111111;
                            }
                        }
                    }
                    .center-con{
                        width: 100%;
                        padding-top: 63rem;
                        display: flex;
                        justify-content: space-between;
                        .pay-num{
                            font-size: 24rem;
                            font-family: Source Han Sans CN;
                            font-weight: bold;
                            color: #111111;
                            margin-left: 39rem;
                            .inputcon{
                                font-size: 14rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #9AA5B5;
                            }
                        }
                        .pay-eth{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #111111;
                            margin-right: 33rem;
                        }
                    }
                    .bottom-line{
                        width: 310rem;
                        height: 2rem;
                        background: #00B4FC;
                        opacity: 0.6;
                        border-radius: 1rem;
                        margin-left: 40rem;
                        margin-top: 7rem;
                    }
                }
                .trade-center{
                    width: 240rem;
                    height: 200rem;
                    .trade-center-text{
                        width: 100%;
                        text-align: center;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                        margin-top: 38rem;
                        .lookcharge{
                            color:#F38888;
                            font-size: 12rem;
                            margin-top: 10rem;
                        }
                    }
                }
                .trade-right{
                    width: 380rem;
                    height: 200rem;
                }
            }
            .contents-bottom{
                width: 240rem;
                height: auto;
                margin: 0 auto;
                padding-top: 39rem;
                .bottom-text{
                    width: 100%;
                    text-align: center;
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    margin-bottom: 25rem;
                }
                .bottom-coin{
                    display: flex;
                    justify-content: space-between;
                    .bottom-coin-left{
                        margin-left: 54rem;
                        .coin-name{
                            font-size: 12px;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            margin-top: 10rem;
                        }
                    }
                    .bottom-coin-right{
                        margin-right: 54rem;
                        .coin-name{
                            font-size: 12px;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            margin-top: 10rem;
                        }
                    }

                }
            }
            .buy-button-con{
                width: 100%;
                margin-top: 50rem;
                display: flex;
                justify-content: center;
                .buy-button{
                    width: 360rem;
                    height: 68rem;
                    background: #00B4FC;
                    border-radius: 6rem;
                    text-align: center;
                    font-size: 26rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 68rem;
                }
            }
        }
    }

</style>