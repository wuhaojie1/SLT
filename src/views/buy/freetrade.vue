<template>
    <div class="freetrade">
        <div class="freetrade-wrap">
            <div class="freetrade-wrap-title">
                <div class="buy" :class="active?'active':''" @click="changeactive(true)">{{ $t('otcTrade.buy') }}</div>
                <div class="rightafter"></div>
                <div class="sell" :class="!active?'redActive ':''" @click="changeactive(false)">{{
                        $t('otcTrade.sell')
                    }}
                </div>
            </div>
            <div class="freetrade-wrap-buy" v-if="active">
                <div class="buy-title">
                    <div class="left">
                        <div class="text">{{ $t('otcTrade.title') }}</div>
                        <div class="tip">{{ $t('otcTrade.subTitle') }}</div>
                    </div>
                    <!-- <div class="right">
                        <div class="searchBox">
                            <input type="text" placeholder="请输入购买总金额" class="inputBox">
                            <div class="line"></div>
                            <div class="btn">确定</div>
                            <div class="text">ETH</div>
                        </div>
                    </div> -->
                </div>
                <div class="table">
                    <Table :businessType="active"
                           :dataList="dataList"
                           :auth="true"></Table>
                </div>
            </div>
            <div class="freetrade-wrap-sell" v-if="!active">
                <!-- <div class="chooseType">
                    <div class="coinType-list">
                        <div class="coinType-item"
                             v-for="(item, index) in coinList"
                             :class="coinListChoose === index ? 'coinChoose' : ''"
                             @click="chooseCoin(index)"
                             :key="index">
                            {{item.text}}
                        </div>
                    </div>
                </div> -->
                <div class="sell-title">
                    <div class="left">
                        <div class="text">{{ $t('otcTrade.title') }}</div>
                        <div class="tip">{{ $t('otcTrade.subTitle') }}</div>
                    </div>
                    <!-- <div class="right">
                        <div class="searchBox">
                            <input type="text" placeholder="请输入购买总金额" class="inputBox">
                            <div class="line"></div>
                            <div class="btn">确定</div>
                            <div class="text">ETH</div>
                        </div>
                    </div> -->
                </div>
                <div class="table">
                    <Table :businessType="active"
                           :dataList="dataList"
                           :auth="true"
                           @handleClick="handleClick"
                    ></Table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Table from "../../components/table/table";

export default {
    name: "freetrade",
    components: {Table},
    data() {
        return {
            active: true,
            coinList: [
                {
                    text: "SLT",
                },
                {
                    text: "TRX",
                },
                {
                    text: "ETH",
                },
            ],
            coinListChoose: 1,

            dataList: [
                {
                    name: 'trade center（1329|99%）',
                    number: '1.159935 SLT',
                    quota: '40,000.00-387,481.00 ETH',
                    price: '334,260.75 ETH',
                    payment: ['SLT', 'ETH'],
                },
                {
                    name: 'trade center（1329|99%）',
                    number: '1.159935 SLT',
                    quota: '40,000.00-387,481.00 ETH',
                    price: '334,260.75 ETH',
                    payment: ['SLT'],
                },
            ],
        }
    },
    created() {
        this.getListFreeBuySell()
    },
    methods: {
        changeactive(B) {
            this.active = B;
        },
        chooseCoin(index) {
            this.coinListChoose = index;
        },
        async getListFreeBuySell() {

            let postData = {
                lastId: 0,
                size: 10,
            }
            const data = await this.axios({
                url: 'otc/trans/listFreeBuySell',
                method: 'get',
                params: postData,
            })
            console.log(data)
            // item: [
            //     balAmount
            //
            //     convertRate
            //
            //     convertSymbol
            //
            //     createTime
            //
            //     feeAmount
            //
            //     id
            //
            //     maxAmount
            //
            //     minAmount
            //
            //     oriAmount
            //
            //     status
            //
            //     symbol
            //
            //     transSuccessTime
            //
            //     transType
            //
            //     updateTime
            //
            //     userId
            //
            //     userName
            //
            // ]
            let results = data.results
            if (data.errorCode === 0) {
                this.getdataList(results.items)
            } else {
                this.$notify({
                    title: this.$t('notifyText.notify'),
                    message: data.errmsg,
                    type: 'warning',
                    showClose: false
                });
            }
        },

        getdataList(data) {
            if (data.length === 0) {
                // this.dataList = []
                return
            }

            let tempArray = [];
            data.forEach(item => {
                // {
                //     name: 'trade center（1329|99%）',
                //     number: '1.159935 SLT',
                //     quota: '40,000.00-387,481.00 ETH',
                //     payment: ['SLT', 'ETH'],
                // },
                let payment = []
                let obj = {
                    number: item.oriAmount + " " + item.transType,
                    quota: item.maxAmount + "-" +item.minAmount + " " + item.convertSymbol,
                    payment: payment.push(item.convertSymbol),
                    ...item,
                }
                tempArray.push(obj)
            })
            this.dataList = tempArray;
        },

        handleClick(item) {
            // eslint-disable-next-line no-debugger
            debugger
            console.log(item)
        },
    }
}
</script>

