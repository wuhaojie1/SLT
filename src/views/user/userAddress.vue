<template>
    <div id="useradress">
        <div class="adress-text">{{$t('userAdress.userAdresstext')}}</div>
        <div class="msgcon">
            <div class="name-con">
                <div class="name-text">{{$t('userAdress.name')}}:</div>
                <input type="text" placeholder="请输入收货人姓名" v-model="postData.name" class="name-input">
            </div>
            <div class="ad-msg-con">
                <div class="ad-msg-text">{{$t('userAdress.Adressmsg')}}:</div>
                <input type="text" placeholder="请输入省/市/区/街道" v-model="postData.address" class="ad-msg-input">
            </div>
            <div class="detail-msg-con">
                <div class="detail-msg-text">{{$t('userAdress.msgdetail')}}:</div>
                <input type="text" placeholder="请输入详细地址信息，如小区、门牌号" v-model="postData.addressDetail" class="detail-msg-input">
            </div>
            <div class="name-con">
                <div class="name-text">{{$t('userAdress.mailnum')}}:</div>
                <input type="text" placeholder="请输入邮政编码" v-model="postData.postalCode" class="name-input">
            </div>
            <div class="ad-msg-con">
                <div class="ad-msg-text">{{$t('userAdress.phonenum')}}:</div>
                <input type="text" placeholder="请输入手机号码" v-model="postData.tel" class="ad-msg-input">
            </div>
            <div class="setadress">
                <input type="checkbox" v-model="postData.isDefault" class="check">
                {{$t('userAdress.defaultaddress')}}
            </div>
            <div class="save-button" @click="saveAddr">{{$t('userAdress.save')}}</div>
        </div>
        <div class="adress-num-text">
<!--            <div class="imgcon">-->
<!--                <img style="{width: 18rem;height: 18rem;}" src="../../static/img/user/addressimg.png" alt="">-->
<!--            </div>-->
<!--            <div class="num-text">已保存两个地址</div>-->
        </div>
        <div class="adress-num-con">
            <address-table :dataList="dataList"
                           @alter="alter"
                           @delete="deleteById"
                           @isDefault="isDefaultClick"></address-table>
        </div>
    </div>
</template>

<script>
import addressTable from '../../components/AddressTable/AddressTable'

