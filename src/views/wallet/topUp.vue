<template>
    <div class="topUp">
        <ThemeStickyHeader></ThemeStickyHeader>
        <div class="topUp-wrap">
            <div class="topUp-wrap-nav">
                <div class="nav-content">
                    <div class="text">
                        <!-- <img src="" alt="" class="back"> -->
                        <div>{{$t('wallet.charge')}}</div>
                    </div>
                </div>
            </div>
            <div class="topUp-content">
                <div class="topUp-content-title">
                    <div class="box">
                        <div class="imgBox">
                            <img src="../../static/img/wallet/arrowdown.png" class="img" alt="">
                        </div>
                        <div class="text">
                            SLT<span>Bitcoin</span>
                        </div>
                        <div class="downmenu">
                            <div class="search">
                                <img style="width:16rem;height:16rem;margin:0rem 7rem 0rem 10rem" src="../../static/img/wallet/search.png" alt="">
                                <input class="place" type="text" placeholder-class="place" placeholder="搜索币种">
                            </div>
                            <ul class="searchMenu">
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                                <li>
                                    <span>USDT</span>
                                    <span>Tether</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="topUp-content-wrap">
                    <div class="topUp-content-wrap-title">
                        {{$t('wallet.chinaName')}}
                    </div>
                    <div class="linkList">
                        <div class="linkList-item"
                             v-for="(item, index) in coinList"
                             :class="coinIndex===index ? 'linkList-item-active' : '' "
                             @click="select(index)"
                             :key="index">{{item.text}}
                        </div>
                        <!--<div class="linkList-item">ERC20</div>
                        <div class="linkList-item">HEOC</div>-->
                    </div>
                    <div class="address-title">
                        {{$t('wallet.chargeAddress')}}
                    </div>
                    <div class="address-content">
                        <div class="addrBox">
                            <div class="addrBox-content">
                                <div class="addr-icon">
                                    SLT
                                </div>
                                <div class="addr-text">TFBpBaswdZnyZewS9zTimjtGpb11rhhLx</div>
                            </div>
                            <div class="copy">{{$t('wallet.copyAddress')}}</div>
                        </div>
                        <div class="QRCode">
                            <VueQr :text="config.value"
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
                    <div class="btn-box">
                        <div class="btn">
                            {{$t('wallet.confirm')}}
                        </div>
                    </div>
                    <!--<div class="line"></div>-->
                    <div class="tipText">
                        <ul>
                            <li>.{{$t('wallet.chargeTipArray')[0]}} 0.001 SLT。</li>
                            <li>.{{$t('wallet.chargeTipArray')[1]}}
                            </li>
                            <li>.{{$t('wallet.chargeTipArray')[2]}}</li>
                            <li>.{{$t('wallet.chargeTipArray')[3]}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Bottom></Bottom>
        <Notice></Notice>
    </div>
</template>

<script>
    import VueQr from 'vue-qr'
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import Bottom from "../../components/bottom/bottom";
    import Notice from '../../components/notice/notice.vue';

    export default {
        name: "topUp",
        components: {Bottom, ThemeStickyHeader, VueQr,Notice},
        data() {
            return {
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
                }
            }
        },
        methods: {
            select(index) {
                this.coinIndex = index
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
                        height: 100%;
                        width: 160rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-right: 1rem solid #E4E7ED;
                        position: relative;

                        .imgBox {
                            width: 20rem;
                            height: 20rem;
                            background: #00B4FC;
                            border-radius: 2rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .img {
                                width: 14rem;
                                height: 8rem;
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

                        .downmenu{
                            position: absolute;
                            width: 230rem;
                            height: 260rem;
                            background: #FFFFFF;
                            box-shadow:0rem -1rem 5rem 0rem rgba(153, 153, 153, 0.35);
                            left: 0;
                            top: 40rem;
                            z-index: 1;
                            .search{
                                width: 210rem;
                                height: 40rem;
                                background: #FFFFFF;
                                border: 1rem solid #E4E7ED;
                                margin: 10rem auto;
                                display: flex;
                                align-items: center;
                                .place{
                                    width:100%;
                                    margin-right: 10rem;
                                }
                                .place::-webkit-input-placeholder {
                                /* Chrome/Opera/Safari */
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #666666;
                                }
                    
                                .place::-moz-placeholder {
                                    /* Firefox 19+ */
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #666666;
                                }
                    
                                .place:-ms-input-placeholder {
                                    /* IE 10+ */
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #666666;
                                }
                    
                                .place:-moz-placeholder {
                                    /* Firefox 18- */
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #666666;
                                }

                            }
                            .searchMenu{
                                list-style: none;
                                margin: 0;
                                text-align: left;
                                overflow: auto;
                                height: calc(260rem - 60rem);

                                li{
                                    width: 230rem;
                                    height: 38rem;
                                    display: flex;
                                    align-items: center;
                                    padding-left: 21rem;
                                    box-sizing: border-box;
                                    
                                    span:nth-child(1){
                                        font-size: 14rem;
                                        font-weight: 400;
                                        color: #444;
                                    }
                                    span:nth-child(2){
                                        font-size: 14rem;
                                        font-weight: 400;
                                        color: #8993A0;
                                        padding-left: 6rem;
                                    }
                                    &:hover{
                                        background: #F2F6FA;
                                        span:nth-child(1){
                                            color: #00B4FC;
                                        }
                                    }
                                }
                            }
                            .searchMenu::-webkit-scrollbar {
                                // width:6px;
                                // height:640px;     
                            }
                            .searchMenu::-webkit-scrollbar-thumb {
                                width: 6rem;
                                height: 80rem;
                                background: #CCD2DB;
                                border-radius: 3rem;
                            }
                            .searchMenu::-webkit-scrollbar-track {
                                -webkit-box-shadow: 0 0 0px rgba(0,0,0,0.2);
                                border-radius: 0;
                                background: white;
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
                        justify-content: center;
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
    }
</style>