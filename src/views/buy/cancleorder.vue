<template>
    <div>
        <themeStickyHeader></themeStickyHeader>
<!--        <tradebar style="margin-top: 75rem"></tradebar>-->
        <div class="cancleorder-con">
            <div class="cancleorder-head">
                <div class="goback">
                    <router-link to="confirmOrder">
                        <img src="" alt="">
                        <div class="goback-text">{{$t('cancleorder.back')}}</div>
                    </router-link>
                </div>
            </div>
            <div class="cancle-con">
                <div class="cancle">
                    <img class="cancle-big" src="../../static/img/cancleorder/big.png" alt="">
                    <div class="cancle-text">{{$t('cancleorder.cancleorder')}}</div>
                    <div class="cancle-slider">
                        <div class="cancle-slider-small-con">
                            <img class="cancle-slider-small" src="../../static/img/cancleorder/small.png" alt="">
                        </div>
                        <div class="colse-order">{{$t('cancleorder.closeorder')}}</div>
                    </div>
                </div>
                <div class="text-two">{{$t('cancleorder.complaintext1')}}</div>
                <div class="line"></div>
                <div class="item-con">
                    <div class="order-head">
                        <div class="order-details-text">{{$t('cancleorder.orderdetails')}}</div>
                        <img class="arrow" src="../../static/img/cancleorder/uparrow.png" alt="">
                    </div>
                    <div v-for="item in textlist" :key="item.index">
                        <ordertextitem :item="item"></ordertextitem>
                    </div>
                </div>
                <div class="line"></div>
                <div class="bottom-con">
                    <div class="bottom-first">
                        <div class="dot"></div>
                        <div class="bottom-first-text">{{$t('cancleorder.remindmsg1')}}</div>
                    </div>
                    <div class="bottom-second">
                        <div class="dot"></div>
                        <div class="bottom-first-text">{{$t('cancleorder.remindmsg2')}}</div>
                    </div>
                    <div class="bottom-third">
                        <div class="dot"></div>
                        <div class="bottom-first-text">{{$t('cancleorder.remindmsg3')}}</div>
                    </div>
                </div>
                <div class="complain">{{$t('cancleorder.complaintext2')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import themeStickyHeader from "../../components/header/themeStickyHeader";
    // import tradebar from "../../components/tradebar/tradebar";
    import ordertextitem from "../../components/ordertextitem/orderitemtext"
    export default {
        name: "cancleorder",
        components:{themeStickyHeader,ordertextitem},
        data(){
            return{
                textlist:[
                    {
                        lefttext:'订单号',
                        righttext:'210308165719943'
                    },
                    {
                        lefttext:'手续费',
                        righttext:'0.00 ETH'
                    },
                    {
                        lefttext:'成交订单',
                        righttext:'325,941.49 ETH'
                    },
                    {
                        lefttext:'成交数量',
                        righttext:'0.000030 SLT'
                    },
                    {
                        lefttext:'总金额',
                        righttext:'10.00 ETH'
                    },
                    {
                        lefttext:'取消时间',
                        righttext:'2021-03-08 17:17:20'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .cancleorder-con{
        width: 1200rem;
        height: 809.7rem;
        margin: 0 auto;
        box-shadow: 0rem 0rem 20rem 0rem rgba(221, 226, 242, 0.3);
        border-radius: 10rem;
        .cancleorder-head{
            margin-top: 35rem;
            width: 1200rem;
            height: 60rem;
            background-color: #F5F6FA;
            .goback{
                height: 60rem;
                width: 120rem;
                background-color: #fff;
                a{
                    text-decoration: none;
                }
                .goback-text{
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #8993A0;

                }
            }
        }
        .cancle-con{
            width: 660rem;
            height: auto;
            margin: 0 auto;
            .cancle{
                margin-top: 35rem;
                width: auto;
                height: 28rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                .cancle-big{
                    width: 28rem;
                    height: 28rem;
                    float: left;
                    margin-right: 6rem;
                }
                .cancle-text{
                    font-size: 24rem;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #444444;
                    float: left;
                    line-height: 28rem;
                    margin-right: 9rem;
                }
                .cancle-slider{
                    width: 94rem;
                    height: 20rem;
                    background: #E9ECF0;
                    opacity: 0.76;
                    border-radius: 4rem;
                    display: flex;
                    justify-content: space-between;
                    .cancle-slider-small-con{
                        width: 16rem;
                        height: 16rem;
                        margin-top: 2rem;
                        margin-left: 2rem;
                        background: #FFFFFF;
                        border-radius: 4rem;
                        position: relative;
                        .cancle-slider-small{
                            position: absolute;
                            width: 8rem;
                            height: 8rem;
                            top: 4rem;
                            left: 4rem;
                        }
                    }
                    .colse-order{
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #8993A0;
                        line-height: 20rem;
                        margin-right: 5rem;
                    }
                }
            }
            .text-two{
                clear: both;
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #666666;
                margin-top: 8rem;
                text-align: left;
            }
            .line{
                width: 660rem;
                height: 1rem;
                background: #E4E7ED;
                margin-top: 21rem;
            }
            .item-con{
                margin-top: 25rem;
                width: 660rem;
                height: auto;
                .order-head{
                    width: 660rem;
                    display: flex;
                    justify-content: space-between;
                    .order-details-text{
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                    }
                    .arrow{
                        width: 12rem;
                        height: 7rem;
                        margin-top: 5rem;
                    }
                }
            }
            .bottom-con{
                margin-top: 30rem;
                width: 660rem;
                height: 130rem;
                background: #FEF9F4;
                .bottom-first{
                    padding-top: 19rem;
                    margin-left: 15rem;
                    width: 645rem;
                    height: auto;
                    display: flex;
                    justify-content: start;
                    .dot{
                        width: 6rem;
                        height: 6rem;
                        background: #F3882A;
                        border-radius: 50%;
                        margin-right: 4rem;
                        margin-top: 4rem;
                    }
                    .bottom-first-text{
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #F3882A;
                        /*width: 536rem;*/
                        text-align: left;
                        float: left;
                    }
                }
                .bottom-second{
                    padding-top: 11rem;
                    margin-left: 15rem;
                    width: 645rem;
                    height: auto;
                    display: flex;
                    justify-content: start;
                    .dot{
                        width: 6rem;
                        height: 6rem;
                        background: #F3882A;
                        border-radius: 50%;
                        margin-right: 4rem;
                        margin-top: 4rem;
                    }
                    .bottom-first-text{
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #F3882A;
                        /*width: 536rem;*/
                        text-align: left;
                        float: left;
                    }
                }
                .bottom-third{
                    padding-top: 13rem;
                    margin-left: 15rem;
                    width: 645rem;
                    height: auto;
                    display: flex;
                    justify-content: start;
                    .dot{
                        width: 6rem;
                        height: 6rem;
                        background: #F3882A;
                        border-radius: 50%;
                        margin-right: 4rem;
                        margin-top: 4rem;
                    }
                    .bottom-first-text{
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #F3882A;
                        /*width: 536rem;*/
                        text-align: left;
                        float: left;
                    }
                }
            }
            .complain{
                width: 660rem;
                text-align: right;
                margin-top: 15rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #00B4FC;
            }
        }
    }
</style>