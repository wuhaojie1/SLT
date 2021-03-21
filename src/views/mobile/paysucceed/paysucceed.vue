<template>
    <div id="paysucceed">
        <Mheader :is-show-right="true" :right-icon="true"></Mheader>

        <div class="content">
            <div class="headbg">
                <img class="bgimg" src="../../../static/img/paymentSuccess/headbg.png" alt="">
                <div class="back">
                    <img class="backimg" src="../../../static/img/paymentSuccess/arrowleft.png" alt="">
                    <div class="backtext">{{this.$t('Mpaysucceed.succeed')}}</div>
                </div>
                <div class="rightcon">
                    <img class="rightimg" src="../../../static/img/paymentSuccess/check.png" alt="">
                </div>
                <div class="twotext">
                    <div class="text1">{{this.$t('Mpaysucceed.succeed')}}</div>
                    <div class="text2">{{this.$t('Mpaysucceed.thanks')}}</div>
                </div>
                <div class="line"></div>
                <div class="centerbg">
                    <img class="wihtebg" src="../../../static/img/paymentSuccess/centerbg.png" alt="">
                    <div class="moneystyle">￥10.00ETH</div>
                    <div class="line"></div>
                    <div class="orderitem1">
                        <div class="orderitem-left">{{this.$t('Mpaysucceed.ordernum')}}</div>
                        <div class="orderitem-right">2013256156156156</div>
                    </div>
                    <div class="orderitem2">
                        <div class="orderitem-left">{{this.$t('Mpaysucceed.paytype')}}</div>
                        <div class="orderitem-right">SLT</div>
                    </div>
                    <div class="orderitem3">
                        <div class="orderitem-left">{{this.$t('Mpaysucceed.usermoney')}}</div>
                        <div class="orderitem-right">0.01SLT</div>
                    </div>
                    <div class="orderitem4">
                        <div class="orderitem-left">{{this.$t('Mpaysucceed.chaege')}}</div>
                        <div class="orderitem-right">10SLT</div>
                    </div>
                    <div class="orderitem5">
                        <div class="orderitem-left">{{this.$t('Mpaysucceed.paynum')}}</div>
                        <div class="orderitem-right">100</div>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <div class="look">{{this.$t('Mpaysucceed.look')}}</div>
                <div class="backindex">{{this.$t('Mpaysucceed.backindex')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Mheader from "../../../components/mobileComponents/comm/header";
    export default {
        name: "paysucceed",
        components:{Mheader},
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="less">
    #paysucceed{
        .content{
            width: 750rem;
            height: calc(100vh - 186rem);
            .headbg{
                width: 750rem;
                height: 896rem;
                position: relative;
                .bgimg{
                    width: 750rem;
                    height: 460rem;
                }
                .back{
                    position: absolute;
                    top: 35rem;
                    left: 35rem;
                    .backimg{
                        width: 16rem;
                        height: 28rem;
                        float: left;
                        margin-right: 16rem;
                    }
                    .backtext{
                        width: 158rem;
                        height: 28rem;
                        font-size: 30rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                    }
                }
                .rightcon{
                    width: 120rem;
                    height: 120rem;
                    position: absolute;
                    left: 217rem;
                    top: 123rem;
                    background-color: #fff;
                    border-radius: 50%;
                    .rightimg{
                        width: 73rem;
                        height: 58rem;
                        /*margin-left: 24rem;*/
                        margin-top: 38rem;
                    }
                }
                .twotext{
                    position: absolute;
                    left: 368rem;
                    top: 142rem;
                    width: 200rem;
                    /*height: auto;*/
                    .text1{
                        width: 200rem;
                        height: 37rem;
                        font-size: 38rem;
                        font-family: Source Han Sans CN;
                        font-weight: 500;
                        color: #FFFFFF;
                        text-align: left;
                    }
                    .text2{
                        width: 200rem;
                        height: 27rem;
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                        margin-top: 17rem;
                        text-align: left;
                    }
                }
                .line{
                    width: 680rem;
                    height: 24rem;
                    background: #047DD9;
                    border-radius: 12rem;
                    position: absolute;
                    left: 35rem;
                    top: 313rem;
                }
            }
            .centerbg{
                position: absolute;
                left: 16rem;
                top: 307rem;
                .wihtebg{
                    height: 589rem;
                    width: 719rem;
                    position: relative;
                }
                .moneystyle{
                    font-size: 38rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #444444;
                    position: absolute;
                    top: 90rem;
                    left: 230rem;
                }
                .line{
                    width: 610rem;
                    height: 1rem;
                    background: #E4E7ED;
                    border-radius: 1rem;
                    position: absolute;
                    left: 53rem;
                    top: 169rem;
                }
                .orderitem1{
                    width: 610rem;
                    height: auto;
                    /*margin-left: 35rem;*/
                    display: flex;
                    justify-content: space-between;
                    /*margin-top: 49rem;*/
                    position: absolute;
                    left: 64rem;
                    top: 219rem;
                    .orderitem-left{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                    .orderitem-right{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-right: 21rem;
                    }
                }
                .orderitem2{
                    width: 610rem;
                    height: auto;
                    /*margin-left: 35rem;*/
                    display: flex;
                    justify-content: space-between;
                    /*margin-top: 49rem;*/
                    position: absolute;
                    left: 64rem;
                    top: 281rem;
                    .orderitem-left{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                    .orderitem-right{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-right: 21rem;
                    }
                }
                .orderitem3{
                    width: 610rem;
                    height: auto;
                    /*margin-left: 35rem;*/
                    display: flex;
                    justify-content: space-between;
                    /*margin-top: 49rem;*/
                    position: absolute;
                    left: 64rem;
                    top: 342rem;
                    .orderitem-left{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                    .orderitem-right{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-right: 21rem;
                    }
                }
                .orderitem4{
                    width: 610rem;
                    height: auto;
                    /*margin-left: 35rem;*/
                    display: flex;
                    justify-content: space-between;
                    /*margin-top: 49rem;*/
                    position: absolute;
                    left: 64rem;
                    top: 404rem;
                    .orderitem-left{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                    .orderitem-right{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-right: 21rem;
                    }
                }
                .orderitem5{
                    width: 610rem;
                    height: auto;
                    /*margin-left: 35rem;*/
                    display: flex;
                    justify-content: space-between;
                    /*margin-top: 49rem;*/
                    position: absolute;
                    left: 64rem;
                    top: 466rem;
                    .orderitem-left{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                    }
                    .orderitem-right{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-right: 21rem;
                    }
                }
            }
        }
        .buttons{
            margin-top: 20rem;
            width: 719rem;
            height: auto;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            .look{
                width: 260rem;
                height: 88rem;
                background: #F7F7FA;
                border: 2rem solid #00B9FE;
                border-radius: 4rem;
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #00B9FE;
                line-height: 88rem;
                margin-left: 64rem;
            }
            .backindex{
                width: 260rem;
                height: 88rem;
                background: #00B9FE;
                border-radius: 4rem;
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 88rem;
                margin-right: 64rem;
            }
        }
    }
</style>