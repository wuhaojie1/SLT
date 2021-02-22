<template>
    <div class="index">
        <TopBar></TopBar>
        <transition name="slide-fade-Y">
            <ThemeStickyHeader v-if="showSticky"
                               class="ThemeStickyHeader">

            </ThemeStickyHeader>
        </transition>
        <div class="index-content">
            <div class="index-content-wrap">
                <div class="section1" :style="{ 'backgroundImage':'url('+ urlIcon +')' }">
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
                                    <div class="text">ABOUT</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">SLT BENEFITS</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">ICO FACTS</div>
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
                                <div class="money">
                                    <div class="text">
                                        10,000,000,000
                                    </div>
                                    <div class="tip">
                                        Collected for now
                                    </div>
                                </div>
                                <div class="progressBar">
                                    <div class="text">
                                        <div>1M</div>
                                        <div>10B</div>
                                    </div>
                                    <!--<div class="box"></div>-->
                                    <div class="bar">
                                        <div class="rate"></div>
                                        <div class="text">
                                            SLT coins
                                        </div>
                                    </div>
                                </div>
                                <div class="payImgList">
                                    <img :src="visa" alt="">
                                    <img :src="bit" alt="">
                                    <img :src="master" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section2">
                    <div class="section2-list">
                        <div class="section2-item" v-for="(item,index) in sectionImgs" :key="index">
                            <img :src="item" alt="">
                        </div>
                    </div>
                </div>
                <div class="section3" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBar from "../../components/header/topBar";
    import TimeCard from "../../components/index/timeCard";
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";

    export default {
        name: "index",
        components: {ThemeStickyHeader, TimeCard, TopBar},
        data() {
            return {
                SLT_white: `${require('../../static/img/index/SLT_white.png')}`,
                urlIcon: `${require('../../static/img/index/ico-landing1-banner_02.jpg')}`,
                section3Bg: `${require('../../static/img/index/ico_bg_dark_03.png')}`,
                visa: `${require('../../static/img/index/logo-visa.png')}`,
                bit: `${require('../../static/img/index/logo-bitcoin.png')}`,
                master: `${require('../../static/img/index/logo-mastercard.png')}`,
                sectionImgs: [
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                ],

                showSticky: false,
                scrollTop: 0,
            }
        },
        watch: {
            scrollTop(v){
                if (v>240){
                    this.showSticky = true;
                } else {
                    this.showSticky = false;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
        },
        methods:{
            //监听滚动条事件
            handleScroll() {
                //获取设备高度
                // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //滚动的高度
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollTop = scrollTop;
                // console.log(scrollTop)
            },
        }
    }
</script>

<style scoped lang="less">
    @keyframes ThemeStickyHeadertranslateYin
    {
        0%   {
            transform: translateY(-100%);
        }
        50% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    .slide-fade-Y-enter-active {
        animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s;
    }
    .slide-fade-Y-leave-active {
        animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s reverse;
    }

    .index {

        .ThemeStickyHeader {
            /*animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s;*/
        }
        .index-content {
            width: 100%;
            /*height: 1000rem;*/
            /*position: relative;*/


            .index-content-wrap {
                width: 100%;
                height: 100%;

                .section1 {
                    background-color: #061649;
                    height: 850rem;
                    /*width: 1170rem;*/
                    position: relative;

                    background-position: center !important;
                    background-repeat: no-repeat !important;
                    background-size: cover !important;

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
                            background-color: rgba(1, 1, 25, 0.55);
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
                                    color: rgba(255, 255, 255, 0.75);
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
                                    margin-bottom: 21rem;
                                }

                                .money {
                                    .text {
                                        font-size: 32rem;
                                        color: #fff;
                                    }

                                    .tip {
                                        font-size: 13rem;
                                        color: rgba(255, 255, 255, 0.75);
                                        text-align: center;
                                        margin-top: 10rem;
                                    }
                                }

                                .progressBar {
                                    position: relative;
                                    width: 100%;
                                    /*height: 85rem;*/

                                    .text {
                                        display: flex;
                                        justify-content: space-between;
                                        font-size: 23rem;
                                        color: #fff;

                                        div {

                                        }
                                    }

                                    /*.box {
                                        height: 24rem;
                                        width: 100%;
                                        margin-top: 3rem;
                                    }*/

                                    .bar {
                                        /*top: 26rem;*/
                                        position: relative;
                                        height: 24rem;
                                        width: 100%;
                                        background: #fff;
                                        margin-top: 3rem;
                                        border-radius: 2rem;

                                        .rate {
                                            position: absolute;
                                            background: orange;
                                            width: 100rem;
                                            height: 100%;
                                            top: 0;
                                            left: 0;
                                        }

                                        .text {
                                            position: absolute;
                                            color: #fff;
                                            line-height: 24rem;
                                            top: 0;
                                            left: 12rem;
                                            font-size: 12rem;

                                        }
                                    }
                                }

                                .payImgList {
                                    margin-top: 30rem;
                                    /*width: 52rem;*/
                                    /*height: 30rem;*/

                                    display: flex;
                                    justify-content: space-around;

                                    img {
                                        background: rgb(130, 133, 157);
                                        border-radius: 3rem;
                                        width: 52rem;
                                        height: 30rem;
                                    }
                                }

                            }

                        }
                    }
                }

                .section2 {
                    background-color: #061649;
                    height: 150rem;

                    .section2-list {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        width: 1170rem;
                        margin: 0 auto;

                        .section2-item {
                            opacity: 0.6;
                            transition: all 0.3s;
                            img {
                                width: 114rem;
                                height: 54rem;
                            }
                        }
                        .section2-item:hover {
                            opacity: 1;
                        }
                    }
                }

                .section3 {
                    height: 860rem;
                    width: 100%;
                    background-color: #041b63;
                    background-position: center !important;
                    background-repeat: no-repeat !important;
                    background-size: cover !important;
                }
            }
        }
    }
</style>