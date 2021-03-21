<template>
    <div id="remindauth">
        <div class="content">
            <div class="center-con">
                <div class="text1">{{this.$t('remindauth.goauth')}}</div>
<!--                <img src="" alt="">-->
                <div class="text2">{{this.$t('remindauth.remindtext1')}}</div>
                <div class="line1"></div>
                <div class="text3">{{this.$t('remindauth.personauth')}}</div>
                <div class="line2"></div>
                <div class="button">{{this.$t('remindauth.auth')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "remindauth"
    }
</script>

<style scoped lang="less">
#remindauth{
    position: fixed;
    top: 0;
    left: 0;
    width: 750rem;
    height: calc(100vh);
    .content{
        width: 750rem;
        height: 100%;
        background:rgba(0, 0, 0, 0.5);
        /*opacity: 0.5;*/
        position: relative;
        /*z-index: 10;*/
        .center-con{
            width: 680rem;
            height: 510rem;
            margin-left: 35rem;
            margin-top: 445rem;
            position: absolute;
            /*z-index: 20;*/
            background-color: #fff;
            .text1{
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #111111;
                margin-top: 41rem;
                text-align: center;
            }
            .text2{
                font-size: 26rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #111111;
                margin-top: 19rem;
                text-align: center;
            }
            .line1{
                width: 678rem;
                height: 1rem;
                background: #F8FAFC;
                border: 1rem solid #E4E7ED;
                margin-top: 45rem;
            }
            .text3{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #111111;
                margin-top: 85rem;
            }
            .line2{
                width: 678rem;
                height: 1rem;
                background: #F8FAFC;
                border: 1rem solid #E4E7ED;
                margin-top: 88rem;
            }
            .button{
                width: 600rem;
                height: 88rem;
                background: #00B9FE;
                border-radius: 4rem;
                margin-left: 40rem;
                margin-top: 30rem;
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 88rem;
            }
        }
    }
}
</style>