<template>
    <div class="table">
        <table>
            <thead>
            <tr>
<!--                <th>
                    <div class="rate">{{ $t('otcTrade.tableHeader')[0] }}</div>
                </th>-->
                <th>
                    <div class="number">{{ $t('otcTrade.tableHeader')[1] }}</div>
                </th>
                <th>
                    <div class="quota">{{ $t('otcTrade.tableHeader')[2] }}</div>
                </th>
<!--                <th>
                    <div class="price">{{ $t('otcTrade.tableHeader')[3] }}</div>
                </th>-->
                <th>
                    <div class="payment">{{ $t('otcTrade.tableHeader')[4] }}</div>
                </th>
                <th>
                    <div class="operation">
                        <div class="icon"></div>
                        <div class="text">{{ $t('otcTrade.tableHeader')[5] }}</div>
                        <div class="tip">0{{ $t('otcTrade.tableHeader')[6] }}</div>
                    </div>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in dataList"
                :key="index">
<!--                <th>
                    <div class="tread">
                        &lt;!&ndash; <div class="header-img">
                            <img src="" alt="" class="img">
                        </div> &ndash;&gt;
                        <div class="name">{{item.name}}</div>
                    </div>
                </th>-->
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
<!--                <th>
                    <div class="price">
                        <div class="text"
                             :class="businessType? '' : 'red' ">{{item.price}}</div>
                    </div>
                </th>-->
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
                        <div class="sell" v-if="!businessType" @click="handleClick(item)">
                            <div class="text">{{ $t('otcTrade.sell') }} SLT</div>
                        </div>
                        <div class="buy" v-if="businessType" @click="handleClick(item)">
                            <div class="text">{{ $t('otcTrade.buy') }} SLT</div>
                        </div>
                    </div>
                    <div class="noAuth" v-else>
                        <span>{{ $t('otcTrade.需实名认证') }}</span>
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

        },
        methods:{
            handleClick(item){
                // eslint-disable-next-line no-debugger
                // debugger
                // console.log(item)
                this.$emit("onClick", item)
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
                                margin-right: 10rem;

                                .img {
                                    height: 100%;
                                    width: 100%;
                                }
                            }

                            .name {
                                // margin-left: 10rem;
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