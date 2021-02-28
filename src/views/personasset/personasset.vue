<template>
    <div id="personasset">
        <ThemeStickyHeader class="ThemeStickyHeader"></ThemeStickyHeader>
        <div class="center-con">
        <div class="assets">
            <div class="assets-left">
                <div class="assets-text">总资产</div>
                <div class="assets-num">1.000000BLT <text class="assetsmoney">≈ 0.00BLT</text></div>
                <div class="assets-log">收益记录</div>
            </div>
            <div class="assets-right">
                <div class="reduce" @click="topage('topUp')">提币</div>
                <div class="adds" @click="topage('withdraw')">充币</div>
            </div>
        </div>
        <div class="assets-center-bar">
            <div class="assets-center-content">
                <div class="dot"></div>
                <div class="center-text">检查访问网址、开后二次验证、不要给声称是SLT的工作人员转账或透露密码等信息。</div>
                <div class="aim-right">》</div>
                <div class="open">展开</div>
            </div>
        </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import bottom from "../../components/bottom/bottom";
    export default {
        name: "personasset",
        components:{ThemeStickyHeader,bottom},
        data() {
            return {

            }
        },
        methods: {
            topage(name){
                this.$router.push({
                    name: name
                })
            }
        }

    }
</script>

<style scoped lang="less">
    #personasset {
        .center-con{
            width: 100%;
            height: calc(100vh - 75rem - 200rem);
            padding-top: 75rem;
            .assets {
                width: 1920rem;
                height: 280rem;
                background: #041037;
                position: relative;
                .assets-left {
                    float: left;
                    margin-left: 360rem;
                    margin-top: 89rem;
                    width: 500rem;
                    height: 100rem;
                    text-align: left;

                    .assets-text {
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #77AFE7;
                        padding-bottom: 15rem;
                    }

                    .assets-num {
                        font-size: 40rem;
                        font-family: FZDaHei-B02S;
                        font-weight: 400;
                        color: #FFFFFF;
                        padding-bottom: 14rem;

                        .assetsmoney {
                            font-size: 26rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #77AFE7;
                        }
                    }

                    .assets-log {
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                    }
                }

                .assets-right {
                    float: right;
                    margin-right: 360rem;
                    margin-top: 110rem;
                    width: 160rem;
                    height: 50rem;
                    display: flex;
                    justify-content: space-between;

                    .reduce {
                        width: 66rem;
                        height: 46rem;
                        color: #fff;
                        background: #041037;
                        border: 1rem solid #00B4FC;
                        border-radius: 4rem;
                        line-height: 46rem;
                        cursor: pointer;
                    }

                    .adds {
                        width: 66rem;
                        height: 46rem;
                        background: #FFFFFF;
                        border-radius: 4rem;
                        line-height: 46rem;
                        border: 1rem solid #FFFFFF;
                        cursor: pointer;
                    }
                }
            }
            .assets-center-bar{
                width: 1920rem;
                height: 150rem;
                background: #FFFFFF;
                border-radius: 40rem 40rem 0rem 0rem;
                position: relative;
                top:-40rem;
                .assets-center-content{
                    width: 1200rem;
                    height: 38rem;
                    background: #FEF7E7;
                    border: 1rem solid #FDDEA4;
                    border-radius: 4rem;
                    line-height: 38rem;
                    /*margin: 0 auto;*/
                    position: absolute;
                    top: 40rem;
                    left: 360rem;
                    .dot{
                        width: 14rem;
                        height: 14rem;
                        background: #FAAD15;
                        border-radius: 7rem;
                        float: left;
                        margin-top: 12rem;
                        margin-left: 29rem;
                    }
                    .center-text{
                        width: auto;
                        height: 38rem;
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        float: left;
                        margin-left: 19rem;
                    }
                    .open{
                        width: auto;
                        height: 38rem;
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FAAD15;
                        float: right;
                        margin-right: 5rem;
                    }
                    .aim-right{
                        color: #FAAD15;
                        width: 12rem;
                        height: auto;
                        float: right;
                        margin-right: 21rem;
                    }
                }
            }
        }
    }
</style>