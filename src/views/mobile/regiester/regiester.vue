<template>
    <div class="login"
         :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
        <div class="header">
            <img :src="sltlogo"
                 alt=""
                 class="sltlogo">
            <!--            <img :src="userIcon" alt="" class="userIcon">-->
        </div>
        <div class="login-wrap">
            <div class="logo">
                <img :src="logo"
                     alt="">
            </div>
            <div class="login-box">
                <div class="phone">
                    <img :src="user"
                         alt=""
                         class="img">
                    <input type="text"
                           class="input"
                           v-model="username"
                           :placeholder="this.$t('regiest.username')">
                </div>
                <div class="password">
                    <img :src="lock"
                         alt=""
                         class="img">
                    <input type="text"
                           class="input"
                           v-model="password"
                           :placeholder="this.$t('regiest.userpsw')">
                </div>
            </div>
            <div class="get_verify_code">
                <input class="code_con"/>
                <div class="get_button">{{ this.$t('regiest.get') }}</div>
            </div>
            <div class="loginBtn">
                <div class="btn"
                     @click="login"
                     v-prevent-repeat>{{ this.$t('regiest.regiest') }}
                </div>
            </div>
            <div class="tip">
                {{ this.$t('regiest.regiested') }}，
                <span style="color: #00B7FC"
                      @click="topage('Mlogin')">
                    {{ this.$t('regiest.gologin') }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "regiester",
    data() {
        return {
            sltlogo: `${require('@/static/img/index/sltlogo_60x120_white.png')}`,
            // userIcon: `${require('@/static/img/index/userIcon.png')}`,
            section3Bg: `${require('@/static/img/login/loginBgM.png')}`,
            logo: `${require('@/static/img/login/iconM.png')}`,
            user: `${require('@/static/img/login/user.png')}`,
            lock: `${require('@/static/img/login/lock.png')}`,

            code: "123456",
            mobile: "",
            password: "",

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
        }
    },
    methods: {
        topage(name) {
            this.$router.push({
                name: name
            })
        },
    }
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
                    color: #fff;
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
                color: #FFF;

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
                    color: #FFFFFF;
                }
            }
        }

        .get_verify_code {
            width: 550rem;
            height: 88rem;
            margin-top: 40rem;
            margin-left: 100rem;
            display: flex;
            justify-content: space-between;

            .code_con {
                width: 190rem;
                height: 88rem;
                background: #002E73;
                border: 3px solid #00B7FC;
                opacity: 0.5;
                border-radius: 10rem;
                /*margin-left: 86rem;*/
                /*margin-top: 20rem;*/
                /*margin-bottom: 35rem;*/
                color: #FFFFFF;
                text-indent: 10rem;
            }

            .get_button {
                width: 190rem;
                height: 94rem;
                padding-top: 3rem;
                background: #333333;
                border-radius: 10rem;
                float: right;
                /*margin-right: 86rem;*/
                font-size: 20rem;
                color: #E6E6E6;
                line-height: 94rem;
                text-align: center;
                /*margin-top: 20rem;*/
                /*margin-bottom: 35rem;*/
                cursor: pointer;
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

        .tip {
            margin-top: 29rem;
        }
    }
}
</style>