export default {
    name: "userAddress",
    components: {addressTable},
    mounted() {
        this.getAddr()
    },
    data() {
        return {
            postData: {
                name: "xxx",//姓名
                tel: "12345611111",//电话
                postalCode: "642150",//邮编
                addressDetail: "xxxxxxxx",//详细地址
                isDefault: false,//是否是默认地址
                province: "xxxx",//省
                city: "xxxx",//市
                county: "xxxxx",//县
                areaCode: "xxxxxx",
                address: "xxxxx",
            },
            dataList: [
                // {
                //     name: '상**',
                //     address: '成都市 郫都区 中心大道二段',
                //     daddress: '致远居8号楼8243',
                //     code: '000000',
                //     phone: '17824561783',
                //     useaddress: true
                // },
                // {
                //     name: '상**',
                //     address: '成都市 郫都区 中心大道二段',
                //     daddress: '致远居8号楼8247',
                //     code: '000001',
                //     phone: '17824561783',
                //     useaddress: false
                // }
            ]
        }
    },
    methods: {
        saveAddr() {
            let postData = {
                name: this.postData.name,//姓名
                tel: this.postData.tel,//电话
                postalCode: this.postData.postalCode,//邮箱
                addressDetail: this.postData.addressDetail,//详细地址
                isDefault: this.postData.isDefault,//是否是默认地址
                province: "四川",//省
                city: "成都市",//市
                county: "郫都区",//县
                areaCode: "810010",
            }
            this.axios({
                url: 'wx/address/save',
                method: 'post',
                params: JSON.stringify(postData),
            }).then((res) => {
                // let data = res.data
                if (res.errno === 0) {
                    // console.log(data)
                    this.getAddr()
                }
            }).catch(err => {
                console.log(err)
            })
        },

        //修改
        alter(item) {
            this.postData = {
                ...item
            }
        },
        //删除
        deleteById(item) {
            let postData = {
                ...item,
                deleted: true,
            }
            this.axios({
                url: 'wx/address/delete',
                method: 'post',
                params: JSON.stringify(postData),
            }).then((res) => {
                if (res.errno === 0) {
                    this.getAddr()
                }
            }).catch(err => {
                console.log(err)
            })
        },

        //设置为默认地址
        isDefaultClick(item){
            // console.log(item)
            let postData = {
                ...item,
                isDefault: true,
            }
            this.axios({
                url: 'wx/address/save',
                method: 'post',
                params: JSON.stringify(postData),
            }).then((res) => {
                if (res.errno === 0) {
                    this.getAddr()
                }
            }).catch(err => {
                console.log(err)
            })
        },

        getAddr() {
            this.axios({
                url: 'wx/address/list',
                method: 'get',
                // params: JSON.stringify(postData),
            }).then((res) => {
                // eslint-disable-next-line no-debugger
                // debugger
                console.log(res)
                let data = res.data
                if (res.errno === 0) {
                    this.getDataList(data.list)
                }
            }).catch(err => {
                console.log(err)
            })
        },

        getDataList(list) {
            let tempArray = [];
            list.forEach(item => {
                // console.log(item)
                // addTime: "2021-03-16 11:37:10"
                // addressDetail: "中心大道二段"
                // areaCode: "810010"
                // city: "成都市"
                // county: "郫都区"
                // deleted: false
                // id: 2
                // isDefault: true
                // name: "啊啊啊"
                // postalCode: "642150"
                // province: "四川"
                // tel: "12345611111"
                // updateTime: "2021-03-16 11:37:10"
                // userId: 1
                if (!item.deleted) {
                    let obj = {
                        ...item,
                        address: item.province + ' ' + item.city + ' ' + item.county,
                        daddress: item.addressDetail,
                        code: item.postalCode,
                        phone: item.tel,
                        useaddress: item.isDefault,
                    }
                    tempArray.push(obj)
                }

            })
            this.dataList = tempArray
        },
    }

}
</script>

<style scoped lang="less">
#useradress {
    .adress-text {
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

    .msgcon {
        width: 402rem;
        height: auto;
        margin-left: 69rem;
        margin-top: 28rem;

        .name-con {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;

            .name-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }

            .name-input {
                width: 300rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-indent: 10rem;
            }
        }

        .ad-msg-con {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;

            .ad-msg-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }

            .ad-msg-input {
                width: 300rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-indent: 10rem;
            }
        }

        .detail-msg-con {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;

            .detail-msg-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 50rem;
            }

            .detail-msg-input {
                width: 300rem;
                height: 50rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-indent: 10rem;
            }
        }

        .setadress {
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            width: 140rem;
            margin-left: 100rem;

            .check {
                margin-right: 10rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
            }
        }

        .save-button {
            width: 200rem;
            height: 46rem;
            background: #00B4FC;
            border-radius: 2rem;
            color: #FFFFFF;
            line-height: 46rem;
            margin-top: 26rem;
            margin-bottom: 25rem;
            margin-left: 100rem;
            float: left;
            cursor: pointer;
        }
    }

    .adress-num-text {
        clear: both;
        width: 990rem;
        height: 32rem;
        background: #F2F6FA;
        border-radius: 4rem;
        margin-left: 40rem;
        line-height: 32rem;

        .imgcon {
            margin-left: 15rem;
            margin-right: 9rem;
            width: 18rem;
            height: 18rem;
            border-radius: 18rem;
            /*background: #000;*/
            float: left;
            margin-top: 2rem;
        }

        .num-text {
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            text-align: left;
        }
    }

    .adress-num-con {
        width: 990rem;
        margin-left: 40rem;
        margin-top: 25rem;
    }
}
</style>