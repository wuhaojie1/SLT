<template>
    <div id="gllog">
        <div class="table-head">
            <div class="item1">2021-02-25</div>
            <div class="item2">按摩椅</div>
            <div class="item3">类型</div>
            <div class="item4">1</div>
            <div class="item5">1000</div>
            <div class="item6">查看详情
                <img class="img" src="../static/img/treasurelog/arrow-left.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gllog"
    }
</script>

<style scoped lang="less">
#gllog{
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
            /*margin-right: 230rem;*/
            width: 308rem;
            text-align: left;
        }
        .item2{
            line-height: 50rem;
            /*margin-right: 170rem;*/
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            width: 235rem;
            text-align: left;
        }
        .item3{
            line-height: 50rem;
            /*margin-right: 161rem;*/
            width: 229rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            text-align: left;
        }
        .item4{
            line-height: 50rem;
            /*margin-right: 170rem;*/
            width: 228rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            text-align: left;
        }
        .item5{
            line-height: 50rem;
            /*margin-right: 215rem;*/
            width: 262rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            text-align: left;
        }
        .item6{
            line-height: 50rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            width: 100rem;
            .img{
                width: 8rem;
                height: 12rem;
                transform: rotate(180deg);
                margin-top: 2rem;
            }
        }
    }
}
</style>