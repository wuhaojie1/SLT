<template>
    <div id="personasset">
        <ThemeStickyHeader class="ThemeStickyHeader"></ThemeStickyHeader>
        <div class="center-con">
            <div class="assets">
                <div class="assets-left">
                    <div class="assets-text">{{$t('personasset.all')}}</div>
                    <div class="assets-num">1.000000SLT
                        <text class="assetsmoney">≈ 0.00SLT</text>
                    </div>
<!--                    <div class="assets-log">收益记录</div>-->
                </div>
                <div class="assets-right">
                    <div class="reduce" @click="topage('withdraw')">{{$t('personasset.in')}}</div>
                    <div class="adds" @click="topage('topUp')">{{$t('personasset.out')}}</div>
                </div>
            </div>
            <div class="assets-center-bar">
                <div class="assets-center-content">
                    <div class="dot"></div>
                    <div class="center-text">{{$t('personasset.remind')}}</div>
<!--                    <div class="aim-right">》</div>-->
<!--                    <div class="open">展开</div>-->
                </div>
            </div>
            <div class="trade-log">
                <div class="trade-con-head">
                    <div class="trade-con-head-text">{{$t('personasset.money')}}</div>
                </div>
                <div class="trade-con-two">
                    <div class="trade-con-two-text">
                        {{$t('personasset.accout')}}
                        <!-- <img class="icon-img" src="../../static/img/personasset/icon.png" alt=""> -->
                    </div>
                    <!-- <selectitem :typearr="typearr" class="trade-type"></selectitem> -->
                </div>
                <tradetable :tradelist="tradelist" @toCharge="toCharge" @toReflect="toReflect"></tradetable>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import bottom from "../../components/bottom/bottom";
    import tradetable from "../../components/tradetable/tradetable";
    // import selectitem from "../../components/select-item/selectitem";
    export default {
        name: "personasset",
        components: {ThemeStickyHeader, bottom ,tradetable },
        data() {
            return {
                typearr:[],
                tradelist:[
                    // {
                    //     cointypetext:'SLT',
                    //     num:'10000',
                    //     allmoney:'10000',
                    //     charge:'0.03',
                    //     cointype:'SLT',
                    //     tradetype:'充币',
                    //     expense:'0.03%',
                    //     in:true
                    // },
                    // {
                    //     cointypetext:'ETH',
                    //     num:'10000',
                    //     allmoney:'10000',
                    //     charge:'0.03',
                    //     cointype:'ETH',
                    //     tradetype:'出售',
                    //     expense:'0.03%',
                    //     in:false
                    // },
                    // {
                    //     cointypetext:'SLT',
                    //     num:'10000',
                    //     allmoney:'10000',
                    //     charge:'0.03',
                    //     cointype:'SLT',
                    //     tradetype:'接单',
                    //     expense:'0.03%',
                    //     in:true
                    // }
                ]
            }
        },
        mounted() {
            this.typearr = this.$t('personasset.accoutarr');
            this.getInfo();
        },
        created(){
            this.getInfo();
        },
        methods: {
            topage(name) {
                this.$router.push({
                    name: name
                })
            },
            toCharge(item){
                this.localStorage.set('drawItem',item);
                this.$router.push({
                    name: 'topUp',
                })
            },
            toReflect(item){
                this.localStorage.set('reflectItem',item);
                this.$router.push({
                    name: 'withdraw',
                })
            },
            getInfo(){
                this.axios({
                    url:'user/wallet/payIndex',
                    method: 'get',
                }).then((res)=>{
                   if (res.errorCode === 0){
                       this.tradelist= [];
                       res.results.forEach(element =>{
                           const tradeItem = {
                               cointypetext:element.symbol,
                               num: element.balanceAmount,
                               allmoney: element.drawAmount,
                               useMoney: element.balanceAmount - element.drawAmount,
                               ...element,
                           };
                           this.tradelist.push(tradeItem)
                       })

                   }
                })
            }
        }

    }
</script>

<style scoped lang="less">
    #personasset {
        .center-con {
            width: 100%;
            height: calc(100vh - 75rem - 200rem);
            padding-top: 75rem;
            padding-bottom: 200rem;
            .assets {
                width: 1920rem;
                height: 280rem;
                background: #041037;
                /*position: relative;*/

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

            .assets-center-bar {
                width: 1920rem;
                height: 65rem;
                background: #FFFFFF;
                border-radius: 40rem 40rem 0rem 0rem;
                position: relative;
                top: -40rem;

                .assets-center-content {
                    width: 1200rem;
                    height: 38rem;
                    background: #FEF7E7;
                    border: 1rem solid #FDDEA4;
                    border-radius: 4rem;
                    line-height: 38rem;
                    /*margin: 0 auto;*/
                    position: absolute;
                    top: 25rem;
                    left: 360rem;

                    .dot {
                        width: 14rem;
                        height: 14rem;
                        background: #FAAD15;
                        border-radius: 7rem;
                        float: left;
                        margin-top: 12rem;
                        margin-left: 29rem;
                    }

                    .center-text {
                        width: auto;
                        height: 38rem;
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        float: left;
                        margin-left: 19rem;
                    }

                    .open {
                        width: auto;
                        height: 38rem;
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FAAD15;
                        float: right;
                        margin-right: 5rem;
                    }

                    .aim-right {
                        color: #FAAD15;
                        width: 12rem;
                        height: auto;
                        float: right;
                        margin-right: 21rem;
                    }
                }
            }
            .trade-log{
                width: 1200rem;
                height: 562rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                margin: 0 auto;
                .trade-con-head{
                    width: 1200rem;
                    height: 60rem;
                    background: #FFFFFF;
                    border-bottom: 1px solid #E4E7ED;
                    margin: 0 auto;
                    .trade-con-head-text{
                        font-size: 18rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        line-height: 60rem;
                        margin-left: 25rem;
                        text-align: left;
                    }
                }
                .trade-con-two{
                    /*margin-top: 28rem;*/
                    /*margin-left: 24rem;*/
                    width: 1200rem;
                    height: 60rem;
                    line-height: 60rem;
                    display: flex;
                    justify-content: space-between;
                    .trade-con-two-text{
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        float: left;
                        margin-left: 24rem;
                        margin-right: 7rem;
                        .icon-img{
                            width: 16rem;
                            height: 16rem;
                            /*float: left;*/
                        }
                    }
                    .trade-type{
                        /*float: right;*/
                        margin-right: 25rem;
                    }
                }
            }
        }
    }
</style>
