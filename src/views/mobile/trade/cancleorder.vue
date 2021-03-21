<template>
    <div id="cancleorder">
        <div class="content">
            <div class="goback">
                <img class="backimg" src="../../../static/img/buy/up.png" alt="">
                <div class="backtext">返回</div>
            </div>
            <div class="status">
                <img class="colse" src="../../../static/img/buy/close.png" alt="">
                <div class="status-text1">订单取消</div>
                <div class="imgcon">
                    <img class="img" src="../../../static/img/buy/smallcolse.png" alt="">
                </div>
                <div class="colostrade">关闭接单</div>
            </div>
            <div class="tiptext">
<!--                <span class="time">14:45</span>-->
                <span class="texts">如有疑问请向客服申诉</span>
            </div>
            <div class="line1"></div>
            <div class="paytype">
                <div class="paytext">支付方式</div>
                <div class="paycoin">
                    <img class="payimg" src="../../../static/img/buy/MSLT.png" alt="">
                    <div class="paycointext">ETH</div>
                </div>
            </div>
            <div class="paydetails">
                <div class="details-text">订单详情</div>
                <img class="detailsimg" src="../../../static/img/buy/downarrow.png" alt="">
            </div>
            <div class="orderitem">
                <div class="orderitem-left">订单号</div>
                <div class="orderitem-right">2013256156156156</div>
            </div>
            <div class="orderitem">
                <div class="orderitem-left">手续费</div>
                <div class="orderitem-right">0.001SLT</div>
            </div>
            <div class="orderitem">
                <div class="orderitem-left">成交单价</div>
                <div class="orderitem-right">100SLT</div>
            </div>
            <div class="orderitem">
                <div class="orderitem-left">成交数量</div>
                <div class="orderitem-right">1000</div>
            </div>
            <div class="line1"></div>
            <div class="orderitem">
                <div class="orderitem-left">总金额</div>
                <div class="active">1000ETH</div>
            </div>
            <div class="reminds">
                <div class="remind-item1">
                    <div class="dot"></div>
                    <div class="remind-text">
                        若您已经转账，由于未确认付款系统自动取消订单，
                        您可以在 聊天界面与对方进行沟通;
                    </div>
                </div>
                <div class="remind-item2">
                    <div class="dot"></div>
                    <div class="remind-text">
                        [主动取消]或[超时]自动取消3次，或恶意取消达-次，
                        当天禁止 交易:由于卖家未提供有效收款方式导致订单取消，可向客服申 诉，重新判责
                    </div>
                </div>
                <div class="remind-item3">
                    <div class="dot"></div>
                    <div class="remind-text">
                        当月累计6次，自第7次开始，每取消1次，禁止交易2小时。
                    </div>
                </div>
            </div>
<!--            <div class="buttons">-->
<!--                <div class="cancle">取消订单</div>-->
<!--                <div class="confirm">确认支付 45s</div>-->
<!--            </div>-->
            <div class="connect">向客服申诉</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cancleorder"
    }
</script>

