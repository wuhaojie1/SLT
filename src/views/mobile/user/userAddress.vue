<template>
    <div class="user">
        <PageHeader></PageHeader>
        <div class="addrBox">
            <div class="userHeader">
                <span class="headerLeft">{{$t('userAdress.userAdresstext')}}</span>
                <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
            </div>
            <div class="infoTitle">{{$t('userAdress.addressTitle')}}</div>
            <ul class="infoBox">
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userAdress.name')}}:</div>
                    <input v-model="postData.name" class="itemCenter" type="text" :placeholder="$t('userAdress.pleaseName')">
                </li>
<!--                <li class="infoItem">-->
<!--                    <div class="itemLeft">{{$t('userAdress.Adressmsg')}}:</div>-->
<!--                    <input v-model="postData.address" class="itemCenter" type="text" :placeholder="$t('userAdress.pleaseStreet')">-->
<!--                    <img class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">-->
<!--                </li>-->
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userAdress.msgdetail')}}:</div>
                    <input v-model="postData.addressDetail" class="itemCenter" type="text" :placeholder="$t('userAdress.pleaseAddr')">
                    <img class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">
                </li>
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userAdress.mailnum')}}:</div>
                    <input v-model="postData.areaCode" class="itemCenter" type="text" :placeholder="$t('userAdress.pleaseCode')">
                    <img class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">
                </li>
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userAdress.phonenum')}}:</div>
                    <input v-model="postData.tel" class="itemCenter" type="text" :placeholder="$t('userAdress.pleasePhone')">
                    <img class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">
                </li>
            </ul>
            <div class="saveBtn" @click="saveAddr">{{$t('userAdress.save')}}</div>

            <div class="checkBox">
                <div @click="postData.isDefault=!postData.isDefault" class="check"><i style="color:#00B4FC" v-show="postData.isDefault" class="el-icon-check"></i></div><div class="checkText">{{$t('userAdress.defaultaddress')}}</div>
            </div>
            <!-- <div class="cell">
                <img style="width:18rem;height:18rem" src="../../../static/img/user/tips.png" alt="">
                <span>{{$t('userAdress.savedAddr')}}</span>
            </div> -->
            <div class="addr">
                <ul v-for="item in dataList" :key="item.id">
                    <li>{{item.name}}</li>
                    <li><span>{{item.province+''+item.city+item.county+item.addressDetail}}</span> <div><img @click="alter(item)" style="width:30rem;height:32rem" src="../../../static/img/user/edit.png" alt=""> <img @click="openModa(item)" style="width:30rem;height:32rem;margin-left:40rem" src="../../../static/img/user/remove.png" alt=""></div></li>
                    <li><span>{{item.areaCode}}</span><span>{{item.tel}}</span></li>
                </ul>
            </div>
        </div>
        <BottomBar></BottomBar>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="70%">
            <span>确定删除该地址？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteById">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import BottomBar from '../../../components/mobileComponents/user/bottomBar.vue';
