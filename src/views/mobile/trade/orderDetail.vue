<template>
    <div id="payorder">
        <div class="content">
            <div class="goback">
                <img class="backimg" src="../../../static/img/buy/up.png" alt="">
                <div class="backtext">返回</div>
            </div>
            <div class="status">
                <div class="status-text1">订单详情</div>
                <div class="open">待接单</div>
            </div>
            <div class="tiptext">
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
            <div class="connect">联系在线客服</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "payorder",
        data() {
            return {
                dialogVisible: true,
                title: this.$t('orderdetails.title'),
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
#payorder{
    height: calc(100vh - 274rem);
    width: 100vw;
    background-color:#F5F6FA;
    position: relative;
    margin-top: 5rem;
    .content{
        width: 680rem;
        height: 900rem;
        background-color: #fff;
        position: absolute;
        top: 50rem;
        left: 35rem;
        background: #FFFFFF;
        box-shadow: 0rem 0rem 20rem 0rem rgba(221, 221, 221, 0.37);
        border-radius: 10rem;
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
            .status-text1{
                font-size: 36rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #444444;
                float: left;
                margin-left: 35rem;
            }
            .open{
                width: 76rem;
                height: 32rem;
                background: #E4F7FE;
                opacity: 0.76;
                border-radius: 4rem;
                float: left;
                margin-top: 7rem;
                margin-left: 9rem;
                line-height: 32rem;

                
                font-size: 20rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #00B4FC;
            }
            .rightimg{
                width: 18rem;
                height: 14rem;
                float: left;
                margin-left: 9rem;
                margin-top: 10rem;
            }
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
                margin-left: 10rem;
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
                    padding-left: 14rem;
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