<style scoped lang="less">
#cancleorder{
    height: calc(100vh - 274rem);
    width: 100vw;
    background-color:#F5F6FA;
    position: relative;
    margin-top: 5rem;
    .content{
        width: 680rem;
        height: 1270rem;
        background-color: #fff;
        position: absolute;
        top: 50rem;
        left: 35rem;
        .goback{
            margin-top: 29rem;
            .backimg{
                width: 22rem;
                height: 12rem;
                transform: rotate(-90deg);
                float: left;
                margin-top: 8rem;
                margin-left: 35rem;
                margin-right: 15rem;
            }
            .backtext{
                font-size: 26rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #8993A0;
                text-align: left;
            }
        }
        .status{
            margin-top: 59rem;
            height: 36rem;
            width: 100%;
            .colse{
                width: 42rem;
                height: 42rem;
                float: left;
                margin-left: 35rem;
            }
            .status-text1{
                font-size: 36rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #444444;
                float: left;
                margin-left: 10rem;
            }
            .imgcon{
                width: 28rem;
                height: 28rem;
                background: #FFFFFF;
                border-radius: 4px;
                float: left;
                margin-left: 10rem;
                position: relative;
                .img{
                    width: 14rem;
                    height: 14rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                }
            }
            .colostrade{
                width: 120rem;
                height: 32rem;
                background: #EEF1F4;
                opacity: 0.76;
                border-radius: 4px;
                float: left;
                margin-top: 7rem;
                margin-left: 9rem;
                line-height: 32rem;
            }
            /*.rightimg{*/
            /*    width: 18rem;*/
            /*    height: 14rem;*/
            /*    float: left;*/
            /*    margin-left: 9rem;*/
            /*    margin-top: 10rem;*/
            /*}*/
        }
        .tiptext{
            padding-top: 14rem;
            clear: left;
            text-align: left;
            margin-left: 35rem;
            .time{
                color: #00B4FC;
                font-size: 22rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
            }
            .texts{
                font-size: 22rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #666666;
                /*margin-left: 10rem;*/
            }
        }
        .line1{
            width: 610rem;
            height: 1rem;
            background: #E4E7ED;
            margin-left: 35rem;
            margin-top: 34rem;
        }
        .paytype{
            width: 610rem;
            height: auto;
            margin-left: 35rem;
            display: flex;
            justify-content: space-between;
            margin-top: 39rem;
            line-height: 34rem;
            .paytext{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
            }
            .paycoin{
                width: 96rem;
                height: auto;
                .payimg{
                    width: 34rem;
                    height: 34rem;
                    float: left;
                }
                .paycointext{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 34rem;
                }
            }
        }
        .paydetails{
            width: 610rem;
            height: auto;
            margin-left: 35rem;
            display: flex;
            justify-content: space-between;
            margin-top: 49rem;
            .details-text{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
            }
            .detailsimg{
                width: 22rem;
                height: 12rem;
                margin-top: 8rem;
            }
        }
        .orderitem{
            width: 610rem;
            height: auto;
            margin-left: 35rem;
            display: flex;
            justify-content: space-between;
            margin-top: 49rem;
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
            }
            .active{
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: #00B4FC;
            }
        }
        .reminds{
            width: 610rem;
            height: 246rem;
            background: #FEF9F4;
            margin-top: 40rem;
            margin-left: 35rem;
            .remind-item1 {
                display: flex;
                justify-content: space-between;
                .dot {
                    width: 10rem;
                    height: 10rem;
                    background: #F3882A;
                    border-radius: 50%;
                    margin-left: 15rem;
                    margin-top: 25rem;
                }

                .remind-text {
                    font-size: 20rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #F3882A;
                    width: 552rem;
                    height: 51rem;
                    text-align: left;
                    margin-right: 22rem;
                    margin-top: 21rem;
                }
            }
            .remind-item2{
                display: flex;
                justify-content: space-between;
                .dot{
                    width: 10rem;
                    height: 10rem;
                    background: #F3882A;
                    border-radius: 50%;
                    margin-left: 15rem;
                    margin-top: 25rem;
                    float: left;
                }
                .remind-text{
                    font-size: 20rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #F3882A;
                    width: 555rem;
                    height: 80rem;
                    text-align: left;
                    margin-right: 22rem;
                    margin-top: 12rem;
                }
            }
            .remind-item3 {
                display: flex;
                justify-content: space-between;

                .dot {
                    width: 10rem;
                    height: 10rem;
                    background: #F3882A;
                    border-radius: 50%;
                    margin-left: 15rem;
                    margin-top: 20rem;
                }

                .remind-text {
                    font-size: 20rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #F3882A;
                    width: 555rem;
                    height: 82rem;
                    text-align: left;
                    margin-right: 22rem;
                    margin-top: 12rem;
                }
            }
        }
        /*.buttons{*/
        /*    margin-top: 40rem;*/
        /*    width: 610rem;*/
        /*    height: 88rem;*/
        /*    display: flex;*/
        /*    justify-content: space-between;*/
        /*    margin-left: 35rem;*/
        /*    .cancle{*/
        /*        width: 220rem;*/
        /*        height: 88rem;*/
        /*        background: #FFFFFF;*/
        /*        border: 1rem solid #D5D8E5;*/
        /*        border-radius: 4rem;*/
        /*        font-size: 32rem;*/
        /*        font-family: Source Han Sans CN;*/
        /*        font-weight: 400;*/
        /*        color: #444444;*/
        /*        line-height: 88rem;*/
        /*    }*/
        /*    .confirm{*/
        /*        width: 370rem;*/
        /*        height: 88rem;*/
        /*        background: #00B9FE;*/
        /*        border-radius: 4rem;*/
        /*        font-size: 32rem;*/
        /*        font-family: Source Han Sans CN;*/
        /*        font-weight: 400;*/
        /*        color: #FFFFFF;*/
        /*        line-height: 88rem;*/
        /*    }*/
        /*}*/
        .connect{
            font-size: 24rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #00B4FC;
            float: right;
            margin-right: 35rem;
            margin-top: 25rem;
        }
    }
}
</style>