<style scoped lang="less">
.freetrade {
    margin-top: 40rem;
    width: 100%;

    .freetrade-wrap {
        width: 1168rem;
        margin: 0 auto;

        .freetrade-wrap-title {
            width: 100%;
            text-align: left;
            height: 56rem;
            margin-bottom: 30rem;
            line-height: 56rem;
            display: flex;
            align-items: center;
            font-size: 16rem;
            position: relative;

            .buy {
                text-align: left;
                /*width: 60rem;*/
                position: relative;
                cursor: pointer;
                margin-right: 14rem;
            }

            .sell {
                text-align: left;
                /*width: 60rem;*/
                position: relative;
                cursor: pointer;
                margin-left: 16rem;
            }

            .rightafter {
                width: 2rem;
                height: 16rem;
                background: #E4E7ED;
                border-radius: 1rem;
            }

            .active {
                font-size: 16rem;
                font-weight: 400;
                color: #00B4FC;
            }

            .active:after {
                position: absolute;
                bottom: 10rem;
                right: 10rem;
                content: " ";
                width: 12rem;
                height: 4rem;
                background: #00B9FE;
                border-radius: 2rem;
            }

            .redActive {
                font-size: 16rem;
                font-weight: 400;
                color: #EF5656;
            }

            .redActive:after {
                position: absolute;
                bottom: 10rem;
                right: 10rem;
                content: " ";
                width: 12rem;
                height: 4rem;
                background: #EF5656;
                border-radius: 2rem;
            }
        }

        .freetrade-wrap-buy {
            .buy-title {
                text-align: left;
                display: flex;
                justify-content: space-between;

                .left {
                    display: flex;
                    align-items: flex-end;

                    .text {
                        font-size: 22rem;
                        font-weight: 400;
                        color: #111111;
                    }

                    .tip {
                        margin-left: 19rem;
                        font-size: 12rem;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                }

                .right {
                    .searchBox {
                        width: 218rem;
                        height: 30rem;
                        background: #FFFFFF;
                        border: 1rem solid #E4E7ED;
                        border-radius: 2rem;
                        box-sizing: border-box;
                        display: flex;
                        position: relative;

                        .inputBox {
                            width: 168rem;
                            height: 100%;
                            padding-left: 10rem;
                            box-sizing: border-box;
                        }

                        .line {
                            width: 1rem;
                            height: 27rem;
                            background: #FFFFFF;
                            border: 1rem solid #E4E7ED;
                            /*border-radius: 1rem;*/
                        }

                        .btn {
                            cursor: pointer;
                            width: 50rem;
                            font-size: 12rem;
                            font-weight: 400;
                            color: #00B4FC;
                            line-height: 30rem;
                            text-align: center;
                            box-sizing: border-box;
                        }

                        .text {
                            left: 133rem;
                            top: 8rem;
                            font-size: 12rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            position: absolute;
                        }
                    }
                }


            }

            .table {
                margin-top: 35rem;
            }
        }

        .freetrade-wrap-sell {
            .chooseType {
                margin-bottom: 40rem;

                .coinType-list {
                    display: flex;
                    position: relative;

                    .coinType-item {
                        font-size: 16rem;
                        font-weight: 400;
                        color: #444444;
                        /*width: 80rem;*/
                        position: relative;
                        cursor: pointer;
                        text-align: left;
                        margin-left: 41rem;
                    }

                    .coinType-item:first-child {
                        margin-left: 0;
                    }

                    .coinChoose {
                        font-size: 16rem;
                        font-weight: 400;
                        color: #EF5656;
                    }

                    .coinChoose:after {
                        position: absolute;
                        bottom: -6rem;
                        right: 7rem;
                        content: " ";
                        width: 12rem;
                        height: 4rem;
                        background: #EF5656;
                        border-radius: 2rem;
                    }

                    /*.coinType-item:first-child {
                        text-align: left;
                    }

                    .coinType-item:last-child {
                        text-align: right;
                    }*/
                }
            }

            .sell-title {
                text-align: left;
                display: flex;
                justify-content: space-between;

                .left {
                    display: flex;
                    align-items: flex-end;

                    .text {
                        font-size: 22rem;
                        font-weight: 400;
                        color: #111111;
                    }

                    .tip {
                        margin-left: 19rem;
                        font-size: 12rem;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                }

                .right {
                    .searchBox {
                        width: 218rem;
                        height: 30rem;
                        background: #FFFFFF;
                        border: 1rem solid #E4E7ED;
                        border-radius: 2rem;
                        box-sizing: border-box;
                        display: flex;
                        position: relative;

                        .inputBox {
                            width: 168rem;
                            height: 100%;
                            padding-left: 10rem;
                            box-sizing: border-box;
                        }

                        .line {
                            width: 1rem;
                            height: 27rem;
                            background: #FFFFFF;
                            border: 1rem solid #E4E7ED;
                            /*border-radius: 1rem;*/
                        }

                        .btn {
                            cursor: pointer;
                            width: 50rem;
                            font-size: 12rem;
                            font-weight: 400;
                            color: #00B4FC;
                            line-height: 30rem;
                            text-align: center;
                            box-sizing: border-box;
                        }

                        .text {
                            left: 133rem;
                            top: 8rem;
                            font-size: 12rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            position: absolute;
                        }
                    }
                }
            }

            .table {
                margin-top: 35rem;
            }
        }
    }
}
</style>