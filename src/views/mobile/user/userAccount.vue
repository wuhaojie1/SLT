<template>
    <div class="asset">
        <PageHeader></PageHeader>
        <div class="assetTop">总资产</div>
        <div class="assetCenter">
            <div class="top">
                <div class="left">
                    <div>SLT账户</div>
                    <div>总资产折合(ETH)</div>
                </div>
                <img style="width:38rem;height28rem" src="../../../static/img/user/eyes.png" alt="">
            </div>
            <div class="bottom">
                <div>1.00000000</div>
                <div>≈0.00ETH</div>
            </div>
        </div>
        <ul class="assetBottom">
            <li class="item">
                <div class="itemLeft">充币</div>
                <img style="width:12rem;height:20rem" src="../../../static/img/user/arrowdart.png" alt="">
            </li>
            <li class="item">
                <div class="itemLeft">提币</div>
                <img style="width:12rem;height:20rem" src="../../../static/img/user/arrowdart.png" alt="">
            </li>
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
    .assetCenter{
        width: 680rem;
        height: 247rem;
        background: #041037;
        border-radius: 20rem 20rem 0rem 0rem;
        margin: 35rem auto 0 auto;
        padding: 35rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                div:nth-child(1){
                    font-size: 30rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #FFFFFF;

                }
                div:nth-child(2){
                    font-size: 20rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #77AFE7;
                    margin-top: 15rem;

                }
            }
        }
        .bottom{
            div:nth-child(1){
                font-size: 40rem;
                font-family: FZDaHei-B02S;
                font-weight: 400;
                color: #FFFFFF;

            }
            div:nth-child(2){
                font-size: 20rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #77AFE7;
                margin-top: 14rem;

            }
        }

    }
    .assetBottom{
        list-style: none;
        margin: 0;
        padding: 5rem 36rem;
        li{
            display: flex;
            justify-content: space-between;
            padding: 34rem 0;
            border-bottom: solid 1rem #e4e7ed;
        }
        li:last-child{
            border: none;
        }
    }
}
</style>