<template>
    <div class="payment">
        <StickyHeader/>
        <div class="paymentBox">
            <div class="paymentText">
                <img style="width:8rem;height:14rem" src="../../static/img/paymentSuccess/arrowleft.png" alt="">
                <span>{{$t('paymentSuccess.success')}}</span>
            </div>
            <div class="check">
                <div class="checkLeft">
                    <img style="width:47rem;height:39rem;" src="../../static/img/paymentSuccess/check.png" alt="">
                </div>
                <div class="checkRight">
                    <div>{{$t('paymentSuccess.success')}}!</div>
                    <div>{{$t('paymentSuccess.thank')}}</div>
                </div>
            </div>
            <div class="detail">
                <div class="cell"></div>
                
                <div class="card">
                    <div class="liner"></div>
                    <div class="price"><span>¥</span>10.00 ETH</div>
                    <div class="point">
                        <div class="pointLeft">
                            <div></div>
                        </div>
                        <div class="pointRight">
                            <div></div>
                        </div>
                    </div>
                    <ul class="option">
                        <li>
                            <div class="optLeft">{{$t('paymentSuccess.order')}}</div>
                            <div class="optRight">210308165719943 </div>
                        </li>
                        <li>
                            <div class="optLeft">{{$t('paymentSuccess.model')}}</div>
                            <div class="optRight"> <img style="width:18rem;height:18rem" src="../../static/img/paymentSuccess/money.png" alt=""> <span>SLT</span></div>
                        </li>
                        <li>
                            <div class="optLeft">{{$t('paymentSuccess.handfee')}}</div>
                            <div class="optRight">0.00 ETH</div>
                        </li>
                        <li>
                            <div class="optLeft">{{$t('paymentSuccess.unitprice')}}</div>
                            <div class="optRight">326,252.232 ETH </div>
                        </li>
                        <li>
                            <div class="optLeft">{{$t('paymentSuccess.num')}}</div>
                            <div class="optRight">0.000100 SLT</div>
                        </li>
                    </ul>
                    <div class="cell2"></div>
                    <div class="btnBox">
                        <div class="btnLeft">{{$t('paymentSuccess.checkorder')}}</div>
                        <div class="btnRight">{{$t('paymentSuccess.returnHome')}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StickyHeader from '../../components/header/themeStickyHeader.vue';
export default {
    components:{
        StickyHeader
    }
}
</script>

<style lang='less'>
.payment{
    padding-top: 75rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    .paymentBox{
        width: 100%;
        min-height: calc(100vh - 75rem);
        background-image: url('../../static/img/paymentSuccess/bg.png');
        background-repeat: no-repeat;
        background-size: 100%;
        .paymentText{
            width: 1200rem;
            margin: 0 auto;
            text-align: left;
            display: flex;
            align-items: center;
            padding-top: 25rem;
            span{
                padding-left: 10rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;

            }
        }
        .check{
            text-align: center;
            padding-top: 51rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .checkLeft{
                width: 60rem;
                height: 60rem;
                background-color: white;
                border-radius: 30rem;
                text-align: center;
                img{
                    transform: translateY(50%);
                }
            }
            .checkRight{
                text-align: left;
                padding-left: 15rem;
                div:nth-child(1){
                    font-size: 18rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #FFFFFF;

                }
                div:nth-child(2){
                    padding-top: 10rem;
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;

                }
            }
        }
        .detail{
            display: flex;
            // justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-top: 58rem;
            .cell{
                width: 700rem;
                height: 26rem;
                background: #047DD9;
                border-radius: 13rem;

            }
            
            .card{
                margin-top: -12rem;
                width: 660rem;
                height: 562rem;
                background: #FFFFFF;
                box-shadow: 0rem 15rem 35rem 0rem rgba(0, 177, 255, 0.17);
                position: relative;
                
                .liner{
                    width: 660rem;
                    height: 20rem;
                    background: linear-gradient(180deg, #0097FF 0%, rgba(120, 201, 255, 0) 100%);
                    opacity: 0.6;

                }
                .price{
                    font-size: 26rem;
                    font-family: Source Han Sans CN;
                    font-weight: 600;
                    color: #444444;
                    padding-top: 51rem;
                    padding-bottom: 41rem;
                    span{
                        font-size: 12rem;
                    }

                }
                .point{
                    width: 610rem;
                    height: 1rem;
                    background: #E4E7ED;
                    border-radius: 1rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
        
                    .pointLeft{
                        width: 20rem;
                        height: 20rem;
                        margin-left: -25rem;
                        overflow: hidden;
                        transform: translateY(-50%);
                        div{
                            width: 20rem;
                            height: 20rem;
                            background-color: #e5f7ff;
                            border-radius: 10rem;
                            transform: translateX(-50%);
                        }
                    }
                    .pointRight{
                        width: 20rem;
                        height: 20rem;
                        overflow: hidden;
                        transform: translateY(-50%) translateX(130%);
                        div{
                            width: 20rem;
                            height: 20rem;
                            background-color: #e5f7ff;
                            border-radius: 10rem;
                            transform: translateX(50%);
                        }
                    }
                    
                }
                .option{
                    width: 100%;
                    list-style: none;
                    margin: 0;
                    padding-top: 49rem;
                    li{
                        display: flex;
                        justify-content: space-between;
                        padding: 0rem 30rem 31rem 30rem;
                        align-items: center;
                        .optLeft{
                            font-size: 16rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;

                        }
                        .optRight{
                            font-size: 16rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                            display: flex;
                            align-items: center;
                            span{
                                padding-left: 7rem;
                            }

                        }
                    }
                }
                .cell2{
                    width: 610rem;
                    height: 1rem;
                    background: #E4E7ED;
                    border-radius: 1rem;

                    margin: 20rem auto 0 auto;

                }
                .btnBox{
                    display: flex;
                    widows: 100%;
                    justify-content: space-between;
                    padding: 30rem 35rem 0rem 35rem;
                    div{
                        width: 270rem;
                        height: 50rem;
                        border-radius: 4rem;
                        text-align: center;
                        line-height: 50rem;
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;

                    }
                    .btnLeft{
                        height: 48rem;
                        background: #FFFFFF;
                        border: 2rem solid #00B9FE;
                        color: #00B9FE;

                    }
                    .btnRight{
                        background: #00B9FE;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>