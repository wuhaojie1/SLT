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
            <tr v-for="item in dataList" :key="item.index">
                <th>
                    <div class="man-con">{{item.name}}</div>
                </th>
                <th>
                    <div class="local-con">
                        <div class="address-text">{{item.address}}</div>
                    </div>
                </th>
                <th>
                    <div class="adress-con">{{item.daddress}}</div>
                </th>
                <th>
                    <div class="price-con">{{item.code}}</div>
                </th>
                <th>
                    <div class="phone-con">{{item.phone}}</div>
                </th>
                <th>
                    <div class="oprate-con"> <span>修改</span> | <span>删除</span> </div>
                </th>
                <th>
                    <div v-if="item.useaddress" class="set-adress">默认地址</div>
                    <div v-else class="active">设为默认地址</div>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "AddressTable",
        props:{
            dataList: {
                type: Array,
                default: () => [],
            }
        }
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
            border: 1rem solid #E4E7ED;
            background: #EBECF0;
            height: 42rem;
            tr {
                border: 1rem solid #E4E7ED;
                th {
                    border: 1rem solid #E4E7ED;
                    text-align: left;
                    height: 42rem;
                    .man{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 83rem;*/
                    }
                    .local{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 135rem;*/
                    }
                    .adress{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 228rem;*/
                    }
                    .price{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 117rem;*/
                    }
                    .phone{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 160rem;*/
                    }
                    .oprate{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 129rem;*/
                    }
                    .setadress{
                        /*width: 132rem;*/
                    }
                }
            }
        }
        tbody{
            tr{
                text-align: left;
                height: 74rem;
                border: 1rem solid #E4E7ED;
                th{
                    border: 1rem solid #E4E7ED;
                    .man-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 83rem;*/
                    }
                    .local-con{
                        margin-left: 20rem;
                        /*line-height: 42rem;*/
                        width: 135rem;
                        text-align: left;
                        .address-text{
                            /*width: 90rem;*/
                            height: auto;
                            /*margin-left: 20rem;*/
                        }
                    }
                    .adress-con{
                        margin-left: 20rem;
                        /*line-height: 42rem;*/
                        /*width: 228rem;*/
                    }
                    .price-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 117rem;*/
                    }
                    .phone-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 160rem;*/
                    }
                    .oprate-con{
                        margin-left: 20rem;
                        line-height: 42rem;
                        /*width: 129rem;*/
                    }
                    .setadress-con{
                        /*width: 132rem;*/
                    }
                    .set-adress{
                        margin-left: 20rem;

                    }
                    .active{
                        margin-left: 20rem;
                        width: 122rem;
                        height: 30rem;
                        background: #FBD7D7;
                        border: 1rem solid #EF5656;
                        border-radius: 4rem;
                        text-align: center;
                        line-height: 30rem;
                        color: #EF5656;
                        box-sizing: border-box;
                    }
                }
            }
        }
    }
}
</style>