<template>
    <div class="car">
        <PageHeader :isShowRight="true" :rightIcon="false"></PageHeader>
        <div class="carTop">
            <img style="width:27rem;height:38rem" src="../../../static/img/shop/lock.png" alt="">
            <div class="carTitle">{{$t('shopcar.safety')}}</div>
        </div>
        <div class="carBox">
            <div class="boxTitle">{{$t('shopcar.myCar')}}<span>({{2}})</span></div>
            <ul class="itemBox" v-for="item in list" :key="item.src">
                <li class="item">
                    <div class="itemTop">
                         <div class="topLeft">
                            <img style="width:100%" :src="item.src" alt="">
                        </div>
                        <div class="topRight">
                            <div class="itemTitle"><span>{{$t('shopcar.goodsName')}}</span></div>
                            <img style="width:37rem;height:40rem" src="../../../static/img/shop/remove.png" alt="">
                        </div>
                    </div>
                    <div class="itemCenter">
                        <div>{{$t('shopcar.styleNum')}}</div>
                        <div>{{$t('shopcar.color')}}</div>
                        <div>{{$t('shopcar.size')}}</div>
                    </div>
                    <div class="itemBottom">
                        <div class="bottomLeft">
                            <div>1</div>
                            <img style="width:24rem;height:14rem" src="../../../static/img/shop/arrowdown.png" alt="">
                        </div>
                        <div class="bottomRight">¥4,200</div>
                    </div>
                </li>
            </ul>
        </div>
        <ul class="total">
            <li>
                <div class="itemLeft">{{$t('shopcar.orderTotal')}}:</div>
                <div class="itemRight">{{$t('shopcar.selected')}}</div>
            </li>
            <li>
                <div class="itemLeft">{{$t('shopcar.goodsTotal')}}:</div>
                <div class="itemRight">¥5,400</div>
            </li>
            <li>
                <div class="itemLeft">{{$t('shopcar.shipping')}}:</div>
                <div class="itemRight">{{$t('shopcar.frees')}}</div>
            </li>
            <li>
                <div class="itemLeft">{{$t('shopcar.amount')}}:</div>
                <div class="itemRight">¥5,400</div>
            </li>
        </ul>

        <div @click="open" class="settlement">{{$t('shopcar.sett')}}</div>
        <div class="continue">{{$t('shopcar.carry')}}</div>

        <div class="bottomBar">
            <div class="barItem">
                <img style="width:43rem;height:42rem" src="../../../static/img/shop/wallet.png" alt="">
                <div>{{$t('shopcar.paytype')}}</div>
            </div>
            <div class="barItem">
                <img style="width:51rem;height:42rem" src="../../../static/img/shop/car.png" alt="">
                <div>{{$t('shopcar.expres')}}</div>
            </div>
        </div>

<!--        <div class="customer">-->
<!--            <img style="width:46rem;height:46rem" src="../../../static/img/shop/wangwang.png" alt="">-->
<!--        </div>-->

        <Add ref="add"></Add>
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
import Add from '../../../components/mobileComponents/shopCar/addShop.vue'
export default {
    components:{
        PageHeader,
        Add
    },
    data(){
        return{
            list:[
                {src:require('../../../static/img/shop/carDmo2.png')},
                {src:require('../../../static/img/shop/carDemo1.png')}
            ]
        }
    },
    methods:{
        open(){
            this.$refs.add.openModal();
        }
    }
}
</script>

<style lang='less' scoped>
.car{
    text-align: left;
    font-family: Source Han Sans CN;
    min-height: 100vh;
    background-color: #f3f5f7;
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
    .carTop{
        background: #FFFFFF;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
        display: flex;
        align-items: center;
        padding: 25rem 35rem;

        img{
            margin-right: 17rem;
        }
        .carTitle{
            font-size: 28rem;
            font-weight: 400;
            color: #333333;
            padding-top: 4rem;

        }
    }
    .carBox{
        .boxTitle{
            padding: 89rem 0rem 5rem 36rem;
            font-size: 38rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #444444;

        }
        .itemBox{
            list-style: none;
            margin: 0;
            .item{
                width: 680rem;
                // height: 705rem;
                background: #FFFFFF;
                margin: 35rem auto 0rem auto;
                .itemTop{
                    padding: 60rem 35rem 0rem 35rem;
                    display: flex;
                    justify-content: space-between;
                    .topLeft{
                        width: 260rem;
                        height: 260rem;
                        min-width: 260rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .topRight{
                        flex-grow: 1;
                        padding-left: 55rem;
                        width: calc(100vw - 260rem);
                        .itemTitle{
                            width: 100%;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            font-size: 28rem;
                            font-weight: 400;
                            color: #444444;

                        }
                        img{
                            margin-top: 91rem;
                            margin-left: 18rem;
                        }
                    }
                }
                .itemCenter{
                    padding: 44rem 35rem;
                    font-size: 28rem;
                    font-weight: 400;
                    div:nth-child(1){
                        color: #7E7E7E;
                    }
                    div:nth-child(2){
                        padding: 24rem 0rem;
                    }
                }
                .itemBottom{
                    display: flex;
                    justify-content: space-between;
                    border-top: solid 1rem #f3f5f7;
                    padding: 35rem 35rem 39rem 35rem;
                    box-sizing: border-box;
                    align-items: center;
                    .bottomLeft{
                        width: 120rem;
                        height: 72rem;
                        background: #FFFFFF;
                        border: 1rem solid #DBDEE4;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0rem 20rem;
                        box-sizing: border-box;

                    }
                    .bottomRight{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;

                    }
                }

            }
        }
    }
    .total{
        list-style: none;
        margin: 0;
        width: 680rem;
        background: #FFFFFF;
        margin: 35rem auto 0rem auto;
        font-size: 28rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;

        li{
            display: flex;
            justify-content: space-between;
            padding: 35rem;
        }
        li:nth-child(1){
            border-bottom: solid 1rem #f3f5f7;
            .itemLeft{
                color: #7E7E7E;
            }
        }
        li:nth-child(2),li:nth-child(3){
            .itemRight{
                color: #7E7E7E;
            }
        }
        li:last-child{
            font-size: 32rem;
        }

    }
    .settlement,.continue{
        width: 670rem;
        height: 88rem;
        font-size: 32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        text-align: center;
        line-height: 88rem;
        margin: 0 auto;

    }
    .settlement{
        background-color: #082850;
        color: white;
        margin-top: 35rem;
        margin-bottom: 40rem;
    }
    .continue{
        border: 1px solid #082850;
        color: #444444;
    }
    .bottomBar{
        padding: 0rem 39rem 70rem 39rem;
        background-color: white;
        margin-top: 80rem;
        .barItem{
            display: flex;
            align-items: center;
            height: 108rem;
            border-bottom: 2rem solid #DBDEE4;;
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