<template>
    <div class="message">
        <StickyHeader/>
        <div class="messageBox">
            <div class="top">
                <div class="topContent">
                    <div class="tab" style="height:100%">
                        <img src="../../static/img/messgae/message.png" alt="">
                        <div class="tabItem">消息</div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="theader">
                    <div class="headerLeft">
                        <div>消息列表</div>
                        <div>2条未读</div>
                    </div>
                    <div class="headerRight">
                        <el-checkbox v-model="checked">隐藏已读</el-checkbox>
                        <div class="all">全部标为已读</div>
                    </div>
                </div>

                <ul class="tbody">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="tbodyLeft">
                            <div :class="[item.status?'point':'']">{{item.title}}</div>
                            <div>{{item.text}}</div>
                            <div>{{item.time}}</div>
                        </div>
                        <div class="tbodyRight">{{item.status?'回复':'详情'}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <Bottom/>
    </div>
</template>

<script>
import StickyHeader from '../../components/header/themeStickyHeader.vue';
import Bottom from '../../components/bottom/bottom.vue';
export default {
    components:{
        StickyHeader,
        Bottom
    },
    data() {
      return {
        checked: true,
        list:[
            {title:'挖宝游戏已经上线啦',text:'2月25日至3月5日，报名并参与SLT币合约狂欢节活动，即可参与瓜分10000USDT奖励。活动一︰邀请好友注册并开通USDT本位永续合约，双方完成任意金额的USDT.!',time:'2021-02-25 11:20:45',status:false},
            {title:'挖宝游戏已经上线啦',text:'2月25日至3月5日，报名并参与SLT币合约狂欢节活动，即可参与瓜分10000USDT奖励。活动一︰邀请好友注册并开通USDT本位永续合约，双方完成任意金额的USDT.!',time:'2021-02-25 11:20:45',status:true},
            {title:'挖宝游戏已经上线啦',text:'2月25日至3月5日，报名并参与SLT币合约狂欢节活动，即可参与瓜分10000USDT奖励。活动一︰邀请好友注册并开通USDT本位永续合约，双方完成任意金额的USDT.!',time:'2021-02-25 11:20:45',status:true}
        ]
      }
    },
    methods: {
      
    }
}
</script>

<style lang='less' scoped>
.message{
    padding-top: 75rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    .messageBox{
        min-height: calc(100vh - 75rem - 200rem);
        .top{
            width: 100%;
            height: 90rem;
            background: #041037;
            .topContent{
                width: 1200rem;
                height: 100%;
                margin: 0 auto;
                .tab{
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 14rem;
                    box-sizing: border-box;
                    img{
                        width: 17rem;
                        height: 20rem;
                    }
                    .tabItem{
                        font-size: 14rem;
                        color: #FFFFFF;
                        margin-left: 10rem;
                        position: relative;
                        &::after{
                            content: '';
                                display: block;
                                width: 12rem;
                                height: 4rem;
                                background: #00B9FE;
                                border-radius: 2rem;
                                position: absolute;
                                bottom: -7rem;
                                left: 50%;
                                transform: translateX(-50%);

                        }
                    }
                }
            }
        }
        .content{
            width: 1200rem;
            height: 100%;
            border: 1rem solid #E4E7ED;
            margin: 20rem auto 0 auto;
    
            .theader{
                width: 100%;
                height: 50rem;
                background: #F8FAFC;
                border-bottom: 1rem solid #E4E7ED;
                display: flex;
                justify-content: space-between;
                padding: 17rem 26rem 18rem 17rem;
                box-sizing: border-box;
                .headerLeft{
                    display: flex;
                    align-items: flex-end;
                    div:nth-child(1){
                        font-size: 14rem;
                        color: #444444;

                    }
                    div:nth-child(2){
                        font-size: 10rem;
                        color: #9AA5B5;
                        padding-left: 4rem;

                    }
                }
                .headerRight{
                    display: flex;
                    align-items: center;
                    
                   
                    .all{
                         padding-left: 10rem;
                         font-size: 14rem;
                        color: #00B9FE;
                        line-height: 37rem;
                    }

                }

            }
            .tbody{
                list-style: none;
                padding: 0;
                margin: 0;
                
                li{
                    width: 1200rem;
                    height: 122rem;
                    padding: 25rem 26rem;
                    box-sizing: border-box;
                    text-align: left;
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    text-indent: 7rem;
                    .tbodyLeft{
                        flex-grow: 1;
                        div:nth-child(1){
                            font-size: 14rem;
                            color: #444444;
                            padding-bottom: 13rem;
                            position: relative;

                        }
                        .point{
                            &::before{
                                content: '·';
                                display: block;
                                width: 6rem;
                                height: 6rem;
                                background: #EF5656;
                                border-radius: 50%;
                                position: absolute;
                                left: -5rem;
                                transform: translateY(50%);

                            }
                        }
                        div:nth-child(2){
                            font-size: 14rem;
                            color: #9AA5B5;
                            padding-bottom: 20rem;

                        }
                        div:nth-child(3){
                            font-size: 12rem;
                            color: #9AA5B5;

                        }
                    }
                    .tbodyRight{
                        width: 46rem;
                        height: 14rem;
                        font-size: 14rem;
                        color: #00B4FC;
                        line-height: 37rem;
                        text-align: right;

                    }
                    &::after{
                        position: absolute;
                        content: '';
                        display: block;
                        width: 1150rem;
                        height: 1rem;
                        background: #E4E7ED;
                        bottom: 0;

                    }
                    &:last-child{
                        &::after{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 1150rem;
                            height: 1rem;
                            background: red;
                            bottom: 0;
                            display: none;
                        }
                    }
                    &:hover{
                        background-color: #F2F5FA;
                    }
                }
            }

        }
    }
}
</style>