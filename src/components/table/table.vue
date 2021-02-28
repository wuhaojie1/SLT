<template>
    <div class="table">
        <table>
            <thead>
            <tr>
                <th>
                    <div class="rate">广告方(30日成单| 30日完成率)</div>
                </th>
                <th>
                    <div class="number">数量</div>
                </th>
                <th>
                    <div class="quota">限额</div>
                </th>
                <th>
                    <div class="price">单价</div>
                </th>
                <th>
                    <div class="payment">支付方式</div>
                </th>
                <th>
                    <div class="operation">
                        <div class="icon"></div>
                        <div class="text">交易</div>
                        <div class="tip">0手续费</div>
                    </div>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in dataList"
                :key="index">
                <th>
                    <div class="tread">
                        <div class="header-img">
                            <img src="" alt="" class="img">
                        </div>
                        <div class="name">{{item.name}}</div>
                    </div>
                </th>
                <th>
                    <div class="number">
                        <div class="text">{{item.number}}</div>
                    </div>
                </th>
                <th>
                    <div class="quota">
                        <div class="text">{{item.quota}}</div>
                    </div>
                </th>
                <th>
                    <div class="price">
                        <div class="text"
                             :class="businessType? '' : 'red' ">{{item.price}}</div>
                    </div>
                </th>
                <th>
                    <div class="payment">
                        <div class="paymentItem"
                             v-for="(paymentItem,paymentIndex) in item.payment"
                             :key="paymentIndex">
                            <div class="SLT" v-if="paymentItem === 'SLT'">{{paymentItem}}</div>
                            <div class="ETH" v-if="paymentItem === 'ETH'">{{paymentItem}}</div>
                        </div>
                    </div>
                </th>
                <th>
                    <div class="auth" v-if="auth">
                        <div class="sell" v-if="!businessType">
                            <div class="text">出售 SLT</div>
                        </div>
                        <div class="buy" v-if="businessType">
                            <div class="text">购买 SLT</div>
                        </div>
                    </div>
                    <div class="noAuth" v-else>
                        购买需<span>实名认证</span>
                    </div>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "table",
        props: {
            dataList: {
                type: Array,
                default: () => [],
            },
            businessType: {
                type: Boolean,//true buy false sell
                default: true,
            },
            auth: {
                type: Boolean,
                default: false,
            }

        }
    }
</script>

<style scoped lang="less">
    .table {
        width: 100%;
        height: 100%;

        table {
            width: 100%;

            thead {
                border-bottom: 1rem solid #E4E7ED;

                tr {
                    th {
                        text-align: left;

                        .rate {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            height: 38rem;
                            display: flex;
                            align-items: center;
                        }

                        .number {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            height: 38rem;
                            display: flex;
                            align-items: center;
                        }

                        .quota {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            height: 38rem;
                            display: flex;
                            align-items: center;
                        }

                        .price {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            height: 38rem;
                            display: flex;
                            align-items: center;
                        }

                        .payment {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            height: 38rem;
                            display: flex;
                            align-items: center;
                        }

                        .operation {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            height: 38rem;
                            display: flex;
                            align-items: center;
                            box-sizing: border-box;
                            justify-content: flex-end;

                            .icon {

                            }

                            .text {
                                margin-left: 5rem;
                                font-size: 14rem;
                                font-weight: 400;
                                color: #9AA5B5;
                            }

                            .tip {
                                width: 64rem;
                                height: 28rem;
                                background: #E4F7EE;
                                border-radius: 2rem;
                                margin-left: 12rem;
                                font-size: 14rem;
                                font-weight: 400;
                                line-height: 28rem;
                                color: #25BE79;
                                text-align: center;
                            }
                        }
                    }
                }
            }

            tbody {
                tr {
                    text-align: left;
                    height: 88rem;
                    border-bottom: 1rem solid #E4E7ED;

                    th {

                        .tread {
                            display: flex;
                            align-items: center;

                            .header-img {
                                height: 38rem;
                                width: 38rem;
                                border-radius: 50%;

                                .img {
                                    height: 100%;
                                    width: 100%;
                                }
                            }

                            .name {
                                margin-left: 10rem;
                                font-size: 14rem;
                                font-weight: 400;
                                color: #00B9FE;
                            }
                        }

                        .number {
                            .text {
                                font-size: 14rem;
                                font-weight: 400;
                                color: #444444;
                            }
                        }

                        .quota {
                            .text {
                                font-size: 14rem;
                                font-weight: 400;
                                color: #444444;
                            }
                        }

                        .price {
                            .text {
                                font-size: 14rem;
                                font-weight: 400;
                                color: #22BF7C;
                            }
                            .red {
                                color: #EF5656;
                            }
                        }


                        .payment {
                            display: flex;

                            .paymentItem {
                                .SLT {
                                    width: 55rem;
                                    height: 28rem;
                                    background: #FFFFFF;
                                    border: 1rem solid #E4E7ED;
                                    border-radius: 4rem;
                                    font-size: 10rem;
                                    font-weight: 400;
                                    color: #00B4FC;
                                    line-height: 28rem;
                                    text-align: center;
                                    margin-right: 10rem;
                                }

                                .ETH {
                                    width: 55rem;
                                    height: 28rem;
                                    background: #FFFFFF;
                                    border: 1rem solid #E4E7ED;
                                    border-radius: 4rem;
                                    font-size: 10rem;
                                    font-weight: 400;
                                    color: #2483FF;
                                    text-align: center;
                                    line-height: 28rem;
                                }
                            }

                        }

                        .auth {
                            .sell {
                                height: 100%;
                                width: 100%;
                                box-sizing: border-box;
                                display: flex;
                                justify-content: flex-end;

                                .text {
                                    cursor: pointer;
                                    width: 100rem;
                                    height: 34rem;
                                    background: #EF5656;
                                    border-radius: 4rem;
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    line-height: 34rem;
                                    text-align: center;
                                }
                            }

                            .buy {
                                height: 100%;
                                width: 100%;
                                box-sizing: border-box;
                                display: flex;
                                justify-content: flex-end;

                                .text {
                                    cursor: pointer;
                                    width: 100rem;
                                    height: 34rem;
                                    background: #22BF7C;
                                    border-radius: 4rem;
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    line-height: 34rem;
                                    text-align: center;
                                }
                            }
                        }

                        .noAuth {
                            text-align: right;
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;

                            span {
                                color: #EF5656;
                                cursor: pointer;
                                margin-left: 5rem;
                            }
                        }


                    }
                }
            }
        }
    }
</style>