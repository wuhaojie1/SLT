<template>
    <div class="shoppingCart">
        <!-- <TopBar></TopBar> -->
        <!-- <transition name="slide-fade-Y"> -->
            <ThemeStickyHeader class="ThemeStickyHeader"></ThemeStickyHeader>
        <!-- </transition> -->
        <div class="shoppingCart-content">



        </div>
    </div>
</template>

<script>
    // import TopBar from "../../components/header/topBar";
    // import TimeCard from "../../components/index/timeCard";
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    // import MemberCard from "../../components/index/memberCard";

    export default {
        name: "shoppingCart",
        components: { ThemeStickyHeader},
        data() {
            return {
                SLT_white: `${require('../../static/img/index/SLT_white.png')}`,
                urlIcon: `${require('../../static/img/index/ico-landing1-banner_02.jpg')}`,
                section3Bg: `${require('../../static/img/index/ico_bg_dark_03.png')}`,
                connected: `${require('../../static/img/index/bg_connected.png')}`,
                visa: `${require('../../static/img/index/logo-visa.png')}`,
                bit: `${require('../../static/img/index/logo-bitcoin.png')}`,
                master: `${require('../../static/img/index/logo-mastercard.png')}`,
                section3ItemImg: `${require('../../static/img/index/middle-1.png')}`,
                booktree: `${require('../../static/img/index/booktree-1.png')}`,
                ALPNG: `${require('../../static/img/index/AI.png')}`,
                life: `${require('../../static/img/index/life.png')}`,
                logoIcon: `${require('../../static/img/index/sltlogo_60x120_white.png')}`,
                sectionImgs: [
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                ],
            }
        },
        watch: {
            // scrollTop(v) {
            //     if (v > 240) {
            //         this.showSticky = true;
            //     } else {
            //         this.showSticky = false;
            //     }
            // }
        },
        mounted() {
            // window.addEventListener('scroll', this.handleScroll, true);
            // this.myEcharts();
        },
        methods: {
            //监听滚动条事件
            // handleScroll() {
            //     //获取设备高度
            //     // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //     //滚动的高度
            //     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //     this.scrollTop = scrollTop;
            //     // console.log(scrollTop)
            // },
           
        }
    }
</script>

<style scoped lang="less">
    // @keyframes ThemeStickyHeadertranslateYin {
    //     0% {
    //         transform: translateY(-100%);
    //     }
    //     50% {
    //         transform: translateY(-100%);
    //     }
    //     100% {
    //         transform: translateY(0);
    //     }
    // }

    // .slide-fade-Y-enter-active {
    //     animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s;
    // }

    // .slide-fade-Y-leave-active {
    //     animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s reverse;
    // }

    // @keyframes fold {
    //     0% {
    //         height: 0;
    //     }
    //     100% {
    //         height: 40rem;
    //     }
    // }

    // .hidden-box1-enter-active {

    //     animation: fold 1s ease-in-out 0s;
    // }

    // .hidden-box1-leave-active {
    //     animation: fold 1s ease-in-out 0s reverse;
    // }
</style>