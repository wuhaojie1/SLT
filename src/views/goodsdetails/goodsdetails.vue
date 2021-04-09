<template>
    <div id="goodsdetails">
        <themeStickyHeader></themeStickyHeader>
        <div class="goodsmsg">
            <div class="goodsmsg-scoll">
                <el-carousel height="369rem"
                             direction="vertical"
                             :autoplay="true"
                             :loop="true"
                             :interval='2000'
                             indicator-position="none">
                    <el-carousel-item v-for="(item,index) in goodsDetail.info.gallery" :key="index+Math.random()">
                        <h3 class="medium">
                            <img style="height: 369rem;width: 446rem" :src="item" alt="">
                        </h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="goodsmsg-con">
                <div class="goods-name">
<!--                    {{goodsDetail.info.name}}-->
                    <div class="goods-name-text">{{goodsDetail.info.goodsSn}}</div>
                    <img class="love" src="../../static/img/goodsdetails/like.png" alt="">
                </div>
                <div class="goods-charge">￥{{goodsDetail.info.counterPrice}}</div>
                <div class="line"></div>
                <div class="goods-num">{{$t('goodsdetails.goodsId')}} {{goodsDetail.info.goodsSn}}</div>
                <div class="goods-attr">
                    <div class="goods-attr-item1">
                        <div class="goods-attr-img-con">
                            <img class="quality-img" src="../../static/img/goodsdetails/quality.png" alt="">
                        </div>
                        <div class="goods-attr-item1-text">책임</div>
                    </div>
                    <div class="goods-attr-item2">
                        <div class="goods-attr-img-con">
                            <img class="pro-img" src="../../static/img/goodsdetails/pro-envir.png" alt="">
                        </div>
                        <div class="goods-attr-item2-text">환경 보호</div>
                    </div>
                </div>
                <div class="goods-theme">
                    <!-- <div class="goods-color"></div> -->
                    <div class="goods-color-text">color</div>
                </div>
                <!-- <div class="choose-type-con">
                    <div class="choose-type">
                        <div @click="control">
                            <div class="chooseitem">{{sizearr[currentindex]}}</div>
                            <img class="arrow-down" src="../../static/img/goodsdetails/arrow-down.png" alt="">
                        </div>
                        <ul v-if="showitem">
                            <li v-for="(item,index) in goodsDetail.specificationList"
                                :key="index"
                                @click="changesize(index)">{{item.name}}</li>
                        </ul>
                    </div>
                    <div class="look-all-type" @click="control">尺码表</div>
                </div> -->
                <div class="shopcar" @click="ordergoods" >{{$t('goodsdetails.buygoods')}}</div>
                <div class="shopcar" @click="addgoods" >{{$t('goodsdetails.shopcar')}}</div>
                <!-- <div class="question">
                    <div class="online">
                        <img class="online-img" src="../../static/img/goodsdetails/local.png" alt="">
                        <div class="online-text">在线顾问</div>
                    </div>
                    <div class="line"></div>
                    <div class="phone">
                        <img class="phone-img" src="../../static/img/goodsdetails/phone.png" alt="">
                        <div class="online-text">选购咨询 400.8210.582</div>
                    </div>
                </div>
                <div class="share">
                    <div class="share-text">分享:
                        <img class="wechat" src="../../static/img/goodsdetails/wechat.png" alt="">
                        <img class="weibo" src="../../static/img/goodsdetails/weibo.png" alt="">
                    </div>
                </div>
                <div class="goods-detail">
                    <div class="goods-detail-text">产品细节
                        <img class="arr" style="" src="../../static/img/goodsdetails/arrow.png" alt="">
                    </div>
                </div>
                <div class="setaddress">
                    <img class="location" style="width: 9rem;height: 12rem;" src="../../static/img/goodsdetails/local.png" alt="">
                    <div class="setaddress-text">查找有货直营店</div>
                    <div class="free-text">选择标准配送，免运费</div>
                </div> -->
            </div>
        </div>
        <div class="goshopcart" @click="topage('shoppingCart')">
            <img class="img" src="../../static/img/chatorshopcart/shopcart.png" alt="">
        </div>
    </div>
