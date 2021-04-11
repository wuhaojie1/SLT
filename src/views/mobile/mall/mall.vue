<template>
    <div id="Mmall">
        <Mheader :isShowRight="true"
                 @clickCallback="clickCallback"></Mheader>
        <div class="banner">
            <img class="bannerimg" src="../../../static/img/shoppingMall/banner.png" alt="">
            <div class="text1">2021</div>
            <div class="text2">Auditory feast</div>
            <div class="text3">Sound on the scene !</div>
            <div class="text4">See the world with your heart</div>
<!--            <div class="text5">BUY NOW</div>-->
        </div>
        <div class="type">
            <span class="text">xxx</span>
            <span class="num">(100)</span>
        </div>
        <div class="choose">
            <div class="text">{{this.$t('Mmall.select')}}</div>
            <img class="img" src="../../../static/img/shoppingMall/choose.png" alt="">
        </div>
        <div class="goodslist">
            <div class="goodsitem"
                 v-for="item in goodslist"
                 :key="item.index"
                 @click="toPage('Mgoodsdetails')">
                <div class="imgcon">
                    <img class="img" :src="item.goodsimg" alt="">
                </div>
                <div class="text1">{{item.goodsname}}</div>
                <div class="text2">{{item.charge}}</div>
            </div>
        </div>
        <!-- <div class="copyright">
            <img class="img" src="../../../static/img/shoppingMall/copyright.png" alt="">
            <span class="text">SLT 2021 {{this.$t('Mmall.copyright')}}</span>
        </div>
        <div class="police1">
            <img class="img" src="../../../static/img/shoppingMall/police1.png" alt="">
            <span class="text">{{this.$t('Mmall.right')}}</span>
        </div>
        <div class="police2">
            <img class="img" src="../../../static/img/shoppingMall/police2.png" alt="">
            <span class="text">{{this.$t('Mmall.beian')}} 5250530000050</span>
        </div>
        <div class="bottomimg">
            <img class="img" src="../../../static/img/shoppingMall/bottomimg.png" alt="">
        </div>
        <div class="goshopcart" @click="toPage('MshoppingCart')">
            <img class="img" src="../../../static/img/chatorshopcart/shopcart.png" alt="">
        </div> -->
    </div>
</template>

