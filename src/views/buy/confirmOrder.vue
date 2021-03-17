<template>
    <div class="confirmOrder">
        <div class="confirmOrder-wrap">
            <div class="confirmOrder-wrap-content">
                <div class="unpaid">
                    <div class="unpaid-content">
                        <div class="unpaid-title">
                            <div class="left">
                                <div class="pay">
                                    <span class="pay-text">
                                        {{$t('orderdetails.waitpay')}}
                                    </span>
                                    <span class="pay-tip">
                                        <div class="pay-tip-text">{{$t('orderdetails.opentrade')}}</div>
                                        <div class="img-box">
                                            <img :src="right" alt="">
                                        </div>
                                    </span>
                                </div>
                                <div class="tip">
                                    <span class="time">14:45</span>
                                    <span class="tip-text">{{$t('orderdetails.cancleorderauto')}}</span>
                                </div>
                            </div>
                            <div class="right">
                                <div class="money">10.00 ETH</div>
                            </div>
                        </div>
                        <div class="unpaid-detail">
                            <div class="unpaid-detail-list">
                                <div class="unpaid-detail-item isTitle">
                                    <div class="left">
                                        {{$t('orderdetails.paytype')}}
                                    </div>
                                    <div class="right">
                                        <div class="img-box">
                                            <img :src="SLT" alt="">
                                        </div>
                                        <div class="text">SLT</div>
                                    </div>
                                </div>
                                <div class="unpaid-detail-item">
                                    <div class="left">
                                        {{$t('orderdetails.orderdetail')}}
                                    </div>
                                    <div class="right">
                                        <div class="img-box">
                                            <img :src="up" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="unpaid-detail-item">
                                    <div class="left">
                                        {{$t('orderdetails.ordernum')}}
                                    </div>
                                    <div class="right">
                                        <div class="text">
                                            210308165719943
                                        </div>
                                    </div>
                                </div>
                                <div class="unpaid-detail-item">
                                    <div class="left">
                                        {{$t('orderdetails.usemoney')}}
                                    </div>
                                    <div class="right">
                                        <div class="text">
                                            0.00 ETH
                                        </div>
                                    </div>
                                </div>
                                <div class="unpaid-detail-item">
                                    <div class="left">
                                        {{$t('orderdetails.charge')}}
                                    </div>
                                    <div class="right">
                                        <div class="text">
                                            325,941.49 ETH
                                        </div>
                                    </div>
                                </div>
                                <div class="unpaid-detail-item">
                                    <div class="left">
                                        {{$t('orderdetails.num')}}
                                    </div>
                                    <div class="right">
                                        <div class="text">
                                            0.000030 SLT
                                        </div>
                                    </div>
                                </div>
                                <div class="unpaid-detail-item">
                                    <div class="left">
                                        {{$t('orderdetails.allmoney')}}
                                    </div>
                                    <div class="right">
                                        <div class="text">
                                            10.00 ETH
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tipBox">
                            <ul class="tipBox-list">
                                <li class="tipBox-item">
                                    <div class="tip-text">
                                        {{$t('orderdetails.confirmmsg1')}}(王亚萍){{$t('orderdetails.confirmmsg2')}}
                                    </div>
                                </li>
                                <li class="tipBox-item">
                                    <div class="tip-text">
                                        {{$t('orderdetails.remindmsg1')}}
                                    </div>
                                </li>
                                <li class="tipBox-item">
                                    <div class="tip-text">
                                        {{$t('orderdetails.remindmsg2')}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="btnBox">
                            <router-link to="cancleorder">
                                <div class="cancel">{{$t('orderdetails.cancelorder')}}</div>
                            </router-link>
                            <div class="confirm">{{$t('orderdetails.confirmtext')}} 45S</div>
                        </div>
                        <div class="connect-text">{{$t('orderdetails.connect')}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "confirmOrder",
    data() {
        return {
            right: `${require('../../static/img/buy/right.png')}`,
            SLT: `${require('../../static/img/buy/SLT.png')}`,
            up: `${require('../../static/img/buy/up.png')}`,
        }
    },
    methods: {}
}
</script>

<style scoped lang="less">
.confirmOrder {
    //width: 100%;
    height: 100%;

    .confirmOrder-wrap {
        width: 1200rem;
        //height: auto;
        margin: 0 auto;

        .confirmOrder-wrap-content {
            margin-top: 20rem;
            width: 100%;
            height: 810rem;
            background: #FFFFFF;
            box-shadow: 0rem 0rem 20rem 0rem rgba(221, 226, 242, 0.3);
            border-radius: 10rem;
            margin-bottom: 70rem;

            .unpaid {
                width: 660rem;
                height: 100%;
                margin: 0 auto;

                .unpaid-content {

                    .unpaid-title {
                        margin-bottom: 21rem;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;

                        .left {
                            text-align: left;

                            .pay {
                                box-sizing: border-box;
                                position: relative;
                                display: flex;
                                align-items: center;
                                justify-content: flex-start;

                                .pay-text {
                                    font-size: 24rem;
                                    font-weight: bold;
                                    color: #444444;
                                }

                                .pay-tip {
                                    margin-left: 11rem;
                                    width: 74rem;
                                    height: 20rem;
                                    background: #E4F7FE;
                                    opacity: 0.76;
                                    border-radius: 4rem;
                                    font-size: 12rem;
                                    font-weight: 400;
                                    color: #00B4FC;

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    .pay-tip-text {
                                        //line-height: 21rem
                                    }

                                    .img-box {
                                        //margin-left: 2rem;
                                        width: 16rem;
                                        height: 16rem;
                                        background: #FFFFFF;
                                        border-radius: 4rem;
                                        position: relative;
                                        //top: 1rem;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;

                                        img {
                                            //top: 5rem;
                                            //left: 3rem;
                                            //position: absolute;
                                            width: 10rem;
                                            height: 8rem;
                                        }
                                    }
                                }
                            }

                            .tip {
                                margin-top: 10rem;
                                color: #444444;
                                display: flex;
                                align-items: center;

                                .time {
                                    color: #00B4FC;
                                }

                                .tip-text {
                                    font-size: 12rem;
                                    font-weight: 400;
                                }
                            }
                        }

                        .right {
                            .money {
                                font-size: 22rem;
                                font-weight: bold;
                                color: #444444;
                            }
                        }

                    }

                    .unpaid-detail {
                        padding-bottom: 24rem;
                        padding-top: 21rem;
                        border-bottom: 1rem solid #E4E7ED;
                        border-top: 1rem solid #E4E7ED;

                        .unpaid-detail-list {

                            .unpaid-detail-item {
                                margin-bottom: 20rem;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                .left {
                                    font-size: 16rem;
                                    font-weight: 400;
                                    color: #8993A0;
                                }

                                .right {
                                    font-size: 16rem;
                                    font-weight: 400;
                                    color: #8993A0;

                                    .img-box {
                                        img {
                                            width: 12rem;
                                            height: 7rem;
                                        }
                                    }

                                    .text {

                                    }
                                }
                            }

                            .unpaid-detail-item:last-child {
                                margin-bottom: 0;
                            }

                            .isTitle {

                                .left {
                                    font-size: 16rem;
                                    font-weight: 400;
                                    color: #444444;
                                }

                                .right {
                                    font-size: 16rem;
                                    font-weight: 400;
                                    color: #444444;
                                    display: flex;
                                    align-items: center;

                                    .img-box {
                                        img {
                                            width: 18rem;
                                            height: 18rem;
                                        }
                                    }

                                    .text {
                                        margin-left: 8rem;
                                        font-size: 16rem;
                                        font-weight: 400;
                                        color: #444444;
                                    }
                                }
                            }
                        }


                    }

                    .tipBox {
                        text-align: left;
                        margin-top: 30rem;
                        width: 660rem;
                        height: 140rem;
                        background: #FEF9F4;
                        box-sizing: border-box;
                        padding: 13rem 15rem;

                        .tipBox-list {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #F3882A;
                            margin: 13rem 15rem;

                            .tipBox-item {
                                .tip-text {
                                    line-height: 21rem;
                                }
                            }
                        }
                    }

                    .btnBox {
                        margin-top: 25rem;
                        display: flex;

                        a {
                            text-decoration: none;
                        }

                        .cancel {
                            width: 190rem;
                            height: 42rem;
                            background: #FFFFFF;
                            border: 1rem solid #E4E7ED;
                            border-radius: 4rem;
                            font-size: 16rem;
                            font-weight: 400;
                            color: #444444;
                            line-height: 42rem;
                        }

                        .confirm {
                            margin-left: 20rem;
                            width: 450rem;
                            height: 42rem;
                            background: #00B4FC;
                            border-radius: 4rem;
                            font-size: 16rem;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 42rem;
                        }

                    }

                    .connect-text {
                        text-align: right;
                        margin-top: 15rem;
                        font-size: 14rem;
                        font-weight: 400;
                        color: #00B4FC;
                    }
                }
            }
        }
    }

}
</style>