<template>
    <div class="deal">
        <div class="center-contens">
            <div class="con-head">
                <div class="buyslt">购买</div>
                <div class="saleslt">出售</div>
            </div>
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
                        <text class="lookcharge">查看报价</text>
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
                        <div class="pay-num">≈</div>
                        <div class="pay-eth">ETH</div>
                    </div>
                    <div class="bottom-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "deal",
        data() {
            return {
                ethicon:`${require('../../static/img/trade/moneycoin.png')}`,
            }
        }
    }
</script>

<style scoped lang="less">
    .deal {
        margin-top: 35rem;
        .center-contens {
            width: 1200rem;
            height: 810rem;
            background: #FFFFFF;
            box-shadow: 0rem 0rem 20rem 0rem rgba(221, 226, 242, 0.3);
            border-radius: 10rem;
            margin: 0 auto;

            .con-head {
                width: 1200rem;
                height: 60rem;
                background: #F5F6FA;
                border-radius: 0rem 10rem 0px 10rem;

                .buyslt {
                    width: 100rem;
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #000000;
                    float: left;
                    line-height: 60rem;
                }

                .saleslt {
                    width: 100rem;
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #000000;
                    line-height: 60rem;
                    float: left;
                }
            }

            .wellcome {
                width: 100%;
                height: 24rem;
                font-size: 24rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #88A1BC;
                margin-top: 69rem;
                text-align: center;
            }

            .slt-text {
                margin-top: 24rem;
                height: 36rem;
                font-size: 38rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #041037;
            }

            .tradecon {
                width: 100%;
                height: 200rem;
                display: flex;
                justify-content: center;

                .trade-left {
                    width: 380rem;
                    height: 200rem;

                    .letf-head {
                        width: 100%;
                        margin-top: 25rem;

                        .img-con {
                            width: 54rem;
                            height: 54rem;
                            margin-left: 19rem;
                            margin-right: 19rem;
                            float: left;

                            .ethicon {
                                width: 48rem;
                                height: 48rem;
                            }
                        }

                        .text-con {
                            float: left;
                            text-align: left;
                            margin-top: 6rem;

                            .pay-text {
                                font-size: 14rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #88A1BC;
                                margin-bottom: 8rem;
                            }

                            .pay-mtype {
                                font-size: 16rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #111111;
                            }
                        }
                    }

                    .center-con {
                        width: 100%;
                        padding-top: 63rem;
                        display: flex;
                        justify-content: space-between;

                        .pay-num {
                            font-size: 24rem;
                            font-family: Source Han Sans CN;
                            font-weight: bold;
                            color: #111111;
                            margin-left: 39rem;
                        }

                        .pay-eth {
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #111111;
                            margin-right: 33rem;
                        }
                    }

                    .bottom-line {
                        width: 310rem;
                        height: 2rem;
                        background: #00B4FC;
                        opacity: 0.6;
                        border-radius: 1rem;
                        margin-left: 40rem;
                        margin-top: 7rem;
                    }
                }

                .trade-center {
                    width: 240rem;
                    height: 200rem;

                    .trade-center-text {
                        width: 100%;
                        text-align: center;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                        margin-top: 38rem;
                        text-align: left;

                        .lookcharge {
                            color: #F38888;
                            font-size: 12rem;
                        }
                    }
                }

                .trade-right {
                    width: 380rem;
                    height: 200rem;
                }
            }
        }
    }
</style>