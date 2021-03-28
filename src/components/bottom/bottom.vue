<template>
    <div id="bottom">
        <div class="section11" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
                    <div class="section11-wrap">
                        <!-- <div class="section11-wrap-title">
                            {{ $t('index').join }}
                        </div>
                        <div class="section11-wrap-tip">
                            {{ $t('index').joinText }}
                        </div> -->
                        <!-- <div class="section11-wrap-btnBox">
                            <div class="input-item">
                                <input type="text" :placeholder="$t('index').namePlaceholder ">
                            </div>
                            <div class="input-item">
                                <input type="email" :placeholder="$t('index').emailPlaceholder ">
                            </div>
                            <div class="btn">
                                {{ $t('index').submit }}
                            </div>
                        </div> -->
                        <div class="url">
                            <div class="url-content">{{ $t('index').net1[0] }}<span>{{ $t('index').net1[1] }}</span></div>
                            <div class="url-content">{{ $t('index').net2[0] }}<span>{{ $t('index').net2[1] }}</span></div>
                            <div class="url-content email">{{ $t('index').net3[0] }}</div>
                        </div>
                        <div class="logo-icon">
                            <img :src="logoIcon" alt="" class="icon-img">
                        </div>
                        <div class="foot-text">© {{ $t('index').own }}<strong>

                        </strong></div>
                    </div>
                </div>
                <!-- <TopBar></TopBar> -->
                
    </div>
</template>

<script>
// import TopBar from "../../components/header/topBar";
    export default {
        name: "bottom",
        // components: {TopBar},
        data(){
            return{
                facebook:`${require('../../static/img/bottom/facebook.png')}`,
                ins:`${require('../../static/img/bottom/ins.png')}`,
                twitter:`${require('../../static/img/bottom/twitter.png')}`,
                logoIcon: `${require('../../static/img/index/sltlogo_60x120_white.png')}`,
                section3Bg: "",
            }
        }
    }
</script>

<style scoped lang="less">
#bottom{
    // position: fixed;
    // bottom: 0;
    // z-index: 20;
    .section11 {
                height: 380rem;
                background-color: #040622;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;

                .section11-wrap {
                    width: 1140rem;
                    margin: 0 auto;
                    height: 100%;
                    padding: 80rem 0 60rem 0;
                    box-sizing: border-box;

                    .section11-wrap-title {

                        color: #fff;
                        font-weight: 400;
                        font-style: normal;
                        opacity: 1;
                        visibility: visible;
                        margin-bottom: 15rem;
                        line-height: 1.3em;
                        font-size: 36rem;
                    }

                    .section11-wrap-tip {
                        font-size: 20rem;
                        line-height: 1.68421053em;
                        font-weight: 400;
                        font-style: normal;
                        color: #89c1f9;
                        margin-bottom: 40rem;
                    }

                    .section11-wrap-btnBox {
                        width: 798rem;
                        height: auto;
                        box-sizing: border-box;
                        margin: 0 auto;
                        display: flex;
                        margin-bottom: 60rem;

                        .input-item {
                            padding: 0 15rem;
                            box-sizing: border-box;

                            input {
                                padding: 0 20rem;
                                font-style: normal;
                                font-weight: 300;
                                font-size: 16rem;
                                display: block;
                                border: 0;
                                border-bottom: 1rem solid #d0d0d0;
                                background: #fff;
                                color: #010119;
                                line-height: 1;
                                box-sizing: border-box;
                                min-height: 46.5rem;
                                transition: border .25s;
                                width: 246rem;
                                height: 46.5rem;
                                border-radius: 999rem;
                            }
                        }

                        .btn {
                            width: 246rem;
                            height: 46.5rem;
                            background: #1622a7;
                            line-height: 46.5rem;
                            color: #fff;
                            position: relative;
                            border-radius: 999rem;
                            font-size: 12rem;
                            cursor: pointer;
                        }

                    }

                    .url {
                        color: #fff;
                        font-size: 16rem;
                        line-height: 1.6em;
                        margin-bottom: 35rem;

                        .url-content {
                            font-weight: 700;

                            span {
                                font-weight: 400;
                                font-style: normal;
                                margin-left: 15rem;
                                cursor: pointer;
                            }
                        }

                        .email {
                            margin-top: 35rem;
                            color: #ffff00;
                        }
                    }

                    .logo-icon {
                        margin-bottom: 35rem;

                        .icon-img {
                            width: 120rem;
                            height: 60rem;
                        }
                    }

                    .foot-text {
                        font-weight: 400;
                        font-style: normal;
                        color: #89c1f9;
                        font-size: 16rem;
                        opacity: 1;
                        visibility: visible;
                        line-height: 1.6em;
                    }

                }
            }
    .bottom{
        width: 1920rem;
        height: 200rem;
        background: #040622;
        .content1{
            width: 100%;
            height: 150rem;
            display: flex;
            justify-content: space-around;
            .content{
                text-align: center;
                width: 280rem;
                height: 134rem;
                margin-top: 45rem;
                .left-text1{
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #00B9FE;
                    margin-bottom: 19rem;
                }
                .left-text2{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    margin-bottom: 5rem;
                }
                .left-text3{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                }
                .img-content{
                    display: flex;
                    justify-content: space-around;
                    width: 170rem;
                    height: 40rem;
                    margin: 0 auto;
                    padding-top: 3rem;
                    .facebook{
                        width: 11rem;
                        height: 24rem;
                    }
                    .ins{
                        width: 22rem;
                        height: 19rem;
                    }
                    .twitter{
                        width: 20rem;
                        height: 20rem;
                    }
                }
            }
        }
        .line{
            width: 1920rem;
            height: 1rem;
            background: #0B0E49;
        }
        .content2{
            width: 100%;
            height: 49rem;
            margin: 0 auto;
            line-height: 49rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
}
</style>