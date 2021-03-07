<template>
    <div class="login" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
        <div class="header">
            <img :src="sltlogo" alt="" class="sltlogo">
            <!--            <img :src="userIcon" alt="" class="userIcon">-->
        </div>
        <div class="login-wrap">
            <div class="logo">
                <img :src="logo" alt="">
            </div>
            <div class="login-box">
                <div class="phone">
                    <img :src="user" alt="" class="img">
                    <input type="text" class="input" placeholder="请输入手机号">
                </div>
                <div class="password">
                    <img :src="lock" alt="" class="img">
                    <input type="text" class="input" placeholder="请输入密码">
                </div>
            </div>
            <div class="loginBtn">
                <div class="btn">登录</div>
            </div>
            <!--            <div class="tip">已有账号，<span>立即登录</span></div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                sltlogo: `${require('@/static/img/index/sltlogo_60x120_white.png')}`,
                // userIcon: `${require('@/static/img/index/userIcon.png')}`,
                section3Bg: `${require('@/static/img/login/loginBgM.png')}`,
                logo: `${require('@/static/img/login/iconM.png')}`,
                user: `${require('@/static/img/login/user.png')}`,
                lock: `${require('@/static/img/login/lock.png')}`,
            }
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .login {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-sizing: border-box;

        .header {
            width: 750rem;
            height: 88rem;
            background: #02031E;
            display: flex;
            box-sizing: border-box;
            justify-content: space-between;
            align-items: center;
            padding: 0 35rem;

            .sltlogo {
                width: 80rem;
                height: 42rem;
            }

            /*.userIcon {
                width: 38rem;
                height: 42rem;
            }*/
        }

        .login-wrap {
            .logo {
                margin-top: 70rem;

                img {
                    width: 320rem;
                    height: 169rem;
                }
            }

            .login-box {

                margin-top: 200rem;

                .phone {
                    margin: 0 auto;
                    width: 550rem;
                    height: 88rem;
                    background: #002E73;
                    border: 2rem solid rgba(0, 183, 252, 0.5);
                    /*opacity: 0.5;*/
                    border-radius: 6rem;
                    position: relative;

                    .input {
                        box-sizing: border-box;
                        padding-left: 88rem;
                        width: 100%;
                        height: 100%;
                    }

                    .img {
                        position: absolute;
                        width: 32rem;
                        height: 32rem;
                        left: 25rem;
                        top: 28rem;
                    }
                }

                .password {
                    margin: 0 auto;
                    width: 550rem;
                    height: 88rem;
                    background: #002E73;
                    border: 2rem solid rgba(0, 183, 252, 0.5);
                    /*opacity: 0.5;*/
                    border-radius: 6rem;
                    margin-top: 40rem;
                    position: relative;

                    .img {
                        position: absolute;
                        width: 32rem;
                        height: 32rem;
                        left: 25rem;
                        top: 28rem;
                    }

                    .input {
                        box-sizing: border-box;
                        padding-left: 88rem;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .loginBtn {
                .btn {
                    margin: 0 auto;
                    margin-top: 85rem;
                    width: 550rem;
                    height: 98rem;
                    background: linear-gradient(180deg, #00B9FE, #0063FE);
                    border-radius: 10rem;
                    font-size: 36rem;
                    font-weight: bold;
                    color: #FFFFFF;
                    line-height: 98rem;
                }
            }
        }
    }
</style>