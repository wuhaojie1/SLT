<template>
    <div class="shoppingMall">
        <ThemeStickyHeader></ThemeStickyHeader>
        <div class="shoppingMall-wrap">
            <div class="content-carousel">
                <el-carousel indicator-position="none"
                             height="700rem"
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
<!--                                <router-link to="goodsdetails">-->
<!--                                    <div class="btn">-->
<!--                                        buy now-->
<!--                                    </div>-->
<!--                                </router-link>-->
                            </div>
                        </div>
                        <img :src="item.img" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="goods">
                <div class="nav">
                    <Classify @navSelected="navSelected" :filterList="filterList"></Classify>
                </div>
                <div class="goods-list">
                    <div class="goods-list-title">
                        <div class="text">
                             <span class="titleName">{{ titleItem.name }}</span>
<!--                            <span class="titleName">DEMO</span>-->
                            <span class="titleNumber">({{ goodsTotal }})</span>
                        </div>
                    </div>
                    <div class="goods-list-box"
                         v-for="(item, index) in books"
                         :key="index">
                        <div class="goods-list-item"
                             v-for="(childItem, childIndex) in item"
                             :key="childIndex"
                              @click="topage('goodsdetails',childItem,childIndex)">
                                <div class="imgBox">
                                    <img :src="childItem.img" alt="">
                                </div>
                                <div class="text">
                                     <div class="bookName">{{ childItem.name }}</div>
<!--                                    <div class="bookName">DEMO</div>-->
                                    <div class="price">{{ childItem.price }}</div>
                                </div>
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
import Classify from "@/components/shoppingMall/classify";

export default {
    name: "shoppingMall",
    components: {Classify, Bottom, ThemeStickyHeader},
    created() {
        this.getCatalog();
    },
    data() {
        return {
            titleItem: {
                name: "",
            },
            interval: 7000,
            icon: `${require('../../static/img/shoppingMall/icon.png')}`,
            headset: `${require('../../static/img/shoppingMall/headset.png')}`,
            radio: `${require('../../static/img/shoppingMall/radio.png')}`,
            packageImg: `${require('../../static/img/shoppingMall/package.png')}`,
            chair: `${require('../../static/img/shoppingMall/chair.png')}`,
            dining: `${require('../../static/img/shoppingMall/dining-table.png')}`,
            clock: `${require('../../static/img/shoppingMall/clock.png')}`,
            books: [
                // [
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                // ],
                // [
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                //     {
                //         img: `${require('../../static/img/shoppingMall/book1.png')}`,
                //         name: "晚熟的人 莫言新书",
                //         price: "￥299",
                //     },
                // ],
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

            //种类
            filterList: [],
            //商品数量
            goodsTotal: 0,
        }
    },
    methods: {
        enters(index) {
            this.goodsList[index].show = true;
        },

        leaver(index) {
            this.goodsList[index].show = false;
        },

        navSelected(data) {
            // console.log(data)
            this.titleItem = {
                name: data.item.name,
            }
            this.getGoodsById(data.item.id)
        },
        topage(name,item,childIndex){
            this.$router.push({
                name:name,
                params:{
                    item:item,
                    index:childIndex
                }
            })
        },
        getCatalog() {
            this.axios({
                url: 'wx/catalog/all',
                method: 'get',
                // params: JSON.stringify(postData),
            }).then((res) => {
                // eslint-disable-next-line no-debugger
                // debugger
                console.log(res)
                let data = res.data
                if (res.errno === 0) {
                    this.filterList = data.categoryList;
                    // this.filterList =['books','tools','furniture']
                    this.titleItem.name = data.categoryList[0].name
                    this.getGoodsById(data.categoryList[0].id)
                    // console.log(this.filterList)

                }
            }).catch(err => {
                console.log(err)
            })
        },

        getGoodsById(id) {
            // console.log(id)
            let getData = {
                categoryId: id,
            }
            this.axios({
                url: 'wx/goods/list',
                method: 'get',
                params: getData
            }).then((res) => {
                // eslint-disable-next-line no-debugger
                // debugger
                // console.log(res)

                let data = res.data
                if (res.errno === 0) {
                    // console.log(data.total)
                    this.goodsTotal = data.total;//user/userInfo
                    let tempArray = [];
                    for(let i=0;i<data.list.length;i+=4){
                        tempArray.push(data.list.slice(i,i+4));
                    }
                    // console.log(data.filterCategoryList)
                    // tempArray.push(data.filterCategoryList)
                    this.books = tempArray;
                    // console.log(tempArray)

                    // filterCategoryList: [{id: 1005007, name: "锅具", keywords: "", desc: "一口好锅，炖煮生活一日三餐", pid: 1005001,…},…]
                    // limit: 10
                    // list: []
                    // page: 0
                    // pages: 0
                    // total: 0

                }
            }).catch(err => {
                console.log(err)
            })
        },
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

                        a {
                            text-decoration: none;
                        }


                    }
                }

                img {
                    width: 100%;
                    height: 900rem;
                }
            }
        }

        .goods {
            width: 100%;
            padding: 90rem 110rem 0 120rem;
            box-sizing: border-box;
            background: #F3F5F7;
            display: flex;

            .nav {

            }

            .goods-list {
                margin-top: 10rem;
                margin-left: 40rem;
                text-align: left;
                width: 1336rem;
                padding-bottom: 100rem;

                .goods-list-title {
                    width: 100%;

                    .text {
                        //height: 37rem;
                        display: flex;
                        align-items: center;

                        .titleName {
                            font-size: 20rem;
                            font-weight: 400;
                            color: #444444;
                            //line-height: 37rem;
                        }

                        .titleNumber {
                            margin-left: 7rem;
                            font-size: 16rem;
                            font-weight: 400;
                            color: #444444;
                            //line-height: 37rem;
                        }
                    }
                }

                .goods-list-box {
                    width: 100%;
                    margin-top: 45rem;
                    display: flex;
                    box-sizing: border-box;
                    flex-wrap: wrap;

                    a {
                        text-decoration: none;
                    }

                    .goods-list-item {
                        margin-left: 25rem;
                        width: 23%;

                        .imgBox {
                            //width: 314rem;
                            height: 314rem;
                            background: #FFFFFF;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            img {
                                width: 160rem;
                            }
                        }

                        .text {
                            //margin-top: 15rem;
                            .bookName {
                                margin-top: 15rem;
                                font-size: 20rem;
                                font-weight: bold;
                                color: #444444;
                            }

                            .price {
                                margin-top: 15rem;
                                font-size: 16rem;
                                font-weight: 400;
                                color: #222C46;
                            }
                        }
                    }

                    .goods-list-item:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
    }
}
</style>