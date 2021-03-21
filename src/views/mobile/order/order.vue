<template>
    <div class="order">
        <PageHeader :isShowRight="true" :rightIcon="true"></PageHeader>
        <div class="orderTop">{{$t('myorder.myorder')}}</div>
        <div class="menuTitle" @click="openCoin">
            <div>{{chooseOrderItem.text}}</div>
            <img style="width:24rem;height:14rem" src="../../../static/img/user/arrowdown.png" alt="">
            <!--                    订单下拉-->
            <div class="order"
                 v-show="showCoins">
                <div class="order-content">
                    <div class="order-content-item"
                         v-for="(item,index) in orderList"
                         :key="index"
                         @click="chooseOrder(item)">
                        {{ item.text }}
                    </div>
                    <!--                            <div class="order-content-item">
                                                    买入
                                                </div>
                                                <div class="order-content-item">
                                                    卖出
                                                </div>-->
                </div>
            </div>
        </div>
        <ul class="orderTabel">
            <li>{{$t('myorder.shop')}}<span>SLT</span></li>
            <li></li>
            <li>{{$t('myorder.wait')}} <img style="width:12rem;height:20rem;margin-left:11rem" src="../../../static/img/user/arrowgrey.png" alt=""></li>
            <li>{{$t('myorder.heade')[0]}}</li>
            <li>{{$t('myorder.heade')[1]}}</li>
            <li>{{$t('myorder.heade')[2]}}</li>
            <li>22:00  03/06</li>
            <li>1,000,000</li>
            <li>300,000.00</li>
            <li>{{$t('myorder.place')}}</li>
            <li></li>
            <li>{{$t('myorder.haddfee')}} 10%</li>
        </ul>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
export default {
    components:{
        PageHeader
    },
    data(){
        return {
            showCoins: false,
            orderList: [
                {
                    text: this.$t('myorder.all'),
                },
                {
                    text: this.$t('myorder.buy'),
                },
                {
                    text: this.$t('myorder.sell'),
                },
            ],
            chooseOrderItem:{
                text:  this.$t('myorder.all'),
            },
        }
    },
    methods: {
        chooseOrder(item){
            this.chooseOrderItem = item
        },
        openCoin() {
            this.showCoins = !this.showCoins
        },
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
        position: relative;

        .order {
            width: 680rem;
            height: 236rem;
            background: #FFFFFF;
            border: 1rem solid #E4E7ED;
            box-shadow: 0rem 5rem 25rem 0rem rgba(153, 153, 153, 0.25);
            box-sizing: border-box;
            padding: 10rem 0;
            position: absolute;
            top: 70rem;
            z-index: 5;
            left: 0;

            .order-content {
                .order-content-item {
                    text-align: left;
                    font-size: 28rem;
                    font-weight: 400;
                    color: #444444;
                    width: 680rem;
                    height: 72rem;
                    line-height: 72rem;
                    box-sizing: border-box;
                    padding-left: 36rem;
                }

                .order-content-item:active {
                    background: #F2F6FA;
                }
            }
        }

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