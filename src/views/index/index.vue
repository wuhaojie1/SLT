<template>
    <div class="index">
        <TopBar></TopBar>
        <div class="index-content">
            <div class="index-content-wrap">
                <div class="section1">
                    <div class="site-header">
                        <div class="site-header-list">
                            <div class="site-header-item-img">
                                <img :src="SLT_white" alt="" class="SLT_white_logo">
                            </div>
                            <div class="site-header-text-list">
                                <div class="site-header-item">
                                    <div class="text">INTRO</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">About</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">SLT BENEFITS</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">ICO  FACTS</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">TEAM</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">ROADMAP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section1-content">
                        <div class="wpb-wrapper">
                            <div class="title1">
                                SLTcoins
                            </div>
                            <div class="title2">
                                키즈산업 생태계 블록체인
                            </div>
                            <div class="content">
                                SLTcoin은 글로벌 최초의 'BOOK코인' 입니다. 실질적으로 사업이 진행중인 북트리와 연계하여 코인을 분배할 수 있어 시장 보급이 용이하며 빠른
                                거래활성화가 가능 합니다. SLTcoin은 북트리 브랜드 및 매출 상승에 따른 코인의 가치 동반상승을 기대할 수 있는 미래가 탄탄한 코인 입니다.
                            </div>
                            <div class="btn">
                                <div class="left">
                                    WHITE PAPERS
                                </div>
                                <div class="right">
                                    <!--<img src="" alt="" class="right-img">-->
                                    <h4>북트리 소개</h4>
                                </div>
                            </div>
                        </div>
                        <div class="ico">
                            <div class="ico-content">
                                <div class="ico-content-title">
                                    ICO Ends in
                                </div>
                                <div class="ico-content-date">
                                    <div class="ico-content-date-list">
                                        <TimeCard class="TimeCard"></TimeCard>
                                        <TimeCard class="TimeCard"></TimeCard>
                                        <TimeCard class="TimeCard"></TimeCard>
                                        <TimeCard class="TimeCard"></TimeCard>
                                    </div>
                                </div>
                                <div class="ico-content-text">Token sales ends on 31st May, 2021</div>
                                <div class="ico-content-btn">
                                    BUY SLT COINS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBar from "../../components/header/topBar";
    import TimeCard from "../../components/index/timeCard";

    export default {
        name: "index",
        components: {TimeCard, TopBar},
        data() {
            return {
                SLT_white: `${require('../../static/img/index/SLT_white.png')}`,
            }
        }
    }
</script>

<style scoped lang="less">

    .index {

        .index-content {
            width: 100%;
            /*height: 1000rem;*/
            /*position: relative;*/


            .index-content-wrap {
                width: 100%;
                height: 100%;

                .section1 {
                    background-color: #061649;
                    height: 1000rem;
                    /*width: 1170rem;*/
                    position: relative;

                    .site-header {
                        width: 1170rem;
                        height: 218rem;
                        margin: 0 auto;

                        .site-header-list {
                            height: 100%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            box-sizing: border-box;
                            padding: 0 15rem;


                            .site-header-item-img {
                                margin-right: 30rem;
                            }

                            .site-header-text-list {
                                height: 100%;
                                display: flex;
                                align-items: center;
                                box-sizing: border-box;
                                margin-left: 30rem;

                                .site-header-item {
                                    margin-left: 30rem;

                                    .SLT_white_logo {
                                        width: 314rem;
                                        height: 148rem;
                                    }

                                    .text {
                                        color: #eee;
                                        font-size: 15rem;
                                    }
                                }
                            }
                        }
                    }

                    .section1-content {
                        margin: 0 auto;
                        width: 1170rem;
                        margin-top: 40rem;
                        position: relative;

                        .wpb-wrapper {
                            width: 517rem;
                            height: auto;
                            text-align: left;

                            .title1 {
                                font-size: 14rem;
                                color: #00B4FC !important;
                                line-height: 1.6em;
                                box-sizing: border-box;
                                margin-bottom: 10rem;
                            }

                            .title2 {
                                color: #fff;
                                margin-bottom: 40rem !important;
                                font-weight: 400;
                                font-style: normal;
                                visibility: visible;
                                font-size: 42rem;
                            }

                            .content {
                                line-height: 1.6em;
                                box-sizing: border-box;
                                display: block;
                                font-weight: 400;
                                font-style: normal;
                                color: #89c1f9;
                                font-size: 16rem;
                                opacity: 1;
                                visibility: visible;
                                margin-bottom: 40px !important;

                            }

                            .btn {
                                display: flex;

                                .left {
                                    width: 243rem;
                                    height: 48rem;
                                    text-align: center;
                                    line-height: 48rem;
                                    color: #00B4FC;
                                    cursor: pointer;
                                    border-radius: 2em;
                                    transition: all 0.3s;
                                }

                                .left:hover {
                                    color: #fff;
                                    background-color: #00B4FC;
                                }

                                .right {

                                    .right-img {
                                        width: 55rem;
                                        height: 55rem;
                                    }

                                    h4 {
                                        margin-left: 20rem;
                                        line-height: 48rem;
                                        font-size: 16rem;
                                        color: #fff;
                                    }
                                }
                            }
                        }

                        .ico {
                            position: absolute;
                            box-sizing: border-box;
                            width: 380rem;
                            height: 565rem;
                            background-color: rgba(1,1,25,0.55);
                            right: 50rem;
                            top: -120rem;
                            padding: 35rem;

                            .ico-content {

                                .ico-content-title {
                                    color: #ffffff;
                                    text-align: center;
                                    margin-bottom: 30rem;
                                    font-size: 24rem;

                                }

                                .ico-content-date {

                                    .ico-content-date-list {
                                        box-sizing: border-box;
                                        display: flex;
                                        justify-content: space-between;

                                        .TimeCard {
                                            border-radius: 5rem;
                                        }
                                    }
                                }

                                .ico-content-text {
                                    font-size: 12rem;
                                    color: rgba(255,255,255,0.75);
                                    text-align: center;
                                    margin-top: 25rem;
                                    margin-bottom: 30rem;
                                }

                                .ico-content-btn {
                                    height: 48rem;
                                    width: 100%;
                                    border-radius: 2em;
                                    color: #fff;
                                    background: #00B4FC;
                                    line-height: 48rem;
                                }

                            }

                        }
                    }
                }
            }
        }
    }
</style>