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
                    <TableC :businessType="active"
                            :dataList="dataList"
                            :auth="true"
                            @onClick="handleClickF">

                    </TableC>
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
                    <TableC :businessType="active"
                            :dataList="dataList"
                            :feeAmount="feeAmount"
                            :auth="true"
                            @onClick="handleClickF"
                    ></TableC>
                </div>
            </div>
            <el-dialog :visible.sync="dialogVisible"
                       width="400rem"
                       :center="false"
                       class="elDialogBox"
                       :title="title"
                       top="30vh">
                <div class="content">
                    <div class="title">{{ $t('otcTrade.buyNumber') }}</div>
                    <div class="input-box">
                        <input type="text"
                               class="input"
                               :placeholder="$t('otcTrade.buyPlaceholder')"
                               v-model="amount">
                        <div class="input-btn">
                            <div class="input-btn-box">
                                <span class="name">SLT</span>
                                <span class="line">|</span>
                                <span class="all" @click="handleAll">{{ $t('otcTrade.all') }}</span>
                            </div>
                        </div>
                        <div class="input-number">{{ $t('otcTrade.limit') }}{{ dialogData.oriAmount }}</div>
                    </div>
                    <div class="tread-number">
                        <div class="left">{{ $t('otcTrade.treadMoney') }}</div>
                        <div class="right">{{ amount === "" ? 0 : amount }}</div>
                    </div>
                    <div class="pay-number">
                        <div class="left">{{ $t('otcTrade.payMoney') }}</div>
                        <div class="right">{{ amount === "" ? 0 : amount }}</div>
                    </div>
                    <div class="accept-tip">
                        <div class="open-orders">
                            <span class="blue">{{ $t('otcTrade.openOrders') }}</span>
                            <div class="img-box" @click="handleOpenOrders">
                                <img :src="openOrdersImg"
                                     v-show="openOrdersImgStatus"
                                     alt="">
                            </div>
                        </div>
                        <div class="tip-text">
                            <span>{{ $t('otcTrade.acceptText') }}</span>
                            <span class="blue">{{ $t('otcTrade.ad') }}</span>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <el-button
                        @click="dialogVisible = false">{{ $t("Mpayorder.cancleorder") }}
                    </el-button>
                    <el-button type="primary"
                               @click="comfirm">{{ active ? $t("Mpayorder.confirmorder"):$t("otcTrade.sellBtn") }}
                    </el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import TableC from "../../components/table/table";

