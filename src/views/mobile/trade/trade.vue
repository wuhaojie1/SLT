<template>
    <div id="trade">
        <div class="buy-seal-con">
            <div :class="index==currentindex?'active':'trade-item'"
                 v-for="(item,index) in tradearr"
                 :key="item.index"
                 @click="changeitem(index)">{{ item }}
            </div>
        </div>
        <div v-for="(item,index) in buyarr" :key="index">
            <dealitem v-if="currentindex==0"
                      @handleClick="handleClickDealitem"
                      :dealitem="item"/>
        </div>
        <div v-for="(item,index) in sealarr" :key="index">
            <dealitem v-if="currentindex==1"
                      @handleClick="handleClickDealitem"
                      :dealitem="item"/>
        </div>
        <el-dialog :visible.sync="dialogVisible"
                   width="680rem"
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
                    <div class="right blue">{{ amount === "" ? 0 : amount }}</div>
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
                           @click="comfirm">{{ currentindex===0 ? $t("Mpayorder.confirmorder") : $t("otcTrade.sellBtn") }}
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import dealitem from "../../../components/dealitem/dealitem";

export default {
    name: "trade",
    components: {dealitem},
    created() {
        this.getListFreeBuySell()
    },
    data() {
        return {
            openOrdersImg: `${require('@/static/img/trade/openOrders.png')}`,
            title: this.$t('otcTrade.buy') + " SLT",
            dialogVisible: false,
            tradearr: [this.$t('Mtrade.buy'), this.$t('Mtrade.seal')],
            currentindex: 0,
            buyarr: [
                /*{
                    name: '(1329|99%)',
                    num: '1.159935SLT',
                    limit: '40,000.00-387,481.00',
                    limitnum: '334,260.75',
                    chargenum: '334,260.75',
                    buyitem: true
                },
                {
                    name: '(1329|99%)',
                    num: '1.159935SLT',
                    limit: '40,000.00-387,481.00',
                    limitnum: '334,260.75',
                    chargenum: '334,260.75',
                    buyitem: true
                }*/
            ],
            sealarr: [
                /*{
                    name: '(1329|99%)',
                    num: '1.159935SLT',
                    limit: '40,000.00-387,481.00',
                    limitnum: '334,260.75',
                    chargenum: '334,260.75',
                    buyitem: false
                },
                {
                    name: '(1329|99%)',
                    num: '1.159935SLT',
                    limit: '40,000.00-387,481.00',
                    limitnum: '334,260.75',
                    chargenum: '334,260.75',
                    buyitem: false
                }*/
            ],
            dialogData: {},
            amount: "",
            openOrdersImgStatus: true
        }
    },
    methods: {
        handleAll() {
            this.amount = this.dialogData.oriAmount
        },
        handleOpenOrders() {
            this.openOrdersImgStatus = !this.openOrdersImgStatus
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
        changeitem(index) {
            this.currentindex = index;
            this.getListFreeBuySell();
        },
        handleClickDealitem(data) {
            this.dialogVisible = true
            this.dialogData = data
            console.log(data)
        },
        async getListFreeBuySell() {
            let transType = this.currentindex === 0 ? "BUY" : "SELL"
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
            let results = data.results
            if (data.errorCode === 0) {
                // console.log(results.items);
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
                return
            }
            let tempArray = [];
            data.forEach(item => {
                let payment = []
                payment.push(item.convertSymbol)
                let obj = {
                    name: item.userName,
                    limitnum: item.feeAmount,
                    chargenum: item.feeAmount,
                    num: item.oriAmount + " " + item.transType,
                    buyitem: this.currentindex === 0 ? true : false,
                    // quota: item.maxAmount + "-" + item.minAmount + " " + item.convertSymbol,
                    ...item,
                }
                tempArray.push(obj)
            })
            if (this.currentindex === 0) {
                this.buyarr = tempArray;
            } else {
                this.sealarr = tempArray
            }

        },
    }
}
</script>

<style scoped lang="less">
#trade {
    width: 750rem;

    .buy-seal-con {
        width: 680rem;
        height: 88rem;
        margin-left: 40rem;
        /*line-height: 88rem;*/

        .trade-item {
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #A1ACBB;
            width: 62rem;
            height: 88rem;
            float: left;
            margin-right: 43rem;
            line-height: 88rem;
        }

        .active {
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #333333;
            width: 70rem;
            height: 88rem;
            float: left;
            margin-right: 43rem;
            line-height: 88rem;
        }
    }

    .elDialogBox {
        .content {

            .title {
                padding-left: 6rem;
                text-align: left;
                font-size: 28rem;
                font-weight: 400;
                color: #00B9FE;
            }

            .input-box {
                position: relative;
                margin-top: 30rem;

                .input {
                    padding-left: 19rem;
                    width: 610rem;
                    height: 72rem;
                    box-sizing: border-box;
                    border: 1rem solid #E4E7ED;
                    border-radius: 4rem;
                }

                .input-btn {
                    position: absolute;
                    right: 20rem;
                    top: 0;
                    height: 72rem;

                    .input-btn-box {
                        height: 100%;
                        font-size: 26rem;
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
                    margin-top: 11rem;
                    text-align: left;
                    font-size: 24rem;
                    font-weight: 400;
                    color: #9AA5B5;
                }
            }

            .tread-number {
                margin: 0 auto;
                margin-top: 24rem;
                display: flex;
                //width: 350rem;
                font-size: 28rem;
                font-weight: 400;
                color: #444444;
                justify-content: space-between;
            }

            .pay-number {
                margin: 0 auto;
                margin-top: 32rem;
                display: flex;
                font-size: 28rem;
                font-weight: 400;
                color: #444444;
                //width: 350rem;
                justify-content: space-between;
            }

            .accept-tip {
                margin-top: 40rem;
                //display: flex;
                padding-left: 6rem;

                .open-orders {
                    font-size: 24rem;
                    font-weight: 400;
                    width: 150rem;
                    height: 38rem;
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
                        width: 28rem;
                        height: 28rem;
                        background: #fff;
                        margin-left: 5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img {
                            width: 18rem;
                            height: 14rem;
                        }
                    }

                }

                .tip-text {
                    text-align: left;
                    margin-top: 10rem;
                    font-weight: 400;
                    color: #9AA5B5;
                    //height: 24rem;
                    font-size: 24rem;
                    line-height: 37rem;

                    span {

                    }
                }

            }

            .blue {
                color: #00B9FE;
            }
        }

        .btn {
            height: 148rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            //margin-top: 20rem;
        }
    }
}
</style>