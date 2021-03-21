<template>
    <div id="msglist">
        <Mheader></Mheader>
        <div class="msg-head">
            <div class="msg-head-text">{{this.$t('msglist.msglist')}}</div>
            <div class="hide"><input type="checkbox" class="checkbox">{{this.$t('msglist.hidden')}}</div>
            <div class="allread">{{this.$t('msglist.allread')}}</div>
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
                        name:'xxxxxxx！！！',
                        detail:'xxxxxxx',
                        time:'2021-02-25 11:20:45',
                        flag:false
                    },
                    {
                        name:'xxxxx',
                        detail:'xxxxxx',
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