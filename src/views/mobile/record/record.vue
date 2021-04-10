<template>
    <div class="record">
        <PageHeader :isShowRight="true"
                    :isHome="false"
                    class="PageHeader"
                    @clickCallback="clickCallback"></PageHeader>
        <RecordDrop @toPage="toPage"
                    class="RecordDrop"></RecordDrop>
        <div class="tableBox" v-loading="loading">
            <template v-if="inloglist.length>0">
                <template v-if="curType=='Mtopup'||curType=='Mwithdraw'||curType=='MOTC'">
                    <Topup class="tableItem" v-for="(item,index) in inloglist" :key="index" :recordItem="item"></Topup>
                </template>
                <template v-else>
                    <PositionRecord class="tableItem" v-for="(item,index) in inloglist" :key="index" :recordItem="item"></PositionRecord>
                </template>
            </template>
            <div class="empty" v-else>
                <img style="130rem;height:130rem" src="../../../static/img/treasurelog/empty.png" alt="">
                <div>{{ $t('common.noData') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import RecordDrop from "@/components/recordDrop";
import PageHeader from "@/components/mobileComponents/comm/header";
import Topup from "@/components/position/Topup";
import PositionRecord from "@/components/position/positionRecord";

export default {
    name: "record",
    components: {PageHeader, RecordDrop,PositionRecord,Topup},
    data() {
        return {
            curType:"Mtopup",
            loading:false,
            inloglist: [
                // {
                //     title: "SLT",
                //     time: "2021-02-28",
                //     type: "小说",
                //     number: "10",
                //     // price: "200",
                // },
                // {
                //     title: "SLT",
                //     time: "2021-02-28",
                //     type: "小说",
                //     number: "10",
                //     // price: "200",
                // },
                // {
                //     title: "SLT",
                //     time: "2021-02-28",
                //     type: "小说",
                //     number: "10",
                //     // price: "200",
                // },
                // {
                //     title: "SLT",
                //     time: "2021-02-28",
                //     type: "小说",
                //     number: "10",
                //     // price: "200",
                // },
            ]
        }
    },
    mounted() {
        this.recharage();
    },
    methods: {
        toPage(item) {
            this.loading = true;
            switch (item.name) {
                case 'Mtopup':
                    this.recharage();
                    break;
                case 'Mwithdraw':
                    this.withDraw();
                    break;
                case 'MOTC':
                    this.OTCTrading();
                    break;
                case 'Mposition':
                    this.positionTrading();
                    break;
                case 'MDeal':
                    this.goodsTrading();
                    break;
                default:
                    break;
            }
            this.curType = item.name
        },
        clickCallback(item) {
            this.$router.push({
                name: item.name,
            })
        },
        //充币记录
        async recharage(){ 
            this.loading = true;
            try {
                let res = await this.axios({
                    url:'user/wallet/rechargeInfo',
                    method:'get',
                    params:{
                        pageNum:1,
                        pageSize:1
                    }
                })
                console.log(res,'充币记录');
                if(res.errorCode == 0){
                    this.inloglist = JSON.parse(res.results).list
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false
            } catch (error) {
                console.log(error);
            }
            
        },
        //提币记录
        async withDraw(){
            try {
                let res = await this.axios({
                    url:'user/wallet/drawList',
                    method:'post'
                })
                console.log(res,'提币记录');
                if(res.errno == 0){
                    let temp = res.data.list.map(ele=>{
                        ele.time = ele.updateTime
                        ele.title = ele.symbol
                        ele.type = ele.bizNo
                        ele.number = ele.amount
                        return ele
                    })
                    this.inloglist = temp
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false;
            } catch (error) {
                console.log(error);
            }
        },
        //OTC交易记录
        async OTCTrading(){
            try {
                let res = await this.axios({
                    url:'otc/trans/listFreeBuySell',
                    method:'get',
                    params:{
                        lastId:1,
                        size:1
                    }
                })
                console.log(res,'OTC记录');
                if(res.errorCode == 0){
                    this.inloglist = res.results.items.map(ele=>{
                        ele.time = ele.updateTime
                        ele.title = ele.symbol
                        ele.type = ele.transType
                        ele.number = ele.oriAmount
                        return ele
                    })
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                
                this.loading = false
                    
                
            } catch (error) {
                console.log(error);
            }
        },
        //位置购买记录
        async positionTrading(){
            try {
                let res = await this.axios({
                    url:'wx/position/buyList',
                    method:'get'
                })

                console.log(res,'位置购买记录');
                if(res.errno == 0){
                    this.inloglist = res.data.map(ele=>{
                        return {
                            ...ele,
                            time:ele.updateTime,
                            title:ele.scale,
                            type:ele.categoryName,
                            number:ele.amount,
                            price:ele.price
                        }
                    })
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false
            } catch (error) {
                console.log(error);
            }
        },
        //商品交易记录
        async goodsTrading(){
            try {
                let res = await this.axios({
                    url:'wx/order/list',
                    method:'get'
                })
                console.log(res,'商品交易记录');
                if(res.errno == 0){
                    this.inloglist = res.data.list

                    let temp = [];
                    res.data.list.forEach(item=>{
                        item.goodsList.forEach(ele=>{
                            temp.push({
                                ...ele,
                                time:ele.item.addTime,
                                title:ele.goodsName,
                                type:ele.specifications.join('-'),
                                number:ele.number,
                                price:ele.price
                            })
                        })
                    })
                    this.inloglist = temp
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped lang="less">
.record {
    .PageHeader {
        top: 0;
    }

    .RecordDrop {
        position: absolute;
        top: 88rem;
        z-index: 5;
    }

    .tableBox{
        padding: 0rem 35rem 0rem 35rem;
        margin-top: 230rem;
        min-height: calc(100vh - 330rem);
        .tableItem{
            margin-bottom: 40rem;
        }
        .empty{
            padding-top: 300rem;
            font-size: 24rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            div{
                padding-top: 24rem;
            }
        }
    }
}
</style>