<template>
    <div id="coinlog">
        <div class="table-head">
            <div class="item1">{{itemlog.time}}</div>
            <div class="item2">{{itemlog.cointype}}</div>
            <div class="item3">{{itemlog.type}}</div>
            <div class="item4">{{itemlog.num}}</div>
            <div class="item5">상세한상
                <img class="img" src="../../static/img/treasurelog/arrow-left.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "coinlog",
        props:{
            itemlog:{
                type:Object,
                default:()=>[]
            }
        }
    }
</script>

<style scoped lang="less">
#coinlog{
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
            color: #444444;
            /*margin-right: 181rem;*/
            width: 288rem;
            text-align: left;
        }
        .item2{
            line-height: 50rem;
            /*margin-right: 172rem;*/
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #00B9FE;
            width: 219rem;
            text-align: left;
        }
        .item3{
            line-height: 50rem;
            /*margin-right: 210rem;*/
            width: 263rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            text-align: left;
        }
        .item4{
            line-height: 50rem;
            /*margin-right: 262rem;*/
            width: 400rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            text-align: left;
        }
        .item5{
            line-height: 50rem;
            font-size: 14rem;
            width: 104rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            text-align: left;
            .img{
                width: 8rem;
                height: 12rem;
                transform: rotate(180deg);
            }
        }
    }
}
</style>