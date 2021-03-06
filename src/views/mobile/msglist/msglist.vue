<template>
    <div id="msglist">
        <Mheader></Mheader>
        <div class="msg-head">
            <div class="msg-head-text">消息列表</div>
            <div class="hide"><input type="checkbox" class="checkbox">隐藏已读</div>
            <div class="allread">全部标为已读</div>
        </div>
        <div v-for="item in msgarr" :key="item.index">
            <msgitem :msgitem="item"></msgitem>
        </div>
    </div>
</template>

<script>
    import Mheader from "../../../components/header/Mheader";
    import msgitem from "../../../components/msgitem/msgitem";
    export default {
        name: "msglist",
        components:{Mheader,msgitem},
        data(){
            return{
                msgarr:[
                    {
                        name:'挖宝游戏已上线呀！！！',
                        detail:'2月25日至3月5日，报名并参与SLT币合约狂欢节活动，即可参与瓜分10000USDT奖励。' +
                            '活动一︰邀请 好友注册并开通USDT本位永续合约，双方完成任意 金额的USDT.!',
                        time:'2021-02-25 11:20:45',
                        flag:false
                    },
                    {
                        name:'大荣交易所',
                        detail:'可以买哟',
                        time:'2021-02-25 11:20:45',
                        flag: true
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
#msglist{
    height: calc(100vh - 186rem);
    width: 750rem;
    .msg-head{
        width: 100%;
        height: 88rem;
        line-height: 88rem;
        display: flex;
        justify-content: space-between;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
        .msg-head-text{
            font-size: 30rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            width: 120rem;
            margin-left: 36rem;
        }
        .hide{
            font-size: 22rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            width: 134rem;
            margin-left: 200rem;
            .checkbox{
                margin-right: 10rem;
                width: 26rem;
                height: 26rem;
            }
        }
        .allread{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #00B9FE;
            width: 170rem;
            margin-right: 37rem;
        }
    }
}
</style>