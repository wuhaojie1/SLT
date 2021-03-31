<template>
    <div id="deal">
        <div v-if="buyit">
            <div class="center-contens">
                <div class="con-head">
                    <div class="buyslt"
                         @click="gobuy()"
                         :style="buyit?{color:'#00B4FC'}:''">
                        {{ $t('deal.buy') }}
                    </div>
                    <div class="saleslt"
                         @click="gosale()"
                         :style="!buyit?{color:'#00B4FC'}:''">
                        {{ $t('deal.seal') }}
                    </div>
                </div>
                <div class="wellcome">{{ $t('deal.welcome') }}</div>
                <div class="slt-text">{{ $t('deal.buorseal') }}</div>
                <div class="tradecon">
                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="SLT" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">{{ $t('deal.pay') }}</div>
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
                        <div class="trade-center-text">{{ $t('deal.goout') }}
                            <div class="lookcharge">{{ $t('deal.look') }}</div>
                        </div>
                        <div class="exchange-con">
                            <img :src="exchange" alt="">
                        </div>
                    </div>
                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="ETH" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">{{ $t('deal.rewind') }}</div>
                                <div class="pay-mtype">SLTcoin</div>
                            </div>
                        </div>
                        <div class="center-con">
                            <div class="pay-num">≈
                                <input type="text" :placeholder="$t('deal.buynum')" class="inputcon">
                            </div>
                            <div class="pay-eth">SLTcoin</div>
                        </div>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <div class="contents-bottom">
                    <div class="bottom-text">{{ $t('deal.paytype') }}</div>
                    <div class="bottom-coin">
                        <div class="bottom-coin-left">
                            <img :src="ETHcoin" alt="" :style="{width:'12rem',height:'20rem'}">
                            <div class="coin-name">ETH</div>
                        </div>
                        <div class="bottom-coin-right">
                            <img :src="SLTcoin" alt="" :style="{width:'12rem',height:'20rem'}">
                            <div class="coin-name">SLT</div>
                        </div>
                    </div>
                </div>
                <div class="buy-button-con">
                    <div class="buy-button" @click="buySealSLT">{{ $t('deal.buySLT') }}</div>
                </div>
            </div>
        </div>

        <div v-if="!buyit">
            <div class="center-contens">
                <div class="con-head">
                    <div class="buyslt" @click="gobuy()" :style="buyit?{color:'#00B4FC'}:''">{{ $t('deal.buy') }}</div>
                    <div class="saleslt" @click="gosale()" :style="!buyit?{color:'#00B4FC'}:''">{{ $t('deal.seal') }}
                    </div>
                </div>
                <div class="wellcome">{{ $t('deal.welcome') }}</div>
                <div class="slt-text">{{ $t('deal.buorseal') }}</div>
                <div class="tradecon">
                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="ETH" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">{{ $t('deal.goseal') }}</div>
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
                        <div class="trade-center-text">{{ $t('deal.havemoney') }}
                            <div class="lookcharge">0.0000000</div>
                        </div>
                        <div class="exchange-con">
                            <img :src="exchange" alt="">
                        </div>
                    </div>

                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="SLT" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">{{ $t('deal.rewind') }}</div>
                                <div class="pay-mtype">SLTcoin</div>
                            </div>
                        </div>
                        <div class="center-con">
                            <div class="pay-num">≈
                                <input type="text" :placeholder="$t('deal.buynum')" class="inputcon">
                            </div>
                            <div class="pay-eth">SLTcoin</div>
                        </div>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <div class="tradecon">
                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="SLT" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">{{ $t('deal.rewind') }}</div>
                                <div class="pay-mtype">SLTcoin</div>
                            </div>
                        </div>
                        <div class="center-con">
                            <div class="pay-num">
                                <input type="text" v-model="minAmount"
                                       :placeholder="$t('deal.buynum')"
                                       class="inputcon">
                            </div>
                            <div class="pay-eth">SLTcoin</div>
                        </div>
                        <div class="bottom-line"></div>
                    </div>

                    <div class="trade-center">
                        <!--                        <div class="trade-center-text">{{ $t('deal.havemoney') }}
                                                    <div class="lookcharge">0.0000000</div>
                                                </div>
                                                <div class="exchange-con">
                                                    <img :src="exchange" alt="">
                                                </div>-->
                    </div>

                    <div class="trade-left">
                        <div class="letf-head">
                            <div class="img-con">
                                <img :src="SLT" class="ethicon" alt="">
                            </div>
                            <div class="text-con">
                                <div class="pay-text">{{ $t('deal.rewind') }}</div>
                                <div class="pay-mtype">SLTcoin</div>
                            </div>
                        </div>
                        <div class="center-con">
                            <div class="pay-num">
                                <input type="text"
                                       :placeholder="$t('deal.buynum')"
                                       class="inputcon"
                                       v-model="maxAmount">
                            </div>
                            <div class="pay-eth">SLTcoin</div>
                        </div>
                        <div class="bottom-line"></div>
                    </div>
                </div>
                <div class="contents-bottom">
                    <div class="bottom-text">{{ $t('deal.paytype') }}</div>
                    <div class="bottom-coin">
                        <div class="bottom-coin-left">
                            <img :src="ETHcoin" alt="" :style="{width:'12rem',height:'20rem'}">
                            <div class="coin-name">ETH</div>
                        </div>
                        <div class="bottom-coin-right">
                            <img :src="SLTcoin" alt="" :style="{width:'12rem',height:'20rem'}">
                            <div class="coin-name">SLT</div>
                        </div>
                    </div>
                </div>
                <div class="buy-button-con">
                    <div class="buy-button" @click="buySealSLT">{{ $t('deal.sealSLT') }}</div>
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
            ETH: `${require('../../static/img/buy/ETH.png')}`,
            ETHcoin: `${require('../../static/img/buy/ETHcoin.png')}`,
            SLT: `${require('../../static/img/buy/SLT.png')}`,
            SLTcoin: `${require('../../static/img/buy/SLTcoin.png')}`,
            exchange: `${require('../../static/img/buy/exchange.png')}`,
            buyit: true, //    false卖 true买

            maxAmount: 10,
            minAmount: 0.1,
            // saleit: true
        }
    },
    components: {},
    created() {

    },
    methods: {
        gobuy() {
            this.buyit = true;
        },
        gosale() {
            this.buyit = false;
        },
        buySealSLT() {
            this.$router.push({
                name: "confirmOrder",
                params: this.getPostData()
            })
        },

        // fastPushBuySell() {
        //     let postData = this.getPostData()
        //     if (postData) {
        //         this.axios({
        //             url: 'otc/trans/fastPushBuySell',
        //             method: 'post',
        //             params: JSON.stringify(postData),
        //         }).then((res) => {
        //             let data = res.data
        //             if (res.errno === 0) {
        //                 console.log(data);
        //             } else {
        //                 // eslint-disable-next-line no-debugger
        //                 // debugger
        //                 this.$notify({
        //                     title: this.$t('notifyText.notify'),
        //                     message: res.errmsg,
        //                     type: 'warning',
        //                     showClose: false
        //                 });
        //             }
        //         })
        //     }
        // },
        getPostData() {
            let postData = {}
            // let convertRate = "";//兑换币种ETH比率
            let convertSymbol = "ETH";//兑换币种ETH
            let maxAmount = this.maxAmount;//SLT币种交易最大可用数量
            let minAmount = this.minAmount;//SLT币种交易最小数量
            // let oriAmount = "";//SLT币种总数量
            let symbol = "";//BUY/SELL币种SLT
            let transType = "";//交易类型【BUY, SELL】


            if (this.buyit) {
                symbol = "BUY";
                transType = "BUY";
            } else {
                symbol = "SELL";
                transType = "SELL";
            }

            postData = {
                // convertRate,
                convertSymbol,
                maxAmount,
                minAmount,
                // oriAmount,
                symbol,
                transType,
            }

            return postData
        },
    }
}
</script>

