<template>
    <div class="order">
        <PageHeader :isShowRight="true" :rightIcon="true"></PageHeader>
        <div class="orderTop">我的订单</div>
        <div class="menuTitle">
            <div>购买/出售的订单</div>
            <img style="width:24rem;height:14rem" src="../../../static/img/user/arrowdown.png" alt="">
        </div>
        <ul class="orderTabel">
            <li>购买<span>SLT</span></li>
            <li></li>
            <li>待接单 <img style="width:12rem;height:20rem;margin-left:11rem" src="../../../static/img/user/arrowgrey.png" alt=""></li>
            <li>时间</li>
            <li>数量</li>
            <li>交易金额</li>
            <li>22:00  03/06</li>
            <li>1,000,000</li>
            <li>300,000.00</li>
            <li>大荣交易所</li>
            <li></li>
            <li>手续费 10%</li>
        </ul>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
export default {
    components:{
        PageHeader
    }
}
</script>

<style lang='less'>
.order{
    font-family: Source Han Sans CN;
    .orderTop{
        background: #FFFFFF;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
        text-align: left;
        padding: 30rem 36rem;
        font-size: 30rem;
        font-weight: 400;
        color: #333333;
    }
    .menuTitle{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0rem 25rem 0rem 27rem;
        width: 680rem;
        height: 72rem;
        background: #FFFFFF;
        border: 1rem solid #E4E7ED;
        margin: 35rem auto 40rem auto;
        box-sizing: border-box;
    }
    .orderTabel{
        list-style: none;
        width: 680rem;
        background: #FFFFFF;
        border: 1rem solid #E4E7ED;
        margin: 0 auto;
        display: grid;
        grid-template-columns:33.3% 33.3% 33.3%;
        grid-template-rows: 74rem 49rem 59rem 58rem;
        box-sizing: border-box;
        padding: 30rem 26rem 0rem 26rem;
        text-align: left;
        li{
            font-size: 30rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
        }
        li:nth-child(1){
            text-align: left;
            font-size: 32rem;
            font-weight: bold;
            color: #22BF7C;
            span{
                color: #333;
            }
        }
        li:nth-child(4),li:nth-child(5),li:nth-child(6){
            font-size: 26rem;
            font-weight: 400;
            color: #9AA5B5;
        }
        li:nth-child(3){
            text-align: right;
            font-size: 26rem;
            font-weight: 400;
            color: #00B9FE;
        }
        li:nth-child(6),li:nth-child(9),li:nth-child(12){
            text-align: right;
        }
    }
}
</style>