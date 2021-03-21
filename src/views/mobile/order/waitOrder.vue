<template>
    <div class="wait">
        <PageHeader :isShowRight="true" :rightIcon="true"></PageHeader>
        <div class="waitTop">{{$t('waitOrder.wait')}}</div>
        <div class="tips">
            <img style="width:26rem;height:26rem" src="../../../static/img/index/tips.png" alt="">
            <div>{{$t('waitOrder.tip')}}</div>
        </div>
        <div class="timing">
            <div class="timingTop">
                <div>{{$t('waitOrder.waitTime')}}</div>
                <div>{{$t('waitOrder.chat')}}</div>
            </div>
            <div class="timingBottom">
                <div class="item">
                    <img style="width:44rem;height:44rem" src="../../../static/img/order/cross.png" alt="">
                    <div>{{$t('waitOrder.cancel')}}</div>
                </div>
                <div class="item">
                    <img style="width:44rem;height:44rem" src="../../../static/img/order/wang.png" alt="">
                    <div>{{$t('waitOrder.contact')}}</div>
                </div>
                <div class="item">
                    <img style="width:44rem;height:44rem" src="../../../static/img/order/user.png" alt="">
                    <div>{{$t('waitOrder.seller')}}</div>
                </div>
            </div>
        </div>
        <ul class="detail">
            <li>{{$t('waitOrder.orderDetail')}}</li>
            <li><span>{{$t('waitOrder.total')}}</span><span>￥300,000.00</span></li>
            <li><span>{{$t('waitOrder.price')}}</span><span>￥6.55</span></li>
            <li><span>{{$t('waitOrder.num')}}</span><span>1,000.000</span></li>
            <li><span>{{$t('waitOrder.orderNum')}}</span><span>5252854123511125</span></li>
        </ul>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue'
export default {
    components:{
        PageHeader
    }
}
</script>

<style lang='less' scoped>
.wait{
    font-family: Source Han Sans CN;
    .waitTop{
        background: #FFFFFF;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
        padding: 30rem 36rem;
        text-align: left;
    
    }
    .tips{
        width: 680rem;
        height: 68rem;
        background: #FEF7E7;
        border: 1rem solid #FDDEA4;
        border-radius: 6rem;
        font-size: 22rem;
        font-weight: 400;
        color: #444444;
        display: flex;
        padding: 0rem 25rem;
        box-sizing: border-box;
        align-items: center;
        margin: 0 auto;
        z-index: -1;
        img{
            margin-right: 12rem;
            margin-top: -1rem;
        }
    }
    .timing{
        width: 680rem;
        height: 300rem;
        background: #FFFFFF;
        border: 1rem solid #E4E7ED;
        border-radius: 6rem;
        margin: 35rem auto 35rem auto;
        padding: 35rem 27rem 31rem 26rem;
        box-sizing: border-box;
        .timingTop{
            text-align: left;
            border-bottom: solid 1rem #E4E7ED;
            div:nth-child(1){
                font-size: 34rem;
                font-weight: bold;
                color: #00B4FC;
            }
            div:nth-child(2){
                font-size: 26rem;
                font-weight: 400;
                color: #9AA5B5;
                padding-top: 18rem;
                padding-bottom: 35rem;
            }
        }
        .timingBottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 30rem;
            .item{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #666666; 
                img{
                    margin-bottom: 20rem;
                }
            }
            .item:nth-child(2){
                color: #00B4FC;
            }
        }
       
    }
    .detail{
        list-style: none;
        width: 680rem;
        height: 380rem;
        background: #FFFFFF;
        border: 1rem solid #E4E7ED;
        border-radius: 6rem;
        margin: 0 auto;
        padding: 31rem 25rem 38rem 25rem;
        box-sizing: border-box;
        li{
            font-size: 28rem;
            font-weight: 400;
            color: #444444;
            height: 66rem;
            display: flex;
            justify-content: space-between;
            span{
                display: block;
            }
        }
        li:nth-child(1){
            font-size: 32rem;
            font-weight: bold;
            text-align: left;
            border-bottom: solid 1rem #E4E7ED;
            margin-bottom: 25rem;
            height: 47rem;
        }
        li:nth-child(2){
            span:nth-child(2){
                color: #00B4FC;
            }
        }
    }
}
</style>