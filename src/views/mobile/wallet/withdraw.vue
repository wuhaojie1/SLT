<template>
    <div class="topUp">
        <div class="header">
            <img :src="sltlogo" alt="" class="sltlogo">
            <img :src="userIcon" alt="" class="userIcon">
        </div>
        <div class="header-title">
            <div class="text">{{ $t('Mwithdraw.withdrawText') }}</div>
            <!-- <div class="balance">可提额度：0.10000000</div> -->
        </div>
        <!--<ThemeStickyHeader></ThemeStickyHeader>-->
        <div class="topUp-wrap">
            <!--<div class="topUp-wrap-nav">
                <div class="nav-content">
                    <div class="text">
                        <div class="left">
                            <img src="" alt="" class="back">
                            <div>充币</div>
                        </div>
                        <div class="right">
                            <div class="right-content">24H累计提币额度：1,00000000 BTC</div>
                            <div class="right-content">剩余额度：1,00000000 BTC</div>
                            <div class="line"></div>
                            <div class="right-content">提币地址管理</div>
                        </div>
                    </div>
                </div>
            </div>-->
            <div class="topUp-content">
                <!--<div class="rem">
                    <div class="box">
                        <div class="box-left">
                            <div class="imgBox">
                                <img src="" class="img" alt="">
                            </div>
                            <div class="text">
                                BTC<span>Bitcoin</span>
                            </div>
                        </div>

                        <div class="line"></div>

                        <div class="amount-content">
                            <div class="usable">可用：<span>0.00000000</span></div>
                            <div class="withdraw">可提额度：<span>0.10000000</span></div>
                            <div class="apply">
                                <img src="" alt="" class="img">
                                <div class="text">申请提额</div>
                            </div>
                        </div>
                    </div>
                </div>-->
                <div class="btc">
                    <div class="btc-img">
                        <img :src="down" alt="">
                    </div>
                    <div class="btc-text">
                        {{ $t('Mwithdraw.btcText1') }}<span> {{ $t('Mwithdraw.btcText2') }}</span>
                    </div>
                </div>
                <div class="topUp-content-wrap">
                    <div class="topUp-content-wrap-title">
                        {{ $t('Mwithdraw.name') }}
                    </div>
                    <div class="linkList">
                        <div class="linkList-item"
                             v-for="(item, index) in coinList"
                             :class="coinIndex===index ? 'linkList-item-active' : '' "
                             @click="select(index)"
                             :key="index">{{ item.text }}
                        </div>
                        <!--<div class="linkList-item">ERC20</div>
                        <div class="linkList-item">HEOC</div>-->
                    </div>

                    <div class="withdraw-addr">
                        <div class="withdraw-addr-title">
                            <div class="text">{{ $t('Mwithdraw.addr') }}</div>
                            <!--                            <div class="text">推荐使用<span>SLT</span>钱包 提币BTC</div>-->
                        </div>
                        <!--                        <div class="withdraw-input">-->
                        <!--                            <input type="text" class="input">-->
                        <!--                        </div>-->
                    </div>
                    <div class="addr-content">
                        <input type="text">
                    </div>
                    <div class="withdraw-addr">
                        <div class="withdraw-addr-title">
                            <div class="text">{{ $t('Mwithdraw.wNumber') }}</div>
                            <!--                            <div class="text">推荐使用<span>SLT</span>钱包 提币BTC</div>-->
                        </div>
                        <div class="withdraw-input">
                            <!--                            <input type="text" class="input">-->

                        </div>
                    </div>
                    <div class="addr-content">
                        <input type="text">
                        <div class="btn-box">
                            <div class="btn-box-text">
                                {{ $t('Mwithdraw.btnBoxText') }}
                            </div>
                            <div class="line"></div>
                            <div class="btn-box-text blue">
                                {{ $t('Mwithdraw.all') }}
                            </div>
                        </div>
                    </div>
                    <div class="fee">
                        {{ $t('Mwithdraw.fee') }}
                         <span>30%</span>
                    </div>
                    <div class="number">
                        {{ $t('Mwithdraw.BTCNumber') }}
                        <span>0.00000000</span>
                    </div>
                    <div class="btn" @click="openTip">
                        {{ $t('Mwithdraw.btn') }}
                    </div>
                    <!--<div class="copy">
                        复制地址
                    </div>
                    <div class="QRCode">
                        <VueQr :text="config.value"
                               :size="90"
                               :margin="0">

                        </VueQr>
                    </div>-->
                    <div class="tip">
                        <img :src="tip" alt="" class="img">
                        <div class="text">
                            {{ $t('Mwithdraw.tipText1') }}
                        </div>
                    </div>

                    <div class="tipText">
                        <ul>
                            <li>{{ $t('Mwithdraw.tipText2') }}</li>
                            <li>{{ $t('Mwithdraw.tipText3') }}</li>
                            <li>{{ $t('Mwithdraw.tipText4') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--        <Bottom></Bottom>-->
<!--        <el-dialog :visible.sync="dialogVisible"
                   width="680rem"
                   :center="false"
                   class="elDialogBox"
                   top="30vh">
            <div class="tipText">
                <div class="title">
                    <div class="img">
                        <img :src="tipImg" alt="" class="tipImg">
                    </div>
                    <div class="text">
                        {{ $t('Mwithdraw.tipText') }}
                    </div>
                </div>

                <div class="text">
                    {{ $t('Mwithdraw.book') }}
                </div>
            </div>
            <div class="toolTip">
                <input type="checkBox"><span> {{ $t('Mwithdraw').toolTip }}</span>
            </div>
            <div class="btn">
                <el-button type="primary"
                           @click="cancleComfirm"> {{ $t('Mwithdraw').primary }}
                </el-button>
            </div>
        </el-dialog>-->
    </div>
</template>

<script>
// import VueQr from 'vue-qr'
// import ThemeStickyHeader from "../../components/header/themeStickyHeader";
// import Bottom from "../../components/bottom/bottom";

export default {
    name: "topUp",
    // components: {VueQr, /*ThemeStickyHeader*/},
    data() {
        return {
            dialogVisible: true,
            sltlogo: `${require('@/static/img/index/sltlogo_60x120_white.png')}`,
            down: `${require('@/static/img/login/down.png')}`,
            tip: `${require('@/static/img/login/tip.png')}`,
            userIcon: `${require('@/static/img/index/userIcon.png')}`,
            coinIndex: 0,
            tipImg: `${require('@/static/img/wallet/hint.png')}`,
            // title: this.$t('Mwithdraw'),
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
            }
        }
    },
    methods: {
        select(index) {
            this.coinIndex = index
        },
        openTip() {
            this.dialogVisible = true
        }
    }
}
</script>

<style scoped lang="less">
.topUp {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;

    .header {
        width: 750rem;
        height: 88rem;
        background: #02031E;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        padding: 0 35rem;

        .sltlogo {
            width: 80rem;
            height: 42rem;
        }

        .userIcon {
            width: 38rem;
            height: 42rem;
        }
    }

    .header-title {
        width: 750rem;
        height: 88rem;
        background: #FFFFFF;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
            margin-left: 36rem;
            text-align: left;
            line-height: 88rem;
            font-size: 30rem;
            font-weight: 400;
            color: #444444;
        }

        .balance {
            margin-right: 35rem;
            font-size: 28rem;
            font-weight: 400;
            color: #8993A0;
        }
    }

    .topUp-wrap {
        .topUp-content {
            .btc {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 680rem;
                height: 72rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                margin: 0 auto;
                box-sizing: border-box;

                .btc-img {
                    margin-left: 25rem;
                    width: 30rem;
                    height: 30rem;
                    background: #00B4FC;
                    border-radius: 2rem;

                    img {
                        height: 12rem;
                        width: 20rem;
                    }
                }

                .btc-text {
                    margin-left: 18rem;
                    color: #444444;
                    font-size: 30rem;

                    span {
                        font-size: 28rem;
                        color: #8993A0;
                    }
                }
            }

            .topUp-content-wrap {

                .topUp-content-wrap-title {
                    text-align: left;
                    font-size: 28rem;
                    font-weight: 400;
                    color: #666666;
                    margin-left: 35rem;
                    margin-top: 40rem;
                }

                .linkList {
                    /*margin-top: 7rem;*/
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 14rem;
                    /*margin-bottom: 25rem;*/

                    .linkList-item {
                        width: 220rem;
                        height: 72rem;
                        background: #FFFFFF;
                        border: 1rem solid #E4E7ED;
                        border-radius: 2rem;
                        margin-left: 9rem;
                        position: relative;
                        line-height: 72rem;
                        cursor: pointer;
                    }

                    .linkList-item:before {
                        position: absolute;
                        width: 30rem;
                        height: 30rem;
                        border: 1rem solid #E4E7ED;
                        border-radius: 50%;
                        left: 20rem;
                        top: 21rem;
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
                        width: 30rem;
                        height: 30rem;
                        background: #FFFFFF;
                        border: 9rem solid #00B4FC;
                        border-radius: 50%;
                        left: 20rem;
                        top: 21rem;
                        content: " ";
                    }
                }

                .withdraw-addr {
                    text-align: left;
                    margin-top: 40rem;
                    padding-left: 35rem;

                    .withdraw-addr-title {
                        .text {
                            font-size: 28rem;
                            font-weight: 400;
                            color: #666666;
                        }
                    }

                    .withdraw-input {
                        position: relative;
                        box-sizing: border-box;

                        .input {
                            width: 500rem;
                            height: 100%;
                        }

                        .btn-box {
                            position: absolute;
                            top: 26rem;
                            right: 70rem;
                            z-index: 2;
                            display: flex;

                            .btn-box-text {
                                font-size: 28rem;
                                font-weight: 400;
                                color: #444444;
                            }

                            .line {
                                /*height: 100%;*/
                            }

                            .blue {
                                color: #00B4FC;
                            }
                        }
                    }
                }

                .addr-content {
                    width: 680rem;
                    height: 72rem;
                    background: #FFFFFF;
                    border: 1rem solid #E4E7ED;
                    margin: 0 auto;
                    margin-top: 15rem;
                    box-sizing: border-box;
                    position: relative;
                    display: flex;
                    align-items: center;
                    /*justify-content: center;*/

                    input {
                        padding-left: 20rem;
                    }

                    .btn-box {
                        position: absolute;
                        top: 24rem;
                        right: 35rem;
                        z-index: 2;
                        display: flex;

                        .btn-box-text {
                            font-size: 28rem;
                            font-weight: 400;
                            color: #444444;
                        }

                        .line {
                            width: 2rem;
                            height: 32rem;
                            background: #E4E7ED;
                            /*height: 100%;*/
                            margin: 0 16rem;
                        }

                        .blue {
                            color: #00B4FC;
                        }
                    }

                }

                .fee {
                    text-align: left;
                    font-size: 28rem;
                    font-weight: 400;
                    color: #8993A0;
                    margin-top: 20rem;
                    padding-left: 36rem;

                    span {
                        color: #00B4FC;
                    }
                }

                .number {
                    margin-top: 90rem;
                    padding-left: 36rem;
                    text-align: left;
                    font-size: 24rem;
                    font-weight: 400;
                    color: #666666;

                    span {
                        color: #00B4FC;
                    }
                }

                .tip {

                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    line-height: 1.5em;
                    width: 680rem;
                    /*height: 210rem;*/
                    background: #FFFFFF;
                    border: 1rem solid #E4E7ED;
                    border-radius: 1rem;
                    margin: 0 auto;
                    margin-top: 50rem;
                    padding: 25rem 26rem;
                    box-sizing: border-box;

                    .img {
                        width: 32rem;
                        height: 32rem;
                    }

                    .text {
                        line-height: 1.5em;
                        text-align: left;
                        width: 620rem;
                        font-size: 24rem;
                        font-weight: 400;
                        color: #8993A0;
                        margin-left: 15rem;
                    }
                }

                .btn {
                    width: 680rem;
                    height: 88rem;
                    background: #00B4FC;
                    border-radius: 2rem;
                    font-size: 32rem;
                    font-weight: 400;
                    color: #FFFFFF;
                    margin: 0 auto;
                    line-height: 88rem;
                    margin-top: 25rem;

                }

                .tipText {
                    margin: 0 auto;
                    /*margin-top: 50rem;*/
                    padding-top: 24rem;
                    width: 680rem;
                    /*border-top: 1rem solid #E4E7ED;*/
                    text-align: left;
                    font-size: 24rem;
                    font-weight: 400;
                    color: #8993A0;
                    line-height: 1.5em;

                    ul {
                        li {
                            list-style: none;
                        }
                    }

                }
            }
        }
    }

    .elDialogBox {
        text-align: left;

    }

    /*.topUp-wrap {
        width: 100%;
        !*margin: 75rem 0 0 0;*!
        box-sizing: border-box;

        .topUp-wrap-nav {
            width: 100%;
            height: 90rem;
            background: #041037;

            .nav-content {
                !*width: 1000rem;*!
                !*height: 100%;*!
                !*margin: 0 auto;*!

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
            !*min-height: calc(100vh - 75rem - 200rem);*!
            width: 1000rem;
            height: 950rem;
            background: #F8FAFC;
            border: 1rem solid #E4E7ED;
            !*margin: 20rem auto;*!
            box-sizing: border-box;

            .rem {
                height: 40rem;
                border-bottom: 1rem solid #E4E7ED;
                box-sizing: border-box;

                .box {
                    height: 100%;
                    !*width: 160rem;*!
                    display: flex;
                    align-items: center;
                    !*justify-content: center;*!
                    border-right: 1rem solid #E4E7ED;

                    .box-left {
                        width: 160rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        border-right: 1rem solid #E4E7ED;

                        .imgBox {
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
                    }

                    !*.line {
                        width: 1rem;
                        height: 100%;
                        color: #E4E7ED;
                    }*!

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
                            !*padding-right: 20rem;*!
                            box-sizing: border-box;

                            .input {
                                height: 100%;
                                width: 210rem;
                                padding-left: 10rem;
                                box-sizing: border-box;
                                background: #FFFFFF;
                                !*border: 1rem solid #E4E7ED;*!
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
                                background: #FFFFFF;
                                !*border: 1rem solid #E4E7ED;*!
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
                        height: 95rem;
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
    }*/
}
</style>