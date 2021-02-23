<template>
    <div class="index">
        <TopBar></TopBar>
        <transition name="slide-fade-Y">
            <ThemeStickyHeader v-if="showSticky" class="ThemeStickyHeader"></ThemeStickyHeader>
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
                    <div class="section3-list">
                        <div class="section3-item">
                            <div class="section3-item-left">
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            생태계
                                        </div>
                                        <div class="content">
                                            독서데이터로 유아 및 아동 개개인의 교육, 취향, 수준 데이터를 확보하고, 이를 통해 키즈산업 생태계를 구축하여 SLTcoin을 기본
                                            생태토큰으로 블록체인 플랫폼에 고객, 교육기업, 작가, 교육광고자 모두에게 혜택을 제공하는 생태계를 구축하여, 코인판매 이외에도
                                            상품유통, 광고, 펀딩 서비스를 통한 자체 수익원을 확보.
                                        </div>
                                    </div>
                                </div>
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            활용 분야
                                        </div>
                                        <div class="content">
                                            교육컨텐츠 구입 맻 대여, 키즈카페 결재, 북트리 판매수익 배분, 기프트 카드, 시각장애인 컨텐츠 개발, VIP 컨텐츠, SLTcoin
                                            채굴, 광고청취
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section3-item">
                            <img :src="section3ItemImg" alt="" class="section3ItemImg">
                        </div>
                        <div class="section3-item">
                            <div class="section3-item-right">
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            블록체인 기술
                                        </div>
                                        <div class="content">
                                            암호화폐의 근간인 블록체인 기술은 4차 산업혁명 시대를 이끌어갈 핵실 기술중의 하나로 거래 내역 데이터를 모두 블록에 저장하고 연결하여
                                            데이터를 기록하 저장된 블록들이 모여 만들어진 블록체인은 모든 네트워크 참여자들에게 공개되어 신뢰를 보장.
                                        </div>
                                    </div>
                                </div>
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            투명성과 공정성을 보증
                                        </div>
                                        <div class="content">
                                            SLTcoin은 TRON기반의 TRC20토큰을 표준으로 한 코인으로 이미 많은 이용자들에 의하여 성공적인 표준기술로 인정받고 있습니다.
                                            트론스캔 시스템을 통하여 모든 내용이 공개되기 때문에 투명성을 보증 할 수 있으며 투자자들에게 신뢰를 줄 수 있습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section4">
                    <div class="section4-content1">
                        <div class="section4-content1-wrap">
                            <div class="section4-content1-box1">
                                <div class="section4-content1-box1-left">
                                    <div class="title">
                                        KNOW ABOUT THE CURRENCY
                                    </div>
                                    <div class="question">
                                        What is SLT coin?
                                    </div>
                                    <div class="content">
                                        SLTcoin은 성장시장인 키즈산업을 블록체인/빅데이터/AI등을 이용하여 지속적인 수익 창출 생태계를 구축하기 위한 사업의 일환으로서 만들어진
                                        코인입니다. SLTcoin은 작가, 출판사, 교육업체, 광고업체 등, 유아 및 아동 제품업체가 얽혀 있는 생태계를 이끌어 나갈 수 있는 코인이라
                                        할 수 있습니다.
                                    </div>
                                    <div class="video">
                                        <img src="" alt="" class="video-img">
                                        <h4>
                                            소개 비디오 보기
                                        </h4>
                                    </div>
                                </div>
                                <div class="section4-content1-box1-right">

                                </div>
                            </div>
                            <div class="section4-content1-box2">
                                <div class="section4-content1-content">
                                    <div class="content-text1">Artificial Intelligence Learning</div>
                                    <div class="content-text2">AI 시스템을 통한 키즈시장 접금</div>
                                    <div class="content-text3">독서 데이터를 파악하여 아이의 독서량, 독서수준, 독서성향을 알아내고, 부모님들은 아이가 좋아하는
                                        분야가 무엇인지! 또래 아이들과 비교하여 어느 정도 수준에 있는지 그리고 출판사 및 교육관련 업체에서는 이 정보를 통하여 새로운 컨텐츠를 개발
                                        하게 됩니다.
                                    </div>
                                    <div class="content-img">
                                        <img :src="ALPNG" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section4-content2" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
                        <div class="section4-content2-wrap">
                            <div class="left">
                                <div class="text1">HELP TO GET STARTED</div>
                                <div class="text2">Frequently Asked Questions</div>
                                <div class="quesgtionBox">
                                    <div class="quesgtionBox-item">
                                        <div class="quesgtionBox-item-top" @click="openBox('box1')">
                                            <img class="quesgtionBox-item-img" src="" alt="">
                                            <div class="quesgtionBox-item-text">
                                                기술 지원이 가능한가요?
                                            </div>
                                        </div>
                                        <div class="hidden-box" v-show="box1">
                                            <div class="hidden-box-item">SLTcoin 팀은 어떠한 문의라도 환영 합니다.</div>
                                        </div>
                                    </div>
                                    <div class="quesgtionBox-item">
                                        <div class="quesgtionBox-item-top" @click="openBox('box2')">
                                            <img class="quesgtionBox-item-img" src="" alt="">
                                            <div class="quesgtionBox-item-text">
                                                기술 지원이 가능한가요?
                                            </div>
                                        </div>
                                        <div class="hidden-box" v-show="box2">
                                            <div class="hidden-box-item">마케팅팀에 문의 바랍니다.</div>
                                            <div class="hidden-box-item">마케팅팀 sltglobalcoin@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="title">
                                    전체 코인의 10%에 해당하는 10억개는 IEO및 사모펀드 방식으로 판매되며, 안정적인 SLTcoin의 운영을 위하여 초기 엔젤투자자가 10%, 마케팅
                                    15%, 생태기금으로 30%, 비축기금으로 20%, 개발팀과 고문이 15%의 SLTcoin을 보유하게 됩니다.
                                </div>
                                <div class="echarts-box">
                                    <div id="echartsBox" ref="echartsBox"></div>
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
                section3ItemImg: `${require('../../static/img/index/middle-1.png')}`,
                ALPNG: `${require('../../static/img/index/AI.png')}`,
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
                box1: false,
                box2: false,
            }
        },
        watch: {
            scrollTop(v) {
                if (v > 240) {
                    this.showSticky = true;
                } else {
                    this.showSticky = false;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
            this.myEcharts();
        },
        methods: {
            //监听滚动条事件
            handleScroll() {
                //获取设备高度
                // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //滚动的高度
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollTop = scrollTop;
                // console.log(scrollTop)
            },
            openBox(name) {
                this[name] = !this[name];
            },
            myEcharts(){
                let echartsBox = this.$refs.echartsBox;
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(echartsBox);

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                {value: 1048, name: '搜索引擎'},
                                {value: 735, name: '直接访问'},
                                {value: 580, name: '邮件营销'},
                                {value: 484, name: '联盟广告'},
                                {value: 300, name: '视频广告'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped lang="less">
    @keyframes ThemeStickyHeadertranslateYin {
        0% {
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

                    .section3-list {
                        width: 1170rem;
                        margin: 0 auto;
                        display: flex;
                        /*align-items: center;*/
                        height: 100%;

                        .section3-item {
                            width: 380rem;
                            height: 100%;
                            display: flex;
                            align-items: center;

                            .section3ItemImg {
                                width: 350rem;
                                height: 277rem;
                            }

                            .section3-item-box {
                                width: 350rem;
                                box-sizing: border-box;
                                padding: 0 15rem;
                                display: flex;
                                justify-content: space-between;
                                margin-bottom: 60rem;

                                .img {
                                    .section3-item-box-img {
                                        width: 64rem;
                                        height: 64rem;
                                    }
                                }

                                .text {
                                    width: 186rem;
                                    text-align: left;

                                    .title {
                                        color: #fff;
                                        font-size: 23rem;
                                    }

                                    .content {
                                        color: #89c1f9;
                                        font-size: 16rem;
                                        line-height: 1.6em;
                                        box-sizing: border-box;
                                        display: block;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                        font-weight: 400;
                                        font-style: normal;
                                        opacity: 1;
                                        visibility: visible;
                                    }
                                }

                            }

                            .section3-item-left {

                            }

                            .section3-item-right {

                            }
                        }

                    }
                }

                .section4 {
                    height: 2156rem;
                    width: 100%;
                    background-color: #061649;
                    box-sizing: border-box;

                    .section4-content1 {
                        height: 1476rem;
                        width: 100%;
                        box-sizing: border-box;

                        .section4-content1-wrap {
                            width: 1140rem;
                            margin: 0 auto;
                            height: 100%;
                            box-sizing: border-box;
                            overflow: hidden;

                            .section4-content1-box1 {
                                height: 385rem;
                                width: 100%;
                                box-sizing: border-box;
                                margin: 100rem 0;
                                padding: 30rem 0;
                                overflow: hidden;
                                display: flex;

                                .section4-content1-box1-left {
                                    width: 570rem;
                                    height: 100%;
                                    text-align: left;
                                    box-sizing: border-box;
                                    padding: 0 85.5rem 0 15rem;

                                    .title {
                                        font-size: 14rem;
                                        margin-bottom: 10rem;
                                        color: #00b4fc;
                                        font-weight: 400;
                                        font-style: normal;
                                        display: block;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                    }

                                    .question {
                                        font-size: 36rem;
                                        color: #fff;
                                        margin-bottom: 15rem;
                                    }

                                    .content {
                                        font-size: 20rem;
                                        color: #89c1f9;
                                        font-weight: 400;
                                        font-style: normal;
                                        display: block;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                        line-height: 1.68421053em;
                                    }

                                    .video {
                                        display: flex;

                                        .video-img {

                                        }

                                        h4 {
                                            font-size: 16rem;
                                            margin-left: 20rem;
                                            color: #fff;
                                        }
                                    }

                                }

                                .section4-content1-box1-right {
                                    width: 570rem;
                                    height: 100%;
                                }
                            }

                            .section4-content1-box2 {
                                height: 791rem;
                                box-sizing: border-box;
                                width: 100%;
                                text-align: center;
                                margin: 100rem 0;
                                padding-top: 40rem;

                                .section4-content1-content {
                                    .content-text1 {
                                        font-size: 14rem;
                                        color: #00b4fc;
                                        margin-bottom: 10rem;
                                    }

                                    .content-text2 {
                                        font-size: 36rem;
                                        color: #fff;
                                        margin-bottom: 15rem;
                                    }

                                    .content-text3 {
                                        font-size: 20rem;
                                        color: #89c1f9;
                                        margin-bottom: 15rem;
                                        line-height: 1.68421053em;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                    }

                                }

                            }
                        }

                    }

                    .section4-content2 {
                        height: 680rem;
                        width: 100%;
                        background-color: #041b63;
                        background-position: center !important;
                        background-repeat: no-repeat !important;
                        background-size: cover !important;
                        box-sizing: border-box;
                        padding: 100rem 0;
                        display: flex;
                        align-items: center;

                        .section4-content2-wrap {
                            width: 1140rem;
                            margin: 0 auto;
                            height: 100%;
                            display: flex;

                            .left {
                                text-align: left;
                                width: 570rem;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;


                                .text1 {
                                    font-size: 14rem;
                                    margin-bottom: 10rem;
                                    color: #00b4fc;
                                }

                                .text2 {
                                    font-size: 36rem;
                                    margin-bottom: 40rem;
                                    color: #FFFFFF;
                                }

                                .quesgtionBox {
                                    .quesgtionBox-item {
                                        /*display: flex;*/
                                        width: 540rem;
                                        min-height: 82rem;
                                        box-sizing: border-box;
                                        background-color: #fff;
                                        border-radius: 5rem;
                                        /*align-items: center;*/
                                        padding: 25rem;
                                        position: relative;
                                        margin-bottom: 21rem;

                                        .quesgtionBox-item-top {
                                            display: flex;
                                            align-items: center;
                                            height: 32rem;
                                            cursor: pointer;

                                            .quesgtionBox-item-img {
                                                width: 28rem;
                                                height: 28rem;
                                                position: absolute;
                                            }

                                            .quesgtionBox-item-text {
                                                font-size: 15rem;
                                                color: #010119;
                                                padding-left: 42rem;
                                            }
                                        }

                                        .hidden-box {
                                            width: 100%;
                                            padding-left: 42rem;
                                            margin: 16rem 0 21rem 0;

                                            .hidden-box-item {
                                                line-height: 1.6em;
                                                color: #89c1f9;
                                                margin-bottom: 15rem;
                                                font-size: 16rem;
                                            }
                                        }
                                    }
                                }

                            }

                            .right {
                                width: 570rem;
                                text-align: left;
                                box-sizing: border-box;
                                padding: 0 15rem;


                                .title {
                                    line-height: 1.6em;
                                    color: #89c1f9;
                                    font-weight: 400;
                                    font-style: normal;
                                    font-size: 16px;
                                    opacity: 1;
                                    visibility: visible;
                                    margin-bottom: 35rem;
                                }

                                .echarts-box {
                                    width: 540rem;
                                    height: 335rem;
                                    #echartsBox {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>