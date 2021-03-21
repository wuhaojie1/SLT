<template>
    <div class="notice">
        <div class="mask"></div>
        <div class="noticeBox">
            <div class="title">{{$t('notice.title')}}</div>
            <div class="content">
                <div class="contentTitle">{{$t('notice.text')}}</div>
                <div class="contentText">{{$t('notice.content')}}
                </div>
            </div>
            <div class="btn">{{$t('notice.iknow')}}</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.notice{
    .mask{
        width: 100vw;
        height: 100vh;
        background: #000000;
        opacity: 0.5;
        position: fixed;
        left: 0;
        top: 0;
        z-index:1;

    }
     .noticeBox{
        width: 400rem;
        height: 555rem;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background-image: url('../../static/img/notice/noticeFrame.png');
        background-size: 100% 100%;
        z-index:1;
        box-sizing: border-box;
        padding-top:278rem;
        .title{
            font-size: 30rem;
            font-family: PangMenZhengDao;
            font-weight: 400;
            color: #000000;
        }
        .content{
            padding: 34rem 60rem 27rem 44rem;
            text-align: left;
            .contentTitle{
                font-size: 20rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #000000;
                padding-bottom: 19rem;
            }
            .contentText{
                font-size: 18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #AFB1B3;
                line-height: 28rem;
            }
        }
        .btn{
            width: 260rem;
            height: 50rem;
            background: #082850;
            border-radius: 25rem;
            margin: 0 auto;
            font-size: 20rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            text-align: center;
            line-height: 50rem;
        }

    }
}
</style>