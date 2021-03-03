<template>
    <div id="Mbuy">
        <tophead></tophead>
        <div class="tradetype-con">
            <div :class="index==currentindex?'active':'trade-itme'"
                 v-for="(item,index) in tradetypearr"
                 :key="index" @click="changeitem(index)">{{item}}</div>
            <div v-if="currentindex==0" class="line2"></div>
            <div v-if="currentindex==1" class="line1"></div>
        </div>
        <div class="trade-content">
            <div class="trade-data">
                <div class="trade-text">
                    <div class="trade-buy"
                         :class="index==currentindex1?'active':'trade'"
                         v-for="(item,index) in tradetextarr"
                         :key="index" @click="changeitem1(index)">{{item}}</div>
                </div>
                <div class="value-text">1ETH价值约</div>
                <div class="value-num">308,500.00SLT</div>
            </div>
        </div>
    </div>
</template>

<script>
    import tophead from '../../components/header/Mheader'
    export default {
        name: "Mbuy",
        components:{tophead},
        data(){
            return{
                tradetypearr:['自选交易','一键买卖'],
                tradetextarr:['购买','出售'],
                currentindex:0,
                currentindex1:0
            }
        },
        methods:{
            changeitem(index){
                this.currentindex = index
            },
            changeitem1(index){
                this.currentindex1 = index
            }
        }
    }
</script>

<style scoped lang="less">
#Mbuy{
    padding-top: 88rem;
    width: 750rem;
    height: 1400rem;
    .tradetype-con{
        width: 750rem;
        height: 88rem;
        display: flex;
        justify-content: flex-start;
        position: relative;
        .trade-itme{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            line-height: 88rem;
            margin-left: 40rem;
            margin-right: 2rem;
        }
        .active{
            font-size: 30rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #00B9FE;
            line-height: 88rem;
            margin-left: 40rem;
            margin-right: 2rem;
        }
        .line1{
            width: 100rem;
            height: 4rem;
            background: #00B9FE;
            position: absolute;
            top: 88rem;
            left: 208rem;
        }
        .line2{
            width: 100rem;
            height: 4rem;
            background: #00B9FE;
            position: absolute;
            top: 88rem;
            left: 50rem;
        }
    }
    .trade-content{
        height: 1038rem;
        width: 750rem;
        background-color: #F5F6FA;
        padding-top: 50rem;
        .trade-data{
            width: 680rem;
            height: 949.1rem;
            margin: 0 auto;
            background-color: #FFFFFF;
            .trade-text{
                width: 100%;
                height: 80rem;
                position: relative;
                display: flex;
                justify-content: space-around;
                .trade{
                    font-size: 36rem;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #9CA0AF;
                    /*margin-left: 131rem;*/
                    line-height: 80rem;
                }
                .active{
                    font-size: 36rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #333333;
                    font-weight: bold;
                    /*margin-right: 132rem;*/
                    line-height: 80rem;
                }
            }
        }
        .value-text{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #8993A0;
            margin-left: 37rem;
            margin-top: 65rem;
            text-align: left;
        }
        .value-num{
            font-size: 34rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #333333;
            margin-left: 37rem;
            margin-top: 24rem;
            text-align: left;
        }
    }

}
</style>