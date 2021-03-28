<template>
    <div id="positiondetails">
        <Mheader :isShowRight="true"
                 @clickCallback="clickCallback"></Mheader>
        <div class="head">
            <span class="headtext">{{positionObj.categoryName}}</span>
        </div>
        <div class="op">
            <div  class="back" @click="clickCallback"> <img src="../../../static/img/positiondetails/back.png" alt=""></div>
            <div class="pname">{{positionObj.categoryName}}{{this.$t('Mpositiondetails.position')}}</div>
            <div class="clearfix"></div>
        </div>
        <div class="charge">￥{{positionObj.price}}</div>
        <div class="goodsdetails">
            <div class="imgcon">
                <img class="img" src="../../../static/img/positiondetails/goods.png" alt="">
            </div>
            <div class="msgcon">
                <div class="con1">{{this.$t('Mpositiondetails.seal')}}</div>
                <div class="con2">{{this.$t('Mpositiondetails.num')}}:{{positionObj.costCount}}</div>
                <div class="con3">{{this.$t('Mpositiondetails.residue')}}</div>
                <div class="con4">{{this.$t('Mpositiondetails.num')}}:{{positionObj.lastCount}}</div>
            </div>
        </div>
        <div class="line"></div>
        <div class="earnings">
            <div class="profie">{{this.$t('Mpositiondetails.earn')}}</div>
            <div class="descript">{{this.$t('Mpositiondetails.desceipt')}}10%</div>
        </div>
        <div class="line"></div>
        <div class="choosenum">
            <img class="reduce" @click="reduce" src="../../../static/img/positiondetails/add.png" alt="">
            <div class="num">{{nums}}</div>
            <img class="add" @click="add" src="../../../static/img/positiondetails/reduce.png" alt="">
        </div>
        <div class="buy" v-loading="buyLoading" @click="handleBuyPosition">{{this.$t('Mpositiondetails.buy')}}</div>
        <div class="remind">
            <div class="tip">{{this.$t('Mpositiondetails.tip')}}</div>
            <div class="connect">{{this.$t('Mpositiondetails.connect')}}</div>
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
                positionObj: '',
                buyLoading:false
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
            },

        },
        mounted(){
         this.positionObj = JSON.parse(this.localStorage.get('positionObj'));
        },
        methods:{
            clickCallback(){
                this.$router.go(-1);
            },
            reduce(){
                if(this.num>1){
                    this.num = this.num-1;
                }
            },
            add(){
                this.num = this.num+1;
            },

            handleBuyPosition(){
                this.buyLoading = true;
                const param = {
                    count:this.nums - 0,
                    positionId: this.positionObj.id,
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
                            message: this.$t('Mpositiondetails.buySuccess'),
                            type: 'success'
                        });
                    }else {
                        this.$notify({
                            title: '失败',
                            message: this.$t('Mpositiondetails.buyFail'),
                            type: 'error'
                        });
                    }
                    this.buyLoading = false;
                }).catch(()=>{
                    this.buyLoading = false;
                })
            },
            updateLocal(){
                this.positionObj.costCount=this.positionObj.costCount + (this.nums - 0);
                this.positionObj.lastCount-=this.nums;
                this.localStorage.set('positionObj',JSON.stringify(this.positionObj))
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
       // display: flex;
       // justify-content: space-between;
        margin-top: 60rem;
        .back{
            float: left;

            margin-left: 35rem;
            img{
                width: 44rem;
                height: 39rem;
            }
        }
        .pname{
            float: left;
            font-size: 38rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #444444;
            margin-left: 42rem;
        }
    }
    .charge{
        font-size: 28rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        margin-top: 20rem;
        float: left;
        margin-left: 42rem;
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
        width: 750rem;
        height: 22rem;
        display: flex;
        justify-content: center;
        /*margin-left: 36rem;*/
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
