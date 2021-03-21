<template>
    <div class="tabbar">
        <div class="item">
            <img style="width:40rem;height:40rem" src="../../../static/img/goodsdetails/quality.png" alt="">
            <div>首页</div>
        </div>
        <div class="item">
            <img style="width:40rem;height:40rem" src="../../../static/img/goodsdetails/quality.png" alt="">
            <div>商城</div>
        </div>
        <div class="item">
            <img style="width:40rem;height:40rem" src="../../../static/img/goodsdetails/quality.png" alt="">
            <div>位置模块</div>
        </div>
        <div class="item">
            <img style="width:40rem;height:40rem" src="../../../static/img/goodsdetails/quality.png" alt="">
            <div>OTC</div>
        </div>
        <div class="item">
            <img style="width:40rem;height:40rem" src="../../../static/img/goodsdetails/quality.png" alt="">
            <div class="active">我的</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.tabbar{
    width: 750rem;
    height: 98rem;
    background: #FFFFFF;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 56rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: solid 1rem #F2F3F4;
    .item{
        text-align: center;
        font-size: 22rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #666666;
        img{
            margin-bottom: 13rem;
        }
        .active{
            color: #00B4FC;
        }
    }
}
</style>