<template>
    <div class="asset">
        <PageHeader></PageHeader>
        <div class="assetTop">{{$t('personasset.all')}}</div>
        <div class="total">
            <div class="totalText">
                <div>{{$t('personasset.total')}}</div>
                <!-- <img style="width:34rem;height:23rem" src="../../../static/img/user/eye.png" alt=""> -->
            </div>
            <div class="totalNum">
                <div>1.00000000<span>SLT</span></div>
                <div>≈0.00 ETH</div>
            </div>
            <div class="totalBtn">
                <div>{{$t('personasset.out')}}</div>
                <div>{{$t('personasset.in')}}</div>
            </div>
<!--            <div class="accountText">{{$t('personasset.blance')}}</div>-->
        </div>

        <div class="accountBox">
            <div class="boxTitle">{{$t('personasset.account')}}
                <!-- <img style="width:24rem;height:24rem" src="../../../static/img/user/tipswhite.png" alt=""> -->
                </div>
            <ul class="table">
                <li class="theader">
                    <div><img style="width:38rem;38rem" src="../../../static/img/user/icon1.png" alt=""> SLT</div>
                </li>
                <li class="item">
                    <div>{{$t('personasset.tableHeader')[1]}}</div>
                    <div>{{$t('personasset.tableHeader')[2]}}</div>
                    <div>{{$t('personasset.tableHeader')[5]}}</div>
                </li>
                 <li class="item">
                    <div>22:00  03/06</div>
                    <div>{{$t('personasset.tableHeader')[2]}}</div>
                    <div>0,000.003</div>
                </li>
                 <!-- <li class="item">
                    <div>ETH</div>
                    <div></div>
                    <div>0.03% <span>{{$t('personasset.usermoney')}}</span></div>
                </li> -->
            </ul>
        </div>
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
.asset{
    font-family: Source Han Sans CN;
    text-align: left;
    .assetTop{
        font-size: 30rem;
        font-weight: 400;
        color: #444444;
        padding: 30rem 36rem;
        background: #FFFFFF;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);

    }
    .total{
        padding: 49rem 35rem 35rem 35rem;
        border-bottom: solid 1rem #E4E7ED;
        .totalText{
            display: flex;
            font-size: 30rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            padding-bottom: 39rem;
            img{
                margin-left: 24rem;
            }

        }
        .totalNum{
            div:nth-child(1){
                font-size: 40rem;
                font-family: FZDaHei-B02S;
                font-weight: 400;
                color: #444444;
                span{
                    font-size: 26rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #666666;
                    padding-left: 11rem;
                }
            }
            div:nth-child(2){
                font-size: 20rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #77AFE7;
                padding: 16rem 0rem 35rem 0rem;
            }
        }
        .totalBtn{
            display: flex;
            div{
                width: 200rem;
                height: 88rem;
                border-radius: 4rem;
                text-align: center;
                line-height: 88rem;
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                
            }
            div:nth-child(1){
                background: #00B4FC;
                border: 1rem solid #00B4FC;
                color: #FFFFFF;
            }
            div:nth-child(2){
                background: #FFFFFF;
                border: 2rem solid #E4E7ED;
                margin-left: 15rem;
                color: #444444;
            }
            
        }
        .accountText{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            padding-top: 79rem;
        }
    }

    .accountBox{
        padding: 38rem 35rem;
        .boxTitle{
            font-size: 20rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            display: flex;
            align-items: center;
            img{
                margin-left: 10rem;
            }
        
        }
        .table{
            list-style: none;
            height: 252rem;
            background: #FFFFFF;
            border: 1rem solid #E4E7ED;
            margin-top: 35rem;
            .theader{
                height: 72rem;
                background: #F8FAFC;
                border-bottom: 1rem solid #E4E7ED;
                display: flex;
                align-items: center;
                padding: 0rem 25rem;
                box-sizing: border-box;
                div{
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 10rem;
                    }
                }
            }
            .item{
                display: flex;
                justify-content: space-between;
                font-family: Source Han Sans CN;
                padding: 0rem 27rem;
                div:nth-child(1){
                    width: 38%;
                }
                div:nth-child(2){
                    width: 32%;
                }
                div:nth-child(3){
                    width: 30%;
                    text-align: right;
                }
            }
            .item:nth-child(2){
                padding: 30rem 27rem 0rem 27rem;
                div{
                    font-size: 24rem;
                    font-weight: 400;
                    color: #9AA5B5;
                }
            }
            .item:nth-child(3){
                padding: 23rem 27rem;
                div{
                    // border: solid 1rem red;
                }
            }
            .item:nth-child(4){
                div:nth-child(1){
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #7A96F5;

                }
                div:nth-child(3){
                    span{
                       font-size: 14rem; 
                    }

                }
                div{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                }
            }
        }
    }
    
}
</style>