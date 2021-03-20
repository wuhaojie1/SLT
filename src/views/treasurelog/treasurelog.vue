<template>
    <div id="treasurelog">
        <themeStickyHeader></themeStickyHeader>
        <div class="content">
            <div class="tabbar-con">
                <div class="back" @click="topage('user')">
                    <img class="arrowimg" src="../../static/img/treasurelog/arrow-left.png" alt="">
                    财务记录
                </div>
                <div class="tabbarlist">
                    <div :class="currentindex==index ? 'active':'tabbar-item'"
                         v-for="(item,index) in tabbarlist"
                         :key="index"
                         @click="changecurrent(index)">
                         {{item}}
                    </div>
                </div>
            </div>
            <div class="logcon">
                <div class="inlog" v-if="currentindex==0">
                    <div class="head">
                        <span class="head-text">充币记录</span>
                    </div>
                    <div class="table-head">
                        <div class="item1">时间</div>
                        <div class="item2">币种</div>
                        <div class="item3">类型</div>
                        <div class="item4">数量</div>
                        <div class="item5">操作</div>
                    </div>
                    <div v-for="item in inloglist"
                         :key="item.index">
                         <coinlog :itemlog="item"></coinlog>
                    </div>

                </div>
                <div class="outlog" v-if="currentindex==1">
                    <div class="head">
                        <span class="head-text">提币记录</span>
                    </div>
                    <div class="table-head">
                        <div class="item1">时间</div>
                        <div class="item2">币种</div>
                        <div class="item3">类型</div>
                        <div class="item4">数量</div>
                        <div class="item5">操作</div>
                    </div>
                    <div v-for="item in inloglist"
                         :key="item.index">
                        <coinlog :itemlog="item"></coinlog>
                    </div>
                </div>
                <div class="otclog" v-if="currentindex==2">
                    <div class="head">
                        <span class="head-text">OTC交易记录</span>
                    </div>
                    <div class="table-head">
                        <div class="item1">时间</div>
                        <div class="item2">币种</div>
                        <div class="item3">类型</div>
                        <div class="item4">数量</div>
                        <div class="item5">操作</div>
                    </div>
                    <div v-for="item in inloglist"
                         :key="item.index">
                        <coinlog :itemlog="item"></coinlog>
                    </div>
                </div>
                <div class="locallog" v-if="currentindex==3">
                    <div class="head">
                        <span class="head-text">位置交易记录</span>
                    </div>
                    <div class="table-head">
                        <div class="item1">时间</div>
                        <div class="item2">位置</div>
                        <div class="item3">类型</div>
                        <div class="item4">数量</div>
                        <div class="item5">单价</div>
                        <div class="item6">操作</div>
                    </div>
                    <gllog></gllog>
                </div>
                <div class="goodslog" v-if="currentindex==4">
                    <div class="head">
                        <span class="head-text">商城交易记录</span>
                    </div>
                    <div class="table-head">
                        <div class="item1">时间</div>
                        <div class="item2">商品</div>
                        <div class="item3">类型</div>
                        <div class="item4">数量</div>
                        <div class="item5">单价</div>
                        <div class="item6">操作</div>
                    </div>
                    <gllog></gllog>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
    import gllog from "../../components/gllog";
    import coinlog from "../../components/coinlog/coinlog";
    import themeStickyHeader from "../../components/header/themeStickyHeader";
    import bottom from "../../components/bottom/bottom";
    export default {
        name: "treasurelog",
        components:{themeStickyHeader,bottom,coinlog,gllog},
        data(){
            return{
                tabbarlist:['充币记录','提币记录','OTC交易记录','位置购买记录','商城购买记录'],
                currentindex:0,
                inloglist:[
                    {
                        time:'2021-02-25',
                        cointype:'SLT',
                        type:'类型',
                        num:'1000000'
                    },
                    {
                        time:'2021-03-25',
                        cointype:'SLT',
                        type:'类型',
                        num:'1000000'
                    },
                    {
                        time:'2021-04-25',
                        cointype:'SLT',
                        type:'类型',
                        num:'1000000'
                    }
                ]
            }
        },
        methods:{
            changecurrent(index){
                this.currentindex = index
            },
            topage(name){
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #treasurelog{
        width: 1920rem;
        height: auto;
        .content{
            margin-top: 75rem;
            height: calc(100vh - 75rem - 200rem);
            .tabbar-con{
                width: 100%;
                height: 90rem;
                background-color: #041037;
                margin-bottom: 20rem;
                .back{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    margin-top: 60rem;
                    float: left;
                    margin-left: 360rem;
                    margin-right: 119rem;
                    .arrowimg{
                        width: 9rem;
                        height: 14rem;
                        /*float: left;*/
                        margin-right: 9rem;
                        margin-top: 2rem;
                    }
                }
                .tabbarlist{
                    width: 586rem;
                    display: flex;
                    justify-content: space-between;
                    /*margin-left: 360rem;*/
                    .tabbar-item{
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #77AFE7;
                        margin-top: 60rem;
                    }
                    .active{
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #FFFFFF;
                        margin-top: 60rem;
                        position: relative;
                    }
                    .active::after{
                        content:"";
                        display: inline-block;
                        position: absolute;
                        top: 20rem;
                        left: 43%;
                        width: 12rem;
                        height: 4rem;
                        background-color: #00B9FE;
                        border-radius: 4rem;
                    }
                }
            }
            .logcon{
                width: 1200rem;
                height: auto;
                margin: 0 auto;
                border: 1rem solid #E4E7ED;
                .inlog{
                    width: 1200rem;
                    height: 500rem;
                    .head{
                        width: 100%;
                        height: 50rem;
                        background: #F8FAFC;
                        border-bottom: 1rem solid #E4E7ED;
                        line-height: 50rem;
                        .head-text{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                            margin-left: 26rem;
                            float: left;
                        }
                    }
                    .table-head{
                        width: 100%;
                        height: 50rem;
                        border-bottom: 1rem solid #E4E7ED;
                        display: flex;
                        .item1{
                            line-height: 50rem;
                            margin-left: 26rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            margin-right: 230rem;
                        }
                        .item2{
                            line-height: 50rem;
                            margin-right: 170rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item3{
                            line-height: 50rem;
                            margin-right: 210rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item4{
                            line-height: 50rem;
                            margin-right: 362rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item5{
                            line-height: 50rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                    }
                }
                .outlog{
                    width: 1200rem;
                    height: 500rem;
                    margin: 0 auto;
                    .head{
                        width: 100%;
                        height: 50rem;
                        background: #F8FAFC;
                        border: 1rem solid #E4E7ED;
                        line-height: 50rem;
                        .head-text{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                            margin-left: 26rem;
                            float: left;
                        }
                    }
                    .table-head{
                        width: 100%;
                        height: 50rem;
                        border-bottom: 1rem solid #E4E7ED;
                        display: flex;
                        .item1{
                            line-height: 50rem;
                            margin-left: 26rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            margin-right: 230rem;
                        }
                        .item2{
                            line-height: 50rem;
                            margin-right: 170rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item3{
                            line-height: 50rem;
                            margin-right: 210rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item4{
                            line-height: 50rem;
                            margin-right: 362rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item5{
                            line-height: 50rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                    }
                }
                .otclog{
                    width: 1200rem;
                    height: 500rem;
                    margin: 0 auto;
                    .head{
                        width: 100%;
                        height: 50rem;
                        background: #F8FAFC;
                        border: 1rem solid #E4E7ED;
                        line-height: 50rem;
                        .head-text{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                            margin-left: 26rem;
                            float: left;
                        }
                    }
                    .table-head{
                        width: 100%;
                        height: 50rem;
                        border-bottom: 1rem solid #E4E7ED;
                        display: flex;
                        .item1{
                            line-height: 50rem;
                            margin-left: 26rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            margin-right: 230rem;
                        }
                        .item2{
                            line-height: 50rem;
                            margin-right: 170rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item3{
                            line-height: 50rem;
                            margin-right: 210rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item4{
                            line-height: 50rem;
                            margin-right: 362rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item5{
                            line-height: 50rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                    }
                }
                .locallog{
                    width: 1200rem;
                    height: 500rem;
                    margin: 0 auto;
                    .head{
                        width: 100%;
                        height: 50rem;
                        background: #F8FAFC;
                        border: 1rem solid #E4E7ED;
                        line-height: 50rem;
                        .head-text{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                            margin-left: 26rem;
                            float: left;
                        }
                    }
                    .table-head{
                        width: 100%;
                        height: 50rem;
                        border-bottom: 1rem solid #E4E7ED;
                        display: flex;
                        .item1{
                            line-height: 50rem;
                            margin-left: 26rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            margin-right: 230rem;
                        }
                        .item2{
                            line-height: 50rem;
                            margin-right: 170rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item3{
                            line-height: 50rem;
                            margin-right: 161rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item4{
                            line-height: 50rem;
                            margin-right: 170rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item5{
                            line-height: 50rem;
                            margin-right: 215rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item6{
                            line-height: 50rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                    }
                }
                .goodslog{
                    width: 1200rem;
                    height: 500rem;
                    margin: 0 auto;
                    .head{
                        width: 100%;
                        height: 50rem;
                        background: #F8FAFC;
                        border: 1rem solid #E4E7ED;
                        line-height: 50rem;
                        .head-text{
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                            margin-left: 26rem;
                            float: left;
                        }
                    }
                    .table-head{
                        width: 100%;
                        height: 50rem;
                        border-bottom: 1rem solid #E4E7ED;
                        display: flex;
                        .item1{
                            line-height: 50rem;
                            margin-left: 26rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            margin-right: 230rem;
                        }
                        .item2{
                            line-height: 50rem;
                            margin-right: 170rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item3{
                            line-height: 50rem;
                            margin-right: 161rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item4{
                            line-height: 50rem;
                            margin-right: 170rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item5{
                            line-height: 50rem;
                            margin-right: 215rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                        .item6{
                            line-height: 50rem;
                            font-size: 14rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                        }
                    }
                }
            }
        }
    }
</style>