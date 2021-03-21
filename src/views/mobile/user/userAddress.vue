<template>
    <div class="user">
        <PageHeader></PageHeader>
        <div class="userHeader">
            <span class="headerLeft">{{$t('userAdress.userAdresstext')}}</span>
            <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
        </div>
        <div class="infoTitle">{{$t('userAdress.addressTitle')}}</div>
        <ul class="infoBox">
            <li v-for="item in list" :key="item.text" class="infoItem">
                <div class="itemLeft">{{item.text}}:</div>
                <input v-model="item.val" class="itemCenter" type="text" :placeholder="item.place">
                <img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">
            </li>
        </ul>
        <div class="saveBtn">{{$t('userAdress.save')}}</div>

        <div class="checkBox">
            <div @click="checked=!checked" class="check"><i style="color:#00B4FC" v-show="checked" class="el-icon-check"></i></div><div class="checkText">{{$t('userAdress.defaultaddress')}}</div>
        </div>
        <div class="cell">
            <img style="width:18rem;height:18rem" src="../../../static/img/user/tips.png" alt="">
            <span>{{$t('userAdress.savedAddr')}}</span>
        </div>
        <div class="addr">
            <ul>
                <li>{{$t('userAdress.sichuan')}}</li>
                <li><span>{{$t('userAdress.userAddr')}}</span> <img style="width:30rem;height:32rem" src="../../../static/img/user/edit.png" alt=""></li>
                <li><span>{{$t('userAdress.userName')}}</span><span>130****3556</span></li>
            </ul>
            <ul>
                <li>{{$t('userAdress.sichuan')}}</li>
                <li><span>{{$t('userAdress.userAddr')}}</span> <img style="width:30rem;height:32rem" src="../../../static/img/user/edit.png" alt=""></li>
                <li><span>{{$t('userAdress.userName')}}</span><span>130****3556</span></li>
            </ul>
        </div>
        <BottomBar></BottomBar>
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
            list:[
                {text:this.$t('userAdress.name'),val:'',isArrow:false,place:this.$t('userAdress.pleaseName')},
                {text:this.$t('userAdress.Adressmsg'),val:'',isArrow:true,place:this.$t('userAdress.pleaseStreet')},
                {text:this.$t('userAdress.msgdetail'),val:'',isArrow:true,place:this.$t('userAdress.pleaseAddr')},
                {text:this.$t('userAdress.mailnum'),val:'',isArrow:true,place:this.$t('userAdress.pleaseCode')},
                {text:this.$t('userAdress.phonenum'),val:'',isArrow:true,place:this.$t('userAdress.pleasePhone')}
            ],
            checked:false
        }
    }
}
</script>

<style lang='less' scoped>
.user{
    text-align: left;
    min-height: 100vh;
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
</style>