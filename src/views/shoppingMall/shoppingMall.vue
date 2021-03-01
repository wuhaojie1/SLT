<template>
    <div class="shoppingMall">
        <ThemeStickyHeader></ThemeStickyHeader>
        <div class="shoppingMall-wrap">
            <div class="content-carousel">
                <el-carousel indicator-position="none"
                             height="900rem"
                             :interval="interval">
                    <el-carousel-item v-for="(item,index) in imgs" :key="index">
                        <div class="textTip">
                            <div class="icon">
                                <img :src="icon" alt="" class="">
                            </div>
                            <div class="textTip-margin">
                                <div class="date">
                                    2021
                                </div>
                                <div class="title">
                                    <span class="">
                                        Auditory feast
                                    </span>
                                    <span class="">
                                        Sound on the scene !
                                    </span>
                                </div>
                                <div class="tip">
                                    See the world with your heart
                                </div>
                                <div class="btn">
                                    buy now
                                </div>
                            </div>
                        </div>
                        <img :src="item.img" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="new-goods">
                <div class="new-goods-title">
                    <div class="text">Our New Products</div>
                    <div class="text">新品推荐</div>
                </div>
                <div class="new-goods-box">
                    <div class="left">
                        <div class="goods-item">
                            <img :src="headset" alt="" class="headset">
                            <div class="btn">蓝牙耳机</div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="goods-item1">
                            <img :src="radio" alt="" class="radio">
                            <div class="btn">蓝牙耳机</div>
                        </div>
                        <div class="goods-item2">
                            <img :src="packageImg" alt="" class="packageImg">
                            <div class="btn">时尚包包</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods-box">
                <div class="goods-box-wrap">
                    <div class="goods-box-item"
                         v-for="(item, index) in goodsList"
                         :key="index">
                        <img :src="item.img" alt="">
                        <div class="msg"></div>
                    </div>
                </div>
                <div class="goods-box-wrap">
                    <div class="goods-box-item"
                         v-for="(item, index) in goodsList"
                         :key="index">
                        <img :src="item.img" alt="">
                        <div class="msg"></div>
                    </div>
                </div>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import Bottom from "../../components/bottom/bottom";

    export default {
        name: "shoppingMall",
        components: {Bottom, ThemeStickyHeader},
        data() {
            return {
                interval: 7000,
                icon: `${require('../../static/img/shoppingMall/icon.png')}`,
                headset: `${require('../../static/img/shoppingMall/headset.png')}`,
                radio: `${require('../../static/img/shoppingMall/radio.png')}`,
                packageImg: `${require('../../static/img/shoppingMall/package.png')}`,
                chair: `${require('../../static/img/shoppingMall/chair.png')}`,
                dining: `${require('../../static/img/shoppingMall/dining-table.png')}`,
                clock: `${require('../../static/img/shoppingMall/clock.png')}`,
                goodsList:[
                    {
                        img: `${require('../../static/img/shoppingMall/chair.png')}`,
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/dining-table.png')}`,
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/clock.png')}`,
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/chair.png')}`,
                    },
                ],

                imgs: [
                    {
                        img: `${require('../../static/img/shoppingMall/banner.png')}`,
                        /*h2: "신세계 주차대행 서비스",
                        p: "안전한 주차와 정성스러운 서비스로 고객만족을 우선으로 생각합니다",*/
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/banner.png')}`,
                        /*h2: "주차대행 보험가입 업체!",
                        p: "꼼꼼한 관리와 신뢰할 수 있는 주차시스템으로 이제 안심하고 편안하게 다녀오세요.",*/
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/banner.png')}`,
                        /*h2: "신세계 주차대행 서비스",
                        p: "안전한 주차와 정성스러운 서비스로 고객만족을 우선으로 생각합니다",*/
                    },
                ],
            }
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .shoppingMall {
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;

        .shoppingMall-wrap {
            width: 100%;
            margin: 75rem 0 0 0;
            box-sizing: border-box;
            min-height: calc(100vh - 75rem - 200rem);

            .content-carousel {
                .el-carousel__item {
                    /*display: flex;*/
                    /*position: relative;*/

                    .textTip {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .icon {
                            position: absolute;
                            top: 50rem;
                            right: 280rem;

                            img {
                                width: 27rem;
                                height: 20rem;
                            }
                        }

                        .textTip-margin {
                            text-align: left;
                            position: relative;
                            width: 1200rem;


                            .date {
                                font-size: 60rem;
                                font-weight: bold;
                                color: #FFFFFF;
                            }

                            .title {
                                margin-top: 20rem;
                                font-size: 60rem;
                                font-weight: bold;
                                color: #FFFFFF;

                                span {
                                    display: block;
                                    margin-top: 18rem;
                                }
                            }

                            .tip {
                                font-size: 24rem;
                                font-weight: 400;
                                color: #C5C5C5;
                                margin-top: 38rem;
                            }

                            .btn {
                                margin-top: 94rem;
                                font-size: 24rem;
                                font-weight: 400;
                                color: #FFFFFF;
                                width: 174rem;
                                height: 52rem;
                                background: #082850;
                                border-radius: 6rem;
                                line-height: 52rem;
                                text-align: center;
                            }


                        }
                    }

                    img {
                        width: 100%;
                        height: 900rem;
                    }
                }
            }

            .new-goods {
                margin: 0 auto;
                width: 1200rem;
                padding-top: 130rem;

                .new-goods-title {
                    .text {
                        font-size: 28rem;
                        font-weight: 400;
                        color: #444444;
                        margin-top: 14rem;
                    }

                    .text:first-child {
                        margin-top: 0;
                    }
                }

                .new-goods-box {
                    margin-top: 60rem;
                    display: flex;

                    .left {
                        width: 590rem;
                        height: 660rem;
                        box-sizing: border-box;
                        margin-right: 20rem;
                        .goods-item {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            background: #F3F5F7;
                            border-radius: 20rem 0rem 0rem 20rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .headset {
                                /*padding-top: 90rem;*/
                                width: 383rem;
                                height: 480rem;
                            }

                            .btn {
                                width: 110rem;
                                height: 38rem;
                                background: #082850;
                                border-radius: 4rem;
                                position: absolute;
                                font-size: 14rem;
                                font-weight: 400;
                                color: #EFF0EF;
                                line-height: 38rem;
                                bottom: 35rem;
                                left: 35rem;
                            }
                        }
                    }

                    .right {
                        box-sizing: border-box;

                        .goods-item1 {
                            width: 590rem;
                            height: 320rem;
                            background: #F3F5F7;
                            border-radius: 0rem 20rem 0rem 0rem;
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            /*margin-left: 20rem;*/

                            .radio {
                                width: 260rem;
                                height: 206rem;
                            }

                            .btn {
                                width: 110rem;
                                height: 38rem;
                                background: #082850;
                                border-radius: 4rem;
                                position: absolute;
                                font-size: 14rem;
                                font-weight: 400;
                                color: #EFF0EF;
                                line-height: 38rem;
                                bottom: 35rem;
                                left: 35rem;
                            }
                        }

                        .goods-item2 {
                            position: relative;
                            width: 590rem;
                            height: 320rem;
                            background: #F3F5F7;
                            border-radius: 0rem 0rem 20rem 0rem;
                            margin: 20rem 0 0 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .packageImg {
                                width: 303rem;
                                height: 153rem;
                            }

                            .btn {
                                width: 110rem;
                                height: 38rem;
                                background: #082850;
                                border-radius: 4rem;
                                position: absolute;
                                font-size: 14rem;
                                font-weight: 400;
                                color: #EFF0EF;
                                line-height: 38rem;
                                bottom: 35rem;
                                left: 35rem;
                            }
                        }
                    }
                }
            }

            .goods-box {
                width: 100%;
                margin-top: 180rem;
                margin-bottom: 257rem;

                .goods-box-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    margin-bottom: 1rem;
                    position: relative;

                    .goods-box-item {
                        margin-left: 1rem;
                        width: 24.9%;
                        height: 450rem;
                        background: #F3F5F7;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        box-sizing: border-box;
                        cursor: pointer;

                        img {
                            width: 200rem;
                            height: auto;
                        }
                    }

                    .goods-box-item:hover {
                        height: 500rem;
                        background: #FFFFFF;
                        box-shadow: 0rem 0rem 26rem 0rem rgba(153, 153, 153, 0.3);
                        /*position: absolute;*/
                    }
                }
                

            }
        }
    }
</style>