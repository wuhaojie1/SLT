<template>
    <div class="topUp">
        <ThemeStickyHeader></ThemeStickyHeader>
        <div class="topUp-wrap">
            <div class="topUp-wrap-nav">
                <div class="nav-content">
                    <div class="text">
                        <!-- <img src="" alt="" class="back"> -->
                        <div>{{ $t('wallet.charge') }}</div>
                    </div>
                </div>
            </div>
            <div class="topUp-content">
                <div class="topUp-content-title">
                    <div class="box" @click="openCoin">
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
                </div>
                <div class="topUp-content-wrap">
                    <div class="topUp-content-wrap-title">
                        {{ $t('wallet.chinaName') }}
                    </div>
                    <div class="linkList">
                        <!--<div class="linkList-item"-->
                             <!--v-for="(item, index) in coinList"-->
                             <!--:class="coinIndex===index ? 'linkList-item-active' : '' "-->
                             <!--@click="select(index)"-->
                             <!--:key="index">{{ item.text }}-->
                        <!--</div>-->
                        <div class="linkList-item linkList-item-active">{{drawItem.symbol}}</div>
                        <!--<div class="linkList-item">HEOC</div>-->
                    </div>
                    <div class="address-title">
                        {{ $t('wallet.chargeAddress') }}
                    </div>
                    <div class="address-content">
                        <div class="addrBox">
                            <div class="addrBox-content">
                                <div class="addr-icon">
                                    SLT
                                </div>
                                <div class="addr-text">{{drawItem.addr}}</div>
                            </div>
                            <div class="copy" @click="copyAddr(drawItem.addr)">{{ $t('wallet.copyAddress') }}</div>
                        </div>
                        <div class="QRCode">
                            <VueQr :text="drawItem.addr"
                                   :size="78"
                                   :margin="0">

                            </VueQr>
                        </div>
                        <div class="tip">
                            <!-- <img src="" alt="" class="img"> -->
                            <!-- <div class="text">
                                使用USDT-TRC20地址充值需要1个网络确认才能到账，1个
                                网络确认后才能提币。
                            </div> -->
                        </div>
                    </div>
                    <!--<div class="btn-box">-->
                        <!--<div class="btn" @click="openDialog">-->
                            <!--{{ $t('wallet.confirm') }}-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="line"></div>-->
                    <!-- <div class="tipText">
                        <ul>
                            <li>.{{ $t('wallet.chargeTipArray')[0] }} 0.001 SLT。</li>
                            <li>.{{ $t('wallet.chargeTipArray')[1] }}
                            </li>
                            <li>.{{ $t('wallet.chargeTipArray')[2] }}</li>
                            <li>.{{ $t('wallet.chargeTipArray')[3] }}
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
        <el-dialog :visible.sync="centerDialogVisible"
                   width="400rem"
                   class="elDialogBox"
                   top="40vh">
            <div class="dialog-content">
                <div class="title">
                    <div class="title-img">
                        <img :src="tipImg" alt="" class="tipImg">
                    </div>
                </div>
                <div class="tipText">
                    <div class="text1">此地址只能充入SLT</div>
                    <div class="text2">您只能向此地址充入SLT，其他资产充入SLT地址将
                        无法找回。
                    </div>
                </div>
                <div class="toolTip">
                    <input type="checkBox"><span>不再提醒</span>
                </div>
                <div class="btn">
                    我已知晓
                </div>
            </div>
        </el-dialog>
        <Bottom></Bottom>
<!--        <Notice></Notice>-->
    </div>
</template>

<script>
import VueQr from 'vue-qr'
import ThemeStickyHeader from "../../components/header/themeStickyHeader";
import Bottom from "../../components/bottom/bottom";

