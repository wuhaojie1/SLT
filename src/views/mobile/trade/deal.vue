<template>
    <div id="Mbuy">
        <div class="trade-content">
            <div class="trade-data">
                <div class="trade-text">
                    <div class="trade-buy"
                         :class="index==currentindex1?'active':'trade'"
                         v-for="(item,index) in tradetextarr"
                         :key="index" @click="changeitem1(index)">{{item}}</div>
                </div>
                <div class="pay" v-if="currentindex1==0">
                    <div class="value-text">1ETH价值约</div>
                    <div class="value-num">308,500.00SLT</div>
                    <div class="paycon">
                        <div class="paycon-left">
                            <div class="left-text1">我将支付</div>
                            <div class="left-text2">0.00</div>
                        </div>
                        <div class="paycon-right">
                            <div class="right-img-con">
                                <img class="right-img" src="../../../static/img/buy/ETH.png" alt="">
                            </div>
                            <div class="right-text1">ETH</div>
                        </div>
                    </div>
                    <div class="connect-con">
                        <div class="fline1"></div>
                        <div class="fline2"></div>
                        <div class="connect-img-con">
                            <img class="connect-img" src="../../../static/img/trade/connect.png"  alt="">
                        </div>
                        <div class="money">可用资金0.000</div>
                    </div>
                    <div class="getcon">
                        <div class="paycon-left">
                            <div class="left-text1">我将获得~</div>
                            <div class="left-text2">0.00</div>
                        </div>
                        <div class="paycon-right">
                            <div class="right-img-con">
                                <img class="right-img" src="../../../static/img/buy/SLT.png" alt="">
                            </div>
                            <div class="right-text1">SLT</div>
                        </div>
                    </div>
                    <div class="pay-text">支付方式</div>
                    <div class="pay-way">
                        <div class="coinmsg-con">
                            <img class="coin-img" src="../../../static/img/buy/ETH.png" alt="">
                            <div class="coin-text">ETH</div>
                        </div>
                        <div class="arrow-down">
                            <img class="arrow-down-img" src="" alt="">
                        </div>
                    </div>
                    <div class="pay-button">购买SLT</div>
                </div>
                <div class="seal" v-if="currentindex1==1">
                    <div class="value-text">1ETH价值约</div>
                    <div class="value-num">308,500.00SLT</div>
                    <div class="paycon">
                        <div class="paycon-left">
                            <div class="left-text1">我将出售</div>
                            <div class="left-text2">0.00</div>
                        </div>
                        <div class="paycon-right">
                            <div class="right-img-con">
                                <img class="right-img" src="../../../static/img/buy/SLT.png" alt="">
                            </div>
                            <div class="right-text1">SLT</div>
                        </div>
                    </div>
                    <div class="connect-con">
                        <div class="fline1"></div>
                        <div class="fline2"></div>
                        <div class="connect-img-con">
                            <img class="connect-img" src="../../../static/img/trade/connect.png"  alt="">
                        </div>
                        <div class="money">可用资金0.000</div>
                    </div>
                    <div class="getcon">
                        <div class="paycon-left">
                            <div class="left-text1">我将获得~</div>
                            <div class="left-text2">0.00</div>
                        </div>
                        <div class="paycon-right">
                            <div class="right-img-con">
                                <img class="right-img" src="../../../static/img/buy/ETH.png" alt="">
                            </div>
                            <div class="right-text1">ETH</div>
                        </div>
                    </div>
                    <div class="pay-text">支付方式</div>
                    <div class="pay-way">
                        <div class="coinmsg-con">
                            <img class="coin-img" src="../../../static/img/buy/ETH.png" alt="">
                            <div class="coin-text">ETH</div>
                        </div>
                        <div class="arrow-down">
                            <img class="arrow-down-img" src="" alt="">
                        </div>
                    </div>
                    <div class="pay-button">出售SLT</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mbuy",
        data(){
            return{
                tradetextarr:['购买','出售'],
                currentindex1:0
            }
        },
        methods:{
            changeitem1(index){
                this.currentindex1 = index
            }
        }
    }
</script>

