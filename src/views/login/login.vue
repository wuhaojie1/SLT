<template>
    <div class="login" :style="{ 'backgroundImage':'url('+ bgc +')' }">
        <div class="centercon">
            <div class="loginbox">
                <div class="loginbox-left">
                    <div class="left-text-top">S L T coin</div>
                    <div class="left-text-down">SLTcoin {{ $t('login.welcome') }}</div>
                </div>
                <div class="loginbox-right" :style="{ 'backgroundImage':'url('+ loginbgc +')' }">
                    <div class="user">{{ $t('login.logintext') }}</div>
                    <div class="username">
                        <img class="username-img" src="../../static/img/login/user.png"/>
                        <input class="username-input" type="text" v-model="username"
                               :placeholder="$t('login.username')">
                    </div>
                    <div class="password">
                        <img class="password-img" src="../../static/img/login/lock.png"/>
                        <input class="password-input" type="password" v-model="password"
                               :placeholder="$t('login.userpsw')">
                    </div>
                    <div class="userchoice">
<!--                        <div class="remberpsw">
                            &lt;!&ndash;                            <input type="checkbox" class="checkbox">&ndash;&gt;
                            {{ $t('login.forget') }}
                        </div>-->
                        <router-link to="regiest">
                            <div class="regiest">{{ $t('login.goreigest') }}</div>
                        </router-link>
                    </div>
                    <div class="loginbutton"
                         @click="login"
                         v-prevent-repeat>{{ $t('login.login') }}
                    </div>
                </div>
            </div>
        </div>
        <!--        </div>-->
    </div>
</template>

<script>
import {checkDataFunc} from "@/static/js/common";

export default {
    name: "login",
    data() {
        return {
            bgc: `${require('../../static/img/login/SLTcoin.png')}`,
            loginbgc: `${require('../../static/img/login/loginbg.png')}`,
            password: "",
            username: "",
            checkArray: [
                {
                    name: this.$t('login').usernameCheck,
                    checkKey: "username",
                },
                {
                    name: this.$t('login').passwordCheck,
                    checkKey: "password",
                },
            ],
        }
    },
    mounted() {
        // this.localStorage.set('isLogin', false)
    },
    methods: {
        login() {
            console.log('点击');
            // eslint-disable-next-line no-debugger
            // debugger
            // console.log('打印');

            // eslint-disable-next-line no-debugger
            // debugger
            let postData = this.getPostData();
            if (postData) {
                this.axios({
                    url: 'wx/auth/login',
                    method: 'post',
                    params: JSON.stringify(postData),
                }).then((res) => {
                    // eslint-disable-next-line no-debugger
                    // debugger
                    // console.log(res)
                    let data = res.data
                    if (res.errno === 0) {
                        let user = {
                            avatarUrl: data.userInfo.avatarUrl,
                            nickName: data.userInfo.nickName,
                        }
                        this.localStorage.set('token', data.token)
                        this.localStorage.set('user', user)
                        this.localStorage.set('isLogin', true)
                        this.$router.push({
                            name: 'index',
                        })
                    } else {
                        // eslint-disable-next-line no-debugger
                        // debugger
                        this.$notify({
                            title: this.$t('notifyText.notify'),
                            message: res.errmsg,
                            type: 'warning',
                            showClose: false
                        });
                    }
                }).catch(err => {
                    console.log(err)
                })
            }


        },
        getPostData() {
            let postData = {
                password: this.password,
                username: this.username,
            }
            let checkArray = this.checkArray;

            if (checkDataFunc.checkBasics(postData, checkArray)) {
                return postData = {
                    ...postData,
                }
            } else {
                return false
            }
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

                    .username-img {
                        position: absolute;
                        width: 27rem;
                        height: 27rem;
                        margin-left: 20rem;
                        margin-right: 15rem;
                        margin-top: 16rem;
                    }

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

                    .password-img {
                        position: absolute;
                        width: 27rem;
                        height: 27rem;
                        margin-left: 20rem;
                        margin-right: 15rem;
                        margin-top: 16rem;
                    }

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
                    cursor: pointer;
                }
            }
        }
    }
}

</style>