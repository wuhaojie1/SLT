<template>
    <div id="positiondetails">
        <Mheader :isShowRight="true"
                 @clickCallback="clickCallback"></Mheader>
        <div class="head">
            <span class="headtext">艺术/大众文化</span>
        </div>
        <div class="op">
            <img class="back" src="../../../static/img/positiondetails/back.png" alt="">
            <div class="pname">艺术/大众文化位置</div>
        </div>
        <div class="charge">￥200</div>
        <div class="goodsdetails">
            <div class="imgcon">
                <img class="img" src="../../../static/img/positiondetails/goods.png" alt="">
            </div>
            <div class="msgcon">
                <div class="con1">卖出位置</div>
                <div class="con2">数量:10</div>
                <div class="con3">剩余位置</div>
                <div class="con4">数量:10</div>
            </div>
        </div>
        <div class="line"></div>
        <div class="earnings">
            <div class="profie">收益</div>
            <div class="descript">有货，每个位置平均收入在100%</div>
        </div>
        <div class="line"></div>
        <div class="choosenum">
            <img class="reduce" @click="reduce" src="../../../static/img/positiondetails/add.png" alt="">
            <div class="num">{{nums}}</div>
            <img class="add" @click="add" src="../../../static/img/positiondetails/reduce.png" alt="">
        </div>
        <div class="buy">购买</div>
        <div class="remind">
            <div class="tip">温馨提示，如有任何问题</div>
            <div class="connect">联系在线客服</div>
        </div>
    </div>
</template>

<script>
    import Mheader from "../../../components/mobileComponents/comm/header.vue";
    export default {
        name: "positiondetails",
        components:{Mheader},
        data(){
            return{
                num:1,
            }
        },
        computed:{
            nums:function () {
                var num;
                if (this.num<10){
                   num = '0'+this.num
                }else{
                   num = this.num
                }
                return num;
            }
        },
        methods:{
            reduce(){
                // if(this.num>1&&this.num<10){
                //     this.num = this.num-1
                // }else if(this.num>10){
                //     this.num = this.num-1
                // }
                if(this.num>1){
                    this.num = this.num-1;
                }
                console.log(this.num)
            },
            add(){
                // if(this.num>1&&this.num<10){
                //     this.num = this.num+1
                // }else if(this.num>10){
                //     this.num = this.num+1
                // }
                this.num = this.num+1;
                console.log(this.num)
            }
        }
    }
</script>

<style scoped lang="less">
#positiondetails{
    .head{
        padding-top: 88rem;
        width: 750rem;
        height: 88rem;
        /*line-height: 88rem;*/
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
        .headtext{
            line-height: 88rem;
            font-size: 30rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #333333;
            float: left;
            margin-left: 35rem;
        }
    }
    .op{
        width: 750rem;
        height: 40rem;
        display: flex;
        justify-content: space-between;
        margin-top: 60rem;
        .back{
            width: 44rem;
            height: 39rem;
            margin-left: 35rem;
        }
        .pname{
            font-size: 38rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #444444;
            margin-right: 305rem;
        }
    }
    .charge{
        font-size: 28rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        margin-top: 20rem;
        float: left;
        margin-left: 124rem;
    }
    .goodsdetails{
        clear: both;
        padding-top: 59rem;
        display: flex;
        justify-content: space-between;
        .imgcon{
            width: 395rem;
            height: 380rem;
            background: #F8FAFC;
            margin-left: 35rem;
            .img{
                width: 189rem;
                height: 280rem;
                margin-top: 50rem;
            }
        }
        .msgcon{
            height: 380rem;
            width: 285rem;
            /*margin-left: 35rem;*/
            .con1{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                text-align: left;
                margin-top: 30rem;
            }
            .con2{
                width: 255rem;
                height: 88rem;
                background: #F8FAFC;
                line-height: 88rem;
                margin-top: 20rem;
                text-align: left;
                text-indent: 21rem;
            }
            .con3{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                text-align: left;
                margin-top: 50rem;
            }
            .con4{
                width: 255rem;
                height: 88rem;
                background: #FFFFFF;
                border: 1rem solid #DBDEE4;
                line-height: 88rem;
                margin-top: 20rem;
                text-align: left;
                text-indent: 21rem;
            }
        }
    }
    .line{
        width: 680rem;
        height: 1rem;
        border: 2rem solid #F5F6F7;
        border-radius: 1rem;
        margin-top: 60rem;
        margin-left: 35rem;
    }
    .earnings{
        width: 750rem;
        height: 27rem;
        display: flex;
        justify-content: space-between;
        margin-top: 35rem;
        .profie{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            margin-left: 37rem;
        }
        .descript{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            margin-right: 164rem;
        }
    }
    .choosenum{
        width: 680rem;
        height: 88rem;
        background: #FFFFFF;
        border: 1rem solid #082850;
        margin-left: 35rem;
        display: flex;
        justify-content: space-between;
        .reduce{
            width: 23rem;
            height: 3rem;
            /*float: left;*/
            margin-top: 43rem;
            margin-left: 30rem;
        }
        .num{
            font-size: 30rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            line-height: 88rem;
        }
        .add{
            width: 23rem;
            height: 23rem;
            /*float: right;*/
            margin-top: 33rem;
            margin-right: 30rem;
        }
    }
    .buy{
        width: 680rem;
        height: 88rem;
        line-height: 88rem;
        background: #082850;
        margin-left: 35rem;
        margin-top: 40rem;
        font-size: 32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
    }
    .remind{
        margin-top: 24rem;
        width: 420rem;
        height: 22rem;
        display: flex;
        justify-content: center;
        margin-left: 36rem;
        .tip{
            font-size: 22rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
        }
        .connect{
            font-size: 22rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #00B4FC;
        }
    }
}
</style>