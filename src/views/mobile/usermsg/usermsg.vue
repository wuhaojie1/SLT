<template>
    <div id="usermsg">
        <Mheader></Mheader>
        <div class="msg-con">
            <div class="base-user-msg-con">
                <div class="user-img"></div>
                <div class="user-msg">
                    <div class="username">130****3775</div>
                    <div class="userid">ID:JCJDVJDS</div>
                </div>
            </div>
            <div class="self-center" v-for="item in usermsgarr" :key="item.index">
                <div class="self-center-text">{{item.name}}</div>
                <img class="self-center-img" :src="item.img" alt="">
            </div>
            <div class="out-button">退出</div>
        </div>
    </div>
</template>

<script>
    import Mheader from "../../../components/header/Mheader";
    export default {
        name: "usermsg",
        components:{Mheader},
        data(){
            return{
                usermsgarr:[
                    {
                        name:'个人中心',
                        img:`${require('../../../static/img/user/arrow.png')}`
                    },
                    {
                        name:'身份认证',
                        img:`${require('../../../static/img/user/arrow.png')}`
                    },
                    {
                        name:'个人中心',
                        img:`${require('../../../static/img/user/arrow.png')}`
                    },
                    {
                        name:'资产',
                        img:`${require('../../../static/img/user/arrow.png')}`
                    },
                    {
                        name:'订单',
                        img:`${require('../../../static/img/user/arrow.png')}`
                    },
                    {
                        name:'买币',
                        img:`${require('../../../static/img/user/arrow.png')}`
                    },
                    {
                        name:'收货地址',
                        img:`${require('../../../static/img/user/arrow.png')}`
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
#usermsg{
    width: 750rem;
    height: calc(100vh - 186rem);
    /*padding-bottom: 88rem;*/
    .msg-con{
        width: 750rem;
        height: calc(100vh - 274rem);
        background-color: #02031E;
        border-top: 1rem solid #000000;
        .base-user-msg-con{
            width: 750rem;
            height: 169rem;
            border-bottom: 1rem solid #000000;
            display: flex;
            justify-content: flex-start;
            .user-img{
                width: 88rem;
                height: 88rem;
                background-color: #fff;
                margin-left: 40rem;
                margin-top: 40rem;
                border-radius: 88rem;
                img{
                    width: 88rem;
                    height: 88rem;
                }
            }
            .user-msg{
                height: 88rem;
                width: 300rem;
                margin-top: 40rem;
                text-align: left;
                margin-left: 30rem;
                .username{
                    font-size: 32rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #FFFFFF;
                    margin-top: 9rem;
                }
                .userid{
                    font-size: 24rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #9AA5B5;
                    margin-top: 20rem;
                }
            }
        }
        .self-center{
            width: 750rem;
            height: 88rem;
            display: flex;
            justify-content: space-between;
            .self-center-text{
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                margin-left: 40rem;
                line-height: 88rem;
            }
            .self-center-img{
                width: 14rem;
                height: 24rem;
                margin-right: 40rem;
                margin-top: 34rem;
            }
        }
        .out-button{
            width: 670rem;
            height: 88rem;
            background: #00B4FC;
            border-radius: 10rem;
            color: #FFFFFF;
            text-align: center;
            line-height: 88rem;
            font-size: 34rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            margin-left: 40rem;
            margin-top: 219rem;
        }
    }
}
</style>