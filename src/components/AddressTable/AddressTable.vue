<template>
    <div id="atable">
        <table>
            <thead>
            <tr>
                <th>
                    <div class="man">收货人</div>
                </th>
                <th>
                    <div class="local">所在地区</div>
                </th>
                <th>
                    <div class="adress">详细地址</div>
                </th>
                <th>
                    <div class="price">邮编</div>
                </th>
                <th>
                    <div class="phone">电话/手机</div>
                </th>
                <th>
                    <div class="oprate">操作</div>
                </th>
                <th>
                    <div class="setadress"></div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>
                    <div class="man-con">李歪歪</div>
                </th>
                <th>
                    <div class="local-con">
                        <div class="address-text">四川省 成都市 双流区 华阳镇街道</div>
                    </div>
                </th>
                <th>
                    <div class="adress-con">瑞升 橡树林华府五单元1401</div>
                </th>
                <th>
                    <div class="price-con">000000</div>
                </th>
                <th>
                    <div class="phone-con">86-13528143556</div>
                </th>
                <th>
                    <div class="oprate-con">修改|删除</div>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "AddressTable"
    }
</script>

<style scoped lang="less">
#atable{
    width: 100%;
    height: 100%;

    table {
        width: 100%;
        border: 1rem solid #E4E7ED;
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        thead {
            border-bottom: 1rem solid #E4E7ED;
            background: #EBECF0;
            height: 42rem;
            tr {
                border: 1rem solid #E4E7ED;
                th {
                    text-align: left;
                    height: 42rem;
                    .man{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 83rem;
                    }
                    .local{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 135rem;
                    }
                    .adress{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 228rem;
                    }
                    .price{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 117rem;
                    }
                    .phone{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 160rem;
                    }
                    .oprate{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 129rem;
                    }
                    .setadress{
                        width: 132rem;
                    }
                }
            }
        }
        tbody{
            tr{
                text-align: left;
                height: 74rem;
                border-bottom: 1rem solid #E4E7ED;
                th{
                    .man-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 83rem;
                    }
                    .local-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 135rem;
                    }
                    .adress-con{
                        margin-left: 20rem;
                        /*line-height: 42rem;*/
                        width: 228rem;
                        .address-text{
                            width: 90rem;
                            height: auto;
                            margin: 0 auto;
                        }
                    }
                    .price-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 117rem;
                    }
                    .phone-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 160rem;
                    }
                    .oprate-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        width: 129rem;
                    }
                    .setadress-con{
                        width: 132rem;
                    }
                }
            }
        }
    }
}
</style>