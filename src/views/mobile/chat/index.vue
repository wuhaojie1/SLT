<template>
    <div class="chat">
        <PageHeader :isShowRight="true" :rightIcon="true"></PageHeader>
        <div class="chatBox">
            <div class="chatTop">
                <img style="width:14rem;height:24rem" src="../../../static/img/chat/arrowleft.png" alt="">
                <div>大荣交易所</div>
            </div>
            <div class="chatContent">
                <div class="tips">以上聊天记录</div>
                <div class="leftChat">
                    <div class="avatar">大</div>
                    <div class="leftMessageBox">您好，有什么可以帮您？
                        <img class="arrow" src="../../../static/img/chat/greyarrow.png" alt="">
                    </div>
                </div>
                <div class="rightChat">
                    <div class="rightMessageBox">
                        我想问一下，这个币？
                        <img class="arrow" src="../../../static/img/chat/bluearrow.png" alt="">
                    </div>
                    <div class="avatar">
                        <img style="width:68rem;height:68rem" src="../../../static/img/chat/avatar.png" alt="">
                    </div>
                </div>
                <div class="tips">下午 17:38</div>
            </div>
            <div class="chatInput">
                <div class="input">
                    <input type="text" placeholder="请输入你想说的话...">
                </div>
                <div class="send">发送</div>
            </div>
        </div>
        <Notice></Notice>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import Notice from '../../../components/mobileComponents/notice/notice.vue';
export default {
    components:{
        PageHeader,
        Notice
    }
}
</script>

<style lang='less' scoped>
.chat{
    font-family: Source Han Sans CN;
    .chatBox{
        height: calc(100vh - 88rem);
        display: flex;
        flex-direction: column;
        .chatTop{
            width: 750rem;
            height: 88rem;
            background: #FFFFFF;
            box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
            display: flex;
            padding: 0rem 35rem ;
            box-sizing: border-box;
            align-items: center;
            div{
                font-size: 30rem;
                color: #444444;
                flex-grow: 1;
                text-align: center;
                transform: translateX(-8rem);
                
            }
        }
        .chatContent{
            flex-grow: 1;
            .tips{
                font-size: 20rem;
                font-weight: 400;
                color: #A1AAB8;
                padding: 25rem 0rem 0rem 0rem;
            }
            .leftChat{
                margin-left: 35rem;
                display: flex;
                margin-top: 50rem;
                .avatar{
                    width: 68rem;
                    height: 68rem;
                    background: #22BF7C;
                    border-radius: 34rem;
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 68rem;
                }
                .leftMessageBox{
                    font-size: 28rem;
                    font-weight: 400;
                    color: #444444; 
                    background: #F0F4F8;
                    border-radius: 10rem;
                    padding: 22rem 32rem;
                    position: relative;
                    left: 35rem;
                    .arrow{
                        width: 12rem;
                        height: 18rem;
                        position: absolute;
                        left: -12rem;
                        top: 10rem;
                        transform: rotate(0deg);
                    }

                }
            }
            .rightChat{
                display: flex;
                justify-content: flex-end;
                margin-right: 35rem;
                margin-top: 70rem;
                .rightMessageBox{
                    background: #00B4FC;
                    border-radius: 10rem;
                    font-weight: 400;
                    color: #FFFFFF;
                    position: relative;
                    padding: 22rem 35rem;
                    right: 35rem;
            
                    .arrow{
                        position: absolute;
                        width: 12rem;
                        height: 18rem;
                        right: -12rem;
                        top: 10rem;
                    }
                    
                }
                .avatar{
                   width:68rem;
                   height:68rem;
                   border-radius: 34rem;
                }
            }
        }
        .chatInput{
            width: 750rem;
            height: 98rem;
            background: #FFFFFF;
            display: flex;
            align-items: center;
            padding: 0rem 35rem;
            box-sizing: border-box;
            .input{
                width: 520rem;
                height: 72rem;
                background: #F5F6F7;
                border-radius: 36rem; 
                display: flex;
                align-items: center;
                padding: 0rem 36rem;
                box-sizing: border-box;
            }
            .input::-webkit-input-placeholder { 
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
            }
            .input::-webkit-input-placeholder {
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
            }
            /* 火狐浏览器 */
            .input::-moz-placeholder {
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
            }
            .send{
                width: 140rem;
                height: 72rem;
                background: #00B4FC;
                border-radius: 36rem;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
                line-height: 72rem;
                margin-left: 20rem;
            }
        }
    }
    
}
</style>