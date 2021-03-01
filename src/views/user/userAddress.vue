<template>
    <div id="useradress">
        <div class="adress-text">收货地址</div>
        <div class="msgcon">
            <div class="name-con">
                <div class="name-text">收货人姓名:</div>
                <input type="text" placeholder="请输入收货人姓名" class="name-input">
            </div>
            <div class="ad-msg-con">
                <div class="ad-msg-text">地址信息:</div>
                <input type="text" placeholder="请输入省/市/区/街道" class="ad-msg-input">
            </div>
            <div class="detail-msg-con">
                <div class="detail-msg-text">详细地址:</div>
                <input type="text" placeholder="请输入详细地址信息，如小区、门牌号" class="detail-msg-input">
            </div>
            <div class="name-con">
                <div class="name-text">邮政编码:</div>
                <input type="text" placeholder="请输入邮政编码" class="name-input">
            </div>
            <div class="ad-msg-con">
                <div class="ad-msg-text">手机号码:</div>
                <input type="text" placeholder="请输入手机号码" class="ad-msg-input">
            </div>
            <div class="setadress">
                <input type="checkbox" class="check">
                设为默认地址
            </div>
            <div class="save-button">保存</div>
        </div>
        <div class="adress-num-text">
            <div class="imgcon"></div>
            <div class="num-text">已保存两个地址</div>
        </div>
        <div class="adress-num-con">
            <address-table :dataList="dataList"></address-table>
        </div>
    </div>
</template>

<script>
    import addressTable from '../../components/AddressTable/AddressTable'
    export default {
        name: "userAddress",
        components:{addressTable},
        data(){
            return{
                dataList:[
                    {
                        name:'王**',
                        address:'成都市 郫都区 中心大道二段',
                        daddress:'致远居8号楼8243',
                        code:'000000',
                        phone:'17824561783',
                        useaddress:true
                    },
                    {
                        name:'李**',
                        address:'成都市 郫都区 中心大道二段',
                        daddress:'致远居8号楼8247',
                        code:'000001',
                        phone:'17824561783',
                        useaddress:false
                    }
                ]
            }
        }

    }
</script>

<style scoped lang="less">
#useradress{
    .adress-text{
        width: 990rem;
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        /*float: left;*/
        margin-left: 40rem;
        margin-top: 24rem;
        text-align: left;
    }
    .msgcon{
        width: 450rem;
        height: auto;
        margin-left: 69rem;
        margin-top: 28rem;
        .name-con{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;
            .name-text{
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }
            .name-input{
                width: 300rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
            }
        }
        .ad-msg-con{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;
            .ad-msg-text{
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }
            .ad-msg-input{
                width: 300rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
            }
        }
        .detail-msg-con{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;
            .detail-msg-text{
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 50rem;
            }
            .detail-msg-input{
                width: 300rem;
                height: 50rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
            }
        }
        .setadress{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            width: 428rem;
            .check{
                margin-right: 10rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
            }
        }
        .save-button{
            width: 200rem;
            height: 46rem;
            background: #00B4FC;
            border-radius: 2rem;
            color: #FFFFFF;
            line-height: 46rem;
            margin-top: 26rem;
            margin-bottom: 25rem;
            margin-left: 144rem;
        }
    }
    .adress-num-text{
        width: 990rem;
        height: 32rem;
        background: #F2F6FA;
        border-radius: 4rem;
        margin-left: 40rem;
        line-height: 32rem;
        .imgcon{
            margin-left: 15rem;
            margin-right: 9rem;
            width: 18rem;
            height: 18rem;
            border-radius: 18rem;
            background: #000;
            float: left;
            margin-top: 7rem;
        }
        .num-text{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            text-align: left;
        }
    }
    .adress-num-con{
        width: 990rem;
        margin-left: 40rem;
        margin-top: 25rem;
    }
}
</style>