</template>

<script>
    import themeStickyHeader from "../../components/header/themeStickyHeader";
    // import localStorage from "../../static/js/localStorage";
    export default {
        name: "goodsdetails",
        components:{
            themeStickyHeader
        },
        data(){
            return{
                scoolerimgarr:[
                    {
                        img:`${require('../../static/img/goodsdetails/goodsimg.png')}`
                    },
                    {
                        img:`${require('../../static/img/goodsdetails/goodsimg.png')}`
                    },
                    {
                        img:`${require('../../static/img/goodsdetails/goodsimg.png')}`
                    }
                ],
                sizearr:[
                    "请选择合适的尺码","S","M","L","XL","XXL"
                ],
                currentindex:0,
                showitem:false,
                goodsid:'',
                goodsindex:'',
                goodsDetail:{}
            }
        },
        mounted(){
            this.getGoodsDetail();
        },
        beforeMount() {
            // console.log(this.$route.params.item);
            // console.log(this.$route.params.index);
            this.localStorage.set('goodsid', this.$route.params.item.id);
            this.localStorage.set('goodsindex', this.$route.params.index);
            let goodsid = this.localStorage.get("goodsid");
            let goodsindex = this.localStorage.get('goodsindex');
            console.log(this.$route.params.item)
            this.goodsid = goodsid;
            // if()
            this.goodsindex = goodsindex;
            // console.log(this.goodsid);
            // console.log(this.goodsindex)
        },
        show(){
            let goodsid = this.localStorage.get("goodsid");
            let goodsindex = this.localStorage.get('goodsindex');
            console.log(this.$route.params.item)
            this.goodsid = goodsid;
            // if()
            this.goodsindex = goodsindex;
            this.getGoodsDetail();
        },
        methods:{
            control(){
                this.showitem = !this.showitem;
            },
            changesize(index){
                this.currentindex = index;
                this.showitem = !this.showitem;
            },
            topage(name){
                this.$router.push({
                    name:name,
                })
            },
            addgoods(){
                let PostData = this.getPostData();
                this.$confirm(this.$t('goodsdetails.comfirmtext')+'?', this.$t('goodsdetails.notify'), {
                    confirmButtonText: this.$t('goodsdetails.confirm'),
                    cancelButtonText: this.$t('goodsdetails.cancle'),
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: this.$t('goodsdetails.succeed')
                    });
                    // this.topage('shoppingCar')
                    this.axios(
                        {
                            url:'wx/cart/add',
                            method:'post',
                            params:PostData
                        }
                    ).then(res=>{
                        console.log(res);
                        if(res.errno==711){
                            this.$notify({
                                title:'재고 가 부족 하 다'
                            })
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: this.$t('shopcar.cancle')
                    });
                });
            },
            getPostData(){
                let goodsId = this.goodsid;
                // let number = this.goodsmsg.number;
                // let productId = this.goodsindex;
                let PostData = {
                    goodsId:goodsId,
                    number:1,
                    productId:this.goodsindex+1
                }
                return PostData
            },
            ordergoods(){
                let PostData = this.getorderPostData();
                this.axios({
                    url: 'wx/cart/fastadd',
                    method: 'post',
                    params: PostData
                }).then(res => {
                    console.log(res);
                        this.$confirm(this.$t('goodsdetails.confirmbuy')+'?', this.$t('goodsdetails.notify'), {
                            confirmButtonText: this.$t('goodsdetails.confirm'),
                            cancelButtonText: this.$t('goodsdetails.cancle'),
                            type: 'warning'
                        }).then(() => {}).catch(()=>{
                            this.localStorage.set('cartId', res.data);
                            this.buygoods()
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: this.$t('shopcar.cancled')
                            });
                        });
                }).catch(err => {
                    console.log(err);
                })
            },
            getorderPostData(){
                let goodsId = this.goodsid;
                let selectedNum = 1;
                let productId = this.goodsindex+1;
                let PostData={
                    goodsId: goodsId,
                    number: selectedNum,
                    productId: productId
                }
                return PostData;
            },
            buygoods(){
                // console.log('购买')
                let PostData = this.getbuyPostData()
                this.axios({
                    url:'wx/order/submit',
                    method:'post',
                    params:PostData
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            },
            getbuyPostData(){
                let id = this.localStorage.get('adressid')
                let PostData = {
                    cartId:'0',
                    addressId:id,
                    couponId:'-1',
                    message:'xxx',
                    // grouponRulesId:'1',
                    // grouponLinkId:'1'
                }
                return PostData
            },
            getGoodsDetail(){
                this.axios({
                    url:'wx/goods/detail',
                    method:'get',
                    params: {
                        id:this.goodsid
                    }
                }).then((res)=>{
                    console.log(res);
                    if(res.errno == 0){
                        this.goodsDetail = res.data
                    }
                    console.log(this.goodsDetail);
                }).catch((e)=>{
                    console.log(e);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @keyframes showli {

    }
#goodsdetails{
    width: 100%;
    height: calc(100vh - 75rem);
    background-color: #F3F5F7;
    .goshopcart{
        width: 68rem;
        height: 68rem;
        background-color: #00B9FE;
        position: fixed;
        right: 150rem;
        bottom: 220rem;
        border-radius: 50%;
        .img{
            width: 34rem;
            height: 34rem;
            margin-top: 17rem;
        }
    }
    .goodsmsg{
        margin-top: 75rem;
        padding-top: 229rem;
        height: calc(100% - 229rem);
        display: flex;
        justify-content: space-between;
        /*padding-bottom: 40rem;*/
        .goodsmsg-scoll{
            width: 466rem;
            height: auto;
            margin-left: 360rem;
            .el-carousel__item h3 {
                /*color: #475669;*/
                font-size: 14rem;
                opacity: 0.75;
                line-height: 200rem;
                margin: 0;
            }
            .el-carousel__item:nth-child(2n) {
                /*background-color: #99a9bf;*/
            }

            .el-carousel__item:nth-child(2n+1) {
                /*background-color: #d3dce6;*/
            }
        }
        .goodsmsg-con{
            margin-right: 360rem;
            text-align: left;
            height: auto;
            width: 330rem;
            .goods-name{
                font-size: 24rem;
                .goods-name-text{
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    float: left;
                }
                .love{
                    width: 16rem;
                    height: 14rem;
                    float: left;
                    margin-left: 19rem;
                    margin-top: 5rem;
                }
            }
            .goods-charge{
                padding-top: 11rem;
                clear: both;
                font-size: 24rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                padding-bottom: 14rem;
            }
            .line{
                width: 330rem;
                height: 1rem;
                background: #DBDEE4;
                margin-bottom: 14rem;
            }
            .goods-num{
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #7E7E7E;
            }
            .goods-attr{
                margin-top: 20rem;
                height: 75rem;
                width: 100%;
                float: left;
                box-sizing: border-box;
                .goods-attr-item1{
                    height: 75rem;
                    float: left;
                    .goods-attr-img-con{
                        width: 42rem;
                        height: 42rem;
                        border-radius: 42rem;
                        box-shadow: 0rem 0rem 20rem 0px rgba(153, 153, 153, 0.35);
                        background: #FFFFFF;
                        margin-right: 24rem;
                        margin-bottom: 10rem;
                        position: relative;
                        .quality-img{
                            width: 20rem;
                            height: 20rem;
                            position: absolute;
                            top: 11rem;
                            left: 11rem;
                        }
                    }
                    .goods-attr-item1-text{
                        width: 42rem;
                        height: 12rem;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        text-align: center;
                    }
                }
                .goods-attr-item2{
                    height: 75rem;
                    float: left;
                    .goods-attr-img-con{
                        width: 42rem;
                        height: 42rem;
                        border-radius: 42rem;
                        background: #FFFFFF;
                        margin-bottom: 10rem;
                        box-shadow: 0rem 0rem 20rem 0px rgba(153, 153, 153, 0.35);
                        position: relative;
                        .pro-img{
                            width: 15rem;
                            height: 18rem;
                            position: absolute;
                            top: 13rem;
                            left: 14rem;
                        }
                    }
                    .goods-attr-item2-text{
                        width: 42rem;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        text-align: center;
                    }
                }
            }
            .goods-theme{
                width: 330rem;
                height: 42rem;
                background: #F3F5F7;
                border: 1rem solid #DBDEE4;
                float: left;
                margin-top: 21rem;
                .goods-color{
                    width: 40rem;
                    height: 28rem;
                    background: #5E8FA0;
                    float: left;
                    margin-left: 15rem;
                    margin-top: 7rem;
                }
                .goods-color-text{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    float: left;
                    margin-left: 15rem;
                    line-height: 42rem;
                }
            }
            .choose-type-con{
                height: 42rem;
                width: 330rem;
                float: left;
                margin-top: 12rem;
                .choose-type{
                    float: left;
                    margin-right: 27rem;
                    background: #F3F5F7;
                    border: 1px solid #DBDEE4;
                    /*width: 160rem;*/
                    height: 42rem;
                    .chooseitem{
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        line-height: 42rem;
                        float: left;
                        margin-left: 15rem;
                    }
                    .arrow-down{
                        width: 12rem;
                        height: 7rem;
                        float: left;
                        padding-left: 17rem;
                        padding-right: 10rem;
                        margin-top: 17rem;
                    }
                    ul{
                        clear: both;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        li{
                            list-style: none;
                            /*display: none;*/
                            line-height: 42rem;
                            margin-left: 17rem;
                            background-color: #fff;
                            position: relative;
                            z-index:10;
                        }
                        li:hover{
                            background: #5E8FA0;
                        }
                    }
                }
                .look-all-type{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 42rem;
                }
            }
            .shopcar{
                /*clear: both;*/
                float: left;
                margin-top: 21rem;
                width: 330rem;
                height: 42rem;
                background: #082850;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 42rem;
                text-align: center;
            }
            .question{
                width: 100%;
                height: 30rem;
                float: left;
                margin-top: 18rem;
                display: flex;
                justify-content: left;
                border-bottom:1rem #DBDEE4 solid;
                padding-bottom: 12rem;
                .online{
                    .online-text{
                        float: left;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        margin-right: 19rem;
                        line-height: 30rem;
                    }
                    .online-img{
                        float: left;
                        width: 12rem;
                        height: 12rem;
                        margin-top: 8rem;
                        margin-right: 8rem;
                    }
                }
                .line{
                    /*float: left;*/
                    width: 1rem;
                    height: 16rem;
                    background: #DBDEE4;
                    margin-right: 20rem;
                    margin-top: 7rem;
                }
                .phone{
                    .online-text{
                        float: left;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                        line-height: 30rem;
                    }
                    .phone-img{
                        float: left;
                        width: 9rem;
                        height: 12rem;
                        margin-top: 8rem;
                        margin-right: 2rem;
                    }
                }
            }
            .share{
                height: 43rem;
                width: calc(100% - 20rem);
                float: left;
                padding-left: 20rem;
                margin-right: 20rem;
                border-bottom: 1rem #DBDEE4 solid;
                .share-text{
                    line-height: 43rem;
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                }
                .wechat{
                    /*float: left;*/
                    width: 14rem;
                    height: 12rem;
                    margin-right: 20rem;
                    margin-left: 20rem;
                }
                .weibo{
                    /*float: left;*/
                    width: 14rem;
                    height: 12rem;
                }
            }
            .goods-detail{
                height: 43rem;
                width: calc(100% - 20rem);
                float: left;
                padding-left: 20rem;
                border-bottom: 1rem #DBDEE4 solid;
                .goods-detail-text{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 43rem;
                }
                .arr{
                    float: right;
                    margin-right: 40rem;
                    width: 6rem;
                    height: 10rem;
                    margin-top: 18rem;
                }
            }
            .setaddress{
                float: left;
                margin-top: 15rem;
                .location{
                    float: left;
                    margin-left: 20rem;
                    margin-right: 10rem;
                    margin-top: 3rem;
                }
                .setaddress-text{
                    float: left;
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #999999;
                }
                .free-text{
                    float: right;
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #999999;
                }
            }
        }
    }
}
</style>