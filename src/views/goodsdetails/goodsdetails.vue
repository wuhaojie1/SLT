<template>
    <div id="goodsdetails">
        <themeStickyHeader></themeStickyHeader>
        <div class="goodsmsg">
            <div class="goodsmsg-scoll">
                <el-carousel height="466rem"
                             direction="vertical"
                             :autoplay="true"
                             :loop="true"
                             interval=2000
                             indicator-position="none">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="goodsmsg-con">
                <div class="goods-name">
                    <div class="goos-name-text">北欧简约多色铁艺灯具</div>
                    <img class="love" src="" alt="">
                </div>
                <div class="goods-charge">￥4200</div>
                <div class="line"></div>
                <div class="goods-num">款号652000 0XJDBM 9095</div>
                <div class="goods-attr">
                    <div class="goods-attr-item1">
                        <div class="goods-attr-img-con">
                            <img src="" alt="">
                        </div>
                        <div class="goods-attr-item1-text">责任</div>
                    </div>
                    <div class="goods-attr-item2">
                        <div class="goods-attr-img-con">
                            <img src="" alt="">
                        </div>
                        <div class="goods-attr-item2-text">环保</div>
                    </div>
                </div>
                <div class="goods-theme">
                    <div class="goods-color"></div>
                    <div class="goods-color-text">雾霾蓝</div>
                </div>
                <div class="choose-type-con">
                    <div class="choose-type">
                        <select name="" id="">
                            <option class="choose-type-text" value="">选择合适的尺码</option>
                            <option class="choose-type-text" value="S">S</option>
                            <option class="choose-type-text" value="M">M</option>
                            <option class="choose-type-text" value="L">L</option>
                            <option class="choose-type-text" value="XL">XL</option>
                            <option class="choose-type-text" value="XXL">XXL</option>
                        </select>
                    </div>
                    <div class="look-all-type">尺码表</div>
                </div>
                <div class="shopcar">加入购物车</div>
                <div class="question">
                    <div class="online">
                        <img style="{width: 12rem;height: 12rem}" src="" alt="">
                        <div class="online-text">在线顾问</div>
                    </div>
                    <div class="line"></div>
                    <div class="phone">
                        <img style="{width: 9rem;height: 12rem}" src="" alt="">
                        <div class="online-text">选购咨询 400.8210.582</div>
                    </div>
                </div>
                <div class="share">
                    <div class="share-text">分享:</div>
                    <img class="wechat" src="" alt="">
                    <img class="weibo" src="" alt="">
                </div>
                <div class="goods-detail">
                    <div class="goods-detail-text">产品细节</div>
                    <img class="arr" src="" alt="">
                </div>
                <div class="setaddress">
                    <img src="location" alt="">
                    <div class="setaddress-text">查找有货直营店</div>
                    <div class="free-text">选择标准配送，免运费</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import themeStickyHeader from "../../components/header/themeStickyHeader";
    export default {
        name: "goodsdetails",
        components:{
            themeStickyHeader
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="less">
#goodsdetails{
    width: 100%;
    height: calc(100vh - 75rem);
    background-color: #F3F5F7;
    .goodsmsg{
        margin-top: 75rem;
        padding-top: 229rem;
        height: 100%;
        .goodsmsg-scoll{
            width: 660rem;
            height: auto;
            margin-left: 360rem;
            float: left;
            .el-carousel__item h3 {
                color: #475669;
                font-size: 14rem;
                opacity: 0.75;
                line-height: 200rem;
                margin: 0;
            }
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        .goodsmsg-con{
            float: right;
            margin-right: 360rem;
            text-align: left;
            height: auto;
            width: 330rem;
            .goods-name{
                padding-bottom: 11rem;
                font-size: 24rem;
                .googs-name-text{
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                }
            }
            .goods-charge{
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
                    select{
                        width: 140rem;
                        height: 42rem;
                        background: #F3F5F7;
                        border: 1rem solid #DBDEE4;
                        .choose-type-text{
                            font-size: 12rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
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
                }
            }
            .share{
                height: 43rem;
                width: 100%;
                float: left;
                margin-left: 20rem;
                margin-right: 20rem;
                .share-text{
                    line-height: 43rem;
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                }
                .wechat{
                    width: 14rem;
                    height: 12rem;
                    margin-right: 20rem;
                }
                .weibo{
                    width: 14rem;
                    height: 12rem;
                }
            }
            .goods-detail{
                height: 43rem;
                width: 100%;
                float: left;
                margin-left: 20rem;
                .goods-detail-text{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                }
                .arr{
                    float: right;
                    margin-right: 20rem;
                    width: 6rem;
                    height: 10rem;
                }
            }
            .setaddress{
                .location{
                    float: left;
                    margin-left: 20rem;
                    margin-right: 10rem;
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