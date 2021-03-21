<template>
    <div id="confirmorder">
        <div class="content">
            <div class="content-center">
                <div class="text1-con">
                    <div class="text1">{{this.$t('confirmorderpop.confirm')}}</div>
                    <img class="img" src="" alt="">
                </div>
                <div class="text2-con">
                    <div class="text2">{{this.$t('confirmorderpop.charge')}}</div>
                    <div class="charge">326,231,263ETH</div>
                </div>
                <div class="text3-con">
                    <div class="text3">{{this.$t('confirmorderpop.num')}}</div>
                    <div class="num">0.00001SLT</div>
                </div>
                <div class="text4-con">
                    <div class="text4">{{this.$t('confirmorderpop.all')}}</div>
                    <div class="all">10ETH</div>
                </div>
                <div class="text5-con">
                    <div class="text5">{{this.$t('confirmorderpop.intype')}}</div>
                    <div class="in">
<!--                        <img class="img5" src="" alt="">-->
                        <div class="text5-1">ETH</div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="towbutton">
                    <div class="out">{{this.$t('confirmorderpop.out')}}</div>
                    <div class="confirm">{{this.$t('confirmorderpop.gopay')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "confirmorder"
    }
</script>

<style scoped lang="less">
#confirmorder{
    width: 750rem;
    height: calc(100vh);
    position: fixed;
    top: 0;
    left: 0;
    .content{
        width: 750rem;
        height: 100%;
        background:rgba(0, 0, 0, 0.5);
        /*opacity: 0.5;*/
        position: relative;
        .content-center{
            width: 680rem;
            height: 600rem;
            margin-left: 35rem;
            margin-top: 427rem;
            position: absolute;
            background-color: #fff;
            .text1-con{
                width: 100%;
                height: 112rem;
                display: flex;
                justify-content: space-between;
                border-bottom: 1rem solid #F2F3F4;
                .text1 {
                    font-size: 34rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #111111;
                    line-height: 112rem;
                    margin-left: 36rem;
                }
                .img{
                    width: 32rem;
                    height: 32rem;
                    margin-right: 35rem;
                }
            }
            .text2-con{
                width: 100%;
                /*height: 112rem;*/
                display: flex;
                justify-content: space-between;
                margin-top: 42rem;
                .text2{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    margin-left: 36rem;
                }
                .charge{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    margin-right: 38rem;
                }
            }
            .text3-con{
                width: 100%;
                /*height: 112rem;*/
                display: flex;
                justify-content: space-between;
                margin-top: 42rem;
                .text3{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    margin-left: 36rem;
                }
                .num{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    margin-right: 38rem;
                }
            }
            .text4-con{
                width: 100%;
                /*height: 112rem;*/
                display: flex;
                justify-content: space-between;
                margin-top: 42rem;
                .text4{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    margin-left: 36rem;
                }
                .all{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    margin-right: 38rem;
                }
            }
            .text5-con{
                width: 100%;
                /*height: 112rem;*/
                display: flex;
                justify-content: space-between;
                margin-top: 42rem;
                /*height: 34px;*/
                .text5{
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    margin-left: 36rem;
                    line-height: 34rem;
                    /*margin-top: 10rem;*/
                }
                .in{
                    margin-right: 38rem;
                    height: 34rem;
                    .img{
                        width: 34px;
                        height: 34px;
                        /*float: left;*/
                    }
                    .text5-1{
                        font-size: 28rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        /*line-height: 34rem;*/
                    }
                }
            }
            .line{
                width: 680rem;
                height: 1rem;
                background: #F2F3F4;
                margin-top: 32rem;
            }
            .towbutton{
                margin-top: 30rem;
                .out{
                    width: 170rem;
                    height: 88rem;
                    background: #FFFFFF;
                    border: 1rem solid #D5D8E5;
                    border-radius: 4rem;
                    font-size: 32rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 88rem;
                    float: left;
                    margin-left: 195rem;
                }
                .confirm{
                    width: 260rem;
                    height: 88rem;
                    background: #00B9FE;
                    border-radius: 4rem;
                    font-size: 32rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 88rem;
                    margin-left: 385rem;
                }
            }
        }
    }
}
</style>