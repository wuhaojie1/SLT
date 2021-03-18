<template>
    <div id="userauth">
        <div class="optype">{{$t('identifi.identifitext')}}</div>
        <div class="auth-content">
            <div class="name-con">
                <div class="name-text">{{$t('identifi.truename')}}:</div>
                <input type="text" :placeholder="$t('identifi.addname')" class="name-input">
            </div>
            <div class="num-con">
                <div class="num-text">{{$t('identifi.idnum')}}:</div>
                <input type="text" :placeholder="$t('identifi.addidnum')" class="num-input">
            </div>
            <div class="face-text">{{$t('identifi.uploadface')}}</div>
            <div class="foce-con">
                <el-upload :on-success="handleAvatarSuccess"
                           :before-upload="beforeUpload"
                            action="123"
                            accept=".jpg .jpeg .png">
                    <img style="{width: 314rem;height: 219rem;}" src="../../static/img/user/idcardup.png" alt="">
                </el-upload>
            </div>
            <div class="back-text">{{$t('identifi.uploadback')}}</div>
            <div class="back-con">
                <el-upload>
                <img style="{width: 314rem;height: 219rem;}" src="../../static/img/user/idcarddown.png" alt="">
                </el-upload>
            </div>
            <div class="auth-button-con">
                <div class="auth-button">{{$t('identifi.goidenrifi')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userAuth",
        methods:{
            beforeUpload(file){
                console.log(file)
            }
        }
    }
</script>

<style scoped lang="less">
#userauth{
    .optype{
        width: 990rem;
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        /*float: left;*/
        margin-left: 40rem;
        margin-top: 24rem;
        text-align: left;
    }
    .auth-content{
        width: 433rem;
        height: auto;
        margin: 0 auto;
        .name-con{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;
            .name-text{
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }
            .name-input{
                width: 350rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-indent: 10rem;
            }
        }
        .num-con{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .num-text{
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }
            .num-input{
                width: 350rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-indent: 10rem;
            }
        }
        .face-text{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            width: 100%;
            text-align: left;
            margin-top: 26rem;
        }
        .foce-con{
            width: 314rem;
            height: 219rem;
            /*background: #000;*/
            margin-top: 24rem;
            margin-left: 88rem;
        }
        .back-text{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            width: 100%;
            text-align: left;
            margin-top: 26rem;
        }
        .back-con{
            width: 314rem;
            height: 219rem;
            /*background: #000;*/
            margin-top: 24rem;
            margin-left: 88rem;
        }
        .auth-button-con{
            width: 100%;
            margin-left: 95rem;
            margin-top: 60rem;
            margin-bottom: 107rem;
            .auth-button{
                width: 300rem;
                height: 46rem;
                background: #00B4FC;
                border-radius: 4px;
                color: #FFFFFF;
                text-align: center;
                line-height: 46rem;
            }
        }
    }
}
</style>