<script>
    import Mheader from "../../../components/mobileComponents/comm/header.vue";
    export default {
        name: "mall",
        components:{Mheader},
        data(){
            return{
                goodslist:[
                    {
                        goodsimg:`${require('../../../static/img/shoppingMall/chair.png')}`,
                        goodsname:'goods',
                        charge:'299 SLT'
                    },
                    {
                        goodsimg:`${require('../../../static/img/shoppingMall/chair.png')}`,
                        goodsname:'goods',
                        charge:'299 SLT'
                    },
                    {
                        goodsimg:`${require('../../../static/img/shoppingMall/chair.png')}`,
                        goodsname:'goods',
                        charge:'299 SLT'
                    },
                    {
                        goodsimg:`${require('../../../static/img/shoppingMall/chair.png')}`,
                        goodsname:'goods',
                        charge:'299 SLT'
                    }
                ]
            }
        },
        created(){
            this.getCatalog();
        },
        methods: {
            clickCallback(item){
                // console.log(item)
                this.$router.push({
                    name: item.name,
                })
            },
            toPage(name){
                this.$router.push({
                    name: name,
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
                    // console.log(res)
                    let data = res.data
                    if (res.errno === 0) {
                        this.filterList = data.categoryList;
                        // this.filterList =['books','tools','furniture']
                        // this.titleItem.name = data.categoryList[0].name
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
                    // console.log(res)
                    if (res.errno.toString() === '0') {
                        // console.log(data.total)
                        this.goodsTotal = data.total;//user/userInfo
                        let tempArray = [];
                        // console.log(111111)
                        console.log(data.list.length)
                        data.list.forEach(el => {
                            console.log(el)
                        })
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
#Mmall {
    
    .goshopcart{
        width: 90rem;
        height: 90rem;
        background-color: #00B9FE;
        position: fixed;
        right: 35rem;
        bottom: 116rem;
        border-radius: 50%;
        .img{
            width: 44rem;
            height: 44rem;
            margin-top: 23rem;
        }
    }
    .banner{
        overflow: hidden;
        
        box-sizing: border-box;
        position: relative;
        width: 750rem;
        height: auto;
        .bannerimg{
            margin-top: 88rem;
            width: 750rem;
            height: 420rem;
        }
        .text1{
            font-size: 20rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            left: 129rem;
            top: 208rem;
        }
        .text2{
            font-size: 26rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            left: 129rem;
            top: 235rem;
        }
        .text3{
            font-size: 26rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            left: 129rem;
            top: 276rem;
        }
        .text4{
            font-size: 12rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #C5C5C5;
            position: absolute;
            left: 129rem;
            top: 316rem;
        }
        .text5{
            width: 150rem;
            height: 38rem;
            background: #082850;
            border-radius: 2rem;
            font-size: 16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 38rem;
            position: absolute;
            left: 129rem;
            top: 362rem;
        }
    }
    .type{
        height: 89rem;
        width: 750rem;
        background-color: #F3F5F7;
        text-align: left;
        line-height: 89rem;
        border-bottom: 1rem solid #E4E7ED;
        .text{
            font-size: 20rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            /*margin-top: 39rem;*/
            margin-left: 35rem;
        }
        .num{
            font-size: 16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            margin-top: 39rem;
        }
    }
    .choose{
        height: 89rem;
        width: 750rem;
        background-color: #F3F5F7;
        text-align: left;
        line-height: 89rem;
        border-bottom: 1rem solid #E4E7ED;
        .text{
            font-size: 26rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            float: right;
            margin-right: 35rem;
        }
        .img{
            width: 36rem;
            height: 36rem;
            float: right;
            margin-top: 30rem;
            margin-right: 13rem;
        }
    }
    .goodslist{
        width: 680rem;
        height: cacl(100vh - 1010rem);
        /*height: 1000rem;*/
        background-color: #F3F5F7;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        padding-left: 35rem;
        padding-right: 35rem;
        border-bottom: 1rem solid #E4E7ED;
        padding-bottom: 89rem;
        .goodsitem{
            width: 320rem;
            height: 400rem;
            /*margin-left: 35rem;*/
            /*margin-right: 35rem;*/
            margin-top: 38rem;
            .imgcon{
                width: 320rem;
                height: 320rem;
                background-color: #fff;
                .img{
                    width: 159rem;
                    height: 200rem;
                    margin-top: 60rem;
                }
            }
            .text1{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-align: left;
                margin-top: 20rem;
            }
            .text2{
                font-size: 20rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #666666;
                text-align: left;
                margin-top: 14rem;
            }
        }
    }
    .copyright{
        width: 750rem;
        height: 24rem;
        background-color: #F3F5F7;
        padding-top: 34rem;
        .img{
            width: 22rem;
            height: 22rem;
            /*float: left;*/
        }
        .text{
            font-size: 24rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
        }
    }
    .police1{
        width: 750rem;
        height: 24rem;
        background-color: #F3F5F7;
        padding-top: 35rem;
        .img{
            width: 22rem;
            height: 22rem;
            /*float: left;*/
        }
        .text{
            font-size: 24rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
        }
    }
    .police2{
        width: 750rem;
        height: 24rem;
        background-color: #F3F5F7;
        padding-top: 15rem;
        .img{
            width: 22rem;
            height: 22rem;
            /*float: left;*/
        }
        .text{
            font-size: 24rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
        }
    }
    .bottomimg{
        width: 750rem;
        height: 42rem;
        padding-top: 45rem;
        padding-bottom: 38rem;
        background-color: #F3F5F7;
        .img{
            width: 80rem;
            height: 42rem;
        }
    }
}
</style>