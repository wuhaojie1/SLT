<template>
    <div id="localdetails">
        <themeStickyHeader></themeStickyHeader>
        <div class="bar">
            <img class="backbtn" src="" alt="">
            <div class="bartext">{{curPostType.categoryName}}{{$t('positionDetail.detail')}}</div>
        </div>
        <div class="con">
            <div class="in-con">
                <div class="con-left">
                    <!-- <div class="img-con">
                        <img class="img" src="../../static/img/localdetails/goodsimg.png" alt="">
                    </div> -->
                    <PositionBlock :blockItem="curPostType" class="positionBlock"></PositionBlock>
                    <div class="goods_name">{{curPostType.categoryName}}</div>
                </div>
                <div class="con-right">
                    <div class="local-name">{{curPostType.categoryName}}类{{$t('positionDetail.position')}}</div>
                    <div class="charge-con">
                        <div class="charge-text">{{$t('positionDetail.price')}}</div>
                        <div class="charge-num">￥{{curPostType.price}}</div>
                    </div>
                    <div class="income-con">
                        <div class="income-text1">{{$t('positionDetail.get')}}</div>
                        <div class="income-text2">{{curPostType.text}}</div>
                    </div>
                    <div class="seal-local">
                        <div class="seal-local-text">{{$t('positionDetail.sell')}}</div>
                        <div class="seal-num">
                            <div class="seal-num-text">{{$t('positionDetail.num')}}: {{curPostType.costCount}}</div>
                        </div>
                    </div>
                    <div class="residue-local">
                        <div class="residue-local-text">{{$t('positionDetail.remain')}}</div>
                        <div class="residue-num">
                            <div class="residue-num-text">{{$t('positionDetail.num')}}: {{curPostType.lastCount}}</div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="buy-con">
                        <input class="buy-num" type="text" onautocomplete="true" v-model="count"/>
                        <div class="buy-btn" @click="handleBuyPosition" v-loading="buyLoading">{{$t('positionDetail.buy')}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import themeStickyHeader from "../../components/header/themeStickyHeader";
    import PositionBlock from "@/components/position/positionBlock";
    export default {
        name: "localdetails",
        components:{themeStickyHeader,PositionBlock},
        data(){
            return{
                curPostType:'',
                count:null,
                buyLoading: false,
            }
        },
        mounted(){
            if(this.localStorage.get('curPostType')){
                this.curPostType = JSON.parse(this.localStorage.get('curPostType'))
                console.log( this.curPostType.costCount)
            }
        },
        methods:{
            handleBuyPosition(){
                this.buyLoading = true;
                const param = {
                    count:this.count,
                    positionId: this.curPostType.id,
                };

                this.axios({
                    url:'wx/position/buy',
                    method:'post',
                    params:param
                }).then((res)=>{
                    if (res.errno===0){
                        this.updateLocal();
                        this.$notify({
                            title: '成功',
                            message: '购买位置成功',
                            type: 'success'
                        });
                    }else {
                        this.$notify({
                            title: '失败',
                            message: '购买位置失败',
                            type: 'error'
                        });
                    }
                    this.buyLoading = false;
                }).catch(()=>{
                    this.buyLoading = false;
                })
            },

            updateLocal(){
                this.curPostType.costCount=this.curPostType.costCount + (this.count - 0);
                this.curPostType.lastCount-=this.count;
                this.localStorage.set('curPostType',JSON.stringify(this.curPostType))
            }
        }
    }
</script>

<style scoped lang="less">
#localdetails{
    width: 1920rem;
    height: 100%;
    .bar{
        margin-top: 75rem;
        height: 90rem;
        width: 100%;
        background-color: #041037;
        position: relative;
        .backbtn{
            position: absolute;
            width: 16rem;
            height: 9rem;
        }
        .bartext{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            position: absolute;
            left: 380rem;
            top: 60rem;
        }
    }
    .con{
        width: 100%;
        height: 400rem;
        margin-top: 100rem;
        .in-con{
            width: 1000rem;
            height: 400rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .con-left{
                width: 300rem;
                /*margin-right: 50rem;*/
                .img-con{
                    width: 300rem;
                    height: 300rem;
                    background-color: #E4E7ED;
                    .img{
                        width: 160rem;
                        height: 237rem;
                        margin-top: 32rem;
                        /*margin-left: 70rem;*/
                    }
                }
                .goods_name{
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    text-align: left;
                    margin-top: 14rem;
                }
            }
            .con-right{
                width: 650rem;
                .local-name{
                    font-size: 22rem;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #444444;
                    margin-top: 10rem;
                    text-align: left;
                }
                .charge-con{
                    width: 650rem;
                    height: 50rem;
                    background: #F8FAFC;
                    margin-top: 20rem;
                    .charge-text{
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                        line-height: 50rem;
                        float: left;
                        margin-left: 16rem;
                        margin-right: 17rem;
                    }
                    .charge-num{
                        font-size: 18rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #00B4FC;
                        line-height: 50rem;
                        text-align: left;
                    }
                }
                .income-con{
                    margin-top: 25rem;
                    height: 16rem;
                    .income-text1{
                        width: 63rem;
                        height: 16rem;
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #9AA5B5;
                        float: left;
                        letter-spacing: 13rem;
                        margin-left: 16rem;
                    }
                    .income-text2{
                        /*width: 234rem;*/
                        height: 16rem;
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        float: left;
                    }
                }
                .seal-local{
                    clear: left;
                    padding-top: 25rem;
                    height: 38rem;
                    .seal-local-text{
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-left: 16rem;
                        float: left;
                        line-height: 38rem;
                        margin-right: 28rem;
                    }
                    .seal-num{
                        width: 160rem;
                        height: 38rem;
                        background: #F8FAFC;
                        border-radius: 2rem;
                        float: left;
                        .seal-num-text{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #8993A0;
                            text-align: left;
                            line-height: 38rem;
                            margin-left: 16rem;
                        }
                    }
                }
                .residue-local{
                    clear: left;
                    padding-top: 25rem;
                    height: 38rem;
                    .residue-local-text{
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-left: 16rem;
                        float: left;
                        line-height: 38rem;
                        margin-right: 28rem;
                    }
                    .residue-num{
                        width: 160rem;
                        height: 38rem;
                        border: 1rem solid #DBDEE4;
                        border-radius: 2rem;
                        float: left;
                        .residue-num-text{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #8993A0;
                            text-align: left;
                            line-height: 38rem;
                            margin-left: 16rem;
                        }
                    }
                }
                .line{
                    width: 650rem;
                    height: 1rem;
                    background: #DBDEE4;
                    margin-top: 30rem;
                }
                .buy-con{
                    height: 46rem;
                    width: 100%;
                    margin-top: 30rem;
                    display: flex;
                    justify-content: space-between;
                    .buy-num{
                        width: 120rem;
                        height: 46rem;
                        background: #FFFFFF;
                        border: 1rem solid #DBDEE4;
                        border-radius: 2rem;
                        text-align: center;
                    }
                    .buy-btn{
                        width: 515rem;
                        height: 46rem;
                        background: #00B4FC;
                        border-radius: 2rem;
                        font-size: 16rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 46rem;
                    }
                }
            }
        }
    }
}
</style>
