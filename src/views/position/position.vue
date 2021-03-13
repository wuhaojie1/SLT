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
                            <div class="textTip-box">
                                <div class="text1">位置买卖</div>
                                <div class="text2">全新推出 位置买卖</div>
                                <div class="text3">Return to the most pure nature/concentrate and return to myself/people’s hearts over a certain height/high sky ＆
                                    pale clouds,clear ＆ clam/the natural realm,just
                                </div>
                            </div>
<!--                            <div class="icon">-->
<!--                                <img :src="icon" alt="" class="">-->
<!--                            </div>-->
<!--                            <div class="textTip-margin">-->
<!--                                <div class="date">-->
<!--                                    2021-->
<!--                                </div>-->
<!--                                <div class="title">-->
<!--                                    <span class="">-->
<!--                                        Auditory feast-->
<!--                                    </span>-->
<!--                                    <span class="">-->
<!--                                        Sound on the scene !-->
<!--                                    </span>-->
<!--                                </div>-->
<!--                                <div class="tip">-->
<!--                                    See the world with your heart-->
<!--                                </div>-->
<!--                                <div class="btn">-->
<!--                                    buy now-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                        <img :src="item.img" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="new-goods">
                <div class="new-goods-title">
                    <div class="text">Product category</div>
                    <div class="text">产品类别</div>
                </div>
            </div>
            <div class="goods-box">
                <div class="goods-box-wrap"
                     v-for="(item, index) in goodsList"
                     :key="index">
                    <div class="goods-box-item"
                         v-for="(childItem, childIndex) in item"
                         @mouseenter="enters(index,childIndex)"
                         @mouseleave="leaver(index,childIndex)"
                         @click="topage('localdetails')"
                         :key="childIndex">
                        <div class="item-box">
<!--                            <router-link to="goodsdetails">-->
                                <img :src="childItem.img" alt="">
                                <div class="msg" v-show="childItem.show">
                                    <div class="name">{{ childItem.name }}</div>
                                    <div class="price">
                                        <div class="number">{{ childItem.price }}</div>
<!--                                        <div class="btn">购买</div>-->
                                    </div>
                                </div>
<!--                            </router-link>-->
                        </div>
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
            goodsList: [
                [
                    {
                        img: `${require('../../static/img/shoppingMall/book1.png')}`,
                        name: "日式原木餐桌",
                        // price: "￥299",
                        show: false,
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/book1.png')}`,
                        name: "日式原木餐桌",
                        // price: "￥299",
                        show: false,
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/book1.png')}`,
                        name: "日式原木餐桌",
                        // price: "￥299",
                        show: false,
                    },
                ],
                [
                    {
                        img: `${require('../../static/img/shoppingMall/book1.png')}`,
                        name: "日式原木餐桌",
                        // price: "￥299",
                        show: false,
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/book1.png')}`,
                        name: "日式原木餐桌",
                        // price: "￥299",
                        show: false,
                    },
                    {
                        img: `${require('../../static/img/shoppingMall/book1.png')}`,
                        name: "日式原木餐桌",
                        // price: "￥299",
                        show: false,
                    },
                ],

            ],

            imgs: [
                {
                    img: `${require('../../static/img/position/position.png')}`,
                    /*h2: "신세계 주차대행 서비스",
                    p: "안전한 주차와 정성스러운 서비스로 고객만족을 우선으로 생각합니다",*/
                },
                {
                    img: `${require('../../static/img/position/position.png')}`,
                    /*h2: "신세계 주차대행 서비스",
                    p: "안전한 주차와 정성스러운 서비스로 고객만족을 우선으로 생각합니다",*/
                },
                {
                    img: `${require('../../static/img/position/position.png')}`,
                    /*h2: "신세계 주차대행 서비스",
                    p: "안전한 주차와 정성스러운 서비스로 고객만족을 우선으로 생각합니다",*/
                },
                {
                    img: `${require('../../static/img/position/position.png')}`,
                    /*h2: "신세계 주차대행 서비스",
                    p: "안전한 주차와 정성스러운 서비스로 고객만족을 우선으로 생각합니다",*/
                },
            ],
        }
    },
    methods: {
        enters(index, childIndex) {
            this.goodsList[index][childIndex].show = true;
        },
        leaver(index, childIndex) {
            this.goodsList[index][childIndex].show = false;
        },
        topage(name) {
            this.$router.push({
                name: name
            })
        }
    }
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
                    //display: flex;
                    //flex-direction: column;
                    //align-items: center;
                    //justify-content: center;

                    .textTip-box {
                        text-align: center;
                        position: relative;
                        width: 710rem;
                        margin: 0 auto;
                        .text1 {
                            width: 100%;
                            position: absolute;
                            font-size: 159rem;
                            font-weight: 500;
                            color: #FEFFFF;
                            top: 190rem;
                        }
                        .text2 {
                            width: 100%;
                            position: absolute;
                            font-size: 43rem;
                            font-weight: bold;
                            color: #FEFEFF;
                            top: 390rem;
                        }
                        .text3 {
                            //margin: 0 auto;
                            //width: 100%;
                            width: 541rem;
                            position: absolute;
                            font-size: 8rem;
                            font-weight: 400;
                            color: #FFFFFF;
                            left: 86rem;
                            top: 460rem;
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
            padding-top: 89rem;

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
            margin-top: 69rem;
            margin-bottom: 257rem;

            .goods-box-wrap {
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                margin-bottom: 5rem;
                position: relative;
                justify-content: space-between;


                .goods-box-item {
                    //margin-left: 1rem;
                    width: 33%;
                    height: 636rem;
                    background: #F3F5F7;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    cursor: pointer;
                    position: relative;
                    /*overflow: hidden;*/

                    .item-box {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        /*justify-content: center;*/
                        /*box-sizing: border-box;*/
                        /*.router-link-active{*/
                        /*    text-decoration: none;*/
                        /*}*/

                        a {
                            text-decoration: none;
                        }

                        img {
                            padding-top: 168rem;
                            width: 200rem;
                            height: auto;
                        }

                        .msg {
                            .name {
                                font-size: 16rem;
                                font-weight: bold;
                                color: #444444;
                                margin-top: 58rem;
                            }

                            .price {
                                margin-top: 15rem;
                                display: flex;

                                .number {
                                    font-size: 22rem;
                                    font-weight: 400;
                                    color: #222C46;
                                }

                                .btn {
                                    margin-left: 19rem;
                                    width: 60rem;
                                    height: 24rem;
                                    background: #082850;
                                    border-radius: 4rem;
                                    line-height: 24rem;
                                    font-size: 14rem;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                }
                            }
                        }
                    }

                    .item-box:hover {
                        z-index: 2;
                        height: 700rem;
                        background: #FFFFFF;
                        box-shadow: 0 0 26rem 0 rgba(153, 153, 153, 0.3);
                        /*position: absolute;*/

                        img {
                            padding-top: 170rem;
                        }
                    }


                }


            }


        }
    }
}
</style>