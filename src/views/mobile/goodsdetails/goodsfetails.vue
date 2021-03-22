<template>
    <div class="detailBox">
        <PageHeader :isShowRight="true"></PageHeader>
        <div class="header">{{$t('goodsdetails.title')}}</div>
        <div class="goodsTop">
            <div class="goodsTitle">
                <img style="width:44rem;height:39rem" src="../../../static/img/goodsdetails/arrowLeft.png" alt="">
                <div>xxxxxxx</div>
            </div>
            <div class="goodsPrice">
                <div>￥4,200</div>
                <img style="width:44rem;height:38rem" src="../../../static/img/goodsdetails/heart.png" alt="">
            </div>
        </div>
        <mt-swipe @change="swiperChange" class="swiper" :showIndicators="false" :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
                <div class="swiperItem">
                    <img :src="item" alt="">
                </div>
            </mt-swipe-item>
            <ul class="point">
                <li :class="[index==currentSwiper?'active':'deactive']" v-for="(item,index) in list" class="" :key="index"></li>
            </ul>
        </mt-swipe>
        <ul class="param">
            <li class="paramItem">
                <div class="itemLeft">{{$t('goodsdetails.color')}}</div>
                <div class="itemCenter">
                    <div>xxxxx</div>
                    <div class="circle"></div>
                </div>
                <img class="arrow" src="../../../static/img/user/arrow.png" alt="">
            </li>
            <li class="paramItem">
                <div class="itemLeft">{{$t('goodsdetails.size')}}</div>
                <div class="itemCenter">
                    <div class="size">240x240</div>
                </div>
                <img class="arrow" src="../../../static/img/user/arrow.png" alt="">
            </li>
            <li class="paramItem">
                <div class="itemLeft"></div>
                <div class="itemCenter">
                    <img class="rule" style="width:42rem;height:42rem" src="../../../static/img/goodsdetails/roole.png" alt="">
                    <div>{{$t('goodsdetails.sizeList')}}</div>
                </div>
            </li>
        </ul>
        <div class="addBtn">{{$t('goodsdetails.shopcar')}}</div>
        <div class="details">
            <div class="detailTitle">{{$t('goodsdetails.detail')}}</div>
            <ul>
                <li><span></span>xxxxxx</li>
                <li><span></span>xxxxx</li>
                <li><span></span>xxxxx</li>
            </ul>
        </div>
        <div class="bottomBar">
            <div class="barItem">
                <img style="width:43rem;height:42rem" src="../../../static/img/shop/wallet.png" alt="">
                <div>{{$t('goodsdetails.paytype')}}</div>
            </div>
            <div class="barItem">
                <img style="width:51rem;height:42rem" src="../../../static/img/shop/car.png" alt="">
                <div>{{$t('goodsdetails.expres')}}</div>
            </div>
        </div>

        <div class="gochat">
            <img class="img" src="../../../static/img/chatorshopcart/chet.png" alt="">
        </div>

        <div class="goshopcart">
            <img class="img" src="../../../static/img/chatorshopcart/shopcart.png" alt="">
        </div>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import 'mint-ui/lib/style.css'
export default {
    components:{
        PageHeader,
    },
    data(){
        return{
           list:[require('../../../static/img/shop/carDemo1.png'),require('../../../static/img/shop/carDmo2.png'),require('../../../static/img/shop/carDemo1.png')],
           currentSwiper:0
        }
    },
    methods:{
        //轮播图改变事件
        swiperChange(i){
            this.currentSwiper = i
        }
    }

}
</script>

<style lang='less' scoped>
.detailBox{
    font-family: Source Han Sans CN;
    text-align: left;
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
            margin-left: 23rem;
        }
    }
    .gochat{
        width: 90rem;
        height: 90rem;
        background-color: #000000;
        opacity: 0.75;
        position: fixed;
        right: 35rem;
        bottom: 222rem;
        border-radius: 50%;
        .img{
            width: 44rem;
            height: 44rem;
            margin-top: 23rem;
            margin-left: 23rem;
        }
    }
    .header{
        font-size: 30rem;
        font-weight: 400;
        color: #333333;
        padding: 30rem 36rem;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);

    }
    .goodsTop{
        padding: 60rem 35rem 0rem 35rem;
        .goodsTitle{
            display: flex;
            align-items: center;
            div{
                font-size: 38rem;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: #444444;
                padding-left: 41rem;
                margin-top: 10rem;

            }
        }
        .goodsPrice{
            display: flex;
            padding: 24rem 0rem;
            align-items: center;
            justify-content: space-between;
            div{
                padding-left: 90rem;
            }
        }
    }
    .swiper{
        height: 460rem;
        padding-top: 50rem;
        position: relative;
        .swiperItem{
            width: 466rem;
            height: 369rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            img{
                height: 90%;
            }
        }
        .point{
            list-style: none;
            margin: 0;
            position: absolute;
            bottom: 0;
            display: flex;
            width: 100%;
            justify-content: center;
            li{
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
                margin-right: 15rem;

            }
            .active{
                width: 14rem;
                height: 14rem;
                background: #02031E;

            }
            .deactive{
                width: 10rem;
                height: 10rem;
                background: #FFFFFF;
                border: 1rem solid #02031E;

            }
        }
    }
    .param{
        list-style: none;
        margin: 0;
        padding: 0rem 36rem;
        font-size: 28rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        margin-top: 40rem;

        .paramItem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: solid 2rem #f5f6f7;
            padding: 33rem 0rem;
            .arrow{
                width: 14rem;
                height: 24rem;
                margin-left: 20rem;
            }
            .itemCenter{
                flex-grow: 1;
                text-align: right;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .circle{
                    width: 52rem;
                    height: 42rem;
                    background: #5E8FA0;
                    margin-left: 20rem;

                }
                .rule{
                    margin-right: 15rem;
                    margin-top: -10rem;
                }
                
            }
        }
    }
    .addBtn{
        width: 670rem;
        height: 88rem;
        background: #082850;
        font-size: 32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
        line-height: 88rem;
        margin: 0 auto;
    }
    .details{
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        padding: 60rem 35rem 0rem 35rem;
        .detailTitle{
            font-size: 28rem;
        }
        ul{
            list-style: none;
            margin: 0;
            padding-top: 35rem;
            li{
                font-size: 26rem;
                display: flex;
                align-items: center;
                span{
                    display: block;
                    width: 8rem;
                    height: 8rem;
                    background: #444444;
                    border-radius: 50%;
                    margin-right: 15rem;

                }
            }
            li:nth-child(2){
                padding:15rem 0rem;
            }
        }
    }
    .bottomBar{
        padding: 0rem 39rem 0rem 39rem;
        background-color: white;
        margin-top: 80rem;
        .barItem{
            display: flex;
            align-items: center;
            height: 108rem;
            border-bottom: 2rem solid #f5f6f7;;
            div{
                padding-left: 25rem;
                margin-top: 10rem;
            }
            &:last-child{
                border: none;
            }
        }
    }
     .customer{
        width: 88rem;
        height: 88rem;
        background: #000000;
        opacity: 0.75;
        position: fixed;
        right: 0rem;
        bottom:220rem;
        display: flex;
        justify-content: center;
        align-items: center;

    }
}
</style>