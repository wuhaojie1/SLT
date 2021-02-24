<template>
    <div class="login" :style="{ 'backgroundImage':'url('+ bgc +')' }">
        <div class="centercon">
            <div class="loginbox">
                <div class="loginbox-left">
                    <div class="left-text-top">S L T coin</div>
                    <div class="left-text-down">SLTcoin 团队欢迎任何代购币购买或者业务查询。</div>
                </div>
                <div class="loginbox-right" :style="{ 'backgroundImage':'url('+ loginbgc +')' }">
                    <div class="user">用户注册</div>
                    <div class="username">
                        <image class="username-img"></image>
                        <input class="username-input" type="text" placeholder="请输入您的用户名">
                    </div>
                    <div class="password">
                        <image class="password-img"></image>
                        <input class="password-input" type="password" placeholder="请输入您的密码">
                    </div>
                    <div class="getcodes">
                        <input type="number" class="numcontent">
                        <div class="getbutton">获取验证码</div>
                    </div>
                    <div class="loginbutton">注册</div>
                </div>
            </div>
        </div>
        <!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                bgc:`${require('../../static/img/login/SLTcoin.png')}`,
                loginbgc:`${require('../../static/img/login/loginbg.png')}`
            }
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .login{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        /*z-index: -10;*/
        /*image{*/
        /*    width: 1920rem;*/
        /*    height: 1080rem;*/
        /*    position: fixed;*/
        /*    top: 0;*/
        /*    left: 0;*/
        /*    z-index: -10;*/
        /*}*/
        .centercon{
            width: 1446rem;
            height: 100%;
            margin: 0 auto;
            .loginbox{
                height: 100%;
                width: 100%;
                vertical-align: center;
                position: relative;
                .loginbox-left{
                    position: absolute;
                    top: 100rem;
                    left: 40rem;
                    color: #FFFFFF;
                    .left-text-top{
                        font-size: 60rem;
                        font-family: Source Han Sans CN;
                        font-weight: 500;
                        text-align: left;
                        padding-bottom: 34rem;
                    }
                    .left-text-down{
                        font-size: 26rem;
                        font-family: Source Han Sans CN;
                        font-weight: 300;
                    }
                }
                .loginbox-right{
                    /*margin-top: 100rem;*/
                    position: absolute;
                    right: 0rem;
                    /*top: 100rem;*/
                    width: 570rem;
                    height: 524rem;
                    /*background: rgba(0, 183, 252, 0.33);*/
                    border: 0rem solid #012162;
                    top: 290rem;
                    background-repeat: no-repeat !important;
                    background-size: 100%;
                    .user{
                        font-size: 30rem;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #FFFFFF;
                        padding-top: 66rem;
                    }
                    .username{
                        margin-top: 45rem;
                        margin-bottom: 20rem;
                        margin-left: 86rem;
                        width: 400rem;
                        height: 58rem;
                        background: #002E73;
                        border: 0px solid #00B7FC;
                        opacity: 0.5;
                        border-radius: 8rem;
                        color: #FFFFFF;
                        .username-input{
                            width: 350rem;
                            line-height: 58rem;
                            color: #FFFFFF;
                            padding-left: 50rem;
                        }
                    }
                    .password{
                        margin-left: 86rem;
                        width: 400rem;
                        height: 58rem;
                        background: #002E73;
                        border: 0px solid #00B7FC;
                        opacity: 0.5;
                        border-radius: 8rem;
                        color: #FFFFFF;
                        .password-input{
                            width: 350rem;
                            line-height: 58rem;
                            color: #FFFFFF;
                            padding-left: 50rem;
                        }
                    }
                    .getcodes{
                        .numcontent{
                            width: 190rem;
                            height: 58rem;
                            background: #002E73;
                            border: 3px solid #00B7FC;
                            opacity: 0.5;
                            border-radius: 10rem;
                            margin-left: 86rem;
                            float: left;
                            margin-top: 20rem;
                            margin-bottom: 35rem;
                        }
                        .getbutton{
                            width: 190rem;
                            height: 58rem;
                            padding-top: 3rem;
                            background: #333333;
                            border-radius: 10px;
                            float: right;
                            margin-right: 86rem;
                            font-size: 20rem;
                            color: #E6E6E6;
                            line-height: 58rem;
                            text-align: center;
                            margin-top: 20rem;
                            margin-bottom: 35rem;
                        }
                    }
                    /*.userchoice{*/
                    /*    padding-top: 24rem;*/
                    /*    padding-bottom: 37rem;*/
                    /*    .remberpsw{*/
                    /*        height: 20rem;*/
                    /*        line-height: 20rem;*/
                    /*        float: left;*/
                    /*        font-size: 14rem;*/
                    /*        font-family: Microsoft YaHei;*/
                    /*        font-weight: 400;*/
                    /*        color: #E6E6E6;*/
                    /*        margin-left: 86rem;*/
                    /*    }*/
                    /*    .regiest{*/
                    /*        float: right;*/
                    /*        font-size: 14rem;*/
                    /*        font-family: Microsoft YaHei;*/
                    /*        font-weight: 400;*/
                    /*        color: #00B7FC;*/
                    /*        margin-right: 86rem;*/
                    /*        padding-top: 8rem;*/
                    /*    }*/
                    /*}*/
                    .loginbutton{
                        clear: both;
                        width: 400rem;
                        height:58rem;
                        font-size: 26rem;
                        color: #FFFFFF;
                        background: linear-gradient(0deg, #0063FE 0%, #00B9FE 100%);
                        border-radius: 8rem;
                        text-align: center;
                        line-height: 58rem;
                        margin-left: 86rem;
                        margin-bottom: 68rem;
                    }
                }
            }
        }
    }

</style>