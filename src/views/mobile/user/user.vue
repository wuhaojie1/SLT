<template>
    <div class="user">
        <PageHeader></PageHeader>
        <div class="userHeader">
            <span class="headerLeft">{{$t('userInfo.userCenter')}}</span>
            <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
        </div>
        <div class="infoTitle">{{$t('userInfo.basemsg')}}</div>
        <ul class="infoBox">
            <li v-for="item in list" :key="item.text" class="infoItem">
                <div class="itemLeft">{{item.text}}</div>
                <div :style="'color:'+((item.text=='真实姓名:'||item.val=='请输入'||item.val=='请选择')?'#9AA5B5':'#444444')" class="itemCenter">{{item.val}}</div>
                <img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;" :src="require((item.val=='请输入'||item.val=='请选择')?'../../../static/img/user/arrowgrey.png':'../../../static/img/user/arrowdart.png')" alt="">
            </li>
        </ul>
        <div class="saveBtn">保存</div>
        <BottomBar></BottomBar>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import BottomBar from '../../../components/mobileComponents/user/bottomBar.vue';
import Tabbar from '../../../components/mobileComponents/tabbar/tabbar.vue';
export default {
    components:{
        PageHeader,
        BottomBar,
        Tabbar
    },
    data(){
        return{
            list:[
                {text:'用户名:',val:'13028143776',isArrow:true},
                {text:'用ID:',val:'JCJDVJDS',isArrow:false},
                {text:'真实姓名:',val:'*王**.',isArrow:false},
                {text:'性别:',val:'女',isArrow:true},
                {text:'生日:',val:'1988.10.20',isArrow:true},
                {text:'教育程度:',val:'请选择',isArrow:true},
                {text:'所在行业:',val:'请选择',isArrow:true},
                {text:'身份证号:',val:'请输入',isArrow:true}
            ]
        }
    }
}
</script>

<style lang='less' scoped>
.user{
    text-align: left;
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
        .infoItem{
            display: flex;
            justify-content: space-between;
            padding: 34rem 34rem;
            align-items: center;
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            .itemLeft{

            }
            .itemCenter{
                flex-grow: 1;
                text-align: right;
            }
            .itemRight{
                margin-left: 18rem;
            }
        }
        .infoItem:nth-child(5){
            padding-bottom: 60rem;
            border-bottom: solid 15rem #F2F6FA;
        }
        .infoItem:nth-child(6){
            padding-top: 60rem;
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
        margin: 79rem auto 61rem auto;

    }
}
</style>