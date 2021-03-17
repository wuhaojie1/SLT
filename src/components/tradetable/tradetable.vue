<template>
    <div id="tradetable">
        <table>
            <thead>
                <tr>
                    <th>
                        <div class="man">{{$t('personasset.moneytype')}}</div>
                    </th>
                    <th>
                        <div class="local">{{$t('personasset.num')}}</div>
                    </th>
                    <th>
                        <div class="adress">{{$t('personasset.amount')}}</div>
                    </th>
                    <th>
                        <div class="price">{{$t('personasset.charge')}}</div>
                    </th>
                    <th>
                        <div class="phone">{{$t('personasset.tredetype')}}</div>
                    </th>
                    <th>
                        <div class="oprate">{{$t('personasset.moneycomes')}}</div>
                    </th>
                    <th>
                        <div class="setadress">{{$t('personasset.usermoney')}}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tradelist" :key="item.index">
                    <th>
                        <div class="man">{{item.cointypetext}}</div>
                    </th>
                    <th>
                        <div class="local">{{item.num}}</div>
                    </th>
                    <th>
                        <div class="adress">{{item.allmoney}}</div>
                    </th>
                    <th>
                        <div class="price">{{item.charge}}</div>
                    </th>
                    <th>
                        <div class="phone">
                            <div :class="item.cointype=='ETH'?'paycoinETH':'paycoinSLT'">{{item.cointype}}</div>
                        </div>
                    </th>
                    <th>
                        <div :class="item.in?'opratein':'oprateout'">{{item.tradetype}}</div>
                    </th>
                    <th>
                        <div class="setadress">{{item.expense}}</div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "tradetable",
        props:{
            tradelist:{
                type:Array,
                default:()=>{}
            }
        }
    }
</script>

<style scoped lang="less">
#tradetable{
    table {
        width: 100%;
        /*border: 1rem solid #E4E7ED;*/
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        thead {
            /*border: 1rem solid #E4E7ED;*/
            /*background: #EBECF0;*/
            height: 42rem;
            tr {
                /*border: 1rem solid #E4E7ED;*/
                th {
                    /*border: 1rem solid #E4E7ED;*/
                    text-align: left;
                    height: 42rem;
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    .man{
                        margin-left: 26rem;
                        line-height: 42rem;
                        width: 147rem;
                    }
                    .local{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 187rem;
                    }
                    .adress{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 228rem;
                    }
                    .price{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 178rem;
                    }
                    .phone{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 167rem;
                    }
                    .oprate{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 167rem;
                    }
                    .setadress{
                        /*width: 132rem;*/
                        line-height: 42rem;
                        margin-right: 34rem;
                    }
                }
            }
        }
        tbody {
            /*border: 1rem solid #E4E7ED;*/
            /*background: #EBECF0;*/
            height: 42rem;
            tr {
                /*border: 1rem solid #E4E7ED;*/
                th {
                    /*border: 1rem solid #E4E7ED;*/
                    text-align: left;
                    height: 42rem;
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    .man{
                        margin-left: 26rem;
                        line-height: 42rem;
                        width: 147rem;
                    }
                    .local{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 187rem;
                    }
                    .adress{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 228rem;
                    }
                    .price{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 178rem;
                    }
                    .phone{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 167rem;
                        .paycoinETH{
                            width: 55rem;
                            height: 28rem;
                            line-height: 28rem;
                            color: #7A96F5;
                            border: 1rem solid #E4E7ED;
                            border-radius: 4px;
                            text-align: center;
                        }
                        .paycoinSLT{
                            width: 55rem;
                            height: 28rem;
                            line-height: 28rem;
                            color: #00B9FE;
                            border: 1rem solid #E4E7ED;
                            border-radius: 4px;
                            text-align: center;
                        }
                    }
                    .opratein{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 167rem;
                        color: #00B9FE;
                    }
                    .oprateout{
                        /*margin-left: 20rem;*/
                        line-height: 42rem;
                        width: 167rem;
                        color: #EF5656;
                    }
                    .setadress{
                        /*width: 132rem;*/
                        line-height: 42rem;
                        margin-right: 34rem;
                    }
                }
            }
        }
    }
}
</style>