export default {
    name: "topUp",
    components: {Bottom, ThemeStickyHeader, VueQr},
    data() {
        return {
            selectedCoin: {
                name: "BTC ",
                tip: "Bitcoin",
            },
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
            showCoins: false,
            searchImg: `${require('@/static/img/wallet/search.png')}`,
            centerDialogVisible: false,
            tipImg: `${require('../../static/img/wallet/hint.png')}`,
            down: `${require('@/static/img/login/down.png')}`,
            config: {
                value: 'TFBpBaswdZnyZewS9zTimjtGpb11rhhLx',//显示的值、跳转的地址
                // imagePath: require('../assets/logo.png')//中间logo的地址，require必要
            },
            drawItem:{},
            drawData: [],
        }
    },
    created(){
        this.getInfo();
    },
    destroyed(){
        this.localStorage.remove('drawItem')
    },
    methods: {
        openCoin() {
            this.showCoins = !this.showCoins
        },
        select(index) {
            this.coinIndex = index
        },
        openDialog() {
            this.centerDialogVisible = !this.centerDialogVisible
        },
        selectCoin(item) {
            this.selectedCoin = item;
            this.drawData.forEach(element=>{

                if (element.symbol === item.name){
                    this.drawItem = element;
                }
            })
        },
        copyAddr(item){
            const cInput = document.createElement('input');
            cInput.value = item;
            document.body.appendChild(cInput);
            cInput.select();
            document.execCommand('Copy');
            this.$notify({
                type:'success',
                message: '复制成功'
            });
            cInput.remove();
        },
        getInfo(){
            this.axios({
                url:'user/wallet/payIndex',
                method: 'get',
            }).then((res)=>{
                if (res.errorCode === 0){
                    if (res.results.length){
                        this.drawData=  res.results;
                        this.getSymbol(res.results);
                        if (this.localStorage.get('drawItem')){
                            const drawId = this.localStorage.get('drawItem').id;
                            this.selectedCoin.name = this.localStorage.get('drawItem').symbol;
                                res.results.forEach(element => {
                                if (element.id === drawId){
                                    this.drawItem = element;
                                }
                            })
                        } else {
                            this.drawItem =  res.results[0];
                            this.selectedCoin.name = res.results[0].symbol
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
                    padding-bottom: 16rem;
                    box-sizing: border-box;
                    height: 100%;

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

            .topUp-content-title {
                height: 40rem;
                border-bottom: 1rem solid #E4E7ED;
                box-sizing: border-box;

                .box {
                    cursor: pointer;
                    height: 100%;
                    width: 160rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                            width: 380rem;
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
                    justify-content: center;
                    margin-top: 20rem;
                    margin-bottom: 35rem;

                    .btn {
                        cursor: pointer;
                        width: 200rem;
                        height: 46rem;
                        background: #00B4FC;
                        border-radius: 2rem;
                        line-height: 46rem;
                        color: #fff;
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
                    padding-top: 20rem;
                    border-top: 1rem solid #E4E7ED;
                    text-align: left;

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
        width: 100%;

        .dialog-content {
            //padding: 0 25rem;
            box-sizing: border-box;

            .title {
                .title-img {
                    height: 30rem;
                    position: relative;

                    .tipImg {
                        position: absolute;
                        width: 44rem;
                        height: 44rem;
                        top: -30rem;
                        left: 152rem;

                    }
                }
            }

            .tipText {
                width: 324rem;
                margin: 0 auto;

                .text1 {
                    margin-top: 10rem;
                    font-size: 18rem;
                    font-weight: 400;
                    color: #444444;
                    line-height: 21rem;
                }

                .text2 {
                    margin-top: 24rem;
                    font-size: 14rem;
                    font-weight: 400;
                    color: #444444;
                }
            }

            .toolTip {
                margin-top: 30rem;
                text-align: left;

                input {

                }

                span {
                    margin-left: 8rem;
                    font-size: 14rem;
                    font-weight: 400;
                    color: #444444;
                }
            }

            .btn {
                margin: 28rem auto 0;
                width: 350rem;
                height: 42rem;
                background: #00B9FE;
                border-radius: 4rem;
                font-size: 14rem;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 42rem;
                cursor: pointer;
            }
        }
    }
}
</style>
