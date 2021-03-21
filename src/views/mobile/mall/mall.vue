<template>
    <div id="Mmall">
        <Mheader :isShowRight="true"></Mheader>
        <div class="banner">
            <img class="bannerimg" src="../../../static/img/shoppingMall/banner.png" alt="">
            <div class="text1">2021</div>
            <div class="text2">Auditory feast</div>
            <div class="text3">Sound on the scene !</div>
            <div class="text4">See the world with your heart</div>
            <div class="text5">BUY NOW</div>
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
                 :key="item.index">
                <div class="imgcon">
                    <img class="img" :src="item.goodsimg" alt="">
                </div>
                <div class="text1">{{item.goodsname}}</div>
                <div class="text2">{{item.charge}}</div>
            </div>
        </div>
        <div class="copyright">
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
        <div class="goshopcart">
            <img class="img" src="../../../static/img/chatorshopcart/shopcart.png" alt="">
        </div>
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
                        goodsname:'日式原木餐桌',
                        charge:'￥299'
                    },
                    {
                        goodsimg:`${require('../../../static/img/shoppingMall/chair.png')}`,
                        goodsname:'日式原木餐桌',
                        charge:'￥299'
                    },
                    {
                        goodsimg:`${require('../../../static/img/shoppingMall/chair.png')}`,
                        goodsname:'日式原木餐桌',
                        charge:'￥299'
                    },
                    {
                        goodsimg:`${require('../../../static/img/shoppingMall/chair.png')}`,
                        goodsname:'日式原木餐桌',
                        charge:'￥299'
                    }
                ]
            }
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
        position: relative;
        width: 750rem;
        height: 420rem;
        .bannerimg{
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
            top: 120rem;
        }
        .text2{
            font-size: 26rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            left: 129rem;
            top: 147rem;
        }
        .text3{
            font-size: 26rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            left: 129rem;
            top: 188rem;
        }
        .text4{
            font-size: 12rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #C5C5C5;
            position: absolute;
            left: 129rem;
            top: 228rem;
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
            top: 264rem;
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