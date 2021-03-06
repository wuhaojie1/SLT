<template>
    <div id="trade">
        <div class="buy-seal-con">
            <div :class="index==currentindex?'active':'trade-item'"
                 v-for="(item,index) in tradearr"
                 :key="item.index"
                 @click="changeitem(index)">{{item}}</div>
        </div>
        <div v-for="(item,index) in buyarr" :key="index">
            <dealitem v-if="currentindex==0" :dealitem="item"></dealitem>
        </div>
        <div v-for="(item,index) in sealarr" :key="index">
            <dealitem v-if="currentindex==1" :dealitem="item"></dealitem>
        </div>
    </div>
</template>

<script>
    import dealitem from "../../../components/dealitem/dealitem";
    export default {
        name: "trade",
        components:{dealitem},
        data(){
            return{
                tradearr:['购买','出售'],
                currentindex:0,
                buyarr:[
                    {
                        name:'大信交易所(1329|99%)',
                        num:'数量:1.159935SLT',
                        charge:'单价',
                        limit:'限额：40,000.00-387,481.00 ETH',
                        limitnum:'334,260.75 ETH',
                        chargenum:'334,260.75 ETH',
                        buyitem:true
                    },
                    {
                        name:'大信交易所(1329|99%)',
                        num:'数量:1.159935SLT',
                        charge:'单价',
                        limit:'限额：40,000.00-387,481.00 ETH',
                        limitnum:'334,260.75 ETH',
                        chargenum:'334,260.75 ETH',
                        buyitem:true
                    }
                ],
                sealarr:[
                    {
                        name:'大信交易所(1329|99%)',
                        num:'数量:1.159935SLT',
                        charge:'单价',
                        limit:'限额：40,000.00-387,481.00 ETH',
                        limitnum:'334,260.75 ETH',
                        chargenum:'334,260.75 ETH',
                        buyitem:false
                    },
                    {
                        name:'大信交易所(1329|99%)',
                        num:'数量:1.159935SLT',
                        charge:'单价',
                        limit:'限额：40,000.00-387,481.00 ETH',
                        limitnum:'334,260.75 ETH',
                        chargenum:'334,260.75 ETH',
                        buyitem:false
                    }
                ]
            }
        },
        methods:{
            changeitem(index){
                this.currentindex = index;
                console.log(index);
            }
        }
    }
</script>

<style scoped lang="less">
#trade{
    width: 750rem;
    .buy-seal-con{
        width: 680rem;
        height: 88rem;
        margin-left: 40rem;
        /*line-height: 88rem;*/
        .trade-item{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #A1ACBB;
            width: 62rem;
            height: 88rem;
            float: left;
            margin-right: 43rem;
            line-height: 88rem;
        }
        .active{
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #333333;
            width: 70rem;
            height: 88rem;
            float: left;
            margin-right: 43rem;
            line-height: 88rem;
        }
    }
}
</style>