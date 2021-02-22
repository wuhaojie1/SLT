<template>
    <div class="login">
        <div class="bgimg" :style="{ 'backgroundImage':'url('+ bgc +')' }">
<!--            <image src="../../static/img/login/SLTcoin.png"></image>-->
        </div>
        <div class="centercon">
            <div class="loginbox">
                <div class="loginbox-left">
                    <div class="left-text-top">SLT coin</div>
                    <div class="left-text-down">SLTcoin 团队欢迎任何代购币购买或者业务查询。</div>
                </div>
                <div class="loginbox-right">
                    <div class="user">用户登录</div>
                    <div class="username">
                        <image class="username-img"></image>
                        <input class="username-input" type="text" placeholder="请输入您的用户名">
                    </div>
                    <div class="password">
                        <image class="password-img"></image>
                        <input class="password-input" type="password" placeholder="请输入您的密码">
                    </div>
                    <div class="userchoice">
                        <div class="remberpsw">
                            <input type="checkbox" class="checkbox">
                            记住密码
                        </div>
                        <div class="regiest">立即注册?</div>
                    </div>
                    <div class="loginbutton">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                bgc:`${require('../../static/img/login/SLTcoin.png')}`
            }
        }
    }
</script>

<style scoped lang="less">
    .login{
        width: 100%;
        height: auto;
    *{
        margin: 0;
        padding: 0;
    }
    .bgimg{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        /*image{*/
        /*    width: 1920rem;*/
        /*    height: 1080rem;*/
        /*    position: fixed;*/
        /*    top: 0;*/
        /*    left: 0;*/
        /*    z-index: -10;*/
        /*}*/
    }
    .centercon{
        width: 80%;
        /*height: 1080rem;*/
        margin: 0 auto;
        .loginbox{
            /*height: 629px;*/
            width: 100%;
            vertical-align: center;
            position: relative;
            .loginbox-left{
                position: absolute;
                top: 70rem;
                left: 70rem;
                .left-text-top{
                    font-size: 60rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    text-align: left;
                    padding-bottom: 16rem;
                }
                .left-text-down{
                    font-size: 26rem;
                    font-family: Source Han Sans CN;
                    font-weight: 300;
                }
            }
            .loginbox-right{
                margin-top: 100rem;
                position: absolute;
                right: 60rem;
                top: 100rem;
                width: 228rem;
                height: 230rem;
                background: rgba(0, 183, 252, 0.33);
                border: 0rem solid #012162;
                top: 150rem;
                .user{
                    font-size: 20rem;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #FFFFFF;
                    padding-top: 25rem;
                }
                .username{
                    margin-top: 23rem;
                    margin-bottom: 10.5rem;
                    margin-left: 22.5rem;
                    width: 184rem;
                    height: 29rem;
                    background: #002E73;
                    border: 0px solid #00B7FC;
                    opacity: 0.5;
                    border-radius: 4rem;
                    color: #FFFFFF;
                    .username-input{
                        line-height: 29rem;
                        color: #FFFFFF;
                    }
                }
                .password{
                    margin-left: 22.5rem;
                    width: 184rem;
                    height: 29rem;
                    background: #002E73;
                    border: 0px solid #00B7FC;
                    opacity: 0.5;
                    border-radius: 4rem;
                    color: #FFFFFF;
                    .password-input{
                        line-height: 29rem;
                        color: #FFFFFF;
                    }
                }
                .userchoice{
                    padding-top: 12rem;
                    padding-bottom: 28rem;
                    .remberpsw{
                        float: left;
                        font-size: 7rem;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #E6E6E6;
                        margin-left: 26.5rem;
                        .checkbox{
                            width:9rem;
                            height: 9rem;
                            background: #002E73;
                            background: #002E73;
                            border: 1rem solid #00B7FC;
                            opacity: 0.5;
                            border-radius: 2.5rem;
                        }
                    }
                    .regiest{
                        float: right;
                        font-size: 7rem;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #00B7FC;
                        margin-right: 26.5rem;
                    }
                }
                .loginbutton{
                    clear: both;
                    width: 184rem;
                    height:29rem;
                    background: linear-gradient(0deg, #0063FE 0%, #00B9FE 100%);
                    border-radius: 4rem;
                    text-align: center;
                    line-height: 29rem;
                    margin-left: 22.5rem;
                }
            }
        }
    }
    }

</style>