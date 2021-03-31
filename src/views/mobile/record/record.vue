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
                <template v-if="curType=='Mtopup'||curType=='Mwithdraw'">
                <Topup class="tableItem" v-for="(item,index) in inloglist" :key="index" :recordItem="item"></Topup>
                </template>
                <template v-else>
                    <PositionRecord class="tableItem" v-for="(item,index) in inloglist" :key="index" :recordItem="item"></PositionRecord>
                </template>
            </template>
            <div class="empty" v-else>
                <img style="130rem;height:130rem" src="../../../static/img/treasurelog/empty.png" alt="">
                <div>暂无数据</div>
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
        recharage(){
            this.axios({
                url:'user/wallet/rechargeInfo',
                method:'get',
                params:JSON.stringify({
                    pageNum:1,
                    pageSize:1
                }) 
            }).then(res=>{
                console.log(res,'充币记录');
                if(res.errno == 0){
                    this.inloglist = res.data
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false
            }).catch(e=>{
                console.log(e);
            })
        },
        //提币记录
        withDraw(){
            this.axios({
                url:'user/wallet/drawList',
                method:'post',
                params:{
                    userId:24
                }
            }).then(res=>{
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

                this.loading = false
            }).catch(e=>{
                console.log(e);
            })
        },
        //OTC交易记录
        OTCTrading(){
            this.axios({
                url:'otc/trans/listFreeBuySell',
                method:'get',
                params:{
                    lastId:1,
                    size:1
                }
            }).then(res=>{
                console.log(res,'OTC记录');
                if(res.errorCode == 0){
                    this.inloglist = res.results.items
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false
            }).catch(e=>{
                console.log(e);
            })
        },
        //位置购买记录
        positionTrading(){
            this.axios({
                url:'wx/position/buyList',
                method:'get'
            }).then(res=>{
                console.log(res,'位置购买记录');
                if(res.errno == 0){
                    this.inloglist = res.data
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false
            }).catch(e=>{
                console.log(e);
            })
        },
        //商品交易记录
        goodsTrading(){
            this.axios({
                url:'wx/order/list',
                method:'get'
            }).then(res=>{
                console.log(res,'商品记录');
                if(res.errno == 0){
                    this.inloglist = res.data.list
                }else{
                    this.$notify({
                        title: this.$t('common.fail'),
                        message: res.errmsg,
                        type: 'error'
                    })
                }
                this.loading = false
            }).catch(e=>{
                console.log(e);
            })
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