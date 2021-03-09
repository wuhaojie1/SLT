<template>
    <div class="login" :style="{ 'backgroundImage':'url('+ bgc +')' }">
        <div class="centercon">
            <div class="loginbox">
                <div class="loginbox-left">
                    <div class="left-text-top">S L T coin</div>
                    <div class="left-text-down">SLTcoin 团队欢迎任何代购币购买或者业务查询。</div>
                </div>
                <div class="loginbox-right" :style="{ 'backgroundImage':'url('+ loginbgc +')' }">
                    <div class="user">用户登录</div>
                    <div class="username">
                        <image class="username-img"></image>
                        <input class="username-input" type="text" v-model="username" placeholder="请输入您的用户名">
                    </div>
                    <div class="password">
                        <image class="password-img"></image>
                        <input class="password-input" type="password" v-model="password" placeholder="请输入您的密码">
                    </div>
                    <div class="userchoice">
                        <div class="remberpsw">
                            <!--                            <input type="checkbox" class="checkbox">-->
                            忘记密码?
                        </div>
                        <router-link to="regiest">
                            <div class="regiest">立即注册?</div>
                        </router-link>
                    </div>
                    <div class="loginbutton" @click="login">登录</div>
                </div>
            </div>
        </div>
        <!--        </div>-->
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            bgc: `${require('../../static/img/login/SLTcoin.png')}`,
            loginbgc: `${require('../../static/img/login/loginbg.png')}`,
            password: "user123",
            username: "user123",
        }
    },
    mounted() {
        this.localStorage.set('isLogin', false)
    },
    methods: {
        login() {
            let postData = {
                password: this.password,
                username: this.username,
            }
            this.axios({
                url: 'wx/auth/login',
                method: 'post',
                params: JSON.stringify(postData),
            }).then((res) => {
                // console.log(res)
                let data = res.data
                if (res.errno === 0) {
                    let user = {
                        avatarUrl: data.userInfo.avatarUrl,
                        nickName: data.userInfo.nickName,
                    }
                    // console.log(user)
                    this.localStorage.set('token', data.token)
                    this.localStorage.set('user', user)
                    this.localStorage.set('isLogin', true)

                    this.$router.push({
                        name: 'index',
                    })
                }
            })
        }
    }

}
</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
}

.login {
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

    .centercon {
        width: 1446rem;
        height: 100%;
        margin: 0 auto;

        .loginbox {
            height: 100%;
            width: 100%;
            vertical-align: center;
            position: relative;

            .loginbox-left {
                position: absolute;
                top: 100rem;
                left: 40rem;
                color: #FFFFFF;

                .left-text-top {
                    font-size: 60rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    text-align: left;
                    padding-bottom: 34rem;
                }

                .left-text-down {
                    font-size: 26rem;
                    font-family: Source Han Sans CN;
                    font-weight: 300;
                }
            }

            .loginbox-right {
                /*margin-top: 100rem;*/
                position: absolute;
                right: 0rem;
                /*top: 100rem;*/
                width: 570rem;
                height: 486rem;
                /*background: rgba(0, 183, 252, 0.33);*/
                border: 0rem solid #012162;
                top: 290rem;
                background-repeat: no-repeat !important;
                background-size: cover !important;

                .user {
                    font-size: 30rem;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #FFFFFF;
                    padding-top: 66rem;
                }

                .username {
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
                    box-sizing: border-box;

                    .username-input {
                        width: 100%;
                        line-height: 58rem;
                        color: #FFFFFF;
                        padding-left: 62rem;
                        box-sizing: border-box;
                    }
                }

                .password {
                    margin-left: 86rem;
                    width: 400rem;
                    height: 58rem;
                    background: #002E73;
                    border: 0px solid #00B7FC;
                    opacity: 0.5;
                    border-radius: 8rem;
                    color: #FFFFFF;

                    .password-input {
                        width: 100%;
                        line-height: 58rem;
                        color: #FFFFFF;
                        padding-left: 62rem;
                        box-sizing: border-box;
                    }
                }

                .userchoice {
                    padding-top: 24rem;
                    padding-bottom: 37rem;

                    .remberpsw {
                        height: 20rem;
                        line-height: 20rem;
                        float: left;
                        font-size: 14rem;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #E6E6E6;
                        margin-left: 86rem;
                    }

                    .regiest {
                        float: right;
                        font-size: 14rem;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #00B7FC;
                        margin-right: 86rem;
                        /*padding-top: 8rem;*/
                    }
                }

                .loginbutton {
                    clear: both;
                    width: 400rem;
                    height: 58rem;
                    font-size: 26rem;
                    color: #FFFFFF;
                    background: linear-gradient(0deg, #0063FE 0%, #00B9FE 100%);
                    border-radius: 8rem;
                    text-align: center;
                    line-height: 58rem;
                    margin-left: 86rem;
                }
            }
        }
    }
}

</style>