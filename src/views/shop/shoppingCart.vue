<template>
    <div class="shoppingCart">
        <!-- <TopBar></TopBar> -->
        <!-- <transition name="slide-fade-Y"> -->
            <ThemeStickyHeader class="ThemeStickyHeader"></ThemeStickyHeader>
        <!-- </transition> -->
        <div class="shoppingCart-content">
            <div class="banner">
                <img class="shoppingCartBanner" :src="shoppingCartBanner"/>
                <div class="banner_title text">{{$t('shopcar.shopcar')}}</div>
                <div class="banner_tip text">{{$t('shopcar.gofill')}}</div>
                <img class="bannerBottom" :src="bannerBottom"/>
                
            </div>
            <div class="listBox">
                <div class="leftBox">
                    <div class="listHeader" @click="allcheck">
                        <checkBoxCustom :isSlect="allchecked"/>
                        <div class="text">{{$t('shopcar.all')}}</div>
                    </div>
                    <div class="line" v-if="goodsList.length===0"></div>
                    <shoppingCartItem @deletegoods="deletegoods(index)" @choose="choose(index)" v-for="(item,index) in goodsList" :goodsitem="item" :key="index"></shoppingCartItem>
                </div>
                <div class="rightBox">
                    <div class="item item1">
                        <div class="item_left">{{$t('shopcar.ordermoney')}}</div>
                        <div class="item_right">{{$t('shopcar.have')}}{{allgoodsnum}}{{$t('shopcar.goodsnum')}}</div>
                    </div>
                    <div class="line"></div>
                    <div class="item item2">
                        <div class="item_left">{{$t('shopcar.goodsall')}}</div>
                        <div class="item_right">￥{{allcart.checkedGoodsAmount}}</div>
                    </div>
                    <div class="item item3">
                        <div class="item_left">{{$t('shopcar.usemoney')}}</div>
                        <div class="item_right">{{$t('shopcar.free')}}</div>
                    </div>
                    <div class="item item4">
                        <div class="item_left">{{$t('shopcar.allmoney')}}</div>
                        <div class="item_right">￥{{allcart.goodsAmount}}</div>
                    </div>
                    <div class="line"></div>
                    <div class="p p1">{{$t('shopcar.text')}}</div>
                    <div class="p p2">{{$t('shopcar.text1')}}</div>
                    <div class="line"></div>
                    <div class="btn btn1" @click="buygoods">{{$t('shopcar.gopay')}}</div>
                    <router-link to="shoppingMall">
                        <div class="btn btn2">{{$t('shopcar.goon')}}</div>
                    </router-link>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
    // import TopBar from "../../components/header/topBar";
    // import TimeCard from "../../components/index/timeCard";
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import bottom from "../../components/bottom/bottom";
    import checkBoxCustom from "../../components/checkBoxCustom/index";
    import shoppingCartItem from "../../components/shop/shoppingCartItem";
    // import MemberCard from "../../components/index/memberCard";

    export default {
        name: "shoppingCart",
        components: { ThemeStickyHeader,bottom,checkBoxCustom,shoppingCartItem},
        data() {
            return {
                shoppingCartBanner: `${require('../../static/img/shop/shoppingCartBanner.png')}`,
                goodsList:[

                ],
                bannerBottom :`${require('../../static/img/shop/bannerBottom.png')}`,
                SLT_white: `${require('../../static/img/index/SLT_white.png')}`,
                urlIcon: `${require('../../static/img/index/ico-landing1-banner_02.jpg')}`,
                section3Bg: `${require('../../static/img/index/ico_bg_dark_03.png')}`,
                connected: `${require('../../static/img/index/bg_connected.png')}`,
                visa: `${require('../../static/img/index/logo-visa.png')}`,
                bit: `${require('../../static/img/index/logo-bitcoin.png')}`,
                master: `${require('../../static/img/index/logo-mastercard.png')}`,
                section3ItemImg: `${require('../../static/img/index/middle-1.png')}`,
                booktree: `${require('../../static/img/index/booktree-1.png')}`,
                ALPNG: `${require('../../static/img/index/AI.png')}`,
                life: `${require('../../static/img/index/life.png')}`,
                logoIcon: `${require('../../static/img/index/sltlogo_60x120_white.png')}`,
                sectionImgs: [
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                ],
                allchecked:false,
                usermsg:{},
                // allmoney:0
                allgoodsnum:0,
                allcart:{}
            }
        },
        watch: {
            // scrollTop(v) {
            //     if (v > 240) {
            //         this.showSticky = true;
            //     } else {
            //         this.showSticky = false;
            //     }
            // }
        },
        // computed:{
        //     allmoney:function () {
        //         let productIds = this.goodsList.filter(function(element) {
        //             if (element.checked == true) {
        //                 return true;
        //             } else {
        //                 return false;
        //             }
        //         });
        //         let  allmoney = 0;
        //         if (productIds.length <= 0) {
        //             return allmoney;
        //         }
        //         productIds = productIds.map(function(element) {
        //             if (element.checked == true) {
        //                 return element.price*element.number;
        //             }
        //         });
        //         allmoney = productIds.reduce((prey,cur)=>{
        //             return prey + cur
        //         })
        //         return allmoney;
        //     },
        // },
        mounted() {
            // window.addEventListener('scroll', this.handleScroll, true);
            // this.myEcharts();
            this.getcarlist();
            // this.updategoods();
            let usermsg = this.localStorage.get('usermsg')
            this.usermsg = usermsg;
            console.log(this.usermsg);
            this.allcheck();
        },
        methods: {
            //监听滚动条事件
            // handleScroll() {
            //     //获取设备高度
            //     // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //     //滚动的高度
            //     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //     this.scrollTop = scrollTop;
            //     // console.log(scrollTop)
            // },

            //获取数量
            getmomunt(){
              this.axios({
                  url:'wx/cart/goodscount',
                  method:'get',
                  params:{userId:this.usermsg.userId}
              }).then(res=>{
                  console.log(res);
                  this.allgoodsnum = res.data;
              }).catch(err=>{
                  console.log(err);
              })
            },

            //取消或者选中
            choose(index){
                this.goodsList[index].checked = !this.goodsList[index].checked;
                // if(this.goodsList[index].checked){
                //     this.axios({
                //         url:'wx/cart/checked',
                //         method:'post',
                //         params: {userId:this.usermsg.userId}
                //     }).then(res=>{
                //         console.log(res);
                //     }).catch(err=>{
                //         console.log(err);
                //     })
                // }else{
                //     let PostData =this.checkoutPostData()
                //     this.axios({
                //         url:'wx/cart/checkout',
                //         method:'get',
                //         params: PostData
                //     }).then(res=>{
                //         console.log(res);
                //     }).catch(err=>{
                //         console.log(err);
                //     })
                // }

                let temarr = this.goodsList.filter(item=>item.checked)
                if(temarr.length==this.goodsList.length){
                    this.allchecked = true
                }else{
                    this.allchecked = false
                }
                console.log(this.allchecked);
            },
            // checkoutPostData(){
            //     let addressId = 1;
            //     let cartId = 1;
            //     let couponId = 1;
            //     let grouponRulesId = 1;
            //     let userCouponId = 1;
            //     let userId = this.usermsg.userId;
            //     let PostData ={
            //         addressId:addressId,
            //         cartId:cartId,
            //         couponId:couponId,
            //         grouponRulesId:grouponRulesId,
            //         userCouponId:userCouponId,
            //         userId:userId,
            //     };
            //     return PostData
            // },
            allcheck(){
                // console.log('666');
                this.allchecked = !this.allchecked;
                console.log(this.allchecked);
                for (let i = 0 ; i<this.goodsList.length; i++){
                    this.goodsList[i].checked = this.allchecked
                }
            },
            //获取购物车列表数据
           getcarlist(){
               // let PostData = this.PostData
               this.axios({
                   url:'wx/cart/index',
                   method:'get'
               }).then((res)=>{
                   this.getmomunt();
                   console.log(res);
                   this.goodsList = res.data.cartList;
                   console.log(this.goodsList)
                   this.allcart = res.data.cartTotal;
               }).catch(err=>{
                   console.log(err);
               })
           },
            //删除购物车某个商品
           deletegoods(index){
               console.log(index)
               let PostData = this.getdelPostData(index);
               console.log(PostData);
               this.$confirm(this.$t('shopcar.confirmtext')+'?', this.$t('shopcar.notify'), {
                   confirmButtonText: this.$t('shopcar.confirm'),
                   cancelButtonText: this.$t('shopcar.cancle'),
                   type: 'warning'
               }).then(() => {
                   this.$message({
                       type: 'success',
                       message: this.$t('shopcar.succeed')
                   });
                   this.axios({
                       url:'wx/cart/delete',
                       method:'POST',
                       params:PostData
                   }).then(res=>{
                       console.log(res);
                       this.getmomunt();
                       this.getcarlist();
                   }).catch(err=>{
                       console.log(err);
                   })
               }).catch(() => {
                   this.$message({
                       type: 'info',
                       message: this.$t('shopcar.fail')
                   });
               });
           },
            getdelPostData(index){
               let temarr = [];
               temarr[0] = this.goodsList[index].productId;
               // let productIds = this.goodsList[index].productId;
               let productIds = temarr;
                // let productIds = this.goodsList.filter(function(element) {
                //     if (element.checked == true) {
                //         return true;
                //     } else {
                //         return false;
                //     }
                // });
                //
                // if (productIds.length <= 0) {
                //     return false;
                // }
                //
                // productIds = productIds.map(function(element) {
                //     if (element.checked == true) {
                //         return element.productId.toString();
                //     }
                // });
               let PostData={
                   productIds:productIds,
                   // userId:this.usermsg.userId
               }
               return PostData
            },
            //更新数据
            // updategoods(index){
            //    let PostData = this.getupdatePostData(index);
            //    this.axios({
            //        url:'wx/cart/update',
            //        method:'post',
            //        params:PostData
            //    }).then(res=>{
            //        console.log(res);
            //    }).catch(err=>{
            //        console.log(err);
            //    })
            // },
            // getupdatePostData(index){
            //    let number= this.goodsList[index].number;
            //    let goodsId = this.goodsList[index].goodsId;
            //    let id = this.goodsList[index].id;
            //    let productId = this.goodsList[index].productId;
            //    let PostData={
            //         number:number,
            //         goodsId:goodsId,
            //         id:id,
            //         productId:productId
            //     }
            //     return PostData;
            // },
            //购买选中的商品
            // buygoods(){
            //     let PostData = this.getbuyPostData();
            //     this.axios({
            //         url: 'wx/cart/fastadd',
            //         method: 'post',
            //         params: PostData
            //     }).then(res => {
            //         console.log(res);
            //     }).catch(err => {
            //         console.log(err);
            //     })
            // },
            // getbuyPostData(){
            //     let productmsg = this.goodsList.filter(function(element) {
            //         if (element.checked == true) {
            //             return true;
            //         } else {
            //             return false;
            //         }
            //     });
            //     if (productmsg.length <= 0) {
            //         return false;
            //     }
            //     productmsg = productmsg.map(function(element) {
            //         if (element.checked == true) {
            //             return {
            //                 id:element.productId,
            //                 num:element.number,
            //                 goodsId:element.goodsList
            //             };
            //         }
            //     });
            //     let goodsId = productmsg[0].goodsId;
            //     let selectedNum = productmsg[0].num;
            //     let productId = productmsg[0].id;
            //     let PostData={
            //         goodsId: goodsId,
            //         number: selectedNum,
            //         productId: productId
            //     }
            //     return PostData;
            // },
            //购买选中的商品
            // ordergoods(){
            //     let PostData = this.getorderPostData();
            //     this.axios({
            //         url: 'wx/cart/fastadd',
            //         method: 'post',
            //         params: PostData
            //     }).then(res => {
            //         console.log(res);
            //         this.buygoods()
            //     }).catch(err => {
            //         console.log(err);
            //     })
            // },
            // getorderPostData(){
            //     let goodsId = this.goodsid;
            //     let selectedNum = 1;
            //     let productId = this.goodsindex+1;
            //     let PostData={
            //         goodsId: goodsId,
            //         number: selectedNum,
            //         productId: productId
            //     }
            //     return PostData;
            // },
            buygoods(){
                // console.log('购买')
                let PostData = this.getbuyPostData()
                this.$confirm(this.$t('shopcar.confirmbuy')+'?', this.$t('shopcar.notify'), {
                    confirmButtonText: this.$t('shopcar.confirm'),
                    cancelButtonText: this.$t('shopcar.cancle'),
                    type: 'warning'
                }).then(() => {
                    this.axios({
                        url:'wx/order/submit',
                        method:'post',
                        params:PostData
                    }).then(res=>{
                        console.log(res)
                        if(res.errno==0){
                            this.$notify({
                                title:'구 매 성공'
                            })
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: this.$t('shopcar.cancled')
                    });
                });
            },
            getbuyPostData(){
                let id = this.localStorage.get('adressid')
                let cartId = this.localStorage.get('cartId');
                let PostData = {
                    cartId:cartId,
                    addressId:id,
                    couponId:'-1',
                    message:'xxx',
                    // grouponRulesId:'1',
                    // grouponLinkId:'1'
                }
                return PostData
            },
        }
    }
</script>

<style scoped lang="less">
    // @keyframes ThemeStickyHeadertranslateYin {
    //     0% {
    //         transform: translateY(-100%);
    //     }
    //     50% {
    //         transform: translateY(-100%);
    //     }
    //     100% {
    //         transform: translateY(0);
    //     }
    // }

    // .slide-fade-Y-enter-active {
    //     animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s;
    // }

    // .slide-fade-Y-leave-active {
    //     animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s reverse;
    // }

    // @keyframes fold {
    //     0% {
    //         height: 0;
    //     }
    //     100% {
    //         height: 40rem;
    //     }
    // }

    // .hidden-box1-enter-active {

    //     animation: fold 1s ease-in-out 0s;
    // }

    // .hidden-box1-leave-active {
    //     animation: fold 1s ease-in-out 0s reverse;
    // }
    .shoppingCart{
        width: 100%;
        height: auto;
        height: 100%;
        overflow-y: auto;
        
        background: #F3F5F7;
        // background: darkblue;
        .shoppingCart-content{
            width: 100%;
            height: auto;
            min-height: calc(100% - 200rem);
            .banner{
                position: relative;
                // background: darkblue;
                // .banner{  
                    width: 100%;              
                    height: auto;
                // }
                .shoppingCartBanner{
                    width: 100%;
                    height: auto;
                }
                .text{
                    position: absolute;
                    width: 100%;
                    height: 38rem;
                    font-size: 38rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 38rem;
                    text-align: center;
                    bottom: 160rem;
                }
                .banner_tip{   
                    position: absolute;                 
                    height: 20rem;
                    font-size: 20rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 80rem;
                    width: 268rem;
                    height: 45rem;
                    border: 1rem solid #F3F5F7;
                    border-radius: 23rem;
                    line-height: 45rem;                   
                }
                .bannerBottom{
                    width: 50rem;
                    height: auto;
                    position: absolute;
                    left: 50%;
                    bottom: -22rem;
                    transform: translateX(-50%);
                }
            }
            .listBox{
                height: auto;
                // height: 100rem;
                // background: darkcyan;
                width: 1170rem;
                margin: 0 auto ;
                padding-top: 50rem;
                overflow: hidden;
                .leftBox{
                    width: 790rem;
                    // background: darkcyan;
                    // height: 40rem;
                    float: left;
                    .line{
                        height: 2rem;
                        width: 100%;
                        
                        background: #DBDEE4;
                    }
                    .listHeader{
                        height: 16rem;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-bottom: 10rem;
                        .text{
                            height: 16rem;
                            display: inline-block;
                            line-height: 16rem;
                            margin-left: 15rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                        }
                    }
                }
                .rightBox{
                    width: 360rem;
                    // height: 500rem;
                    float: right;
                    background: #FFFFFF;
                    margin-bottom: 20rem;
                    padding:25rem;
                    box-sizing: border-box;
                    .item{
                        overflow: hidden;
                        clear: both;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        height: 22rem;
                        line-height: 22rem;
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #000000;
                        margin-bottom: 15rem;
                        // .item_left{
                        //     font-size: 14rem;
                        //     font-family: Source Han Sans CN;
                        //     font-weight: 400;
                        //     color: #000000;
                        // }
                        // .item_right{
                            
                        //     font-size: 14px;
                        //     font-family: Source Han Sans CN;
                        //     font-weight: 400;
                        //     color: #7E7E7E;
                        // }
                    }
                    .item1{
                        /*height: 22rem;*/
                        .item_left{
                            color: #7E7E7E;
                        }
                    }
                    .item2{
                        margin-top: 28rem;
                        margin-bottom: 25rem;
                        .item_right{
                            
                        color: #7E7E7E;
                        }
                    }
                    .item3{
                        margin-bottom: 25rem;
                        .item_right{
                            
                        color: #7E7E7E;
                        }
                    }
                    .item4{
                        margin-bottom: 40rem;
                        height: 18rem;
                        line-height: 14rem;
                        .item_right{
                         font-size: 18rem;   
                        // color: #7E7E7E;
                        }
                    }
                    .line{
                        height: 1rem;
                        width: 100%;
                        
                        background: #DBDEE4;
                    }
                    .p{
                        text-align: left;
                        margin-bottom: 25rem;
                        width: 100%;
// height: 13px;        
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #7E7E7E;
                        line-height: 14rem;
                    }
                    .p1{
                        margin-top: 25rem;
                    }
                    .p2{
                        margin-bottom: 20rem;
                        font-size: 12rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #7E7E7E;
                        line-height: 20rem;
                    }
                    .btn{
                        width: 100%;
                        height: 42rem;
                        line-height: 40rem;
                        
                        // height: 14px;
                        font-size: 14rem;
                        text-align: center;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                        background: #082850;
                        box-sizing: border-box;
                        border: 2rem solid #082850;
                        margin-top: 30rem;
                    }
                    .btn2{
                        margin-top: 16rem;
                        background: #fff;
                        color: #444444;
                        margin-bottom: 3rem;

                    }
                    a{
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>