<style scoped lang="less">
#deal {
    width: 100%;
    height: 100%;

    .center-contens {
        padding-top: 20rem;
        padding-bottom: 20rem;
        width: 1200rem;
        //height: 810rem;
        background: #FFFFFF;
        box-shadow: 0rem 0rem 20rem 0rem rgba(221, 226, 242, 0.3);
        border-radius: 10rem;
        margin: 0 auto;
        margin-bottom: 20rem;

        .con-head {
            width: 1200rem;
            height: 60rem;
            background: #F5F6FA;
            border-radius: 0rem 10rem 0px 10rem;
            box-sizing: border-box;
            margin: 0 auto;

            .buyslt {
                width: 100rem;
                font-size: 16rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #000000;
                float: left;
                line-height: 60rem;
                cursor: pointer;
            }

            .saleslt {
                cursor: pointer;
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
            margin-top: 109rem;

            .trade-left {
                width: 380rem;
                height: 200rem;
                background: #F9FBFD;
                box-shadow: 0px 2rem 6rem 0px rgba(242, 249, 255, 0.35);

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

                        .inputcon {
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
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

                .exchange-con {
                    padding-top: 26rem;
                    width: 100%;
                    margin: 0 auto;

                    img {
                        width: 30rem;
                        height: 29rem;
                    }
                }

                .trade-center-text {
                    width: 100%;
                    text-align: center;
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    margin-top: 38rem;

                    .lookcharge {
                        color: #F38888;
                        font-size: 12rem;
                        margin-top: 10rem;
                    }
                }
            }

            .trade-right {
                width: 380rem;
                height: 200rem;
            }
        }

        .contents-bottom {
            width: 240rem;
            height: auto;
            margin: 0 auto;
            padding-top: 39rem;

            .bottom-text {
                width: 100%;
                text-align: center;
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                margin-bottom: 25rem;
            }

            .bottom-coin {
                display: flex;
                justify-content: space-between;

                .bottom-coin-left {
                    margin-left: 54rem;

                    .coin-name {
                        font-size: 12px;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                        margin-top: 10rem;
                    }
                }

                .bottom-coin-right {
                    margin-right: 54rem;

                    .coin-name {
                        font-size: 12px;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                        margin-top: 10rem;
                    }
                }

            }
        }

        .buy-button-con {
            width: 100%;
            margin-top: 50rem;
            display: flex;
            justify-content: center;

            .buy-button {
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
                cursor: pointer;
            }
        }
    }
}

</style>