export default {
    name: "freetrade",
    components: {TableC},
    data() {
        return {
            openOrdersImg: `${require('@/static/img/trade/openOrders.png')}`,
            title: this.$t('otcTrade.buy') + " SLT",
            dialogVisible: false,
            active: true, //true buy false sell
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
                /*{
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
                },*/
            ],
            dialogData: {},
            amount: "",
            openOrdersImgStatus: true
        }
    },
    created() {
        this.getListFreeBuySell()
    },
    watch: {
        active(v) {
            if (v) {
                this.title = this.$t('otcTrade.buy') + " SLT"
            } else {
                this.title = this.$t('otcTrade.sell') + " SLT"
            }
        }
    },
    methods: {
        changeactive(B) {
            this.active = B;
            this.getListFreeBuySell()
        },
        chooseCoin(index) {
            this.coinListChoose = index;
        },
        async getListFreeBuySell() {
            let transType = this.active ? "BUY" : "SELL"
            let postData = {
                lastId: 0,
                size: 10,
                transType: transType,
            }
            const data = await this.axios({
                url: 'otc/trans/listFreeBuySell',
                method: 'get',
                params: postData,
            })
            // console.log(data)
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
                let payment = []
                payment.push(item.convertSymbol)
                let obj = {
                    name: item.userName,
                    price: item.feeAmount,
                    number: item.oriAmount + " " + item.transType,
                    // quota: item.maxAmount + "-" + item.minAmount + " " + item.convertSymbol,
                    payment: payment,
                    ...item,
                }
                tempArray.push(obj)
            })
            this.dataList = tempArray;
        },

        handleClickF(data) {
            this.dialogVisible = true
            this.dialogData = data
        },

        comfirm() {
            if (this.amount === "") {
                this.$notify({
                    title: this.$t('notifyText.notify'),
                    message: "SLT 수가 비 어 있 으 면 안 됩 니 다.",
                    type: 'warning',
                    showClose: false
                });
                return
            } else {
                let postData = {
                    id: this.dialogData.id,
                    amount: this.amount
                }
                this.buyAndSell(postData)
            }
        },

        handleAll() {
            this.amount = this.dialogData.oriAmount
        },

        handleOpenOrders() {
            this.openOrdersImgStatus = !this.openOrdersImgStatus
        },

        //自由贸易买卖
        async buyAndSell(data) {
            let postData = data
            const res = await this.axios({
                url: 'otc/trans/buySell',
                method: 'POST',
                params: postData,
            })
            // console.log(res.results);
            if (res.errorCode === 0) {
                this.$notify({
                    title: this.$t('notifyText.notify'),
                    message: this.$t('otcTrade.success'),
                    type: 'success',
                    showClose: false
                });
                setTimeout(()=>{
                    this.dialogVisible = false
                },1000)
                // this.getdataList(results.items)
            } else {
                this.$notify({
                    title: this.$t('notifyText.notify'),
                    message: data.errmsg,
                    type: 'warning',
                    showClose: false
                });
            }

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

        .elDialogBox {
            .content {

                .title {
                    padding-left: 6rem;
                    text-align: left;
                    font-size: 14rem;
                    font-weight: 400;
                    color: #00B9FE;
                }

                .input-box {
                    position: relative;
                    margin-top: 16rem;

                    .input {
                        padding-left: 19rem;
                        width: 350rem;
                        height: 42rem;
                        box-sizing: border-box;
                        border: 1rem solid #E4E7ED;
                        border-radius: 2rem;
                    }

                    .input-btn {
                        position: absolute;
                        right: 20rem;
                        top: 0;
                        height: 42rem;

                        .input-btn-box {
                            height: 100%;
                            font-size: 14rem;
                            font-weight: 400;
                            color: #9AA5B5;
                            display: flex;
                            align-items: center;

                            .name {

                            }

                            .line {
                                margin-left: 13rem;
                                margin-right: 9rem;
                            }

                            .all {
                                cursor: pointer;
                                color: #00B9FE;
                            }
                        }
                    }

                    .input-number {
                        padding-left: 6rem;
                        margin-top: 10rem;
                        text-align: left;
                        font-size: 12rem;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                }

                .tread-number {
                    margin: 0 auto;
                    margin-top: 24rem;
                    display: flex;
                    width: 350rem;
                    justify-content: space-between;
                }

                .pay-number {
                    margin: 0 auto;
                    margin-top: 32rem;
                    display: flex;
                    width: 350rem;
                    justify-content: space-between;
                }

                .accept-tip {
                    margin-top: 20rem;
                    //display: flex;
                    padding-left: 6rem;

                    .open-orders {
                        font-size: 12rem;
                        font-weight: 400;
                        width: 84rem;
                        height: 20rem;
                        line-height: 20rem;
                        margin-top: 10rem;
                        background: #E4F7FE;
                        opacity: 0.76;
                        border-radius: 2rem;
                        color: #00B4FC;
                        text-align: left;
                        //padding-left: 3rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        span {

                        }

                        .img-box {
                            cursor: pointer;
                            width: 16rem;
                            height: 16rem;
                            background: #fff;
                            margin-left: 5rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            img {
                                width: 13rem;
                                height: 10rem;
                            }
                        }

                    }

                    .tip-text {
                        text-align: left;
                        margin-top: 10rem;
                        //margin-left: 9rem;
                        font-size: 12rem;
                        font-weight: 400;
                        color: #9AA5B5;

                        span {

                        }
                    }

                }

                .blue {
                    color: #00B9FE;
                }
            }

            .btn {
                margin-top: 20rem;
            }
        }
    }
}
</style>