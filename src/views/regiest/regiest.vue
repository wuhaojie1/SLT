<template>
    <div class="login" :style="{ 'backgroundImage':'url('+ bgc +')' }">
        <div class="centercon">
            <div class="loginbox">
                <div class="loginbox-left">
                    <div class="left-text-top">S L T coin</div>
                    <div class="left-text-down">SLTcoin {{ $t('regiest.welcome') }}</div>
                </div>
                <div class="loginbox-right"
                     :style="{ 'backgroundImage':'url('+ loginbgc +')' }">
                    <div class="user">{{ $t('regiest.userres') }}</div>
                    <div class="username">
                        <img class="username-img"
                             src="../../static/img/login/user.png"/>
                        <input class="username-input"
                               type="text"
                               v-model="mobile"
                               :placeholder="$t('regiest.username')">
                    </div>
                    <div class="password">
                        <img class="password-img"
                             src="../../static/img/login/lock.png"/>
                        <input class="password-input"
                               type="password"
                               v-model="password"
                               :placeholder="$t('regiest.userpsw')">
                    </div>
                    <div class="getcodes">
                        <input type="text"
                               v-model="code"
                               class="numcontent">
                        <div v-show="codeShow"
                             class="getbutton"
                             @click="getCode"
                             v-prevent-repeat>
                            {{ getCodeText }}
                        </div>
                        <div v-show="!codeShow" class="getbutton">
                            {{ count + " S" + repeat }}
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="tologin" @click="topage('login')">
                        {{this.$t('login.login')}}
                    </div>

                    <div class="loginbutton"
                         @click="register"
                         v-prevent-repeat>{{ $t('regiest.regiest') }}
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
            getCodeStatus: false,
            regFlag: false,
            bgc: `${require('@/static/img/login/SLTcoin.png')}`,
            loginbgc: `${require('@/static/img/regiest/register.png')}`,

            code: "123456",
            mobile: "",
            password: "",
            // intervalTime: 60,
            codeShow: true,// true未请求 false已请求
            requestCode: false,//没有发送验证码 true发送了验证码
            timer: null,
            count: "",
            repeat: "재 번역",
            getCodeText: this.$t('regiest.get'),

            checkArray: [
                {
                    name: this.$t('regiest').mobile,
                    checkKey: "mobile",
                },
                {
                    name: this.$t('regiest').password,
                    checkKey: "password",
                },
                {
                    name: this.$t('regiest').code,
                    checkKey: "code",
                },
            ],
            checkCodeArray: [
                {
                    name: this.$t('regiest').mobile,
                    checkKey: "mobile",
                },
            ]


            // repeatPassword: "111111",
            // username: "ww",
        }
    },
    mounted() {
        // this.localStorage.set('isLogin', false)
    },
    methods: {
        topage(name) {
            this.$router.push({
                name: name
            })
        },
        getCode() {
            this.requestCode = true;
            let postData = this.getCodePostData()
            if (postData) {
                if (this.codeShow) {
                    this.countTime()
                    this.axios({
                        url: 'wx/auth/regCaptcha',
                        method: 'post',
                        params: JSON.stringify(postData),
                    }).then((res) => {
                        // console.log(res)
                        if (res.errno === 0) {
                            this.getCodeStatus = true
                        } else {
                            this.codeShow = true;
                            clearInterval(this.timer);
                            this.timer = null;
                            this.$notify({
                                title: this.$t('notifyText.notify'),
                                message: res.errmsg,
                                type: 'warning',
                                showClose: false
                            });
                        }
                    })
                } else {
                    return
                }
            }

        },
        countTime() {
            // eslint-disable-next-line no-debugger
            // debugger
            const TIME_COUNT = 60;
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.codeShow = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.codeShow = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        },
        getCodePostData() {
            if (!this.getCodeStatus) {
                let checkCodeArray = this.checkCodeArray
                let postData = {
                    mobile: this.mobile
                }
                if (checkDataFunc.checkBasics(postData, checkCodeArray)) {
                    return postData = {
                        ...postData,
                    }
                } else {
                    return false
                }
            }
        },
        register() {
            // eslint-disable-next-line no-debugger
            // debugger
            let postData = this.getRegisterData()
            if (postData) {
                if (this.regFlag) {
                    this.axios({
                        url: 'wx/auth/register',
                        method: 'post',
                        params: JSON.stringify(postData),
                    }).then((res) => {
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
                    })
                }
            }


        },
        getRegisterData() {
            let checkArray = this.checkArray;
            if (!this.requestCode) {
                this.$notify({
                    title: this.$t('notifyText.notify'),
                    message: this.$t('notifyText.vCode'),
                    type: 'warning',
                    showClose: false
                });
                return
            }
            this.regFlag = true
            // eslint-disable-next-line no-debugger
            // debugger
            if (this.getCodeStatus) {
                let postData = {
                    code: this.code,
                    mobile: this.mobile,
                    password: this.password,
                    repeatPassword: this.repeatPassword,
                    username: "",
                }
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
                height: 524rem;
                /*background: rgba(0, 183, 252, 0.33);*/
                border: 0rem solid #012162;
                top: 290rem;
                background-repeat: no-repeat !important;
                background-size: 100%;

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

                    .username-img {
                        position: absolute;
                        width: 27rem;
                        height: 27rem;
                        margin-left: 20rem;
                        margin-right: 15rem;
                        margin-top: 16rem;
                    }

                    .username-input {
                        width: 350rem;
                        line-height: 58rem;
                        color: #FFFFFF;
                        padding-left: 62rem;
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
                        width: 350rem;
                        line-height: 58rem;
                        color: #FFFFFF;
                        padding-left: 62rem;
                    }
                }

                .getcodes {
                    .numcontent {
                        width: 190rem;
                        height: 58rem;
                        background: #002E73;
                        border: 3px solid #00B7FC;
                        opacity: 0.5;
                        border-radius: 10rem;
                        margin-left: 86rem;
                        float: left;
                        margin-top: 20rem;
                        //margin-bottom: 35rem;
                        color: #FFFFFF;
                        text-indent: 10rem;
                    }

                    .getbutton {
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
                        //margin-bottom: 35rem;
                        cursor: pointer;
                    }
                }

                .tologin {
                    font-size: 14rem;
                    font-weight: 400;
                    color: #00B7FC;
                    text-align: right;
                    width: 400rem;
                    margin: 15rem auto;
                    cursor: pointer;
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
                    margin-bottom: 68rem;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>