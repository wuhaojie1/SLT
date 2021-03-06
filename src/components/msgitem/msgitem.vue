<template>
    <div class="msgitem">
        <div class="msgitem-con">
            <div class="head">
                <div class="msg-name"> <div class="dot" v-show="msgitem.flag"></div> {{msgitem.name}}</div>
                <div class="detail">{{msgitem.flag?'回复':'详情'}}</div>
            </div>
            <div class="content">
                {{msgitem.detail}}</div>
            <div class="time">{{msgitem.time}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "msgitem",
        props:{
            msgitem:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style scoped lang="less">
.msgitem{
    width: 750rem;
    height: auto;
    .msgitem-con{
        width: 680rem;
        margin: 0 auto;
        border-bottom: 1rem #E4E7Ed solid;
        .head{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 50rem;
            .msg-name{
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                .dot{
                    width: 10rem;
                    height: 10rem;
                    background: #EF5656;
                    border-radius: 50%;
                    float: left;
                    margin-top: 11rem;
                    margin-right: 9rem;
                }
            }
            .detail{
                font-size: 26rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #00B4FC;
            }
        }
        .content{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            text-align: left;
            margin-top: 33rem;
            line-height: 40rem;
        }
        .time{
            font-size: 22rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            text-align: left;
            margin-top: 14rem;
            margin-bottom: 40rem;
        }
    }
}
</style>