export default {
    components:{
        PageHeader,
        BottomBar
    },
    data(){
        return{
            postData:{
                name: "",//姓名
                address: "",
                addressDetail: "",//详细地址
                isDefault: false,//是否是默认地址
                province: "",//省
                city: "",//市
                county: "",//县
                areaCode: "",
                tel: "",//电话,
            },
            dataList:[],
            dialogVisible:false
        }
    },
    mounted(){
        this.getAddr();
    },
    methods:{
        saveAddr() {
            let isCheck = this.checkForm();
            if(isCheck == false){
                return;
            }
            let postData = {
                name: this.postData.name,//姓名
                tel: this.postData.tel,//电话
                postalCode: this.postData.postalCode,//邮箱
                addressDetail: this.postData.addressDetail,//详细地址
                isDefault: this.postData.isDefault,//是否是默认地址
                province: "四川",//省
                city: "成都市",//市
                county: "郫都区",//县
                areaCode: this.postData.areaCode,
            }
            this.axios({
                url: 'wx/address/save',
                method: 'post',
                params: JSON.stringify(postData),
            }).then((res) => {
                if (res.errno === 0) {
                    this.$notify({
                        title:'保存成功'
                    })
                    //清空输入
                    for (const key in this.postData) {
                        this.postData[key] = '';
                        if(key == 'isDefault'){
                            this.postData[key] = false;
                        }
                    }
                    this.getAddr()
                }else{
                    this.$notify({
                        title:res.errmsg
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },
        //修改
        alter(item) {
            document.documentElement.scrollTop = 0
            this.postData = {
                ...item
            }
            
        },
        //删除
        deleteById() {
            let postData = {
                ...this.curItem,
                deleted: true,
            }
            this.axios({
                url: 'wx/address/delete',
                method: 'post',
                params: JSON.stringify(postData),
            }).then((res) => {
                if (res.errno === 0) {
                    this.getAddr()
                    this.$notify({
                        title:'删除成功'
                    })
                    this.dialogVisible = false
                }
            }).catch(err => {
                console.log(err)
            })
        },

        //打开模态框
        openModa(item){
            this.dialogVisible = true;
            this.curItem = item
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

        //表单校验
        checkForm(){
            for (const key in this.postData) {
                if(key!="isDefault"&&key!="province"&&key!='city'&&key!='county'&&!this.postData[key].trim()){
                    let str = ''
                    switch (key) {
                        case 'name':
                            str = this.$t('userAdress.name')
                            break;
                        case 'address':
                            str = this.$t('userAdress.Adressmsg')
                            break;
                        case 'addressDetail':
                            str = this.$t('userAdress.msgdetail')
                            break;
                        case 'areaCode':
                            str = this.$t('userAdress.mailnum')
                            break;
                        case 'tel':
                            str = this.$t('userAdress.phonenum')
                            break;
                        default:
                            break;
                    }
                    this.$notify({
                        title:this.$t('userAdress.pleasein')+str
                    })
                    return false;
                }
            }
            return true
        }
    }
}
</script>

<style lang='less' scoped>
.user{
    text-align: left;
    min-height: 100vh;
    .addrBox{
        min-height: calc(100vh - 176rem);
        .userHeader{
            width: 750rem;
            height: 88rem;
            background: #FFFFFF;
            box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 36rem;
            box-sizing: border-box;

            .headerLeft{
                width: 121rem;
                height: 29rem;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #333333;
                line-height: 37rem;

            }
        }
        .infoTitle{
            width: 129rem;
            height: 31rem;
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #333333;
            padding: 40rem 0rem 40rem 36rem;

        }
        .infoBox{
            padding: 0rem 34rem;
            .infoItem{
                display: flex;
                justify-content: space-between;
                padding: 34rem 0rem;
                align-items: center;
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                border-bottom: solid 2rem #F5F6F7;
                .itemLeft{
                    margin-right: 5rem;
                }
                .itemCenter{
                    flex-grow: 1;
                    text-align: right;
                }
                input::-webkit-input-placeholder {
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;

                }
                
                input::-moz-placeholder {
                    /* Mozilla Firefox 19+ */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }
                
                input:-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }
                
                input:-ms-input-placeholder {
                    /* Internet Explorer 10-11 */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }
                .itemRight{
                    margin-left: 18rem;
                }
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        .saveBtn{
            width: 670rem;
            height: 88rem;
            background: #00B4FC;
            border-radius: 10rem;
            font-size: 34rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF;
            text-align: center;
            line-height: 88rem;
            margin: 75rem auto 0rem auto;

        }
        .checkBox{
            display: flex;
            align-items: center;
            padding: 30rem 0rem 40rem 35rem;
            .check{
                width: 35rem;
                height: 35rem;
                background: #FFFFFF;
                border: 1rem solid #00B4FC;
                border-radius: 2rem;
                text-align: center;
                line-height: 35rem;

            }
            .checkText{
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                margin-left: 16rem;

            }
        }
        .cell{
            background: #F2F6FA;
            border-radius: 4rem;
            padding: 9rem 35rem;
            
            span{
                font-size: 20rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                padding-left: 10rem;

            }

        }
        .addr{
            padding: 5rem 36rem 0rem 36rem;
            ul{
                list-style: none;
                margin: 0;
                border-bottom: solid 2rem #f5f6f7;
                padding-bottom: 35rem;
                padding-top: 36rem;
                li{
                    font-size: 26rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;

                }
                li:nth-child(2){
                    font-size: 30rem;
                    font-weight: 500;
                    color: #444444;
                    padding: 17rem 0rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                li:nth-child(3){
                    span:nth-child(1){
                        padding-right: 101rem;
                    }
                }
                &:last-child{
                    border: none;
                }
            }
        }
    }  
}
</style>