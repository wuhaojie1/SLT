<template>
    <div class="topUp">
        <ThemeStickyHeader></ThemeStickyHeader>
        <div class="topUp-wrap">
            <div class="topUp-wrap-nav">
                <div class="nav-content">
                    <div class="text">
                        <div class="left">
                            <!-- <img src="" alt="" class="back"> -->
                            <div>{{$t('wallet.withdraw')}}</div>
                        </div>
                        <div class="right">
                            <!-- <div class="right-content">24H累计提币额度：1,00000000 SLT</div>
                            <div class="right-content">剩余额度：1,00000000 SLT</div> -->
                            <!-- <div class="line"></div> -->
<!--                            <div class="right-content">提币地址管理</div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="topUp-content">
                <div class="rem">
                    <div class="box" @click="openCoin">
                        <div class="box-left">
                            <div class="imgBox">
                                 <img :src="down" class="img" alt="">
                            </div>
                            <div class="text">
                                {{ selectedCoin.name }} <!--<span>{{ selectedCoin.tip }}</span>-->
                            </div>
                            <div class="coinList"
                                 v-show="showCoins">
                                <!--<div class="searchBox">-->
                                    <!--<img :src="searchImg" alt="" class="searchImg">-->
                                    <!--<input type="text" :placeholder="searchPlaceholder">-->
                                <!--</div>-->
                                <div class="coinList-content">
                                    <div class="coinList-content-list">
                                        <div class="coinList-content-item"
                                             v-for="item in coinKindList"
                                             :key="item.id"
                                             @click="selectCoin(item)">
                                            <div class="name">{{ item.name }}</div>
                                            <!--<div class="tip">{{ item.tip }}</div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="line"></div>

                        <div class="amount-content">
                            <div class="usable">{{$t('wallet.available')}}：<span>{{reflectItem.balanceAmount - reflectItem.drawAmount }}</span></div>
                            <!-- <div class="withdraw">可提额度：<span>0.10000000</span></div>
                            <div class="apply">
                                <img src="" alt="" class="img">
                                <div class="text">申请提额</div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="topUp-content-wrap">
                    <div class="topUp-content-wrap-title">
                        {{$t('wallet.chinaName')}}
                    </div>
                    <div class="linkList">
                        <!--<div class="linkList-item"-->
                             <!--v-for="(item, index) in coinList"-->
                             <!--:class="coinIndex===index ? 'linkList-item-active' : '' "-->
                             <!--@click="select(index)"-->
                             <!--:key="index">{{item.text}}-->
                        <!--</div>-->
                        <div class="linkList-item linkList-item-active">{{reflectItem.symbol}}</div>
                        <!--<div class="linkList-item">HEOC</div>-->
                    </div>

                    <div class="withdraw-addr">
                        <div class="withdraw-addr-title">
                            <div class="text">{{$t('wallet.withdrawAddress')}}</div>
                            <!-- <div class="text">推荐使用<span>SLT</span>钱包 提币SLT</div> -->
                        </div>
                        <div class="withdraw-input">
                            <input type="text" class="input" v-model="address">
                        </div>
                    </div>
                    <div class="withdraw-number">
                        <div class="number">
                            <div class="number-title">{{$t('wallet.num')}}</div>
                            <div class="number-input">
                                <input type="text" class="input" v-model="reflectCount">

                                <div class="input-tip">
                                    <div class="text">{{reflectItem.symbol}}</div>
                                    <div class="input-line"></div>
                                    <div class="all" @click="allApply">{{$t('wallet.all')}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="fee">
                            <div class="fee-title">{{$t('wallet.serviceCharge')}}</div>
                            <div class="fee-input">
                                <div class="input fee">{{reflectCount*fee ? reflectCount*fee  : ''}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="balance">
                        {{$t('wallet.available')}}：{{reflectItem.balanceAmount - reflectItem.drawAmount }}{{ selectedCoin.name }}
                    </div>
                    <div class="arrival">{{$t('wallet.received')}}（{{ selectedCoin.name }}）<span>{{reflectCount - reflectCount*fee}}</span></div>

                    <div class="btn-box">
                        <div class="btn" @click="openTip">
                            {{$t('wallet.withdraw')}}
                        </div>
                    </div>

                    <div class="tipText">
                        <div class="warn">
                            <img src="" class="warn-img" alt="">
                            <div class="warn-text">
                               {{$t('wallet.tip')}}
                            </div>
                        </div>
                        <ul>
                            <li>.{{$t('wallet.withdrawTipArray')[0]}}</li>
                            <li>.{{$t('wallet.withdrawTipArray')[1]}}
                            </li>
                            <li>.{{$t('wallet.withdrawTipArray')[2]}}</li>
                            <!-- <li>.{{$t('wallet.withdrawTipArray')[3]}}
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible"
                   width="400rem"
                   :center="false"
                   class="elDialogBox"
                   :title="title"
                   top="30vh">
            <div class="tipText">
                <div class="text">
                    {{ $t('Mwithdraw.tipText') }}
                    <span>
                        {{$t('Mwithdraw.book')}}
                    </span>
                </div>
            </div>
            <div class="toolTip">
                <el-checkbox v-model="checkFlag"></el-checkbox><span>不再提醒</span>
            </div>
            <div class="btn">
                <el-button type="primary"
                           :disabled="!checkFlag"
                           @click="applyDraw">确定</el-button>
            </div>
        </el-dialog>
        <Bottom></Bottom>
    </div>
</template>

<script>
import ThemeStickyHeader from "../../components/header/themeStickyHeader";
import Bottom from "../../components/bottom/bottom";

    export default {
        name: "topUp",
        components: {Bottom, ThemeStickyHeader},
        data() {
            return {
                title:this.$t('Mwithdraw.title'),
                dialogVisible: false,
                coinIndex: 0,
                coinList: [
                    {
                        text: "BLC",
                    },
                    {
                        text: "ERC20",
                    },
                    {
                        text: "HEOC",
                    }
                ],
                config: {
                    value: 'TFBpBaswdZnyZewS9zTimjtGpb11rhhLx',//显示的值、跳转的地址
                    // imagePath: require('../assets/logo.png')//中间logo的地址，require必要
                },
                reflectItem: {},
                drawData: [],
                fee: null,
                reflectCount:null,
                address: '',
                showCoins: false,
                searchImg: `${require('@/static/img/wallet/search.png')}`,
                down: `${require('@/static/img/login/down.png')}`,
                searchPlaceholder: "",
                coinKindList: [
                    // {
                    //     name: "BTC ",
                    //     tip: "Bitcoin",
                    // },
                    // {
                    //     name: "USDT",
                    //     tip: "Tether",
                    // },
                    // {
                    //     name: "HUSD",
                    //     tip: "HUSD",
                    // },
                    // {
                    //     name: "GUSD",
                    //     tip: "GUSD",
                    // },
                    // {
                    //     name: "TUSD",
                    //     tip: "TRUE USD",
                    // },
                    // {
                    //     name: "VEN",
                    //     tip: "VEN",
                    // },
                    // {
                    //     name: "USDT",
                    //     tip: "Tether",
                    // },
                    // {
                    //     name: "HUSD",
                    //     tip: "HUSD",
                    // },
                    // {
                    //     name: "GUSD",
                    //     tip: "GUSD",
                    // },
                    // {
                    //     name: "TUSD",
                    //     tip: "TRUE USD",
                    // },
                    // {
                    //     name: "VEN",
                    //     tip: "VEN",
                    // },
                ],
                selectedCoin: {
                    name: "BTC ",
                    tip: "Bitcoin",
                },
                checkFlag: false,
            }
        },
        created(){
            this.getInfo();
        },
        destroyed(){
             this.localStorage.remove('reflectItem')
        },
        methods: {
            select(index) {
                this.coinIndex = index
            },
            openCoin() {
                this.showCoins = !this.showCoins
            },
            selectCoin(item) {
                this.reflectCount = null;
                this.selectedCoin = item;
                this.drawData.forEach(element=>{
                    if (element.symbol === item.name){
                        this.reflectItem = element;
                    }
                })
            },
            allApply(){
                let {reflectItem} = this;
                this.reflectCount = reflectItem.balanceAmount - reflectItem.drawAmount
            },

            openTip() {
                if (this.reflectCount > 0){
                    if (this.address){
                        this.dialogVisible = true
                    }else {
                        this.$notify({
                            title:this.$t('common.warning'),
                            type: 'warning',
                            message: this.$t('wallet.tips')[0]
                        })
                    }
                }else {
                    this.$notify({
                        title:this.$t('common.warning'),
                        type: 'warning',
                        message: this.$t('wallet.tips')[1]
                    })
                }
            },
            getInfo(){
                this.axios({
                    url:'/user/wallet/drawIndex',
                    method: 'get',
                }).then((res)=>{
                    if (res.errorCode === 0){
                        this.fee = res.results.fee;
                        if (res.results.accPacketList.length){
                            this.getSymbol(res.results.accPacketList);
                            this.drawData=  res.results.accPacketList;
                            if (this.localStorage.get('reflectItem')){
                                this.selectedCoin.name = this.localStorage.get('reflectItem').symbol;
                                const drawId = this.localStorage.get('reflectItem').id;
                                res.results.accPacketList.forEach(element => {
                                    if (element.id === drawId){
                                        this.reflectItem = element;
                                    }
                                })
                            } else {
                                this.reflectItem =  res.results.accPacketList[0];
                                this.selectedCoin.name = res.results.accPacketList[0].symbol
                            }
                        }
                    }
                })
            },
            getSymbol(item){
                let symbolItem = {};
                item.forEach(element=>{
                    symbolItem = {
                        name: element.symbol
                    };
                    this.coinKindList.push(symbolItem)
                })
            },
            applyDraw(){
                const param = {
                    amount: this.reflectCount,
                    symbol: this.reflectItem.symbol,
                    address: this.address,
                };
                this.axios({
                    url:'user/wallet/drawApply  ',
                    method:'post',
                    params: param,
                }).then(res=>{
                    if (res.errorCode === 0){
                        this.dialogVisible = false;
                        this.$router.go(-1);
                        this.$notify({
                            title:this.$t('common.success'),
                            type: 'success',
                            message: this.$t('wallet.tips')[2]
                        })
                    }else {
                        this.$notify({
                            title:this.$t('common.error'),
                            type: 'error',
                            message: this.$t('wallet.tips')[3]
                        })
                    }
                })

            }
        }
    }
</script>

<style scoped lang="less">
.topUp {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;

    .topUp-wrap {
        width: 100%;
        margin: 75rem 0 0 0;
        box-sizing: border-box;

        .topUp-wrap-nav {
            width: 100%;
            height: 90rem;
            background: #041037;

            .nav-content {
                width: 1000rem;
                height: 100%;
                margin: 0 auto;

                .text {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    padding-bottom: 16rem;
                    box-sizing: border-box;
                    height: 100%;

                    .left {
                        display: flex;

                        .back {
                            width: 9rem;
                            height: 14rem;

                        }

                        div {
                            margin-left: 10rem;
                            text-align: left;
                            font-size: 14rem;
                            font-weight: 400;
                            color: #FFFFFF;
                        }
                    }

                    .right {
                        display: flex;

                        .right-content {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #77AFE7;
                        }

                        .right-content:first-child {
                            margin-right: 33rem;
                        }

                        .line {
                            width: 2rem;
                            height: 13rem;
                            background: #00B4FC;
                            margin: 0 8rem;
                        }
                    }


                }
            }
        }

        .topUp-content {
            min-height: calc(100vh - 75rem - 200rem);
            width: 1000rem;
            height: 950rem;
            background: #F8FAFC;
            border: 1rem solid #E4E7ED;
            margin: 20rem auto;
            box-sizing: border-box;

            .rem {
                height: 40rem;
                border-bottom: 1rem solid #E4E7ED;
                box-sizing: border-box;

                .box {
                    height: 100%;
                    /*width: 160rem;*/
                    display: flex;
                    align-items: center;
                    /*justify-content: center;*/
                    border-right: 1rem solid #E4E7ED;
                    cursor: pointer;

                    .box-left {
                        width: 160rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        border-right: 1rem solid #E4E7ED;
                        position: relative;

                        .imgBox {
                            margin-left: 25rem;
                            width: 20rem;
                            height: 20rem;
                            background: #00B4FC;
                            border-radius: 2rem;
                            .img {
                                width: 20rem;
                                height: 20rem;
                            }
                        }

                        .text {
                            margin-left: 12rem;
                            font-size: 14rem;
                            color: #444;

                            span {
                                color: #8993A0;
                                margin-left: 10rem;
                            }
                        }

                        .coinList {
                            position: absolute;
                            width: 230rem;
                            height: 260rem;
                            background: #fff;
                            z-index: 5;
                            box-sizing: border-box;
                            padding: 10rem 0;
                            left: 0;
                            top: 40rem;
                            box-shadow: 0rem 0rem 5rem 0rem rgba(153, 153, 153, 0.35);

                            .searchBox {
                                width: 210rem;
                                height: 40rem;
                                position: relative;
                                border: 1rem solid #E4E7ED;
                                box-sizing: border-box;
                                margin: 0 auto;

                                input {
                                    padding-left: 33rem;
                                    width: 100%;
                                    height: 100%;
                                    box-sizing: border-box;
                                }

                                .searchImg {
                                    position: absolute;
                                    width: 16rem;
                                    height: 16rem;
                                    left: 10rem;
                                    top: 14rem;
                                }

                            }

                            .coinList-content {
                                margin-top: 10rem;
                                margin-bottom: 10rem;
                                height: 190rem;

                                .coinList-content-list {
                                    height: 100%;
                                    overflow-y: scroll;
                                    overflow-x: hidden;

                                    .coinList-content-item {
                                        width: 100%;
                                        height: 38rem;
                                        display: flex;
                                        font-size: 14rem;
                                        font-weight: 400;
                                        line-height: 38rem;
                                        box-sizing: border-box;
                                        padding-left: 21rem;

                                        .name {
                                            color: #444444;
                                        }

                                        .tip {
                                            margin-left: 10rem;
                                            color: #999999;
                                        }
                                    }

                                    .coinList-content-item:hover, .coinList-content-item:active {
                                        background: #F2F6FA;

                                        .name {
                                            color: #00B4FC;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    /*.line {
                        width: 1rem;
                        height: 100%;
                        color: #E4E7ED;
                    }*/

                    .amount-content {
                        display: flex;
                        align-items: center;
                        margin-left: 30rem;

                        .usable {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #8993A0;

                            span {
                                color: #0DA88B;
                            }
                        }

                        .withdraw {
                            margin-left: 25rem;
                            font-size: 14rem;
                            font-weight: 400;
                            color: #8993A0;
                        }

                        .apply {
                            display: flex;
                            align-items: center;
                            margin-left: 20rem;

                            .img {
                                width: 16rem;
                                height: 16rem;
                            }

                            .text {
                                margin-left: 17rem;
                                font-size: 14rem;
                                font-weight: 400;
                                color: #00B4FC;
                            }
                        }
                    }


                }
            }

            .topUp-content-wrap {
                width: 620rem;
                height: 100%;
                margin: 0 auto;
                padding-top: 40rem;

                .topUp-content-wrap-title {
                    text-align: left;
                    font-size: 14rem;
                    font-weight: 400;
                    color: #666666;
                }

                .linkList {
                    margin-top: 7rem;
                    display: flex;
                    margin-bottom: 25rem;

                    .linkList-item {
                        width: 200rem;
                        height: 38rem;
                        background: #FFFFFF;
                        border: 1rem solid #E4E7ED;
                        border-radius: 2rem;
                        margin-left: 9rem;
                        position: relative;
                        line-height: 38rem;
                        cursor: pointer;
                    }

                    .linkList-item:before {
                        position: absolute;
                        width: 16rem;
                        height: 16rem;
                        border: 1rem solid #E4E7ED;
                        border-radius: 50%;
                        left: 20rem;
                        top: 11rem;
                        content: " ";

                    }

                    .linkList-item:first-child {
                        margin-left: 0;
                    }

                    .linkList-item-active {
                        border: 1rem solid #00B4FC;
                    }

                    .linkList-item-active:before {
                        box-sizing: border-box;
                        position: absolute;
                        width: 16rem;
                        height: 16rem;
                        background: #FFFFFF;
                        border: 5rem solid #00B4FC;
                        border-radius: 50%;
                        left: 20rem;
                        top: 11rem;
                        content: " ";
                    }
                }

                .withdraw-addr {
                    .withdraw-addr-title {
                        font-size: 14rem;
                        font-weight: 400;
                        color: #666666;
                        display: flex;
                        justify-content: space-between;

                        .text {

                        }

                        .text {
                            font-size: 14rem;
                            font-weight: 400;
                            color: #666666;

                            span {
                                color: #00B4FC;
                            }
                        }
                    }

                    .withdraw-input {
                        width: 100%;
                        height: 38rem;
                        margin-top: 8rem;

                        .input {
                            width: 100%;
                            height: 100%;
                            background: #FFFFFF;
                            border: 1rem solid #E4E7ED;
                            border-radius: 2rem;
                            box-sizing: border-box;
                            padding-left: 10rem;
                        }
                    }
                }

                .withdraw-number {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 25rem;
                    text-align: left;

                    .number {

                        .number-title {

                        }

                        .number-input {
                            margin-top: 7rem;
                            width: 305rem;
                            height: 38rem;
                            background: #FFFFFF;
                            border: 1rem solid #E4E7ED;
                            border-radius: 2rem;
                            display: flex;
                            align-items: center;
                            /*padding-right: 20rem;*/
                            box-sizing: border-box;

                            .input {
                                height: 100%;
                                width: 210rem;
                                padding-left: 10rem;
                                box-sizing: border-box;
                                background: #FFFFFF;
                                /*border: 1rem solid #E4E7ED;*/
                                border-radius: 2rem;

                            }

                            .input-tip {
                                height: 100%;
                                display: flex;
                                align-items: center;

                                .text {
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #444444;
                                }

                                .input-line {
                                    width: 2rem;
                                    height: 16rem;
                                    background: #E4E7ED;
                                    margin: 0 13rem;
                                }

                                .all {
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #00B4FC;
                                    cursor: pointer;
                                }
                            }
                        }
                    }

                    .fee {

                        .fee-title {

                        }

                        .fee-input {
                            margin-top: 7rem;
                            width: 305rem;
                            height: 38rem;
                            background: #FFFFFF;
                            border: 1rem solid #E4E7ED;
                            border-radius: 2rem;

                            .input {
                                padding-left: 10rem;
                                box-sizing: border-box;
                                height: 100%;
                                width: 220rem;
                                line-height: 38rem;
                                background: #FFFFFF;
                                /*border: 1rem solid #E4E7ED;*/
                                border-radius: 2rem;
                                }
                            }
                        }
                    }

                .balance {
                    text-align: left;
                    margin-top: 15rem;
                    font-size: 14rem;
                    font-weight: 400;
                    color: #9AA5B5;
                }

                .arrival {
                    margin-top: 25rem;
                    text-align: left;
                    font-size: 14rem;
                    font-weight: 400;
                    color: #666666;

                    span {
                        color: #00B4FC;
                    }
                }

                .address-title {
                    margin-bottom: 8rem;
                    text-align: left;
                    font-size: 14rem;
                    font-weight: 400;
                    color: #666666;
                }

                .address-content {
                    width: 620rem;
                    height: 240rem;
                    background: #FFFFFF;
                    border: 1rem solid #E4E7ED;
                    border-radius: 2rem;

                    .addrBox {
                        margin-top: 30rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .addrBox-content {
                            width: 340rem;
                            height: 38rem;
                            background: #FFFFFF;
                            border: 1rem solid #E4E7ED;
                            border-radius: 2rem;
                            display: flex;
                            align-items: center;
                            padding: 0 10rem;
                            box-sizing: border-box;

                            .addr-icon {
                                width: 34rem;
                                height: 18rem;
                                background: #F8FAFC;
                                border: 1rem solid #F8FAFC;
                                border-radius: 2rem;
                                text-align: center;
                                line-height: 18rem;
                            }

                            .addr-text {
                                margin-left: 6rem;
                            }
                        }

                        .copy {
                            width: 50rem;
                            height: 12rem;
                            font-size: 12rem;
                            font-weight: 400;
                            color: #22BF7C;
                            line-height: 18rem;
                            margin-left: 9rem;
                        }
                    }

                    .QRCode {
                        margin-top: 20rem;
                        margin-bottom: 20rem;
                    }

                    .tip {
                        display: flex;
                        align-items: flex-start;
                        justify-content: center;

                        .img {
                            width: 20rem;
                            height: 20rem;
                        }

                        .text {
                            margin-left: 7rem;
                            width: 324rem;
                            font-size: 12rem;
                            font-weight: 400;
                            color: #8993A0;
                            line-height: 18rem;
                            text-align: left;
                        }
                    }
                }

                .btn-box {
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 20rem;
                    margin-bottom: 35rem;

                    .btn {
                        width: 200rem;
                        height: 46rem;
                        background: #00B4FC;
                        border-radius: 2rem;
                        line-height: 46rem;
                        color: #fff;
                        cursor: pointer;
                    }
                }

                .line {
                    width: 620rem;
                    height: 1rem;
                    background: #FFFFFF;
                    border: 1rem solid #E4E7ED;
                    border-radius: 1rem;
                }

                .tipText {
                    width: 100%;
                    padding-top: 35rem;
                    border-top: 1rem solid #E4E7ED;
                    text-align: left;

                    .warn {
                        width: 620rem;
                        //height: 95rem;
                        margin-bottom: 25rem;
                        background: #FFFFFF;
                        border: 1rem solid #E4E7ED;
                        border-radius: 1rem;
                        box-sizing: border-box;
                        padding: 20rem 25rem 20rem 44rem;
                        position: relative;

                        .warn-img {
                            position: absolute;
                            width: 16rem;
                            height: 16rem;
                            top: 20rem;
                            left: 20rem;
                        }

                        .warn-text {
                            font-size: 12rem;
                            font-weight: 400;
                            color: #8993A0;
                            line-height: 20rem;
                        }

                    }

                    ul {
                        li {
                            font-size: 12rem;
                            font-weight: 400;
                            color: #8993A0;
                            margin-top: 10rem;
                            line-height: 1.5em;
                        }

                        li:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
        }
    }

    .elDialogBox {
        text-align: left;

        .tipText {

            width: 350rem;
            margin: 0 auto;

            .text {
                font-size: 14rem;
                font-weight: 400;
                color: #666666;
                line-height: 23rem;
            }

            span {
                color: #00B9FE;
            }

        }

        .toolTip {
            margin-top: 22rem;

            input {

            }

            span {
                margin-left: 8rem;
            }
        }

        .btn {
            text-align: right;
        }
    }
}
</style>
