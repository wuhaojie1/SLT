<template>
    <div class="bottomBar">
        <div class="top">
            <img src="../../../static/img/index/userAvatar.png" alt="">
            <div class="topCenter">
                <div>{{userInfo.username}}</div>
                <div>ID: {{userInfo.userId}}</div>
            </div>
            <div class="topRight">{{$t('userInfo.exit')}}</div>
        </div>
        <!-- <div class="bottom">
            <div class="bottomLeft">
                <img style="width:28rem;height:27rem" src="../../../static/img/index/compute.png" alt="">
                <div>电脑版</div>
            </div>
            <div class="bottomRight">
                <div>简体中文</div>
                <img style="width:16rem;height:11rem" src="../../../static/img/index/triangle.png" alt="">
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    name:'bottoBar',
    data(){
        return{
            userInfo:{}
        }
    },
    mounted(){
        this.userInfo = this.localStorage.get('usermsg')
    }
}
</script>

<style lang='less' scoped>
.bottomBar{
    background-color: #FAFAFA;
    padding: 45rem 35rem 28rem 35rem;
    border-bottom: solid 1rem #F2F3F4;
    height: 100rem;
    .top{
        display: flex;
        // border-bottom: solid 1rem #E4E7ED;
        padding-bottom: 40rem;
        img{
            width: 64rem;
            height: 64rem;
            border-radius: 32rem;
        }
        .topCenter{
            flex-grow: 1;
            padding-left: 22rem;
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #2C3E56;
            div:nth-child(2){
                padding-top: 12rem;
                font-size: 26rem;
                color: #9AA5B5;

            }
        }
        .topRight{
            width: 140rem;
            height: 60rem;
            background: #FAFAFA;
            border: 2rem solid #E4E7ED;
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #8695A5;
            text-align: center;
            line-height: 60rem;

        }
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 35rem;
        .bottomLeft,.bottomRight{
            display: flex;
            align-items: center;
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #8695A5;

        }
        .bottomLeft{
            div{
                padding-left: 18rem;
            }
        }
        .bottomRight{
            div{
                padding-right: 16rem;
            }
        }
    }
}
</style>