<style scoped lang="less">
#Mbuy{
    width: 750rem;
    height: calc(100vh - 186rem);
    .trade-content{
        height: calc(100vh - 452rem);
        width: 750rem;
        background-color: #F5F6FA;
        padding-top: 50rem;
        .trade-data{
            width: 680rem;
            height: 949.1rem;
            margin: 0 auto;
            background-color: #FFFFFF;
            .trade-text{
                width: 100%;
                height: 80rem;
                background: #E8EAF1;
                position: relative;
                display: flex;
                justify-content: space-around;
                .trade{
                    font-size: 36rem;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #9CA0AF;
                    /*margin-left: 131rem;*/
                    line-height: 80rem;
                }
                .active{
                    font-size: 36rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #333333;
                    font-weight: bold;
                    /*margin-right: 132rem;*/
                    line-height: 80rem;
                }
            }
            .value-text{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #8993A0;
                margin-left: 37rem;
                margin-top: 65rem;
                text-align: left;
            }
            .value-num{
                font-size: 34rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #333333;
                margin-left: 37rem;
                margin-top: 24rem;
                text-align: left;
            }
            .paycon{
                width: 610rem;
                height: 110rem;
                background: #FFFFFF;
                border: 1px solid #E4E7ED;
                margin-left: 35rem;
                margin-top: 34rem;
                display: flex;
                justify-content: space-between;
                .paycon-left{
                    margin-left: 26rem;
                    text-align: left;
                    .left-text1{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #8993A0;
                        margin-top: 20rem;
                    }
                    .left-text2{
                        font-size: 32rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #CED3DD;
                        margin-top: 18rem;
                    }
                }
                .paycon-right{
                    width: 147rem;
                    height: 40rem;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 33rem;
                    /*margin-right: 25rem;*/
                    .right-img{
                        width: 44rem;
                        height: 44rem;
                    }
                    .right-text1{
                        width: 48rem;
                        height: 21rem;
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-top: 12rem;
                        margin-right: 38rem;
                    }
                }

            }
            .connect-con{
                height: 76rem;
                width: 100%;
                position: relative;
                .fline1{
                    width: 1rem;
                    height: 24rem;
                    background-color: #E4E7Ed;
                    position: absolute;
                    left: 58rem;
                    top: 0;
                }
                .connect-img-con{
                    width: 16rem;
                    height: 32rem;
                    position: absolute;
                    top: 24rem;
                    left: 50rem;
                    .connect-img{
                        width: 16rem;
                        height: 32rem;
                    }
                }
                .fline2{
                    width: 1rem;
                    height: 24rem;
                    background-color: #E4E7Ed;
                    position: absolute;
                    left: 58rem;
                    top: 57rem;
                }
                .money{
                    width: 300rem;
                    font-size: 24rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #8993A0;
                    text-align: right;
                    margin-right: 35rem;
                    float: right;
                }
            }
            .getcon{
                width: 610rem;
                height: 110rem;
                background: #FFFFFF;
                border: 1px solid #E4E7ED;
                margin-left: 35rem;
                /*margin-top: 34rem;*/
                display: flex;
                justify-content: space-between;
                .paycon-left{
                    margin-left: 26rem;
                    text-align: left;
                    .left-text1{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #8993A0;
                        margin-top: 20rem;
                    }
                    .left-text2{
                        font-size: 32rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #CED3DD;
                        margin-top: 18rem;
                    }
                }
                .paycon-right{
                    width: 147rem;
                    height: 40rem;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 33rem;
                    /*margin-right: 25rem;*/
                    .right-img{
                        width: 44rem;
                        height: 44rem;
                    }
                    .right-text1{
                        width: 48rem;
                        height: 21rem;
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-top: 12rem;
                        margin-right: 38rem;
                    }
                }

            }
            .pay-text{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #8993A0;
                margin-left: 35rem;
                margin-top: 35rem;
                text-align: left;
            }
            .pay-way{
                width: 610rem;
                height: 100rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                margin-left: 35rem;
                margin-top: 24rem;
                display: flex;
                justify-content: space-between;
                .coinmsg-con{
                    width: 147rem;
                    height: 40rem;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 28rem;
                    .coin-img{
                        width: 44rem;
                        height: 44rem;
                        margin-left: 25rem;
                        margin-right: 18rem;
                    }
                    .coin-text{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-top: 12rem;
                    }
                }
                .arrow-down{
                    width: 24rem;
                    height: 13rem;
                    margin-right: 35rem;
                    .arrow-down-img{
                        width: 24rem;
                        height: 13rem;
                    }
                }
            }
            .pay-button{
                width: 610rem;
                height: 88rem;
                background: #00B9FE;
                border-radius: 6px;
                margin-left: 35rem;
                margin-top: 50rem;
                text-align: center;
                line-height: 88rem;
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
            }
        }
    }

}
</style>